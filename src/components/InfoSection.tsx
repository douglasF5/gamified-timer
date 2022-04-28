import Image from 'next/image';
import styles from '../styles/components/InfoSection.module.css';
import logo from '../../public/logo.svg';
import profilePicture from '../../public/my-profile-picture-2.png';
import iconArrowUp from '../../public/arrow-up.svg';
import iconFlag from '../../public/flag.svg';
import iconCycle from '../../public/cycle.svg';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

export function InfoSection() {
  const { completeChallenges, level  } = useContext(ChallengesContext);
  const { cycleCount } = useContext(CountdownContext);
  
  return(
      <div className={styles.container}>
        <Image src={logo} alt="MoveIt"/>
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <Image src={iconArrowUp} alt="Nível atual" height={16} />
            <p className='txt-base-S bold'><span className={styles.uHide}>Nível</span> {level}</p>
          </div>
          <div className={styles.stat}>
            <Image src={iconFlag} alt="Desafios concluídos" height={18} width={18} />
            <p className='txt-base-S bold'>{completeChallenges} <span className={styles.uHide}>{`desafio${completeChallenges > 1 ? 's' : ''}`}</span></p>
          </div>
          <div className={styles.stat}>
            <Image src={iconCycle} alt="Ciclo concluídos" height={18} width={18} />
            <p className='txt-base-S bold'>{cycleCount} <span className={styles.uHide}>{`ciclo${cycleCount > 1 ? 's' : ''}`}</span></p>
          </div>
          <div className={styles.userInfo}>
            <Image src={profilePicture} alt="User profile" height={32} width={32} />
            <span className={`txt-base-S bold ${styles.uHide}`}>Douglas Ferreira</span>
          </div>
        </div>
      </div>
  );
}