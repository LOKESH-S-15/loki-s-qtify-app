import React from "react";
import styles from './AlbumCard.module.css';

const AlbumCard = ({data,type}) => {

  const handletype=(type)=>{
    switch(type){
      case "album":{
      return (<div className={styles.albumContainer}>
        <div className={styles.albumCard}>
          <img src={data.image} alt={data.title} className={styles.albumImg}/>
          <div className={styles.albumCardBottom}>
          <p className={styles.albumCardFollower}>{data.follows} follows</p>
          </div>
        </div>
        <h1 className={styles.albumName}>{data.title}</h1>
      </div>

      )}
      case "song":{
        return (<div className={styles.albumContainer}>
          <div className={styles.albumCard}>
            <img src={data.image} alt={data.title} className={styles.albumImg}/>
            <div className={styles.albumCardBottom}>
            <p className={styles.albumCardFollower}>{data.likes} likes</p>
            </div>
          </div>
          <h1 className={styles.albumName}>{data.title}</h1>
        </div>
  
        )
      }
      default:return"";
    }
    
  }
return(
   handletype(type))
    
  
};

export default AlbumCard;
