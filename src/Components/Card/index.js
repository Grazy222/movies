import React from 'react';

import style from "./card.module.css";

const Card =() => {
    return(
        <section className={style.card}>
       <a 
            href="https://www.youtube.com/watch?v=mcSD_vJXm7I" rel="noreferrer noopener" target="_blank">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYMbERfNkY5kb22yspXqCOmxDzoKqVe0ZoXjS9eT2KJk916kEw" alt="capa card"/>
        </a> 
        
        </section>
    );
}
export default Card;


