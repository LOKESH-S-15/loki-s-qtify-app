import React from 'react'
import { useState } from 'react';
import { useSwiper } from 'swiper/react'
import styles from "./Carousel.module.css"
import { ReactComponent as LeftArrow } from '../../../assests/leftArrow.svg';
import { useEffect } from 'react';


const CarouselLeft = () => {
    const swiper=useSwiper();
   

    

  return (
    <div className={styles.leftNavigation}>
 <LeftArrow onClick={()=>swiper.slidePrev()}/>
     
    </div>
  )
}

export default CarouselLeft
