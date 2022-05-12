import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
};

export default Loading;
