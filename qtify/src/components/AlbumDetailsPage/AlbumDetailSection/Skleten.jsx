import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styles from "./AlbumDetailSection.module.css"

const Skleten = () => {
  return (
    <div >
    
    <div className={styles.albumDetailsSectionHeadCon}>
    <Skeleton variant="rounded" style={{backgroundColor:"#4140404d"}} width={238} height={279} />
    <div className={styles.albumDetailsSectionHeadDeatilsCon}>
    <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} height={40} width={400} />
    <Skeleton variant="rounded" style={{backgroundColor:"#4140404d"}}  height={20}  width={400}/>
      <div className={styles.albumDetailsSectionHeadSongDeatilsCon}>
      <Skeleton variant="rounded" style={{backgroundColor:"#4140404d"}} width={210} height={20} />
        
      </div>
      <div className={styles.albumDetailsSectionHeadBtnCon}>
      <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={150} height={60} />
      <Skeleton variant="rounded" style={{backgroundColor:"#4140404d"}} width={150} height={60} />
      </div>
    </div>
    
  </div>
  <div className={styles.SkletenCon}>
  <Skeleton variant="rounded" style={{backgroundColor:"#4140404d"}} width={"100%"} height={70} />
    <Skeleton variant="rounded" style={{backgroundColor:"#4140404d"}} width={"100%"} height={70} />
    <Skeleton variant="rounded" style={{backgroundColor:"#4140404d"}} width={"100%"} height={70} />
    <Skeleton variant="rounded" style={{backgroundColor:"#4140404d"}} width={"100%"} height={70} />
    <Skeleton variant="rounded" style={{backgroundColor:"#4140404d"}} width={"100%"} height={70} />
  </div>
  
    </div>
  )
}

export default Skleten
