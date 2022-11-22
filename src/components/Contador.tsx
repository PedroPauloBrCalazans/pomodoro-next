import { useEffect, useState } from 'react';
import styles from '../styles/components/Contador.module.css';

export function Contador() {
    // Manipular horas em segundos, fica mais facil manipular essa operacao
    // 25 * 60, 60 segundos tem 1 minuto,,, 25 representa 25 minutos porem em segundos
    const [time, setTime] = useState(25 * 60);
    const [ativo, setAtivo] = useState(false);

    //calculando os minutos atraves do valor acima 

    const minutos = Math.floor(time / 60);   // Math.floor estou arredondando para baixo o valor de time, vai retornar o numero de minutos totais..
    const secundos = time % 60;  //vai retornar o resto da divisao,, os secundos.

    const [minutoEsquerda, minutoDireita] = String(minutos).padStart(2, '0').split('');
    const [secundoEsquerda, secundoDireita] = String(secundos).padStart(2, '0').split('');
     // vou converter em string...... padStart => vai verificar se a string tem 2 caracteres vai preencher o restante para esquerda com o paramentro que passamos (padStart(2, '0'))   split => vai dividir e retornar em 2 variaveis (25 '2' '5')
 
     function iniciarContador() {
        setAtivo(true);
     }

     useEffect(() => {
        if (ativo && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
     }, [ativo, time])

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

            <button 
                type='button'
                className={styles.startContador}
                onClick={iniciarContador}
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}