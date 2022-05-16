import React from "react";
import styles from "./AboutUsCard.module.scss";
const AboutUsCard = ({ image, name, description }) => {
  return (
    <div className={styles.Container}>
      <img src={image} className={styles.Images} alt="about us"></img>
      <div>
        <h1>{name}</h1>
        <div className={styles.WorkDone}></div>
      </div>
    </div>
  );
};

export default AboutUsCard;
