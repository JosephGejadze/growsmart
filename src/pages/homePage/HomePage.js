import styles from "./homePage.module.scss";
import ImageSwapper from "./images";

const HomePage = () => {
  return (
    <div>
      <div className={styles.hompage}>
        <div>
          <h1 className={styles.header}>GrowSmart</h1>
          <h2 className={styles.mini_description}>
            Grow your food as in sci-fi
          </h2>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.descriptionGrow}>
            <div className={styles.Grow}>
              <h1>Google</h1>
              <p>
                What kind of situation your species feels best in. Research
                desired temperature, air humidity, light timing, etc.
              </p>
            </div>
            <div className={styles.Grow}>
              <h1>Reproduce</h1>
              <p>
                The exact ecosystem that your species needs in order to realize
                its potential to the fullest extent.
              </p>
            </div>
            <div className={styles.Grow}>
              <h1>Observe</h1>
              <p>
                The plant and the physical circumstances around it in real-time.
              </p>
            </div>
            <div className={styles.Grow}>
              <h1>Wait</h1>
              <p> Till the harvest and then enjoy.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homepage2}>
        <ImageSwapper></ImageSwapper>
        <div className={styles.detailscontainer}>
          <h3 className={styles.header3}>WHAT IS IT ANYWAY?</h3>
          <p>
            In short, GrowSmart is a device that will allow its owner to grow
            any desired plants or fungi at home. Powered by IoT technology and
            equipped with multiple sensors, it will allow the owner to take care
            of thes growing entity in a completely remote and automated way
          </p>
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
