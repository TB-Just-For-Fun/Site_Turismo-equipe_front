import React from "react"
import styles from '../components/Nav.module.css';
import { Link } from "react-router-dom";

export default function Home() {
    return <>
        <nav>
            <div id={styles.grupo}>

                <span className={styles.pacotes}>
                    <Link to="/descricao">Detalhamento de pacotes</Link>
                </span>


                <span className={styles.galeria}><Link to="/galery">Galeria</Link>
                </span>

                <span className={styles.depoimento}><Link to="/clientes">Depoimento de clientes</Link></span>
            </div>
        </nav>
    </>


}