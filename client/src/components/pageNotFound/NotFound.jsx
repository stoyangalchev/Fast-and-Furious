import { scrollToTop } from '../globalComponents/ScrollArrow';
import styles from './NotFound.module.css'
import React from 'react'
export const NotFound = () => {
    scrollToTop();
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.heading}>The Page you're looking for <span className={styles.highlight}>does not exist!</span></h1>
                <img className={styles.img} src="/img/404.jpg" alt="notFound" />
                <p className={styles.paragraph}>Seems like you're lost. Use our navigation bar to find your way. <i className="far fa-smile-beam"></i></p>
            </div>
        </div>
    );
}