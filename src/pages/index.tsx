import Head from "next/head";
import { GetServerSideProps } from "next";
import { Header } from "../components/Header";
import { CountdownBox } from '../components/CountdownBox';
import { ChallengeBox } from "../components/ChallengeBox";
import stylesMain from '../styles/components/MainContent.module.css';
import stylesFooter from '../styles/components/Footer.module.css';
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
    level: number;
    currentExperience: number;
    completeChallenges: number;
}

export default function Home(props: HomeProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            completeChallenges={props.completeChallenges}
        >
            <div className='page-wrapper'>
                <Head>
                    <title>MoveIt | Timer app</title>
                </Head>
                <CountdownProvider>
                    <Header />
                    <main>
                        <section className={`content-wrapper ${stylesMain.container}`}>
                            <CountdownBox />
                            <ChallengeBox />
                        </section>
                    </main>
                </CountdownProvider>
                <footer className={stylesFooter.footerWrapper}>
                    <div className="content-wrapper">
                        <p>Projeto-exercício feito com React.js e Next.js por <a href="https://github.com/douglasF5" about="_blank" rel="noreferrer">Douglas Ferreira</a></p>
                    </div>
                </footer>
            </div>
        </ChallengesProvider>
    )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    const {level, currentExperience, completeChallenges} = ctx.req.cookies;

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            completeChallenges: Number(completeChallenges)
        }
    }
};