import React from "react";
import styles from './AlbumCard.module.css';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
const AlbumCard = ({data,type}) => {

  const handletype=(type)=>{
    switch(type){
      case "album":{
      return (
        <Tooltip title={`${data.follows} follows`} TransitionComponent={Zoom} placement="top" arrow>
        <div className={styles.albumContainer}>
        <div className={styles.albumCard}>
          <img src={data.image} alt={data.title} className={styles.albumImg}/>
          <div className={styles.albumCardBottom}>
          <p className={styles.albumCardFollower}>{data.follows} follows</p>
          </div>
        </div>
        <h1 className={styles.albumName}>{data.title}</h1>
      </div>
      </Tooltip>

      )}
      case "song":{
        return (
          <Tooltip title={`${data.likes} likes`} TransitionComponent={Zoom} placement="top" arrow>
          <div className={styles.albumContainer}>
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
