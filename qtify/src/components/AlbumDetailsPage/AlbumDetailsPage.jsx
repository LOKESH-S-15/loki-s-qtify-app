import React, { useEffect,useState } from 'react'
import { getTopAlbums,getNewAlbums } from '../QtifyHomePage/QtifyHomePage';
import {  performSearchNewAlbums,performSearchTopAlbums } from '../../Api/Api';
import Navbar from '../Navbar/Navbar';
import AlbumDetailSection from './AlbumDetailSection/AlbumDetailSection';

const AlbumDetailsPage = ({handleSongToPlay}) => {

    
    const [albumData,setAlbumData]=useState({});
    let params= window.location.pathname.split("/")
    let id =params[params.length-1];
    
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
   

    
  return (
    <div >
    <Navbar/>
    <AlbumDetailSection albumData={albumData} handleSongToPlay={handleSongToPlay}/>
    </div>
  )
}

export default AlbumDetailsPage
