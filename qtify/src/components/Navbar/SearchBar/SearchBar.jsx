import React from 'react'
import styles from './SearchBar.module.css'
import { ReactComponent as SearchIcon } from '../../../assests/Search icon.svg'
const SearchBar = () => {
  return (
    <form className={styles.search}>
      <input className={styles.input} placeholder='Search a album of your choice'></input>
      <button className={styles.btn} >
      <SearchIcon/></button>
    </form>
  )
}

export default SearchBar
