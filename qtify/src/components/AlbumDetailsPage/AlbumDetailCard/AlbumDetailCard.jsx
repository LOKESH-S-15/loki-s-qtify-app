import React from 'react'
import styles from "./AlbumDetailCard.module.css"

const AlbumDetailCard = ({songData,handleSongToPlay}) => {
 
  let songMis;
  if (songData){
    let min=(songData.durationInMs/1000)/6;
    
    songMis=Math.round(min*100)/100;
  }
  return (
    <div className={styles.albumDetailCardCon} onClick={(e)=>(handleSongToPlay(e,songData))}>
      <div className={styles.albumDetailCardTitleCon}>
      <img src={songData.image} alt={songData.title} className={styles.albumDetailCardImg}/>
      <p>{songData.title}</p>
      </div>
      <div className={styles.albumDetailCardArtistCon}>{songData.artists.map((each)=>{
        return<p>{each}, </p>
      })}</div>
      <p className={styles.albumDetailCardDur}>{songMis}</p>
    </div>
  )
}

export default AlbumDetailCard
