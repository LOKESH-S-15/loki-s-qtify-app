import { useState, useEffect } from "react";
import React from "react";
import Feedback from "./Button/Feedback";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";

import styles from "./Navbar.module.css";
export default function Navbar({searchData,handleInput,inputValue,handleSongToPlay}) {
  
  return (
    <nav className={styles.navbar}>
    <Logo/>
    <SearchBar searchData={searchData} handleInput={handleInput} inputValue={inputValue} handleSongToPlay={handleSongToPlay}/>
    
    <Feedback children="Give Feedback"/>

      
    </nav>
  );
}