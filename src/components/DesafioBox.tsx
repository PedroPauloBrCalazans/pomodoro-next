import { useContext } from 'react';
import { ContadorContext } from '../contexts/ContadorContext';
import { DesafioContext } from '../contexts/DesafioContext';

import styles from '../styles/components/DesafioBox.module.css';

export function DesafioBox() {

    const { ativoDesafio, resetarDesafio, completarDesafio } = useContext(DesafioContext);
    const { resertarContador } = useContext(ContadorContext);

    function handleDesafioSucesso() {
        completarDesafio();
        resertarContador();
    }

    function handleDesafioFalo() {
        resetarDesafio();
        resertarContador();
    }

    return(
        <div className={styles.desafioBoxContainer}>
            { ativoDesafio ? ( 
                <div className={styles.desafioAtivo}>
                    <header>Ganhe {ativoDesafio.amount} xp</header>

                    <main>
                        <img src="icon/academia.png" />
                        <strong>Novo desafio</strong>
                        <p>{ativoDesafio.description}</p>
                    </main>

                    <footer>
                        <button 
                            type='button'
                            className={styles.desafioFalhouButton}
                            onClick={resetarDesafio}
                        >
                            Falhei
                        </button>
                        <button 
                            type='button'
                            className={styles.desafioSucessoButton}
                            onClick={completarDesafio}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.desafioBoxInativo}>
                    <strong>Finalize um ciclo para receber um desafios.</strong>
                    <p>
                        <img src="icon/level.png" alt="Level" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    );
}