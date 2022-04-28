import Image from "next/image";
import illustrationCompleteCycle from '../../public/complete-cycle.svg';
import illustrationExercise from '../../public/exercise.svg';
import illustrationEye from '../../public/eye.svg';
import styles from '../styles/components/ChallengeContent.module.css';

export function ChallengeContentDefault() {
    return (
        <div className={styles.container}>
            <Image src={illustrationCompleteCycle} alt="Finalize um ciclo e receba um desafio"/>
            <p className="txt-base-L">Finalize um ciclo para desbloquear o próximo desafio!</p>
        </div>
    );
}

interface ChallengeContentProps {
    challengeData: {
        type: 'body' | 'eye';
        description: string;
    }
}

export function ChallengeContent({ challengeData }: ChallengeContentProps) {
    const { type, description } = challengeData;
    const title = type === 'body' ? 'Exercite-se' : 'Mova os olhos';

    return (
        <div className={styles.container}>
            <Image src={type === 'body' ? illustrationExercise : illustrationEye} alt={title}/>
            <h3 className="txt-title-L">{title}</h3>
            <p className="txt-base-S">
                {description}
            </p>
        </div>
    );
}