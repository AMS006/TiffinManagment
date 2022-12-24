import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroSliderCard from './HeroSliderCard';
import { Autoplay, Pagination, Navigation } from "swiper";

function HeroSliderLg(){
  const slidesData = [
    {
        title:"",
        img:""
    },
    {
        title:"",
        img:""
    },
    {
        title:"",
        img:""
    }
]
  return(
    <div className='px-2 my-2 hidden lg:block'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3500,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData.map((data)=> (
            <SwiperSlide>
                <HeroSliderCard title={data.title} img={data.img} />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
function HeroSliderMd(){
  const slidesData = {
        title:"",
        img:""
  }
  return(
    <div className='lg:hidden block'>
      <HeroSliderCard title={slidesData.title} img={slidesData.img} />
    </div>
  )
}
function HeroSlider() {
  const slidesData = [
    {
        title:"",
        img:""
    },
    {
        title:"",
        img:""
    },
    {
        title:"",
        img:""
    }
]
  return (
    <div className='px-2 py-2'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3500,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData.map((data)=> (
            <SwiperSlide>
                <HeroSliderCard title={data.title} img={data.img} />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
