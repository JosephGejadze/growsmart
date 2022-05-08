import React, { useState } from "react";
import styles from "./DeviceControlPanel.module.scss";
import water from "../../../images/water.png";
import light from "../../../images/light.png";
import humidity from "../../../images/humidity.png";
import co from "../../../images/co.png";

const DeviceControlPanel = () => {
  const [lightLevel, setLightLevel] = useState(50);
  const [waterLevel, setWaterLevel] = useState(50);
  const [airHumidityLevel, setAirHumidityLevel] = useState(50);
  const [naxshirorjangisLevel, setNaxshirorjangisLevel] = useState(50);
  return (
    <div className={styles.DCpage}>
      <div className={`${styles.item} ${styles.light_item}`}>
        <div className={styles.container_header}>
          <h1>Lighting</h1>
        </div>
        <div></div>
        <div className={styles.image_container}>
          <img
            src={light}
            style={{
              width: `calc(${Number(lightLevel) + 100}px)`,
              height: `calc(${Number(lightLevel) + 100}px)`,
              marginTop: `calc(${(100 - Number(lightLevel)) / 8}px)`,
              marginBottom: "300",
            }}
            alt="param"
          />
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={lightLevel}
          className={`${styles.slider} ${styles.light_slider}`}
          id="myRange"
          onChange={(e) => {
            setLightLevel(e.currentTarget.value);
          }}
        />
        <div className={styles.light_level_indicator}>{lightLevel}</div>
      </div>
      <div className={`${styles.item} ${styles.water_item}`}>
        <div className={styles.container_header}>
          <h1>Water</h1>
        </div>
        <div></div>
        <div className={styles.image_container}>
          <img
            src={water}
            style={{
              width: `calc(${Number(waterLevel) + 50}px)`,
              height: `calc(${Number(waterLevel) + 50}px)`,
              marginTop: `calc(${(100 - Number(waterLevel)) / 2}px)`,
            }}
            alt="param"
          />
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={waterLevel}
          className={`${styles.slider} ${styles.water_slider}`}
          id="myRange"
          onChange={(e) => {
            setWaterLevel(e.currentTarget.value);
          }}
        />
        <div className={styles.water_level_indicator}>{waterLevel}</div>
      </div>
      <div className={`${styles.item} ${styles.air_humidity_item}`}>
        <div className={styles.container_header}>
          <h1>Humidity</h1>
        </div>
        <div></div>
        <div className={styles.image_container}>
          <img
            src={humidity}
            style={{
              width: `calc(${Number(airHumidityLevel) + 50}px)`,
              height: `calc(${Number(airHumidityLevel) + 50}px)`,
              marginTop: `calc(${(100 - Number(airHumidityLevel)) / 2}px)`,
            }}
            alt="param"
          />
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={airHumidityLevel}
          className={`${styles.slider} ${styles.air_humidity_slider}`}
          id="myRange"
          onChange={(e) => {
            setAirHumidityLevel(e.currentTarget.value);
          }}
        />
        <div className={styles.air_humidity_indicator}>{airHumidityLevel}</div>
      </div>
      <div className={`${styles.item} ${styles.naxshirorjangi_item}`}>
        <div className={styles.container_header}>
          <h1>
            CO<sub>2</sub>
          </h1>
        </div>
        <div> </div>
        <div className={styles.image_container}>
          <img
            src={co}
            style={{
              width: `calc(${Number(naxshirorjangisLevel) + 50}px)`,
              height: `calc(${Number(naxshirorjangisLevel) + 50}px)`,
              marginTop: `calc(${(100 - Number(naxshirorjangisLevel)) / 2}px)`,
            }}
            alt="param"
          />
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={naxshirorjangisLevel}
          className={`${styles.slider} ${styles.naxshirorjangi_slider}`}
          id="myRange"
          onChange={(e) => {
            setNaxshirorjangisLevel(e.currentTarget.value);
          }}
        />
        <div className={styles.naxshirorjangi_indicator}>
          {naxshirorjangisLevel}
        </div>
      </div>
    </div>
  );
};

export default DeviceControlPanel;
