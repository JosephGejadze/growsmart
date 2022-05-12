import React, { useEffect, useState } from "react";
import DeviceControlPanelSwitch from "./DeviceControlPanelSwitch/DeviceControlPanelSwitch";
import DeviceControlPanelAutomatic from "./DeviceControlPanelAutomatic/DeviceControlPanelAutomatic";
import DeviceControlPanelManual from "./DeviceControlPanelManual/DeviceControlPanelManual";
import Loading from "../../../components/Loading/Loading";

export const mode = {
  manual: "manual",
  automatic: "automatic",
};

const DeviceControlPanel = () => {
  const [currentMode, setCurrentMode] = useState();

  useEffect(() => {
    setTimeout(() => setCurrentMode(mode.automatic), 3000);
  }, []);

  return (
    <div>
      <DeviceControlPanelSwitch
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
      />
      {currentMode === mode.automatic ? (
        <DeviceControlPanelAutomatic />
      ) : currentMode === mode.manual ? (
        <DeviceControlPanelManual />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DeviceControlPanel;
