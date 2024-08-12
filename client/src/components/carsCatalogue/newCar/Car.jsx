import { Link } from "react-router-dom";

import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

import styles from "./Car.module.css";


export const Car = ({ car }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (

    <section className={styles.container}>
      <Link className={styles.btn} to={`/cars/${car._id}`}>
        <div className={styles.wrapper}>
          <img className={styles.img} src={car.imageUrl} alt="carPic" />
          <div className={styles.detailsWrapper}>
            <div className={styles.row1}>
              <div className={styles.itemRow1}>
                <span>
                  <span className={styles.highlight}>Category:</span>{" "}
                  {car.category}{" "}
                </span>
              </div>
              <div className={styles.itemRow1}>
                <span>
                  <i className={`far fa-calendar-alt ${styles.highlight}`}></i>{" "}
                  {car.date}
                </span>
              </div>
            </div>
            <div className={styles.carNameSeeMoreContainer}>
              <h4 className={styles.heading}>{car.name}</h4>
              {isAuthenticated && <h5 className={styles.carNameSeeMore}> See more{" "}<i className="bi bi-arrow-right"></i></h5>}
            </div>
          </div>
        </div>
      </Link>
    </section>

  );
};
