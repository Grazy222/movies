
import Banner from "../../Components/Banner/index";
import Container from "../../Components/Container/index";
import Card from "../../Components/Card";

import videos from "../../json/db.json";
import styles from './Home.module.css';

const Home = () => {
    return(
    <>
        <Banner/>
        <Container>
            <h1>Rick and Morty</h1>
           <section className={styles.videoContainer}>
            {videos.map( (video) => {
                return <Card {...video} key={video.id}/>
            })}
            </section>
        </Container>
    </>
    )

}
export default Home;