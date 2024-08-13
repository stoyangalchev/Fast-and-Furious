import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import * as subscriptionService from "../../services/subscriptionService";

import styles from "./Footer.module.css";
import { scrollToTop } from "../../components/globalComponents/ScrollArrow";
import { AuthContext } from "../../contexts/AuthContext";

export const Footer = () => {

    const [isSubscribed, setIsSubscribed] = useState(null);
    const [error, setError] = useState("");
    const { userId, isAuthenticated, email } = useContext(AuthContext)

    useEffect(() => {
        if (isAuthenticated) {
            subscriptionService.checkSubscription(userId)
                .then((response) => {
                    setIsSubscribed(response.isSubscribed);
                })
                .catch((error) => {
                    console.error("Failed to check subscription status", error);
                });
        }
    }, [isAuthenticated, userId]);

    const createSubscription = (e) => {
        e.preventDefault();
        const data = {
            userId,
            email,
            isSubscribed: true
        };

        const handleSuccess = () => {
            setIsSubscribed(true);
            setError('')
        };

        const handleError = (error) => {
            if (error.message === 'You are already subscribed') {
                setError('You are already subscribed');
            } else {
                setError(error.message);
            }
        };

        subscriptionService.saveSubscription(data)
            .then(handleSuccess)
            .catch(handleError);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.footerRow}>
                    <div className={styles.col1}>
                        <Link
                            to="/"
                            className={styles["navbar-brand"]}
                            onClick={scrollToTop}
                        >
                            <h1 className={styles.logoContainer}>
                                <i className={`fas fa-car ${styles.icon}`}></i>Fast & Furious
                            </h1>
                        </Link>
                        <p className={styles.paragraph}>You can find us at:</p>
                        <p className={styles.paragraph}>
                            <i className="fa fa-map-marker-alt"></i> Rio de Janeiro
                        </p>
                        <p className={styles.paragraph}>
                            <i className="fa fa-phone-alt"></i> +55 11 98456 5666
                        </p>
                        <p className={styles.paragraph}>
                            <Link
                                to="mailto:fastfurious@email.com"
                                onClick={scrollToTop}
                            >
                                <i className="fa fa-envelope" style={{ color: "#008cff" }}></i>
                            </Link>{" "}
                            fastfurious@email.com
                        </p>
                        <div className={styles.socialMediaContainer}>
                            <Link className={styles.socialMediaBtn} to="https://twitter.com/">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link
                                className={styles.socialMediaBtn}
                                to="https://facebook.com/"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link
                                className={styles.socialMediaBtn}
                                to="https://linkedin.com/"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link
                                className={styles.socialMediaBtn}
                                to="https://instagram.com/"
                            >
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.col2}>
                        <div className={styles.col2Wrapper}>
                            <div className={styles.quicklinksContainer}>
                                <h4 className={styles.quicklinksHeading}>Quick Links</h4>
                                <div className={styles.quicklinksWrapper}>
                                    <Link
                                        className={styles.quickLink}
                                        to="/"
                                        onClick={scrollToTop}
                                    >
                                        <i className="fa fa-angle-right"></i> Home
                                    </Link>
                                    <Link
                                        className={styles.quickLink}
                                        to="/cars"
                                        onClick={scrollToTop}
                                    >
                                        <i className="fa fa-angle-right"></i> Cars Catalogue
                                    </Link>
                                    <Link
                                        className={styles.quickLink}
                                        to="/team"
                                        onClick={scrollToTop}
                                    >
                                        <i className="fa fa-angle-right"></i> The Crew
                                    </Link>
                                </div>
                            </div>
                            {isAuthenticated && (
                                <div className={styles.newsletterContainer}>
                                    <h4 className={styles.quicklinksHeading}>Newsletter</h4>
                                    {isSubscribed && (
                                        <p className={styles.paragraph}>
                                            You have successfully subscribed to our newsletter!
                                        </p>
                                    )}

                                    {error && <p className={styles.errors}>{error}</p>}
                                    {!isSubscribed && (
                                        <form
                                            className={styles["input-group"]}
                                            onSubmit={createSubscription}
                                        >
                                            <button
                                                className={`${styles.signUpBtn} ${styles.socialMediaBtn}`}
                                                type="submit"
                                            >
                                                Sign Up
                                            </button>
                                        </form>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div >
            <div className={styles.footerEndContainer}>
                <div className={styles.footerEndWrapper}>
                    <div className={styles.footerEndDisclaimer}>
                        <p className={styles.paragraph}>
                            &copy;{" "}
                            <Link
                                to="/"
                                style={{ color: "#fff" }}
                                onClick={scrollToTop}
                            >
                                Fast & Furious. All Rights Reserved.
                            </Link>
                        </p>
                    </div>
                    <div className={styles.footerEndShape}></div>
                </div>
            </div>
            
        </>
    );
};