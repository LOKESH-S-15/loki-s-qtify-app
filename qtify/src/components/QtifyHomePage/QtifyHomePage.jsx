import React ,{useEffect, useState}from 'react'
import styles from './QtifyHomePage.module.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../hero/Hero';
import AlbumSection from '../AlbumSection/AlbumSection';

import { performSearchGenre, performSearchNewAlbums,performSearchSongs,performSearchTopAlbums } from '../../Api/Api';
import SongSection from '../SongSection/SongSection';
import  ControlledAccordions  from '../FaqsSection/Faqs';

const QtifyHomePage = ({handleSongToPlay}) => {
    const [topAlbums,setTopAlbums]=useState([]);
    const [newAlbums,setNewAlbums]=useState([]);
    const [songs, setSongs] = useState([]);
    const [genre,setGenre]=useState([]);
    const[selectedFilter,setSelectedFilter]=useState("");
    const [filteredSongs,setFilteredSongs]=useState([]);
    const [inputValue,setInputValue]=useState("");
    const [searchData,setSearchData]=useState([]);

   
    useEffect(()=>{
      const instalizer=async ()=>{
      await  getTopAlbums();
      await  getNewAlbums();
      await  getSongs();
      await  getGenre();
      }
      instalizer();
    },[])
    const  getTopAlbums=async ()=>{
    const data=await performSearchTopAlbums();
    setTopAlbums(data);
    

   };
   const getNewAlbums=async ()=>{
    const data=await performSearchNewAlbums();
    setNewAlbums(data);
   }
   const getSongs=async ()=>{
    const data=await performSearchSongs();
    setSongs(data);
    setFilteredSongs(data);
   }
   const getGenre=async ()=>{
    const data=await performSearchGenre();
   
    setGenre(data);
   }
   const handleFilter= async(event)=>{
    
    const filter=event.target.id;
   
    setSelectedFilter(filter);
    
    if (filter===""){
      setFilteredSongs(songs);
      return;
    }
    else{
      let filteredData=songs.filter((each)=>(each.genre.key===filter));
      setFilteredSongs(filteredData);
    }
   }
   useEffect(()=>{
    filterSearchData();
   },[inputValue])
   
   const filterSearchData=()=>{
    let data=[...topAlbums,...newAlbums,...songs];
    
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
  console.log(inputValue);
  return (
    
    <div>
    <Navbar searchData={searchData} handleInput={handleInput} inputValue={inputValue} handleSongToPlay={handleSongToPlay}/>
    <Hero/>
    <AlbumSection data={topAlbums} title={"Top Album"} type={"album"} />
    <AlbumSection data={newAlbums} title={"New Album"} type={"album"} />
    <SongSection songData={filteredSongs} genreData={genre} title={"Songs"} type={"song"} handleFilter={handleFilter} selectedFilter={selectedFilter}  handleSongToPlay={handleSongToPlay}/>
    <ControlledAccordions/>
    </div>
  )
}

export default QtifyHomePage
