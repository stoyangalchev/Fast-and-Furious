import styles from './DeletionMessage.module.css'

export const DeletionMessage = ({
    show,
    onClose,
    onConfirm,
}) => {
    
    const message = (
        <div>
            <p className={styles.message}>Are you sure you want to delete this car?</p>
            <button className={styles.btn} onClick={onConfirm}>Delete</button>
            <button className={styles.btn} onClick={onClose}>Cancel</button>
        </div>
        );

        return show && message;
    }
