import React from "react";
import { thresholdTypes } from "../DeviceControlPanelAutomatic";
import styles from "./DeviceControlItemAutomatic.module.scss";

const DeviceControlItem = ({
  title,
  icon,
  onChange,
  value,
  backgroundColor,
  min,
  max,
  onApply,
  thresholdType,
  setThresholdType,
}) => {
  return (
    <div className={styles.item} style={{ backgroundColor }}>
      <div className={styles.container_header}>
        <h1>{title}</h1>
      </div>
      <div className={styles.image_container}>
        <img
          src={icon}
          style={{
            width: `calc(${Number((100 * (value - min)) / max) + 80}px)`,
            height: `calc(${Number((100 * (value - min)) / max) + 80}px)`,
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
      <button className={styles.apply} onClick={onApply}>
        Apply
      </button>
      {setThresholdType && setThresholdType ? (
        <div className={styles.radio}>
          <input
            type="radio"
            id="th_lower"
            name="threshold_type"
            value={thresholdTypes.lower}
            onClick={() => setThresholdType(thresholdTypes.lower)}
          />
          <label htmlFor="th_lower">Lower</label>
          <input
            type="radio"
            id="th_upper"
            name="threshold_type"
            value={thresholdTypes.upper}
            onClick={() => setThresholdType(thresholdTypes.upper)}
          />
          <label htmlFor="th_upper">Upper</label>
        </div>
      ) : null}
    </div>
  );
};

export default DeviceControlItem;
