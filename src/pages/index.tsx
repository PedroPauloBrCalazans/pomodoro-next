import Head from 'next/head';

import { CompletarDesafio } from '../components/CompletarDesafio';
import { Contador } from '../components/Contador';
import { ExperienceBar } from '../components/ExperienceBar';
import { Perfil } from '../components/Perfil';
import { DesafioBox } from '../components/DesafioBox';

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Pomodo.ro</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
            <Perfil />
            <CompletarDesafio />
            <Contador />
        </div>
        <div>
          <DesafioBox />

        </div>
      </section>
    </div>
  )
}