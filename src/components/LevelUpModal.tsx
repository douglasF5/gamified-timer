import Image from 'next/image';
import styles from '../styles/components/LevelUpModal.module.css';
import { Button } from './Button';
import iconTwitter from '../../public/twitter.svg';
import iconXClose from '../../public/x-close.svg';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <button className={styles.closeButton} onClick={closeLevelUpModal}>
                    <Image src={iconXClose} alt='Fechar modal'/>
                </button>
                <header>
                    <span>{level}</span>
                </header>
                <div>
                    <strong className='txt-title-L'>Parabéns</strong>
                    <p className='txt-base-L'>Você alcançou um novo nível!</p>
                </div>
            </div>
        </div>
    );
}