import styles from '../styles/components/Perfil.module.css';

export function Perfil() {
    return(
        <div className={styles.perfilContainer}>
            <img src="https://avatars.githubusercontent.com/u/62767367?v=4" alt="Pedro Paulo" />
            <div>
                <strong>Pedro Paulo</strong>
                <p>
                    <img src="icon/level.png" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
        
    );
}