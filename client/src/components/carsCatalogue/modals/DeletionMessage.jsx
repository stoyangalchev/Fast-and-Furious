import styles from './DeletionMessage.module.css'

export const DeletionMessage = ({
    show,
    onClose,
    onConfirm,
}) => {

    const message = (
        <div className={styles.modalBackground} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <p className={styles.message}>Are you sure you want to delete this car?</p>
                <button className={styles.btn} onClick={onConfirm}>Delete</button>
                <button className={styles.btn} onClick={onClose}>Cancel</button>
            </div>
        </div>
    );

    return show && message;
}
