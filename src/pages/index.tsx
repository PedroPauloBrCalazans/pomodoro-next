import { ExperienceBar } from '../components/ExperienceBar';
import { Perfil } from '../components/Perfil';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}> 
      <ExperienceBar />

      <section>
        <div>
            <Perfil />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}