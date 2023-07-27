import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from './TestimonialCard';

function Testimonials() {
    const [slidesData,setSlidesData] = useState("")
    const reviews = useSelector((state) => state.reviews.reviews)

    useEffect(()=>{
      if(reviews)
        setSlidesData(reviews)
    },[reviews])
    if(!reviews || reviews.length===0){
      return(
        <></>
      )
    }
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
