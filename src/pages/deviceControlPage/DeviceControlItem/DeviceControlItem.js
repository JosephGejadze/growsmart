import React from "react";
import styles from "./DeviceControlItem.module.scss";

const DeviceControlItem = ({
  title,
  icon,
  onChange,
  value,
  backgroundColor,
  min,
  max,
}) => {
  return (
    <div className={styles.item} style={{ backgroundColor }}>
      <div className={styles.container_header}>
        <h1>{title}</h1>
      </div>
      <div></div>
      <div className={styles.image_container}>
        <img
          src={icon}
          style={{
            width: `calc(${Number((100 * (value - min)) / max) + 100}px)`,
            height: `calc(${Number((100 * (value - min)) / max) + 100}px)`,
          }}
          alt="param"
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className={styles.slider}
        id="myRange"
        onChange={onChange}
      />
      <div className={styles.level_indicator}>{value}</div>
    </div>
  );
};

export default DeviceControlItem;
