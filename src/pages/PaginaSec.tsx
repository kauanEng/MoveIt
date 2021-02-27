import Link from 'next/link';

import { GetServerSideProps } from 'next';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";
import PaginaSec from "./PaginaSec";

import { CountdownProvider } from '../contexts/CountdownContext';
import { Modal } from "../components/Modal";
import { ChallengesProvider } from '../contexts/ChallengesContext';


interface HomeProps {
  level:number;
  currentExperience:number;
  challengesCompleted:number;
}

export default function Home(props: HomeProps) {
  return (

    <Link href="/PaginaSec">
    <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
     
    <div className={styles.container}>
      <Head>
        <title>Início | Mova-se</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
        <Modal />
      </CountdownProvider>
    </div>
    </ChallengesProvider>
    </Link>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  
  
  
  return {
    props: {
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}
