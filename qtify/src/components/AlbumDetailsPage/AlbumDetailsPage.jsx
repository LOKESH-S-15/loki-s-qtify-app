import React, { useEffect,useState } from 'react'
import { getTopAlbums,getNewAlbums } from '../QtifyHomePage/QtifyHomePage';
import {  performSearchNewAlbums,performSearchTopAlbums,performSearchSongs } from '../../Api/Api';
import Navbar from '../Navbar/Navbar';
import AlbumDetailSection from './AlbumDetailSection/AlbumDetailSection';

const AlbumDetailsPage = ({handleSongToPlay}) => {

  
  const [inputValue,setInputValue]=useState("");
  const [searchData,setSearchData]=useState([]);
    const [albumData,setAlbumData]=useState({});
    const [pathId,setPathId]=useState("");
    let params= window.location.pathname.split("/");
    let id =params[params.length-1];
    console.log(id);

    
    useEffect(()=>{
      const instalizer=async ()=>{
      let topAlbums=await  getTopAlbums();
      let newAlbums=await  getNewAlbums();
      let albumData=([...topAlbums,...newAlbums]);
      let albumId=albumData.find((each)=>(each.id===id));
      setAlbumData(albumId);
      }
      instalizer();
    },[])
    const  getTopAlbums=async ()=>{
    const data=await performSearchTopAlbums();
    return data;
    
    
   };
   const getNewAlbums=async ()=>{
    const data=await performSearchNewAlbums();
    return data;
    
   }
   useEffect(()=>{
    filterSearchData();
   },[inputValue])
   
   const filterSearchData= async ()=>{
    let topAlbums=await  getTopAlbums();
      let newAlbums=await  getNewAlbums();
      const songs=await performSearchSongs();
      let data=([...topAlbums,...newAlbums,...songs]);
    
    
    let filteredData=data.filter((each)=> {
      
      return (each.title.toLowerCase().includes(inputValue.toLowerCase()));
    })
    
    setSearchData(filteredData);
   }
   
   const handleInput=(event)=>{
    let value=event.target.value;
    // let data=[...topAlbums,...newAlbums,...songs];
    // console.log("data",data);
    // let filteredData=data.filter((each)=> {
    //   return (each.title.includes(value));
    // })
    
    setInputValue(value);
   }
   

    
  return (
    <div >
    <Navbar  searchData={searchData} handleInput={handleInput} inputValue={inputValue} handleSongToPlay={handleSongToPlay}/>
    <AlbumDetailSection albumData={albumData} handleSongToPlay={handleSongToPlay}/>
    </div>
  )
}

export default AlbumDetailsPage
