import React, { useState, useCallback } from "react";
import { Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DeviceModelInfo } from "@ledgerhq/live-common/types/manager";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ScreenName, NavigatorName } from "../const";
import { Alert, BottomDrawer, Text } from "@ledgerhq/native-ui";
import { DownloadMedium } from "@ledgerhq/native-ui/assets/icons";
import {
  lastSeenDeviceSelector,
  hasCompletedOnboardingSelector,
  lastConnectedDeviceSelector,
} from "../reducers/settings";
import { hasConnectedDeviceSelector } from "../reducers/appstate";
import Button from "./Button";
import { useFeature } from "@ledgerhq/live-common/featureFlags/index";
import useLatestFirmware from "../hooks/useLatestFirmware";
import { StackNavigationProp } from "@react-navigation/stack";
import { isFirmwareUpdateVersionSupported } from "../logic/firmwareUpdate";

const FirmwareUpdateBanner = () => {
  const lastSeenDevice: DeviceModelInfo | null = useSelector(
    lastSeenDeviceSelector,
  );
  const lastConnectedDevice = useSelector(lastConnectedDeviceSelector);
  const hasConnectedDevice = useSelector(hasConnectedDeviceSelector);
  const hasCompletedOnboarding: boolean = useSelector(
    hasCompletedOnboardingSelector,
  );

  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const { t } = useTranslation();

  const route = useRoute();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const onExperimentalFirmwareUpdate = useCallback(() => {
    // if we're already in the manager page, only update the params
    if (route.name === ScreenName.ManagerMain) {
      navigation.setParams({ firmwareUpdate: true });
    } else {
      navigation.navigate(NavigatorName.Manager, {
        screen: ScreenName.Manager,
        params: { firmwareUpdate: true },
      });
    }

    setShowDrawer(false);
  }, [navigation]);

  const latestFirmware = useLatestFirmware(lastSeenDevice?.deviceInfo);
  const showBanner = Boolean(latestFirmware);
  const version = latestFirmware?.final?.name ?? "";

  const onPress = () => {
    setShowDrawer(true);
  };
  const onCloseDrawer = () => {
    setShowDrawer(false);
  };

  const usbFwUpdateFeatureFlag = useFeature("llmUsbFirmwareUpdate");
  const isUsbFwVersionUpdateSupported =
    lastSeenDevice &&
    isFirmwareUpdateVersionSupported(
      lastSeenDevice.deviceInfo,
      lastSeenDevice.modelId,
    );
  const isDeviceConnectedViaUSB = lastConnectedDevice?.wired;
  const usbFwUpdateActivated =
    usbFwUpdateFeatureFlag?.enabled &&
    Platform.OS === "android" &&
    isUsbFwVersionUpdateSupported;

  const fwUpdateActivatedButNotWired =
    usbFwUpdateActivated && !isDeviceConnectedViaUSB;

  return showBanner && hasCompletedOnboarding && hasConnectedDevice ? (
    <>
      <Alert type="info" showIcon={false}>
        <Text flexShrink={1}>
          {t("FirmwareUpdate.newVersion", {
            version,
            deviceName: lastConnectedDevice?.deviceName,
          })}
        </Text>
        <Button
          ml={5}
          event="FirmwareUpdateBannerClick"
          type="color"
          title={t("FirmwareUpdate.update")}
          onPress={
            usbFwUpdateActivated && isDeviceConnectedViaUSB
              ? onExperimentalFirmwareUpdate
              : onPress
          }
          outline={false}
        />
      </Alert>

      <BottomDrawer
        isOpen={showDrawer}
        onClose={onCloseDrawer}
        Icon={DownloadMedium}
        title={
          fwUpdateActivatedButNotWired
            ? t("FirmwareUpdate.drawerUpdate.pleaseConnectUsbTitle", {
                deviceName: lastConnectedDevice?.deviceName,
              })
            : t("FirmwareUpdate.drawerUpdate.title")
        }
        description={
          fwUpdateActivatedButNotWired
            ? t("FirmwareUpdate.drawerUpdate.pleaseConnectUsbDescription", {
                deviceName: lastConnectedDevice?.deviceName,
              })
            : t("FirmwareUpdate.drawerUpdate.description")
        }
        noCloseButton
      >
        {fwUpdateActivatedButNotWired ? (
          <Button
            type="primary"
            title={t("common.retry")}
            onPress={onExperimentalFirmwareUpdate}
          />
        ) : (
          <Button
            type="primary"
            title={t("common.close")}
            onPress={onCloseDrawer}
          />
        )}
      </BottomDrawer>
    </>
  ) : null;
};

export default FirmwareUpdateBanner;
