import React from 'react'
import styles from "./SearchItemCon.module.css"
import SerchItemCard from '../SerchItemCard/SerchItemCard'

const SearchItemCon = ({searchData,handleSongToPlay}) => {
  console.log(searchData);
  return (
    <div className={styles.searchItemCon}>
    {searchData.length!==0?<div>{searchData.map(each=>{
      return <SerchItemCard key={each.title} searchItem={each} handleSongToPlay={handleSongToPlay}/>
    })}</div>:<p className={styles.empty} >No Albums or Songs Found</p>}
    
       
    </div>
  )
}

export default SearchItemCon
