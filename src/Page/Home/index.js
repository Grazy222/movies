import Banner from "../../Components/Banner/index";
import Container from "../../Components/Container/index";
import Card from "../../Components/Card";
import styles from './Home.module.css';

const Home = ({ videos, onEdit, onDelete }) => {
    return(
    <>
    <Banner/>
    <Container>
        <h1>Rick and Morty</h1>
           <section className={styles.videoContainer}>
            {videos.map((video) => {
                return <Card {...video} key={video.id} onEdit={onEdit} onDelete={onDelete}/>;
            })}
            </section>
    </Container>
    </>
    );
};
export default Home;