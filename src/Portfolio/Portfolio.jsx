import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SideBar from "../img/ehsan4.png";
import Ecommerce from "../img/ehsan2.png";
import Hoc from "../img/ehsan3.png";
import MucisApp from "../img/ehsan1.png";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      {/* heading  */}
      <span>Recent Project </span>
      <span>Portfolio</span>
      {/* slider of portfolio */}
      <Swiper
        spaceBetween={3}
        grabCursor={true}
        slidesPerView={3}
        className="Portfolio-slider"
      >
        <SwiperSlide>
          <img src={SideBar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MucisApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
