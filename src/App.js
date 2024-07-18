import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/index";
import NovoVideo from "./Page/NovoVideo/index";
import Footer from "./Components/Footer/index";
import Container from "./Components/Container";
import EditarVideo from "./Page/EditarVideo";
import Header from "./Components/Header/index";
import { useState } from "react";
import videos from "./json/db.json";



const App = () => {
  const [videoList, setVideoList] = useState(videos);
  const [videoToEdit, setVideoToEdit] = useState(null);
   

  const handleAddVideo = (newVideo) => {
    setVideoList([...videoList, newVideo]);
  };
 
 const handleEditVideo = (updateVideo) => {
  setVideoList(videoList.map(video => (video.id === updateVideo.id ? updateVideo : video)));
  setVideoToEdit(null);
 };

 const handleDeleteVideo = (videoId) => {
    setVideoList(videoList.filter(video => video.id !== videoId));
  };

const handleSetVideoToEdit = (video) => {
  setVideoToEdit(video);
};
   
  
 return (
    <BrowserRouter>
      <Header/>
      {/* <Container> */}
      {/*   */}
      <Routes>
        <Route path="/" element={<Home videos={videoList}/>}/>
        <Route path="/novovideo" element={<NovoVideo onAddVideo={handleAddVideo}/>} />
        <Route path="/editarvideo" element={<EditarVideo video={videoToEdit} onEditVideo={handleEditVideo} />} />
      </Routes>

    {/* </Container> */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


