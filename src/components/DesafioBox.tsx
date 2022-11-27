import styles from '../styles/components/DesafioBox.module.css';

export function DesafioBox() {

    const desafioAtivo = true;

    return(
        <div className={styles.desafioBoxContainer}>
            { desafioAtivo ? (
                <div className={styles.desafioAtivo}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icon/academia.png" />
                        <strong>Novo desafio</strong>
                        <p>Levante e vai passear com Marley </p>
                    </main>

                    <footer>
                        <button 
                            type='button'
                            className={styles.desafioFalhouButton}
                        >
                            Falhei
                        </button>
                        <button 
                            type='button'
                            className={styles.desafioSucessoButton}
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