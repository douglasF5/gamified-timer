import { Button } from "./Button";
import styles from '../styles/components/Countdown.module.css';
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CardSection } from "./CardSection";
import iconCycle from '../../public/cycle.svg';
import { CountdownContext } from "../contexts/CountdownContext";

export function CountdownBox() {
    const { activeChallenge } = useContext(ChallengesContext);
    const {
        minutes,
        seconds,
        cycleCount,
        isActive,
        hasSuccessAppearance,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    return (
        <CardSection
          ready={activeChallenge ? false : true}
          icon={iconCycle}
          title="Ciclo"
          count={isActive ? cycleCount + 1 : undefined}
          message="Concentre-se nas atividades importantes!"
        >
            <div className={`${styles.container} ${hasSuccessAppearance ? styles.finished : ''}`}>
                <div>
                    <span className="txt-display">{String(minutes).padStart(2, '0')}</span>
                    <span className="txt-display">:</span>
                    <span className="txt-display">{String(seconds).padStart(2, '0')}</span>
                </div>
                {hasSuccessAppearance
                    ? (<p className="txt-title-S">Ciclo concluído!</p>)
                    : (<>
                        {isActive
                            ? (
                                <Button
                                    type="neutral"
                                    handleClick={resetCountdown}
                                >
                                    Cancelar ciclo
                                </Button>
                            )
                            : (
                                <Button
                                    type="default"
                                    handleClick={startCountdown}
                                >
                                    {`Iniciar ciclo ${String(cycleCount + 1)}`}
                                </Button>
                            )
                        }
                    </>)
                }
            </div>
        </CardSection>
    );
}