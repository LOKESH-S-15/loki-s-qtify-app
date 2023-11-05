import logo from './logo.svg';
import './App.css';
import QtifyHomePage from './components/QtifyHomePage/QtifyHomePage';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AlbumDetailsPage from './components/AlbumDetailsPage/AlbumDetailsPage';
import { useState } from 'react';
import SongPlaying from './components/SongPlayingSection/SongPlaying';
function App() {
    
  const [song,SetSong]=useState(null);
const handleSongToPlay=(event,songData)=>{
  console.log(songData);
  SetSong(songData);

}

  return (

    <BrowserRouter>
    <Routes>
    <Route excat path="/" element={<QtifyHomePage handleSongToPlay={handleSongToPlay}/>}></Route>
    <Route path="/album/:id" element={<AlbumDetailsPage handleSongToPlay={handleSongToPlay}/>}></Route>
    
    </Routes>
    <SongPlaying songData={song}/>
    </BrowserRouter>
      
      
    
  );
}

export default App;
