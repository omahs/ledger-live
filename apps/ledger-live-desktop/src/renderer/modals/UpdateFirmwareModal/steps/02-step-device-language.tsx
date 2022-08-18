import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { DeviceModelId, } from "@ledgerhq/devices";
import Box from "~/renderer/components/Box";
import { StepProps } from "..";
import { renderFirmwareUpdating } from "~/renderer/components/DeviceAction/rendering";
import useTheme from "~/renderer/hooks/useTheme";
import { DeviceInfo, idsToLanguage, Language, languageIds } from "@ledgerhq/types-live";
import { useSelector } from "react-redux";
import { languageSelector } from "~/renderer/reducers/settings";
import { Locale, localeIdToDeviceLanguage } from "~/config/languages";
import { useAvailableLanguagesForDevice } from "@ledgerhq/live-common/manager/hooks";
import { useTranslation } from "react-i18next";

const Container = styled(Box).attrs(() => ({
  alignItems: "center",
  fontSize: 4,
  color: "palette.text.shade100",
}))``;

type BodyProps = {
  modelId: DeviceModelId;
};

export const Body = ({ modelId }: BodyProps) => {
  const type = useTheme("colors.palette.type");
  return renderFirmwareUpdating({ modelId, type });
};

type Props = StepProps & { updatedDeviceInfo?: DeviceInfo };

const StepUpdating = ({
  deviceModelId,
  updatedDeviceInfo,
  device,
  deviceInfo: oldDeviceInfo,
  transitionTo
}: Props) => {
  const currentLocale = useSelector(languageSelector) as Locale;

  const {
    availableLanguages: newAvailableLanguages,
    loaded: newLanguagesLoaded,
  } = useAvailableLanguagesForDevice(updatedDeviceInfo);
  const {
    availableLanguages: oldAvailableLanguages,
    loaded: oldLanguagesLoaded,
  } = useAvailableLanguagesForDevice(oldDeviceInfo);

  const [isLanguagePromptOpen, setIsLanguagePromptOpen] = useState<boolean>(
    false,
  );

  const [languageToInstall, setLanguageToInstall] = useState<Language>(
    "english",
  );
  const [installingLanguage, setInstallingLanguage] = useState(false);

  const { t } = useTranslation();

  const deviceLocalizationFeatureFlag = { enabled: true }; // useFeature("deviceLocalization");

  const installLanguage = useCallback(
    (language: Language) => {
      setLanguageToInstall(language);
      setInstallingLanguage(true);
    },
    [device],
  );

  useEffect(() => {
    if (newLanguagesLoaded && oldLanguagesLoaded) {
      const deviceLanguageId = updatedDeviceInfo?.languageId;
      const potentialDeviceLanguage = localeIdToDeviceLanguage[currentLocale];

      const langAvailableForTheFirstTime =
        potentialDeviceLanguage !== undefined &&
        !oldAvailableLanguages.includes(potentialDeviceLanguage) &&
        newAvailableLanguages.includes(potentialDeviceLanguage);

      // firmware version verification is not really needed here, the presence of a language id
      // indicates that we are in a firmware that supports localization
      if (
        langAvailableForTheFirstTime &&
        deviceLanguageId !== undefined &&
        idsToLanguage[deviceLanguageId] !== potentialDeviceLanguage &&
        deviceLocalizationFeatureFlag.enabled
      ) {
        setIsLanguagePromptOpen(true);
      } else if (
        oldDeviceInfo?.languageId !== undefined &&
        oldDeviceInfo?.languageId !== languageIds["english"]
      ) {
        installLanguage(idsToLanguage[oldDeviceInfo.languageId]);
      } else {
        transitionTo("finish");
      }
    }
  }, [
    newAvailableLanguages,
    newLanguagesLoaded,
    oldAvailableLanguages,
    oldLanguagesLoaded,
    dispatchEvent,
    currentLocale,
    oldDeviceInfo,
    updatedDeviceInfo,
    installLanguage,
  ]);


  return (
    <Container>
      <Body modelId={deviceModelId} />
    </Container>
  );
};

export default StepUpdating;
