import styles from "./AboutUsPage.module.scss";
import Iko from "../../images/Iko.png";
import Tengo from "../../images/Tengo.png";
import Niko from "../../images/Niko.png";
import Eka from "../../images/Eka.png";
const AboutUsPage = () => {
  return (
    <div className={styles.AboutUsPage}>
      <div className={styles.ContainerWe}>
        <div></div>
        <h1 className={styles.Usheader}>Great Minds behind GrowSmart</h1>
        <ul className={styles.UsList}>
          <li>Tengizi Abramishvili - Electrical Engineer </li>
          <li>Ioseb Gejazde - Computer Engineer</li>
          <li>Ekaterine Chemia - Computer Engineer</li>
          <li>Nick Chanturia - Computer Engineer</li>
        </ul>
      </div>
      <div className={styles.Container}>
        <img src={Iko} className={styles.Images}></img>
        <div>
          <h1>Ioseb Gejadze</h1>
          <div className={styles.WorkDone}></div>
        </div>
      </div>
      <div className={styles.Container}>
        <img src={Eka} className={styles.Images}></img>
        <div>
          <h1>Ekaterine Chemia</h1>
          <div className={styles.WorkDone}></div>
        </div>
      </div>
      <div className={styles.Container}>
        <img src={Niko} className={styles.Images}></img>
        <div>
          <h1>Nick Chanturia</h1>
          <div className={styles.WorkDone}></div>
        </div>
      </div>
      <div className="flip-container">
        <div className={styles.Container}>
          <img src={Tengo} className={styles.Images}></img>
          <div>
            <h1>Tengiz Abramishvili</h1>
            <div className={styles.WorkDone}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
