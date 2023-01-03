import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSliderCard({title,img}){
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex justify-between sm:items-center items-start my-2 gap-1 py-6 heroSlider'>
        <div className='flex flex-col gap-4 items-center lg:px-24 md:px-4 justify-center w-1/2'>
            <h1 className='md:text-4xl sm:text-2xl text-lg text-left sm:font-bold font-semibold  font-mono'>{title}</h1>
            <button className='bg-slate-800 font-semibold py-2 sm:w-full w-full  text-white rounded-md' onClick={()=> navigate("/provider")}>Book Your Tiffin</button>
        </div>
        <div className='h-full lg:w-1/3 sm:w-2/5 w-1/2 overflow-hidden sm:px-4 flex sm:items-center items-start pt-3'>
            <img src={img} className='lg:h-full h-4/5 w-full overflow-hidden heroImage' alt="Poster" />
        </div>
      </div>
    </div>
  )
}

export default HeroSliderCard
