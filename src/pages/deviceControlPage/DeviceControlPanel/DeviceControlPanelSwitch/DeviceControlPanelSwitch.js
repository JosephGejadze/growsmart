import React, { useCallback } from "react";
import { MQTT_ORDER, sendMqttOrderToEsp } from "../../../../mqtt";
import { mode } from "../DeviceControlPanel";
import styles from "./DeviceControlPanelSwitch.module.scss";

const DeviceControlPanelSwitch = ({ currentMode, setCurrentMode }) => {
  const onSetManual = useCallback(() => {
    setCurrentMode(mode.manual);
    sendMqttOrderToEsp(MQTT_ORDER.COMM_SET_MANUAL_MODE);
  }, [setCurrentMode]);

  const onSetAutomatic = useCallback(() => {
    setCurrentMode(mode.automatic);
    sendMqttOrderToEsp(MQTT_ORDER.COMM_SET_AUTOMATIC_MODE);
  }, [setCurrentMode]);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.modeButton} ${
          currentMode === mode.automatic ? styles.modeButtonActive : ""
        }`}
        onClick={onSetAutomatic}
      >
        Automatic Mode
      </button>
      <button
        className={`${styles.modeButton} ${
          currentMode === mode.manual ? styles.modeButtonActive : ""
        }`}
        onClick={onSetManual}
      >
        Manual Mode
      </button>
    </div>
  );
};

export default DeviceControlPanelSwitch;
