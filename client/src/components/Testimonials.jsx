import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from './TestimonialCard';
import { Autoplay, Pagination, Navigation } from "swiper";
function Testimonials() {
    const slidesData = [
        {
            name:"Anas Sain",
            img:"https://tse2.mm.bing.net/th?id=OIP.lFXfL8PC-747l5Ax5Qs-zgHaHa&pid=Api&P=0",
            rating:4,
            reviewText:"Highly recommended for good homely food alongwith a great service too. The immediate customer service is cherry on the top alongwith the good food. A very good initiative."
        },
        {
            name:"Anas Sain",
            img:"https://tse2.mm.bing.net/th?id=OIP.lFXfL8PC-747l5Ax5Qs-zgHaHa&pid=Api&P=0",
            rating:4,
            reviewText:"Highly recommended for good homely food alongwith a great service too. The immediate customer service is cherry on the top alongwith the good food. A very good initiative."
        },
        {
            name:"Anas Sain",
            img:"https://tse2.mm.bing.net/th?id=OIP.lFXfL8PC-747l5Ax5Qs-zgHaHa&pid=Api&P=0",
            rating:4,
            reviewText:"Highly recommended for good homely food alongwith a great service too. The immediate customer service is cherry on the top alongwith the good food. A very good initiative."
        },
        {
            name:"Anas Sain",
            img:"https://tse2.mm.bing.net/th?id=OIP.lFXfL8PC-747l5Ax5Qs-zgHaHa&pid=Api&P=0",
            rating:4,
            reviewText:"Highly recommended for good homely food alongwith a great service too. The immediate customer service is cherry on the top alongwith the good food. A very good initiative."
        }
    ]
  return (
    <div className=' my-2'>
        <h1 className='font-bold md:text-2xl text-xl text-center py-3'>Testimonials</h1>
        <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        slidesPerView={1}
        loop={true}
        speed={900}
        // autoplay={{
        //   delay: 3500,
        // }}
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
        
            {slidesData.map((data)=> (
                <SwiperSlide>
                    <TestimonialCard name={data.name} img={data.img} rating={data.rating} reviewText={data.reviewText} />
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default Testimonials
