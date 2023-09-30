import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProfilePic1 from "../img/profile1.jpg";
import ProfilePic2 from "../img/profile2.jpg";
import ProfilePic3 from "../img/profile3.jpg";
import ProfilePic4 from "../img/profile4.jpg";
import ProfilePic5 from "../img/profile5.jpg";
import ProfilePic6 from "../img/profile6.jpg";
import Pangination from "swiper";
import "swiper/css/pagination";

const Testimonial = () => {
  const Client = [
    {
      img: ProfilePic1,
      review:
        "Certainly, here is a short passage of Lorem Ipsum textLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, metus in rhoncus feugiat, odio justo eleifend mi, at pellentesque justo mauris id purus. Suspendisse potenti. Sed sed ligula nec justo suscipit vestibulum. Vivamus at placerat velit.",
    },
    {
      img: ProfilePic2,
      review:
        "Certainly, here is a short passage of Lorem Ipsum textLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, metus in rhoncus feugiat, odio justo eleifend mi, at pellentesque justo mauris id purus. Suspendisse potenti. Sed sed ligula nec justo suscipit vestibulum. Vivamus at placerat velit.",
    },
    {
      img: ProfilePic3,
      review:
        "Certainly, here is a short passage of Lorem Ipsum textLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, metus in rhoncus feugiat, odio justo eleifend mi, at pellentesque justo mauris id purus. Suspendisse potenti. Sed sed ligula nec justo suscipit vestibulum. Vivamus at placerat velit.",
    },
    {
      img: ProfilePic4,
      review:
        "Certainly, here is a short passage of Lorem Ipsum textLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, metus in rhoncus feugiat, odio justo eleifend mi, at pellentesque justo mauris id purus. Suspendisse potenti. Sed sed ligula nec justo suscipit vestibulum. Vivamus at placerat velit.",
    },
    {
      img: ProfilePic5,
      review:
        "Certainly, here is a short passage of Lorem Ipsum textLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, metus in rhoncus feugiat, odio justo eleifend mi, at pellentesque justo mauris id purus. Suspendisse potenti. Sed sed ligula nec justo suscipit vestibulum. Vivamus at placerat velit.",
    },
    {
      img: ProfilePic6,
      review:
        "Certainly, here is a short passage of Lorem Ipsum textLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, metus in rhoncus feugiat, odio justo eleifend mi, at pellentesque justo mauris id purus. Suspendisse potenti. Sed sed ligula nec justo suscipit vestibulum. Vivamus at placerat velit.",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Client Always </span>
        <span>get expectation </span>
        <span>best working from me</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* this si the swiper side of the testimonial  */}
      <Swiper
        modules={Pangination}
        slidesPerView={1}
        pagination={{ clickable: "true" }}
      >
        {Client.map((clients, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={clients.img} alt="img1" />
                <span>{clients.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
