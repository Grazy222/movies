import style from "./Banner.module.css";

function Banner({ image }) {
    return(
        <section 
        className={style.banner}
        // style={{ backgroundImage: `url('/public/${image}.jpg')`}}
        ></section>

    );
}

 export default Banner;
