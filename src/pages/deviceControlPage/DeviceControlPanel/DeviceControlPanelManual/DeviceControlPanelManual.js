import React from "react";
import styles from "./DeviceControlPanelManual.module.scss";
import water from "../../../../images/water.png";
import light from "../../../../images/light.png";
import humidity from "../../../../images/humidity.png";
import co from "../../../../images/co.png";
import DeviceControlItemManual from "./DeviceContolItemManual/DeviceControlItemManual";
const DeviceControlPanelManual = () => {
  return (
    <div className={styles.DCpage}>
      <DeviceControlItemManual
        icon={light}
        backgroundColor="#85b2b2"
        title="Lighting"
      />
      <DeviceControlItemManual
        icon={water}
        backgroundColor="#bba359"
        title="Water"
      />
      <DeviceControlItemManual
        icon={humidity}
        backgroundColor="#f89a46"
        title="Humidity"
      />
      <DeviceControlItemManual
        icon={co}
        backgroundColor="#e5b098"
        title={
          <span>
            CO<sub>2</sub>
          </span>
        }
      />
    </div>
  );
};

export default DeviceControlPanelManual;
