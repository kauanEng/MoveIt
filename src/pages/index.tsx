import styles from '../styles/components/WelcomeContainer.module.css';

import Link from 'next/link';

import { GetServerSideProps } from 'next';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";
import PaginaSec from "./PaginaSec";

import { CountdownProvider } from '../contexts/CountdownContext';
import { Modal } from "../components/Modal";
import { ChallengesProvider } from '../contexts/ChallengesContext';




interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Products() {
  return (
    <>
      <div className={styles.welcomecontainer}>
          <h2>Bem vindo</h2>
          <div btn-container>
          <Link href='/PaginaSec'>
          <button className="btn-btn" type='button'>Entrar no jogo</button>
          </Link>
          </div>
          </div>
        </> 
  );
}

