import { Link } from "react-router-dom";
import { useState } from "react";
import * as subscriptionService from "../../services/subscriptionService";
import { useContext } from "react";
import { FormValidatorContext } from "../../contexts/FormValidatorContext";
import styles from "./Footer.module.css";
import { scrollToTopHandler } from "../../utils/scrollToTopHandler";
import { getAuthToken } from "../../services/getToken";

export const Footer = () => {
    const [email, setEmail] = useState("");
    const [subscripton, setSubscription] = useState(false);
    const [hasAuthToken, sethasAuthToken] = useState(false)
    const { UserValidator, errors } = useContext(FormValidatorContext);

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    // Check if work when get real token
    if (getAuthToken() !== null) {
        sethasAuthToken(true)
    }

    const createSubscription = (e) => {
        e.preventDefault();
        const data = {
            email: email,
        };
        subscriptionService.saveSubscription(data).then(() => {
            setSubscription(true);
            setEmail("");
        });
    };


    return (
        <>
            <div className={styles.container}>
                <div className={styles.footerRow}>
                    <div className={styles.col1}>
                        <Link
                            to="/"
                            className={styles["navbar-brand"]}
                            onClick={() => scrollToTopHandler()}
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
                                onClick={() => scrollToTopHandler()}
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
                                        onClick={() => scrollToTopHandler()}
                                    >
                                        <i className="fa fa-angle-right"></i> Home
                                    </Link>
                                    <Link
                                        className={styles.quickLink}
                                        to="/cars"
                                        onClick={() => scrollToTopHandler()}
                                    >
                                        <i className="fa fa-angle-right"></i> Cars Catalogue
                                    </Link>
                                    <Link
                                        className={styles.quickLink}
                                        to="/team"
                                        onClick={() => scrollToTopHandler()}
                                    >
                                        <i className="fa fa-angle-right"></i> The Crew
                                    </Link>
                                </div>
                            </div>
                            {hasAuthToken && (
                                <div className={styles.newsletterContainer}>
                                    <h4 className={styles.quicklinksHeading}>Newsletter</h4>
                                    {subscripton && (
                                        <p className={styles.paragraph}>
                                            You have succesfully subscribed to our newsletter!
                                        </p>
                                    )}
                                    <p className={styles.errors}>{errors?.email}</p>
                                    {!subscripton && (
                                        <form
                                            className={styles["input-group"]}
                                            onSubmit={createSubscription}
                                        >
                                            <input
                                                type="email"
                                                name="email"
                                                className={styles.input}
                                                placeholder="Your Email Address"
                                                value={email}
                                                onBlur={UserValidator}
                                                onChange={emailChangeHandler}
                                            />
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
            </div>
            <div className={styles.footerEndContainer}>
                <div className={styles.footerEndWrapper}>
                    <div className={styles.footerEndDisclaimer}>
                        <p className={styles.paragraph}>
                            &copy;{" "}
                            <Link
                                to="/"
                                style={{ color: "#fff" }}
                                onClick={() => scrollToTopHandler()}
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
