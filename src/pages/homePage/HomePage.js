import styles from "./homePage.module.scss";
import ImageSwapper from "./images";

const HomePage = () => {
  return (
    <div className={styles.hompage}>
      <div>
        <h1 className={styles.header}>GrowSmart</h1>
        <h2 className={styles.mini_description}>Grow your food as in sci-fi</h2>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.images}>
          <ImageSwapper />
        </div>
        <div className={styles.description}>
          <h3 className={styles.header3}>WHAT IS IT ANYWAY?</h3>
          In short, GrowSmart is a device that will allow its owner to grow any
          desired plants or fungi at home. Powered by IoT technology and
          equipped with multiple sensors, it will allow the owner to take care
          of the growing entity in a completely remote and automated way
          <h3 className={styles.header3}>Conditions Control:</h3>
          <ul>
            <li>Temperature</li>
            <li>Moisture</li>
            <li>Humidity</li>
            <li>Lighting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
