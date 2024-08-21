import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import React ,{Suspense,lazy}from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as carsService from "../../services/carsService";

import { NewCarButton } from "../../shared/NewCarButton/NewCarButton";
import { scrollToTop } from "../globalComponents/ScrollArrow";

import styles from "./Catalogue.module.css";

const Car = lazy(() => import('./newCar/Car'));

export const Catalogue = () => {
    const { isAuthenticated } = useContext(AuthContext);

    const [cars, setcars] = useState(null);
    const [filteredList, setFilteredList] = useState([]);
    const [searchValue, setSearchValue] = useState(false);

    useEffect(() => {
        carsService.getcars()
            .then((cars) => {
                if (Array.isArray(cars)) {
                    setcars(cars);
                } else {
                    console.error("Expected an array but got:", cars);
                }
            })
            .catch((err) => {
                throw err;
            });
    }, []);

    const onFilter = (e) => {
        const query = e.target.value;
        if (query) {
            setSearchValue(true);
            
            setFilteredList(cars.filter((item) => item.category === query));
        } else {
            setSearchValue(false);
            setFilteredList("");
        }
    };

    return (
        <>
            <section className={styles.containerHeader}>
                <h1 className={styles.sectionTitle}> Catalogue</h1>
                {isAuthenticated && (
                    <Link to="/new-car" >
                        <NewCarButton tittle={"Add New Car"} />
                    </Link>
                )}
            </section>

            <section className={styles.containerContent}>
                <div className={styles.browsecarsHeader}>
                    <h1 className={styles.browsecarsHeading}>
                        Browse all <span className={styles.highlight}>cars</span>
                    </h1>
                    <h2 className={styles.findcarsHeading}>or</h2>
                    <h1 className={styles.findcarsHeading}>
                        Find <span className={styles.highlight}>cars </span>by category
                    </h1>
                    <select name="category" className={styles.select} onChange={onFilter}>
                        <option value="">--Please choose category--</option>
                        <option value="Coupes">Coupes</option>
                        <option value="Convertibles">Convertibles</option>
                        <option value="Electric car">Electric car</option>
                        <option value="Compact car">Compact car</option>
                        <option value="Hybrid car">Hybrid car</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Luxury car">Luxury car</option>
                        <option value="Micro car">Micro car</option>
                        <option value="Muscle car">Muscle car</option>
                        <option value="Off-road vehicle">Off-road vehicle</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Sport car">Sport car</option>
                        <option value="Truck">Truck</option>
                        <option value="Vans">Vans</option>
                        <option value="Vintage car">Vintage car</option>
                    </select>
                    {cars?.length === 0 && (
                        <>
                            <h1 className={styles.browsecarsHeading}>
                                Seems like there are no{" "}
                                <span className={styles.highlight}>cars</span> in our database
                            </h1>

                            {!isAuthenticated ? (
                                <h2 className={styles.browsecarsHeading}>
                                    You can{" "}
                                    <span className={styles.highlight}>
                                        {" "}
                                        <Link
                                            to="/login"
                                            style={{ color: "#008cff" }}
                                            onClick={scrollToTop}
                                        >
                                            login
                                        </Link>{" "}
                                        /{" "}
                                        <Link
                                            to="/register"
                                            style={{ color: "#008cff" }}
                                            onClick={scrollToTop}
                                        >
                                            register
                                        </Link>{" "}
                                    </span>{" "}
                                    and start adding cars!
                                </h2>
                            ) : (
                                ""
                            )}
                        </>
                    )}
                </div>

                <div className={styles.carsSection}>

                    {filteredList.length === 0 &&
                        !searchValue &&
                        cars?.map((c) => <Car key={c._id} car={c} />)}

                    {filteredList.length === 0 && searchValue && (
                        <p className={styles.nocars}>
                            There are no cars in our database that match your search.
                        </p>
                    )}

                    <Suspense fallback={<div>Loading...</div>}>
                        {filteredList.map((c) => (
                            <Car key={c._id} car={c} />
                        ))}
                    </Suspense>

                </div>
            </section>
        </>
    );
};
