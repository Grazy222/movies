import React from "react";
import editar from "./editar.png";
import limpar from "./lixeira.png";
import styles from "./Card.module.css";


const Card = ({ id, titulo, capa }) => {
    return(
        <section className={styles.card}>
            <img src={capa} alt={titulo} className={styles.capa}  />
            <h3>{ titulo }</h3>
            <div className={styles.icon}>
            <img src={editar} alt="Editar" className={styles.editar} /> 
            <img src={limpar} alt="Editar" className={styles.limpar} /> 
            </div>
        </section>
    );
}
export default Card;

    //  <a 
    //     href="https://www.youtube.com/watch?v=mcSD_vJXm7I" rel="noreferrer noopener" target="_blank">
    //     <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYMbERfNkY5kb22yspXqCOmxDzoKqVe0ZoXjS9eT2KJk916kEw" alt="capa card"/>
    // </a>   
        
        
        
        
        


