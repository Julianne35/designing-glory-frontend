import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// configure Swiper to use modules
SwiperCore.use([ Autoplay, Pagination, Navigation]);

// init Swiper:
const SwiperMode = () => {
  return (
    <>
      <Swiper
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
          <h4>Lorem ipsum</h4>
              Dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            <div className="circleBase circle"></div>
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside className="aside-icon">
          <h4>Lorem ipsum</h4>
            Dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore
            <div className="circleBase circle"></div>
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside className="aside-icon">
          <h4>Lorem ipsum</h4>
            Dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore
            <div className="circleBase circle"></div>
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside className="aside-icon">
          <h4>Lorem ipsum</h4>
            Dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore
            <div className="circleBase circle"></div>
          </aside>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperMode;
