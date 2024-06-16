import React from "react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselLeft from "./CarouselLeft";
import "swiper/css";
import CarouselRight from "./CarouselRight";

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
    {data==="Too Many Requests"|| data.length===0?"": <Swiper
    style={{ padding: "0px 20px" }}
    modules={[Navigation]}
    spaceBetween={40}
    initialSlide={0}
    slidesPerView={"auto"}
    allowTouchMove
  >
    <CarouselLeft />
    <CarouselRight />
    
    {data.map((each) => {
      return (
        <SwiperSlide key={each._id}>{renderComponent(each)}</SwiperSlide>
      );
    })}
  </Swiper>}
     
    </div>
  );
};

export default Carousel;

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import styles from "./Carousel.module.css"
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { auto } from '@popperjs/core';

// const Sniper= () => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation ]}
//       spaceBetween={10}
//       slidesPerView={4}

//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide><div className={styles.div}></div></SwiperSlide>
//       <SwiperSlide><div className={styles.div}></div></SwiperSlide>
//       <SwiperSlide><div className={styles.div}></div></SwiperSlide>
//       <SwiperSlide><div className={styles.div}></div></SwiperSlide>
//       <SwiperSlide><div className={styles.div}></div></SwiperSlide>
//       <SwiperSlide><div className={styles.div}></div></SwiperSlide>
//       <SwiperSlide><div className={styles.div}></div></SwiperSlide>

//     </Swiper>
//   );
// };
// export default Sniper;
