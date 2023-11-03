import React,{useEffect} from 'react'
import { useState } from 'react';
import { useSwiper } from 'swiper/react'
import styles from "./Carousel.module.css"
import { ReactComponent as RightArrow } from '../../../assests/rightArrow.svg';



const CarouselRight = () => {
  
    const swiper=useSwiper();
    const[isEnd,setIsEnd]=useState(swiper.isEnd);
    
  return (
    <div className={styles.rightNavigation}>
  <RightArrow onClick={()=>swiper.slideNext()}/>
    
    </div>
  )
  
}

export default CarouselRight
