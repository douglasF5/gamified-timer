import { Button } from "./Button";
import iconX from "../../public/x.svg";
import iconCheck from "../../public/check.svg";
import styles from '../styles/components/ChallengeUserControls.module.css';
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

export function ChallengeUserControls() {
    const { resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded () {
        completeChallenge();
        resetCountdown();

        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    function handleChallengeFailed () {
        resetChallenge();
        resetCountdown();

        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className={styles.container}>
            <Button type="negative" icon={iconX} handleClick={handleChallengeFailed}>Falhei</Button>
            <Button type="positive" icon={iconCheck} handleClick={handleChallengeSucceeded}>Fiz o desafio</Button>
        </div>
    );
}