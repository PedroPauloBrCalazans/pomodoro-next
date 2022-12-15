import { useContext } from 'react';
import { DesafioContext } from '../contexts/DesafioContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, fecharModal } = useContext(DesafioContext);

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={fecharModal}>
                    <img src="/icon/close.png" alt="Fechar modal" />
                </button>
            </div> 
        </div>
    );
} 