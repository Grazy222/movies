import style from "./card.module.css";

function Card({ id }) {
    return(
        <section className={style.card}>
           
        <a 
            href="https://www.youtube.com/embed/TB7UDCSkxqA?si=oV9XiskLmQlFvm4N" rel="noreferrer noopener" target="_blank">
            <img src="" alt="capa"/>
        </a>
        </section>
    );
}
export default Card;