import React from "react";
import styles from "./DeviceControlItemManual.module.scss";

const DeviceControlItemManual = ({
  title,
  icon,
  backgroundColor,
  onTurnOn,
  onTurnOff,
}) => {
  return (
    <div className={styles.item} style={{ backgroundColor }}>
      <div className={styles.container_header}>
        <h1>{title}</h1>
      </div>
      <div className={styles.image_container}>
        <img src={icon} alt="icon" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onTurnOn}>
          ON
        </button>
        <button className={styles.button} onClick={onTurnOff}>
          OFF
        </button>
      </div>
    </div>
  );
};

export default DeviceControlItemManual;
