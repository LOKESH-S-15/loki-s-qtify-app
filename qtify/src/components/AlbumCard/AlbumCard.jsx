import React from "react";
import styles from './AlbumCard.module.css';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { Link } from "react-router-dom";
const AlbumCard = ({data,type,handleSongToPlay=null}) => {

  const handletype=(type)=>{
    switch(type){
      case "album":{
      return (
        <Link to={`/${type}/${data.id}`} style={{textDecoration:"none"}}>
        <Tooltip title={`${data.follows} follows`} TransitionComponent={Zoom} placement="top" arrow>
        
        <div className={styles.albumContainer} >
        <div className={styles.albumCard}>
          <img src={data.image} alt={data.title} className={styles.albumImg}/>
          <div className={styles.albumCardBottom}>
          <p className={styles.albumCardFollower}>{data.follows} follows</p>
          </div>
        </div>
        <h1 className={styles.albumName}>{data.title}</h1>
      </div>
      </Tooltip>
      </Link>

      )}
      case "song":{
        return (
          <Tooltip title={`${data.likes} likes`} TransitionComponent={Zoom} placement="top" arrow>
          <div className={styles.albumContainer} onClick={(e)=>(handleSongToPlay(e,data))}>
          <div className={styles.albumCard}>
            <img src={data.image} alt={data.title} className={styles.albumImg}/>
            <div className={styles.albumCardBottom}>
            <p className={styles.albumCardFollower}>{data.likes} likes</p>
            </div>
          </div>
          <h1 className={styles.albumName}>{data.title}</h1>
        </div>
        </Tooltip>
  
        )
      }
      default:return"";
    }
    
  }
return(
   handletype(type))
    
  
};

export default AlbumCard;
