import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

  import "./Blog.css";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";


const Archieves = () => {

    const [ setSwiperRef] = useState(null);

    // let appendNumber = 4;
    // let prependNumber = 1;
  
    // const prepend2 = () => {
    //   swiperRef.prependSlide([
    //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    //   ]);
    // };
  
    // const prepend = () => {
    //   swiperRef.prependSlide(
    //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    //   );
    // };
  
    // const append = () => {
    //   swiperRef.appendSlide(
    //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    //   );
    // };
  
    // const append2 = () => {
    //   swiperRef.appendSlide([
    //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    //   ]);
    // };

    return (
        <>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay,Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://i.ibb.co/fNWybxf/sofa.webp" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/LP01WYy/showcase.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/gr65zgS/dining-table.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/QQ6NMJv/bookself.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/hs43C6x/dressingtable.webp" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/4Vq581Q/khat.webp" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/HKd1kvp/almirah.gif" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-06/309-7-june-20.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/sgMXfys/Microoven-Cabinet.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/d0Jd3fj/teaTable.jpg" alt="" /></SwiperSlide>
         
          <SwiperSlide><img src="https://i.ibb.co/PD6s6cp/drawing-room-cabinet.jpg" alt="" /></SwiperSlide>
         
        </Swiper>
  
        {/* <p className="append-buttons">
          <button onClick={() => prepend2()} className="prepend-2-slides">
            Prepend 2 Slides
          </button>
          <button onClick={() => prepend()} className="prepend-slide">
            Prepend Slide
          </button>
          <button onClick={() => append()} className="append-slide">
            Append Slide
          </button>
          <button onClick={() => append2()} className="append-2-slides">
            Append 2 Slides
          </button>
        </p> */}
      </>
    );
};

export default Archieves;