import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import React, { useContext } from "react";
import { AuthContext } from '../../../contexts/AuthContext';
import * as carsService from '../../../services/carsService';
import styles from '../Catalogue.module.css'

const Car = lazy(() => import('./../newCar/Car'))

export const Likedcars = () => {
    const { userId } = useContext(AuthContext);
    const [cars, setcars] = useState(null);

    useEffect(() => {
        carsService
            .getMyLikedcars(userId)
            .then(cars => {
                setcars(cars);
            })
            .catch((err) => {
                throw err;
            })
    }, [userId]);

    return (
        <>
            <section className={styles.containerHeader}>
                <h1 className={styles.sectionTitle}>Liked cars</h1>
            </section>
            <section className={styles.containerContent}>
                <div className={styles.browsecarsHeader}>
                    <h1 className={styles.browsecarsHeading}>Browse <span className={styles.highlight}>cars</span></h1>
                    {cars?.length === 0 &&
                        <h1 className={styles.browsecarsHeading}>Seems like you haven't liked any <span className={styles.highlight}>cars</span> to our database <i className="far fa-sad-tear fa-spin"></i></h1>}
                </div>
                <div className={styles.carsSection}>
                    <Suspense fallback={<div>Loading...</div>}>
                        {cars?.map(g => <Car key={g._id} car={g} />)}
                    </Suspense>
                </div>
            </section>
        </>
    );
}

