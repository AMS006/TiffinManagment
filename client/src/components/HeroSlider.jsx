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
        {slidesData.map((data,index)=> (
            <SwiperSlide key={index}>
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
        title:"Get Your Meals Delivered from Curated Home Chefs Around You",
        img:"https://alignthoughts.com/wp-content/uploads/2016/10/align-thoughts-indian-thali.jpg"
    },
    {
        title:"Food Is Our Common Ground, Universal Experience",
        img:"https://imgs.search.brave.com/QtZppep4gzh0sfbCVSUaSrHeBSLuMppfQSLjoFPEeDw/rs:fit:1200:628:1/g:ce/aHR0cHM6Ly9pbWdz/dGF0aWNjb250ZW50/LmxiYi5pbi9sYmJu/ZXcvd3AtY29udGVu/dC91cGxvYWRzL3Np/dGVzLzIvMjAxOC8w/NS8yMjIxMzM1OS9I/b21lbHkxLmpwZz93/PTEyMDAmaD02Mjgm/ZmlsbD1ibHVyJmZp/dD1maWxs"
    },
    {
      title:"Happiness Is The Smell Of Your Favourite Food. Get It Here",
      img:"https://imgs.search.brave.com/dwzMINAc1hsf9-eiM-TkcOrU-SyE3VFc134CVEfE4w8/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RlLzE0/Lzc2L2RlMTQ3NjJl/MTIzOWE1YmEzNTU4/ZGZkYTgwYmFmNzhi/LmpwZw"
  },
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
        {slidesData.map((data,index)=> (
            <SwiperSlide key={index}>
                <HeroSliderCard title={data.title} img={data.img} />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
