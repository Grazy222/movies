
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";




const App = () => {
 
   

  return (
    <>
      <Header />
      <Banner />
      
      <Container>
        <h2> Episódio 1</h2>
        <section className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/> 
        </section>
      </Container> 
      <Footer/>
    </>
  );
}

export default App;
