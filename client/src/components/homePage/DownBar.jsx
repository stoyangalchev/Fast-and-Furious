import styles from "./DownBar.module.css";

export const DownBar = () => {
    return (
        <div className={styles.DownContainer}>
            <div className={styles.wrapper}>
                <div className={styles.firstLastItemWrapper}>
                    <div className={styles.firstItemContentWrapper}>
                        <i className={`bi bi-geo-alt ${styles.highlight}`}></i>
                        <div className={styles.text}>
                            <h6 className={styles.textBold}>Our Office</h6>
                            <span>Las Vegas </span>
                        </div>
                    </div>
                </div>
                <div className={styles.secondItemWrapper}>
                    <div className={styles.firstItemContentWrapper}>
                        <i className={`bi bi-envelope-open ${styles.highlight}`}></i>
                        <div className={styles.text}>
                            <h6 className={styles.textBold}>Email Us</h6>
                            <span>fastfurious@email.com</span>
                        </div>
                    </div>
                </div>
                <div className={styles.firstLastItemWrapper}>
                    <div className={styles.firstItemContentWrapper}>
                        <i className={`bi bi-phone-vibrate ${styles.highlight}`}></i>
                        <div className={styles.text}>
                            <h6 className={styles.textBold}>Call Us</h6>
                            <span>+012 345 6789</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
