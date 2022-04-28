import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceStats.module.css';

export function ExperienceStats() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return(
      <div className={styles.experienceStatsContainer}>
        <span className='txt-base-S'>{currentExperience} XP</span>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBarIndicator} style={{width: `${percentToNextLevel}%`}}></div>
        </div>
        <span className='txt-base-S'>{experienceToNextLevel} XP</span>
      </div>
  );
}