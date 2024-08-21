import styles from "./AboutUs.module.css";
import React from "react";
export const AboutUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.itemsWrapper}>
                <div className={styles.lg}>
                    <h1 className={styles.header}>
                        Welcome to <span className={styles.highlight}>Fast & Furious</span>
                    </h1>
                    <h4 className={styles.header2}>
                        Have you ever wanted to drive a car, but you don't know which one?
                    </h4>
                    <p className={styles.paragraph}>
                        It doesn't matter whether you win by an inch or a mile, winning is
                        winning.
                    </p>
                    <div className={styles.list}>
                        <div className={styles.col}>
                            <p className={styles.item}>
                                <i className={`fa fa-check ${styles.icons}`}></i>Add new car.
                            </p>
                            <p className={styles.item}>
                                <i className={`fa fa-check ${styles.icons}`}></i>Browse our
                                catalogue.
                            </p>
                            <p className={styles.item}>
                                <i className={`fa fa-check ${styles.icons}`}></i>Like and
                                comment on your favorite cars.
                            </p>

                        </div>
                        <div className={styles.col}>
                            <p className={styles.item}>
                                <i className={`fa fa-check ${styles.icons}`}></i>Stay up-to-date
                                with our newsletter.
                            </p>
                            <p className={styles.item}>
                                <i className={`fa fa-check ${styles.icons}`}></i>Be part of our
                                family community.
                            </p>
                            <p className={styles.item}>
                                <i className={`fa fa-check ${styles.icons}`}></i>
                                Your car your choice.
                            </p>
                        </div>
                    </div>
                    <p className={styles.item1}>
                        Chose you car but remember .The only thing that matters is who is
                        behind the wheel.
                    </p>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.imgBg}>
                        <img
                            className={styles.img}
                            src="img/fast-and-furious-6_letty-Jenson-Interceptor.avif"
                            alt="Letty"
                        />
                        

                    </div>
                </div>
            </div>
        </div>
    );
};
