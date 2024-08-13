import { lazy, useEffect, useState } from "react";

import { NewCarButton } from "../../../shared/NewCarButton/NewCarButton"
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

import * as carsService from "../../../services/carsService";
import styles from "../Catalogue.module.css";

const Car = lazy(() => import('./../newCar/Car'))

export const Mycars = () => {
  const { userId } = useContext(AuthContext);
  const [cars, setcars] = useState([]);

  useEffect(() => {
    carsService
      .getMycars(userId)
      .then((cars) => {
        setcars(cars);
      })
      .catch((err) => {
        throw err;
      });
  }, [userId]);

  return (
    <>
      <section className={styles.containerHeader}>
        <h1 className={styles.sectionTitle}>My cars</h1>
        <Link to="/liked-cars" >

          <NewCarButton tittle={"Liked cars"} />
        </Link>
      </section>
      <section className={styles.containerContent}>
        <div className={styles.browsecarsHeader}>
          <h1 className={styles.browsecarsHeading}>
            <span className={styles.highlight}>Garage</span>
          </h1>
          {cars?.length === 0 && (
            <h1 className={styles.browsecarsHeading}>
              Seems like you haven't added any{" "}
              <span className={styles.highlight}>cars</span> to our database
            </h1>
          )}
        </div>
        <div className={styles.carsSection}>
          {cars?.map((c) => (
            <Car key={c._id} car={c} />
          ))}
        </div>
      </section>
    </>
  );
};
