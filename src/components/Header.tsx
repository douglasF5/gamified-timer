import styles from '../styles/components/Header.module.css';
import { InfoSection } from './InfoSection';
import { ExperienceStats } from './ExperienceStats';

export function Header() {
    return(
        <header className={styles.headerWrapper}>
            <div className={`content-wrapper ${styles.headerContent}`}>
                <InfoSection />
                <ExperienceStats />
            </div>
        </header>
    );
}