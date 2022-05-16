import Paho from "paho-mqtt";

const HOST = "167.99.217.27";
const PORT = 3004;
const CLIENTID = `123@react`;

export const MQTT_TOPIC = "0";

export const client = new Paho.Client(HOST, PORT, CLIENTID);

client.connect({
  onSuccess: (code) => {
    console.log("success", code);
  },
  onFailure: (code) => {
    console.log("failure", code);
  },
});

client.onConnectionLost = (err) => {
  console.log(err);
};

export const sendMqttOrderToEsp = (order, payload) => {
  let msg;
  if (payload) {
    msg = new Paho.Message(`${order}_${payload}`);
  } else {
    msg = new Paho.Message(`${order}`);
  }

  msg.destinationName = MQTT_TOPIC;
  console.log(`sending message`, msg);
  client.send(msg);
};

export const MQTT_ORDER = {
  COMM_SET_MANUAL_MODE: 5,
  COMM_SET_AUTOMATIC_MODE: 6,
  COMM_SYNC_THRESHOLDS: 7,
  COMM_MANUAL_TURN_ON_LIGHT: 10,
  COMM_MANUAL_TURN_OFF_LIGHT: 11,
  COMM_MANUAL_TURN_ON_VENT: 12,
  COMM_MANUAL_TURN_OFF_VENT: 13,
  COMM_MANUAL_TURN_ON_PUMP: 14,
  COMM_MANUAL_TURN_OFF_PUMP: 15,
  COMM_MANUAL_TURN_ON_HUMI: 16,
  COMM_MANUAL_TURN_OFF_HUMI: 17,
  COMM_AUTO_SET_SOIL_MOISTURE_THRESHOLD: 20,
  COMM_AUTO_SET_AIR_HUMIDITY_THRESHOLD: 21,
  COMM_AUTO_SET_CO2_LOWER_THRESHOLD: 22,
  COMM_AUTO_SET_CO2_UPPER_THRESHOLD: 23,
  COMM_AUTO_SET_LIGHT_DURATION: 24,
};
