import React from 'react'

function Info() {
  return (
    <div className='flex md:gap-6 gap-2 lg:px-12 md:px-8  px-2 my-8'>
      <div className='w-2/5 rounded overflow-hidden'>
        <img src="https://i.pinimg.com/originals/13/40/bb/1340bb8d2ea075701889cbcecbac9c13.jpg" className='w-full h-full' alt="Info" />
      </div>
      <div className='w-3/5 flex flex-col gap-4 items-center justify-center'>
        <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl md:w-2/3 text-center text-slate-900 font-semibold font-mono'>The Most Convenient Way to Order from Home Chefs Around You</h2>
        <button className='md:w-2/3 px-2 bg-slate-900 rounded-md text-white py-2 md:text-lg md:font-semibold'>Book Your Tiffin</button>
      </div>
    </div>
  )
}

export default Info
