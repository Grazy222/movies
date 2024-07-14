import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";



function App () {
   

  return (
    <>
      <Header />
      <Banner image="home" />
      <h1>Episodio 1</h1>
      <Container>
        <section >
        <Card/>
        </section>
      </Container> 
      <Footer/>
    </>
  );
}

export default App;
