import { useContext } from 'react';
import { DesafioContext } from '../contexts/DesafioContext';
import styles from '../styles/components/CompletarDesafio.module.css';

export function CompletarDesafio() {

    const { desafioCompletos } = useContext(DesafioContext);

    return(
        <div className={styles.completarDesafioContainer}>
            <span>Desafios completos</span>
            <span>{desafioCompletos}</span>
        </div>
    );
}