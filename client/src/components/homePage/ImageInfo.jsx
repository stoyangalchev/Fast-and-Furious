import { Link } from "react-router-dom";
import styles from "./ImageInfo.module.css";
import React from "react";  
export const ImageInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.img} src="../img/ff-five.jpeg" alt="ff-five" />
                <div className={styles.overlayInfo}>
                    <div className={styles.textContainer}>
                        <i className={`fab fa-react ${styles.icon}`}></i>
                        <Link to="/cars" className={styles.heading}>
                            <h1 className="title" >Chose your Reactive car</h1>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
