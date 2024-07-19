import { useEffect, useState } from 'react';
import * as commentsService from '../../../services/commentsService'
import { useNavigate, useParams } from 'react-router-dom';
import styles from './AddComment.module.css'

export const AddComment = () => {
    const redirect = useNavigate();
    const {carId} = useParams();
    const [comment, setComment] = useState("");
    const [author, setAuthor] = useState("");
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
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
                                <label className={styles.newcarLbl} htmlFor="author">Author</label>
                                <input disabled type="text" id="author" className={styles.input} value={author}/>
                            </div>
                            <div className={styles.maxWidthWrapper}>
                            <label className={styles.newcarLbl} htmlFor="description">Comment</label>
                                <textarea className={`${styles.input} ${styles.inputComment}`} id="description" rows="5" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                            </div>
                            <div className={styles.maxWidthWrapper}>
                            <p className={styles.errors}>{serverError}</p>
                            <button className={styles.btn} type="submit">Add Comment</button>
                            <p></p>
                            <button className={styles.btn} type="button" onClick={onCancel}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
                </div>
                </div>
        );
    }

