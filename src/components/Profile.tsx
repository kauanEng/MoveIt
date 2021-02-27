import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);


    return (
        <div className={styles.profileContainer}>
            <img src="icons/perfil.png" alt="Kauan santos" />
            <div>
                <strong>Kauan Santos</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>
                <p>Level {level}</p>
                </p>
            </div>
        </div>
    );
}