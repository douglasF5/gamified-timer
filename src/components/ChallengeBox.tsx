import { CardSection } from "./CardSection";
import { ChallengeContentDefault, ChallengeContent } from "../components/ChallengeContent";
import { ChallengeUserControls } from '../components/ChallengeUserControls';
import iconFlag from '../../public/flag.svg';
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function ChallengeBox() {
    const { activeChallenge, completeChallenges } = useContext(ChallengesContext);

    return(
        <CardSection
            ready={activeChallenge ? true : false}
            icon={iconFlag}
            title="Desafio"
            descriptor={activeChallenge ? `+${activeChallenge?.xpAmount} XP` : ''}
            count={activeChallenge ? completeChallenges + 1 : undefined}
            message="Complete desafios e avance para o próximo nível!"
            controls={activeChallenge ? <ChallengeUserControls /> : null}
        >
            {activeChallenge ? <ChallengeContent challengeData={activeChallenge}/> : <ChallengeContentDefault />}
        </CardSection>
    );
}