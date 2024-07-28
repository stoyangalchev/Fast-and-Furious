import { Link } from "react-router-dom";
import styles from "./ImageInfo.module.css";

export const ImageInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.img} src="img/ff-five.jpeg" alt="ff-five" />
                <div className={styles.overlayInfo}>
                    <div className={styles.textContainer}>
                        <i className={`fab fa-react ${styles.icon}`}></i>
                        <h1 className={styles.heading}>Chose your Reactive car</h1>
                        <div className="divBtn"> <Link to="/cars" className={styles.btn}>
                            Browse cars
                        </Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
