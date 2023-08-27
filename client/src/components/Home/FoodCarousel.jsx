import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from 'swiper'
import DeliveryCard from './DeliveryCard';

function FoodCarousel() {
    const items = [
        {
            image:"https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png",
            title:"Bowl"
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
            title:"Sandwitch"
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title:"Pizza"
        },
        {
            image:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            title:"Rolls"
        },
        {
            image:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
            title:"Biryani"
        },
        {
            image:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
            title:"Chaat"
        },
        {
            image:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
            title:"Noodles"
        },
        {
            image:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
            title:"Burger"
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/2122e9de1fd26063893a1afa0dca748b1632716603.png",
            title:"Khichdi"
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
            title:"Paratha"
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/7b0966fb0ab1c60888a652b2eaf826da1632716547.png",
            title:"Salad"
        },  
    ]
    const slideConfig = {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        },
        modules: [Navigation],
        className: "mySwiper",
        navigation: true,
      };

  return (
    <div>
        <h5 className='font-semibold text-2xl py-2 lg:px-16 md:px-8 px-4'>Inspiration for your first order</h5>
            <div className='px-2.5 py-5 md:hidden flex items-center justify-center gap-2.5 flex-wrap'>
                {items.map((item)=>(
                    <DeliveryCard {...item} key={item.title}></DeliveryCard>
                ))}
            </div>
        <div className='hidden md:flex py-5'>
            <Swiper {...slideConfig}>
                {items.map((item,index) =>(
                    <SwiperSlide key={index}>
                        <DeliveryCard {...item}></DeliveryCard>
                    </SwiperSlide>
                ))}
            </Swiper>
      </div>
    </div>
  )
}

export default FoodCarousel