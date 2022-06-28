import React from "react";
import styled from "styled-components";
import { DeviceModelId, getDeviceModel } from "@ledgerhq/devices";

import { DeviceSelectorOption } from "./DeviceSelectorOption";
import DeviceIllustration from "~/renderer/components/DeviceIllustration";

const DeviceSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: stretch;
`;

const devices = [
  {
    id: "nanoS",
    enabled: true,
  },
  {
    id: "nanoSP",
    enabled: false,
  },
  {
    id: "nanoX",
    enabled: true,
  },
];
interface DeviceSelectorProps {
  onClick: (arg1: DeviceModelId) => void;
}

export function DeviceSelector({ onClick }: DeviceSelectorProps) {
  return (
    <DeviceSelectContainer>
      {devices.map(({ id, enabled }, index, arr) => (
        <DeviceSelectorOption
          id={`device-${id}`}
          key={id}
          label={getDeviceModel(id as DeviceModelId).productName}
          Illu={<DeviceIllustration deviceId={id} />}
          onClick={() => enabled && onClick(id as DeviceModelId)}
          isFirst={index === 0}
          isLast={index === arr.length - 1}
        />
      ))}
    </DeviceSelectContainer>
  );
}
