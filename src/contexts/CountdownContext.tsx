import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    cycleCount: number;
    isFinished: boolean;
    isActive: boolean;
    hasSuccessAppearance: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [cycleCount, setCycleCount] = useState(0);
    const [hasSuccessAppearance, setHasSuccessAppearance] = useState(false);
    const [windowHeight, setWindowHeight] = useState(0)

    const minutes = (time - (time % 60)) / 60;
    const seconds = time % 60;

    function getWindowHeight() {
        const { innerHeight: height } = window;
        setWindowHeight(height);
    }

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        setHasSuccessAppearance(false);
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isActive && time === 0) {
            setIsFinished(true);
            setHasSuccessAppearance(true);
            setIsActive(false);
            setCycleCount(cycleCount + 1);
            startNewChallenge();
            getWindowHeight();

            window.scroll({
                top: windowHeight - 1,
                left: 0,
                behavior: "smooth"
            });
        }
    }, [isActive, time]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <CountdownContext.Provider
            value={{
                minutes,
                seconds,
                cycleCount,
                isFinished,
                isActive,
                hasSuccessAppearance,
                startCountdown,
                resetCountdown
            }}
        >
            {children}
        </CountdownContext.Provider>
    );
}