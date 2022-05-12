import styles from "./AboutUsPage.module.scss";
import Iko from "../../images/Iko.png";
import Tengo from "../../images/Tengo.png";
import Niko from "../../images/Niko.png";
import Eka from "../../images/Eka.png";
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard";

const cards = [
  {
    image: Iko,
    name: "Ioseb Gejadze",
    description: "",
    role: "Computer Engineer",
  },
  {
    image: Eka,
    name: "Ekaterine Chemia",
    description: "",
    role: "Computer Engineer",
  },
  {
    image: Niko,
    name: "Nick Chanturia",
    description: "",
    role: "Computer Engineer",
  },
  {
    image: Tengo,
    name: "Tengo Abramishvili",
    description: "",
    role: "Electric Engineer",
  },
];

const AboutUsPage = () => {
  return (
    <div className={styles.AboutUsPage}>
      <div className={styles.ContainerWe}>
        <div></div>
        <h1 className={styles.Usheader}>Great Minds Behind GrowSmart</h1>
        <ul className={styles.UsList}>
          {cards.map((e) => (
            <li>{`${e.name} - ${e.role}`}</li>
          ))}
        </ul>
      </div>
      {cards.map((e) => {
        return <AboutUsCard {...e} key={e.name} />;
      })}
    </div>
  );
};

export default AboutUsPage;
