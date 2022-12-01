import { useContext } from 'react';
import { DesafioContext } from '../contexts/DesafioContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {

    const { experienciaUsuario, experienciaNovoNivel } = useContext(DesafioContext);

    const porcentagemNovoNivel = Math.round((experienciaUsuario * 100)) / experienciaNovoNivel;

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${porcentagemNovoNivel}%` }} />

                <span className={styles.currentExperience} style={{ left: `${porcentagemNovoNivel}%` }}>
                    {experienciaUsuario} xp
                </span>
            </div>
            <span>{experienciaNovoNivel} xp</span>
        </header>
    );
}