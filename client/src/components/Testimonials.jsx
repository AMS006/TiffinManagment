import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from './TestimonialCard';
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Testimonials() {
    const [slidesData,setSlidesData] = useState("")
    const reviews = useSelector((state) => state.reviews.reviews)

    useEffect(()=>{
      if(reviews)
        setSlidesData(reviews)
    },[reviews])
  return (
    <div className=' my-4'>
        <h1 className='font-bold md:text-2xl text-xl text-center py-7'>Testimonials</h1>
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3500,
        }}
        breakpoints={{
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        
            {slidesData && slidesData.map((data,index)=> (
                <SwiperSlide key={index}>
                    <TestimonialCard name={data.user.name} img="https://tse2.mm.bing.net/th?id=OIP.rMWHLs1fJ9nlbiv9CAgsqAHaHa&pid=Api&P=0" rating={data.rating} reviewText={data.message} />
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default Testimonials
