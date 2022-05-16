import React, { useCallback } from "react";
import styles from "./DeviceControlPanelManual.module.scss";
import water from "../../../../images/water.png";
import light from "../../../../images/light.png";
import humidity from "../../../../images/humidity.png";
import co from "../../../../images/co.png";
import DeviceControlItemManual from "./DeviceContolItemManual/DeviceControlItemManual";
import { MQTT_ORDER, sendMqttOrderToEsp } from "../../../../mqtt";

const DeviceControlPanelManual = () => {
  const onSendOrder = useCallback(
    (orderCode) => () => {
      sendMqttOrderToEsp(orderCode);
    },
    []
  );

  return (
    <div className={styles.DCpage}>
      <DeviceControlItemManual
        icon={light}
        backgroundColor="#85b2b2"
        title="Lighting"
        onTurnOn={onSendOrder(MQTT_ORDER.COMM_MANUAL_TURN_ON_LIGHT)}
        onTurnOff={onSendOrder(MQTT_ORDER.COMM_MANUAL_TURN_OFF_LIGHT)}
      />
      <DeviceControlItemManual
        icon={water}
        backgroundColor="#bba359"
        title="Water"
        onTurnOn={onSendOrder(MQTT_ORDER.COMM_MANUAL_TURN_ON_PUMP)}
        onTurnOff={onSendOrder(MQTT_ORDER.COMM_MANUAL_TURN_OFF_PUMP)}
      />
      <DeviceControlItemManual
        icon={humidity}
        backgroundColor="#f89a46"
        title="Humidity"
        onTurnOn={onSendOrder(MQTT_ORDER.COMM_MANUAL_TURN_ON_HUMI)}
        onTurnOff={onSendOrder(MQTT_ORDER.COMM_MANUAL_TURN_OFF_HUMI)}
      />
      <DeviceControlItemManual
        icon={co}
        backgroundColor="#e5b098"
        title={
          <span>
            CO<sub>2</sub>
          </span>
        }
        onTurnOn={onSendOrder(MQTT_ORDER.COMM_MANUAL_TURN_ON_VENT)}
        onTurnOff={onSendOrder(MQTT_ORDER.COMM_MANUAL_TURN_OFF_VENT)}
      />
    </div>
  );
};

export default DeviceControlPanelManual;
