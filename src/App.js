import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import style from "./index.css";
import videos from "./json/db.json";


function App () {
   

  return (
    <>
      <Header/>
      <Banner image="home" />
      <Container>
        <h1>Episodio 1</h1>
        <section className={style.cards}>
        
         
        <Card/>
          
        </section>
      </Container> 
      <Footer/>
    </>
  );
}

export default App;
