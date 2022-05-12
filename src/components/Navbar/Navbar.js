import { PAGES, PAGE_NAMES } from "../../constants";
import styles from "./navbar.module.scss";

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <p>GrowSmart</p>
      </div>
      <div className={styles.buttons_div}>
        {Object.keys(PAGES).map((page, index) => (
          <button
            className={`${styles.navbar_button} ${
              PAGES[page] === currentPage ? styles.navbar_button_selected : ""
            }`}
            key={index}
            onClick={(_) => setCurrentPage(PAGES[page])}
          >
            {PAGE_NAMES[page]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
