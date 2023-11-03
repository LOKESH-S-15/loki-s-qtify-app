import React from 'react'
import heroImage from '../../assests/vibrating-headphone 1.png'
import styles from './hero.module.css'

const Hero = ({children}) => {
  return (
    <div className={styles.heroCard}>
      <div className={styles.heroTextCon}>
      <div >
      <h1 className={styles.heroText}>100 Thousand Songs, ad-free</h1>
      <h1 className={styles.heroText}>Over thousands podcast episodes</h1>
      </div>
      
      <img src={heroImage} alt='heroImage' className={styles.heroImg}/>
      </div>
      

    </div>
  )
}

export default Hero
