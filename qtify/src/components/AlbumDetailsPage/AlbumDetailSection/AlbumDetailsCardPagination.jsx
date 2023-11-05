import React, { useEffect, useState } from 'react'
import styles from "./AlbumDetailSection.module.css"
import AlbumDetailCard from '../AlbumDetailCard/AlbumDetailCard'
import { Button, IconButton } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PageBtn from './PageBtn';
const AlbumDetailsCardPagination = ({songsData,handleSongToPlay}) => {
  
  const[pageNum,setPageNum]=useState(1);
  const[pageData,setPageData]=useState([]);
  const totalpage=Math.ceil(songsData.length/10);
  const pageArray=[];
  for(let i=1;i<=totalpage;i++){
    pageArray.push(i);
  }
  

  useEffect(()=>{
    let startIndex=((pageNum-1)%100)*10;
    let endIndex=(pageNum*10);
    console.log(startIndex,endIndex)
    const filterData=songsData.slice(startIndex,endIndex);
    setPageData(filterData);
  },[pageNum]);
 

  const handlePage=(page,num=null)=>{
    if(num){
      setPageNum(page);
    }else{
      let num=pageNum+page;
      if (num>pageArray[pageArray.length-1]){
        setPageNum(1);
      }else  if (num<pageArray[0]){
        setPageNum(pageArray[pageArray.length-1]);
      }else{
        setPageNum(pageNum+page);
      }
      
    }
    
  }
  
  return (
    <div className={styles.albumDetailsCardPaginationCon}>
      <div className={styles.albumDetailsCardPaginationNavCon}>
      <IconButton
          onClick={() => {
            handlePage(-1)
          }}
        >
          <NavigateBeforeIcon
            sx={{ height: 20, width: 20, color: "white" }}
          />
        </IconButton>

        {pageArray.map((each)=>{
          return <PageBtn page={each} selected={pageNum} handlePage={handlePage}/>
          
        })}

        <IconButton
        onClick={() => {
          handlePage(+1)
        }}
      >
        <NavigateNextIcon
          sx={{ height: 20, width: 20, color: "white"}}
        />
      </IconButton>
      
      
      </div>
      <div className={styles.albumDetailsCardPaginationHeadCon}>
      <p style={{width:"300px"}}>Title</p>
      <p>Artists</p>
      <p style={{width:"300px",textAlign:"end"}}>Duration</p>

      </div>
      <div>
      {pageData.map((each)=>{
        return <AlbumDetailCard songData={each} key={songsData.id} handleSongToPlay={handleSongToPlay}/>
      })}
      </div>
      
    </div>
  )
}

export default AlbumDetailsCardPagination
