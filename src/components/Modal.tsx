  
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Modal.module.css';

export function Modal() {
    const { level, modalState, closeModal } = useContext(ChallengesContext);

    return (
        <div>
            {modalState && (
                <div className={styles.modalContainer}>
                    <div className={styles.modalContent}>
                        <img src="icons/close.svg" alt="Close Button" onClick={closeModal} />
                        <span>{level}</span>
                        <strong>Parabéns</strong>
                        <p>Você alcançou um novo level.</p>
                       
                    </div>
                </div>)}
        </div>
    );
}