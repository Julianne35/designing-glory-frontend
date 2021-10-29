import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// configure Swiper to use modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

// init Swiper:
const SwiperMode = () => {
  return (
    <>
      <Swiper
        id="testimonies"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="swiper"
      >
        <SwiperSlide>
          <aside className="aside-icon">
            <h4>Daniel M.</h4>I am so thankful for Julianne. If you have a
            vision and can express it, she brings it to life! Everything I
            wanted she created it with ease. Julianne is pleasant to work with
            and quick to make changes. She is never satisfied unless you are. I
            highly recommend her services!
            <div className="circleBase circle-img1"></div>
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside className="aside-icon">
            <h4>Mariam Rubio</h4>
            Julianne is a very talented, programer, graphic designer and
            business woman with the drive that exceeds expectation. She has
            always given her best to every project we worked on together.
            Julianne will make sure you are absolutely satisfied!
            <div className="circleBase circle-img2"></div>
          </aside>
        </SwiperSlide>
        {/* <SwiperSlide>
          <aside className="aside-icon">
            <h4>Lorem ipsum</h4>
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore
            <div className="circleBase circle"></div>
          </aside>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <aside className="aside-icon">
            <h4>Lorem ipsum</h4>
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore
            <div className="circleBase circle"></div>
          </aside>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default SwiperMode;
