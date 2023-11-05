import React, { useState } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./AlbumSection.module.css";
import { CircularProgress } from "@mui/material";
import {Skeleton} from '@mui/material';
import Carousel from "../AlbumSection/Carousel/Carousel";
const TopAlbumSection = ({ data, title, type }) => {
  
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div className={styles.albumCon}>
      <div className={styles.albumHeadCon}>
        <h2>{title}</h2>
        <p onClick={handleToggle} className={styles.collapseBtn}>
          {!carouselToggle ? "Collapse" : "Show All"}
        </p>
      </div>
      {data &&data.length === 0? (
        <div className={styles.CircularProgress}>
        <div> <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={159} height={205}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={159} style={{backgroundColor:"#4140404d"}}/></div>
        <div> <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={159} height={205}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={159} style={{backgroundColor:"#4140404d"}}/></div>
        <div> <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={159} height={205}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={159} style={{backgroundColor:"#4140404d"}}/></div>
        <div> <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={159} height={205}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={159} style={{backgroundColor:"#4140404d"}}/></div>
        <div> <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={159} height={205}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={159} style={{backgroundColor:"#4140404d"}}/></div>
        <div> <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={159} height={205}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={159} style={{backgroundColor:"#4140404d"}}/></div>
        <div> <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={159} height={205}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={159} style={{backgroundColor:"#4140404d"}}/></div>
        <div> <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={159} height={205}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={159} style={{backgroundColor:"#4140404d"}}/></div>
        <div> <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={159} height={205}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={159} style={{backgroundColor:"#4140404d"}}/></div>
        <div> <Skeleton variant="rounded"  style={{backgroundColor:"#4140404d"}} width={159} height={205}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={159} style={{backgroundColor:"#4140404d"}}/></div>
        </div>
        
        
      ) : (
        <div>
          {!carouselToggle ? (
            <div className={styles.topAlbumCon}>
              {data.map((each) => {
                return (
                  <AlbumCard
                    key={each.id}
                    id={each.id}
                    data={each}
                    type={type}
                    
                  />
                );
              })}
            </div>
          ) : (
            <div>
              <Carousel
                data={data}
                renderComponent={(item) => {
                  return <AlbumCard  id={item.id} data={item} type={type} />;
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopAlbumSection;
