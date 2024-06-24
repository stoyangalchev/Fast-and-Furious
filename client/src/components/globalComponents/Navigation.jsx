import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./Navigation.module.css";

import { ScrollArrow, scrollToTop } from "./ScrollArrow";
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/" onClick={scrollToTop}>
          <button className={styles.btn} type="button">
            <strong className={styles["ff-title"]}>F&F</strong>
            <div id={styles["container-stars"]}>
              <div id={styles.stars}></div>
            </div>
            <div id="glow">
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </button>
        </Link>
        <div className={styles.linksContainer}>
          <div className={styles.linksWrapper}>
            <Link to="/" onClick={scrollToTop}>
              <button className={styles.shadow__btn}>Home</button>
            </Link>
            <Link to="/cars" onClick={scrollToTop}>
              <button className={styles.shadow__btn}>Cars Catalogue</button>
            </Link>
            {isAuthenticated && (
              <Link to="/my-cars" onClick={scrollToTop}>
                <button className={styles.shadow__btn}>My car</button>
              </Link>
            )}
            <Link to="/team" onClick={scrollToTop}>
              <button className={styles.shadow__btn}>The Crew</button>
            </Link>
            {isAuthenticated && (
              <Link to="/logout" onClick={scrollToTop}>
                <button className={styles.shadow__btn_special}>Logout</button>
              </Link>
            )}
            {!isAuthenticated && (
              <>
                <Link to="/login" onClick={scrollToTop}>
                  <button className={styles.shadow__btn_special}>
                    Sing in
                  </button>
                </Link>
                <Link to="/register" onClick={scrollToTop}>
                  <button className={styles.shadow__btn_special}>
                    Register
                  </button>
                </Link>
                <ScrollArrow />
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
