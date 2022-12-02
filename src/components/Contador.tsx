import { useContext, useEffect, useState } from 'react';
import { ContadorContext } from '../contexts/ContadorContext';
import { DesafioContext } from '../contexts/DesafioContext';
import styles from '../styles/components/Contador.module.css';


export function Contador() {
    
    const { 
        minutos,
        secundos,
        finalizou,
        isAtivo,
        iniciarContador, 
        resertarContador 
    } = useContext(ContadorContext);

    const [minutoEsquerda, minutoDireita] = String(minutos).padStart(2, '0').split('');
    const [secundoEsquerda, secundoDireita] = String(secundos).padStart(2, '0').split('');
     // vou converter em string...... padStart => vai verificar se a string tem 2 caracteres vai preencher o restante para esquerda com o paramentro que passamos (padStart(2, '0'))   split => vai dividir e retornar em 2 variaveis (25 '2' '5')
 
     

    return(
        <div>
            <div className={styles.contadorContainer}>
                <div>
                    <span>{minutoEsquerda}</span>
                    <span>{minutoDireita}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secundoEsquerda}</span>
                    <span>{secundoDireita}</span>
                </div>
            </div>

            { finalizou ? (
                <button
                    disabled
                    className={styles.startContador}
                >
                    Ciclo encerrado.
                </button>
                ) : (
                    <>
                     { isAtivo ? (
                        <button 
                            type='button'
                            className={`${styles.startContador} ${styles.startContadorAtivo}`}
                            onClick={resertarContador}
                        >
                            Abandonar ciclo
                        </button>
                        ) : (
                                <button 
                                    type='button'
                                    className={styles.startContador}
                                    onClick={iniciarContador}
                                >
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}
        </div>
    );
}