import React, { useEffect, useState } from "react";
import styles from "./SongPlaying.module.css";
import IconButton from "@mui/material/IconButton";
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
const SongPlaying = ({songData}) => {
  const url = "http://streaming.tdiradio.com:8000/house.mp3";
  const [audio] = useState(new Audio(url));
  const [startStop, SetStartStop] = useState(false);
  const [like, SetLike] = useState(false);
  console.log(songData)
  let songMis;
  if (songData){
    let min=(songData.durationInMs/1000)/6;
    
    songMis=Math.round(min*100)/100;
  }
 
  const handleSongPlaying=()=>{
    SetStartStop(!startStop);


  }
  const handleSongLike=()=>{
    
    SetLike(!like);


  }
  useEffect(()=>{
    if(startStop){
      audio.play();
  }else{
      audio.pause();
  }
  },[startStop])
  
  

  return (
    <div className={styles.song}>
      {songData===null ? null : (
        
          <div className={styles.songCon}>
            <div className={styles.songDetail}>
            <img src={songData.image} alt={"songImage"} className={styles.img}/>
            <div className={styles.songDetailText}>
            <p>{songData.title}</p>
            <p>{songData.artists[0]}</p>
            </div>
            
            </div>
            <div className={styles.songPlayCon}>
              <IconButton aria-label="play/pause" onClick={handleSongPlaying}>
              {!startStop?<PlayCircleFilledOutlinedIcon sx={{ height: 48, width: 48,color:"#34C94B"  }} />:<PauseCircleFilledOutlinedIcon sx={{ height: 48, width: 48, color:"#FFFFFF" }} />}
                
              </IconButton>
              <div className={styles.songDur}>
              <p className={styles.songMis}>0.38</p>
              <div className={styles.songbar}><p className={styles.songbarPlay}></p></div>
              <p className={styles.songMis}>{songMis}</p>
              </div>
              <audio src="http://streaming.tdiradio.com:8000/house.mp3"></audio>
            </div>
            <IconButton  onClick={handleSongLike} sx={{width:200 }}>
              {!like?<FavoriteBorderOutlinedIcon sx={{ height: 38, width: 38,color:"#FFFFFF" }} />:<FavoriteOutlinedIcon sx={{ height: 38, width: 38,color:"red" }} />}
                
              </IconButton>
            
          </div>
        
      )}
    </div>
  );
};

export default SongPlaying;
