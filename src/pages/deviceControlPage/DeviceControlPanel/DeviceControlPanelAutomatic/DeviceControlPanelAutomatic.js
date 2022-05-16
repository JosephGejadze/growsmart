import React, { useCallback, useEffect, useState } from "react";
import styles from "./DeviceControlPanelAutomatic.module.scss";
import water from "../../../../images/water.png";
import light from "../../../../images/light.png";
import humidity from "../../../../images/humidity.png";
import co from "../../../../images/co.png";
import DeviceControlItem from "./DeviceControlItemAutomatic/DeviceControlItemAutomatic";
import { MQTT_ORDER, sendMqttOrderToEsp } from "../../../../mqtt";

const constraints = {
  light: { min: 0, max: 24 },
  moisture: { min: 0, max: 100 },
  humidity: { min: 0, max: 100 },
  co2: { min: 400, max: 5000 },
};

export const thresholdTypes = {
  lower: "lower",
  upper: "upper",
};

const constraintAvg = (str) => {
  return (constraints[str].min + constraints[str].max) / 2;
};

const DeviceControlPanelAutomatic = () => {
  const [lightLevel, setLightLevel] = useState(constraintAvg("light"));
  const [moistureLevel, setMoistureLevel] = useState(constraintAvg("moisture"));
  const [humidityLevel, setHumidityLevel] = useState(constraintAvg("humidity"));
  const [co2Level, setCo2Level] = useState(constraintAvg("co2"));

  const [co2ThresholdType, serCo2ThresholdType] = useState();

  useEffect(() => {
    sendMqttOrderToEsp(MQTT_ORDER.COMM_SYNC_THRESHOLDS);
  }, []);

  const onSendMqttOrderToChangeThreshold = useCallback(
    (order_code, new_threshold) => () => {
      sendMqttOrderToEsp(order_code, new_threshold);
    },
    []
  );

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
        onApply={onSendMqttOrderToChangeThreshold(
          MQTT_ORDER.COMM_AUTO_SET_LIGHT_DURATION,
          lightLevel
        )}
      />
      <DeviceControlItem
        icon={water}
        onChange={(e) => setMoistureLevel(e.target.value)}
        value={moistureLevel}
        backgroundColor="#bba359"
        title="Water"
        min={0}
        max={100}
        onApply={onSendMqttOrderToChangeThreshold(
          MQTT_ORDER.COMM_AUTO_SET_SOIL_MOISTURE_THRESHOLD,
          moistureLevel
        )}
      />
      <DeviceControlItem
        icon={humidity}
        onChange={(e) => setHumidityLevel(e.target.value)}
        value={humidityLevel}
        backgroundColor="#f89a46"
        title="Humidity"
        min={0}
        max={100}
        onApply={onSendMqttOrderToChangeThreshold(
          MQTT_ORDER.COMM_AUTO_SET_AIR_HUMIDITY_THRESHOLD,
          humidityLevel
        )}
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
        thresholdType={co2ThresholdType}
        setThresholdType={serCo2ThresholdType}
        onApply={() => {
          if (co2ThresholdType) {
            onSendMqttOrderToChangeThreshold(
              co2ThresholdType === thresholdTypes.upper
                ? MQTT_ORDER.COMM_AUTO_SET_CO2_UPPER_THRESHOLD
                : MQTT_ORDER.COMM_AUTO_SET_CO2_LOWER_THRESHOLD,
              co2Level
            )();
          }
        }}
      />
    </div>
  );
};

export default DeviceControlPanelAutomatic;
