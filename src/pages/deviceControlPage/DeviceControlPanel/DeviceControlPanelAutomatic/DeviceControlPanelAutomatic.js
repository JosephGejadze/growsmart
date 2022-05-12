import React, { useState } from "react";
import styles from "./DeviceControlPanelAutomatic.module.scss";
import water from "../../../../images/water.png";
import light from "../../../../images/light.png";
import humidity from "../../../../images/humidity.png";
import co from "../../../../images/co.png";
import DeviceControlItem from "./DeviceControlItemAutomatic/DeviceControlItemAutomatic";

const constraints = {
  light: { min: 0, max: 24 },
  moisture: { min: 0, max: 100 },
  humidity: { min: 0, max: 100 },
  co2: { min: 400, max: 5000 },
};

const constraintAvg = (str) => {
  return (constraints[str].min + constraints[str].max) / 2;
};

const DeviceControlPanelAutomatic = () => {
  const [lightLevel, setLightLevel] = useState(constraintAvg("light"));
  const [moistureLevel, setMoistureLevel] = useState(constraintAvg("moisture"));
  const [humidityLevel, setHumidityLevel] = useState(constraintAvg("humidity"));
  const [co2Level, setCo2Level] = useState(constraintAvg("co2"));
  return (
    <div className={styles.DCpage}>
      <DeviceControlItem
        icon={light}
        onChange={(e) => setLightLevel(e.target.value)}
        value={lightLevel}
        backgroundColor="#85b2b2"
        title="Lighting"
        min={0}
        max={24}
      />
      <DeviceControlItem
        icon={water}
        onChange={(e) => setMoistureLevel(e.target.value)}
        value={moistureLevel}
        backgroundColor="#bba359"
        title="Water"
        min={0}
        max={100}
      />
      <DeviceControlItem
        icon={humidity}
        onChange={(e) => setHumidityLevel(e.target.value)}
        value={humidityLevel}
        backgroundColor="#f89a46"
        title="Humidity"
        min={0}
        max={100}
      />
      <DeviceControlItem
        icon={co}
        onChange={(e) => setCo2Level(e.target.value)}
        value={co2Level}
        backgroundColor="#e5b098"
        title={
          <span>
            CO<sub>2</sub>
          </span>
        }
        min={400}
        max={5000}
      />
    </div>
  );
};

export default DeviceControlPanelAutomatic;
