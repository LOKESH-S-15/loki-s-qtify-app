import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../../assests/Search icon.svg";
import SearchItemCon from "./SearchBarSec/SearchItemCon/SearchItemCon";
const SearchBar = ({ searchData, handleInput, inputValue,handleSongToPlay }) => {
  
  return (
    <div className={styles.searchCon}>
      <form className={styles.search} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.input}
          placeholder="Search a album of your choice"
          value={inputValue}
          onChange={(e) => handleInput(e)}
        ></input>
        <button className={styles.btn}>
          <SearchIcon />
        </button>
      </form>
      {inputValue ? <SearchItemCon searchData={searchData} handleSongToPlay={handleSongToPlay} /> : <></>}
    </div>
  );
};

export default SearchBar;
