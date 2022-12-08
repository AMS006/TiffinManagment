import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import img1 from '../images/chooseus-1.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import Aboutusimg from '../images/aboutus.jpg';
const Ourteamslider=()=>{
 return (
    <>
    <Navbar/>
  <img src={Aboutusimg} alt="About us img" style={{width:"100vw", height:"27.4rem"}}  />
    <div className=" my-5">
     <h3 className="text-center text-3xl py-5" style={{fontFamily:"cursive"}}>Our Team</h3>
      
     <Swiper spaceBetween={30}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3500,
        }}
        navigation={true}
        slidesPerView={1}
        modules={[Autoplay,Navigation]}
        className="mySwiper" >
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src={img1} alt="teammember img" style={{width:"11.4rem",borderRadius:"50%"}}/>
                <h4 className="mt-2 text-xl font-medium">Kunal Hulke</h4>
                 <p >Developer</p>
                 <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatibus consequatur veritatis harum sunt sapiente! Ratione quae, officiis adipisci dolorem mollitia nihil at voluptatibus.</p>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
      </div>
      <Footer/>
    </>
 );
};
export default Ourteamslider;