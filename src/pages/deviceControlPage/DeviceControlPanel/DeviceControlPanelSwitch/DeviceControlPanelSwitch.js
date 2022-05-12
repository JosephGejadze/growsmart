import React, { useState } from "react";
import { mode } from "../DeviceControlPanel";
import styles from "./DeviceControlPanelSwitch.module.scss";

const DeviceControlPanelSwitch = ({ currentMode, setCurrentMode }) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.modeButton} ${
          currentMode === mode.automatic ? styles.modeButtonActive : ""
        }`}
        onClick={() => setCurrentMode(mode.automatic)}
      >
        Automatic Mode
      </button>
      <button
        className={`${styles.modeButton} ${
          currentMode === mode.manual ? styles.modeButtonActive : ""
        }`}
        onClick={() => setCurrentMode(mode.manual)}
      >
        Manual Mode
      </button>
    </div>
  );
};

export default DeviceControlPanelSwitch;
