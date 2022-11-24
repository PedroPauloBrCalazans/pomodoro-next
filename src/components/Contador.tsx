import { useEffect, useState } from 'react';
import styles from '../styles/components/Contador.module.css';

let contadorTimeout: NodeJS.Timeout;

export function Contador() {
    // Manipular horas em segundos, fica mais facil manipular essa operacao
    // 25 * 60, 60 segundos tem 1 minuto,,, 25 representa 25 minutos porem em segundos
    const [time, setTime] = useState(0.1 * 60);
    const [isAtivo, setIsAtivo] = useState(false);

    const [finalizou, setFinalizou] = useState(false);

    //calculando os minutos atraves do valor acima 

    const minutos = Math.floor(time / 60);   // Math.floor estou arredondando para baixo o valor de time, vai retornar o numero de minutos totais..
    const secundos = time % 60;  //vai retornar o resto da divisao,, os secundos.

    const [minutoEsquerda, minutoDireita] = String(minutos).padStart(2, '0').split('');
    const [secundoEsquerda, secundoDireita] = String(secundos).padStart(2, '0').split('');
     // vou converter em string...... padStart => vai verificar se a string tem 2 caracteres vai preencher o restante para esquerda com o paramentro que passamos (padStart(2, '0'))   split => vai dividir e retornar em 2 variaveis (25 '2' '5')
 
     function iniciarContador() {
        setIsAtivo(true);
     }

     function resertarContador() {
        clearTimeout(contadorTimeout);
        setIsAtivo(false);
        setTime(0.1 * 60);
     }

     useEffect(() => {
        if (isAtivo && time > 0) {
            contadorTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isAtivo && time === 0) {
            setFinalizou(true);
            setIsAtivo(false);
        }
     }, [isAtivo, time])

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