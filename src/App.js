import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/index";
import NovoVideo from "./Page/NovoVideo"
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import Header from "./Components/Header";
import { useState } from "react";
import videos from "./json/db.json";


const App = () => {
   const [videoList, setVideoList] = useState(videos);

  const handleAddVideo = (newVideo) => {
    setVideoList([...videoList, newVideo]);
  };
  
 return (
    <BrowserRouter>
      <Header/>
      <Container>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/novovideo" element={<NovoVideo/>}></Route>
    </Routes>
    </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


