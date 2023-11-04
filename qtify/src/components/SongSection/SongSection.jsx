import React, { useState } from "react";
import styles from "./songSection.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../AlbumSection/Carousel/Carousel";

import { CircularProgress } from "@mui/material";

const SongSection = ({ songData,genreData, title, type ,handleFilter,selectedFilter}) => {
    const Genre=({genreData})=>{
         return (<div className={styles.filterWrapper}>
            <div className={styles.filterCon} value={""} onClick={(e)=>{
                
                handleFilter(e)
                
            }}>
                <p className={styles.filterText}>All</p>
                {selectedFilter===""?<p className={styles.isSelected}></p>:<p className={styles.isNotSelected}></p>}
            </div>
            {genreData.map((each)=>{
               
                return <div className={styles.filterCon} id={each.key} onClick={(e)=>{
                   
                    handleFilter(e)
                    
                }}>
                <p className={styles.filterText} id={each.key}>{each.label}</p>
                {selectedFilter===each.key?<p className={styles.isSelected}></p>:<p className={styles.isNotSelected}></p>}
                </div>
            })}
            </div>
            )
        
    }
  return (
    <div className={styles.albumCon}>
      <div className={styles.albumHeadCon}>
        <h2>{title}</h2>
      </div>
      {<Genre genreData={genreData}/>}
      {songData && songData.length === 0 ? (
        <div className={styles.CircularProgress}><CircularProgress /></div>
        
      ) : (
        <div>
          <div>
            <Carousel
              data={songData}
              renderComponent={(item) => {
                return <AlbumCard id={item.id} data={item} type={type}/>;
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SongSection;
