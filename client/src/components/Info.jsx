import React from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
function Info() {
  AOS.init()
  const navigate = useNavigate();
  return (
    <div className='flex sm:flex-row flex-col md:gap-6 gap-2 lg:px-12 md:px-8  px-2 my-8'>
      <div className='sm:w-2/5 w-full rounded overflow-hidden ' data-aos="fade-right" data-aos-duration="1500">
        <img src="https://eathomie-com.s3.amazonaws.com/images/food-with-friends-1224.jpg" className='w-full h-full' alt="Info" />
      </div>
      <div className='sm:w-3/5 w-full flex flex-col gap-4 items-center justify-center' data-aos="fade-left" data-aos-duration="1500">
        <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl md:w-2/3 text-center text-slate-900 font-semibold font-mono'>The Most Convenient Way to Order from Home Chefs Around You</h2>
        <button className='md:w-2/3 px-2 bg-slate-800 rounded-md text-white py-2 md:text-lg md:font-semibold' onClick={() => navigate("/provider")}>Book Your Tiffin</button>
      </div>
    </div>
  )
}

export default Info
