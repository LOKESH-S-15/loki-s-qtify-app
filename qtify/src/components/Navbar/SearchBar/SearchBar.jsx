import React from 'react'
import styles from './SearchBar.module.css'
import { ReactComponent as SearchIcon } from '../../../assests/Search icon.svg'
const SearchBar = ({inputValue,handleInput}) => {
  return (
    <form className={styles.search} onSubmit={(e)=>(e.preventDefault())}>
      <input className={styles.input} placeholder='Search a album of your choice' value={inputValue} onChange={(e)=>(handleInput())} ></input>
      <button className={styles.btn} >
      <SearchIcon/></button>
    </form>
  )
}

export default SearchBar
