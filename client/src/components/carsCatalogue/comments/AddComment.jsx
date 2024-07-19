import { useEffect, useState } from 'react';
import * as commentsService from '../../../services/commentsService'
import { useNavigate, useParams } from 'react-router-dom';
import { scrollToTop } from '../../globalComponents/ScrollArrow';

import styles from './AddComment.module.css'

export const AddComment = () => {
    const redirect = useNavigate();
    const {carId} = useParams();
    const [comment, setComment] = useState("");
    const [author, setAuthor] = useState("");
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        scrollToTop();
        const authorName = JSON.parse(localStorage.getItem('auth'));
        setAuthor(authorName.username);
    }, [])

    const onCommentSubmit = async (e) => {
        e.preventDefault();
        await commentsService.createComment({
            carId,
            comment,
            author
        })
        .then(() => {
            redirect(`/cars/${carId}`)
        })
        .catch(err => {
            setServerError(err.message);
        })
    }

    const handleCommentChange = (e) => {
        const value = e.target.value;
        setComment(value);
        if (value) {
            setServerError('');
        }
    };

    const onCancel = () => {
        redirect(`/cars/${carId}`)
    }
    
    return (
        <div className={styles.container}>
        <div className={styles.contentWrapper}>
            <div className={styles.col1}>
                    <h1 className={styles.heading}>Add new <span className={styles.highlight}>Comment</span> to the car</h1>
                <p className={styles.paragraph}>We are happy to hear from you. <i className="far fa-smile-beam"></i></p>
            </div>
            <div className={styles.col2}>
        <div className={styles.col2Wrapper}>
                    <form onSubmit={onCommentSubmit}>
                        <div className={styles.form}>
                            <div className={styles.maxWidthWrapper}>
                                <label className={styles.newcarLbl} htmlFor="author">AUTHOR:
                                        <input disabled type="text" id="author" className={styles.inputAuthor} value={author} />
                                </label>
           
                            </div>
                            <div className={styles.maxWidthWrapper}>
                            <label className={styles.newcarLbl} htmlFor="description">COMMENT:</label>
                                    <textarea className={`${styles.input} ${styles.inputComment}`} id="description" rows="5" value={comment} onChange={handleCommentChange} ></textarea>
                            </div>
                            <div className={styles.maxWidthWrapper}>
                            <p className={styles.errors}>{serverError}</p>
                            <button className={styles.btn} type="submit">ADD COMMENT</button>
                            <p></p>
                            <button className={styles.btn} type="button" onClick={onCancel}>CANCEL</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
                </div>
                </div>
        );
    }

