import React from 'react'
import img1 from '../images/chooseus-1.jpg';
import img2 from '../images/chooseus-2.jpg';
import img3 from '../images/chooseus-3.jpg';
import img4 from '../images/chooseus-5.jpg';
import Fade from 'react-reveal/Fade';
function ChooseUs() {
  return (
    
    <div className=" mx-auto py-5 bg-gray-100 " style={{fontFamily:'Anek Devanagari'}}>
    <Fade top duration="3000">
    <h1 className="text-black font-mono text-center text-xl sm:text-3xl">WHY CHOOSE US?</h1>
  </Fade>
    <div className="card grid grid-cols-1 my-5 mx-4  sm:grid-cols-1 sm:grid lg:grid lg:grid-cols-2 lg:gap-4" >
  <div className='border-2 border-gray-600 rounded-md sm:grid sm:grid-cols-2 my-3  sm:my-3 lg:my-1 '>
  <img src={img1} alt="image1" className='w-auto order-1  rounded'/>
  <h1 className="text-center text-2xl py-5 order-2 sm:flex sm:justify-center sm:items-center " >Made With 🖤 By Home🏠 <br/> Chef🧑‍🍳 Only</h1>
  </div>
  <div className='border-2 border-gray-600 rounded-md sm:grid sm:grid-cols-2 my-3 sm:my-0 lg:my-1'>
  <img src={img2} alt="image1" className='w-auto sm:order-2 lg:order-1 rounded'/>
  <h1 className="text-center text-2xl py-5 px-1 sm:order-1 lg:order-2 sm:flex sm:justify-center sm:items-center ">All Meals Are Prepared Fresh That Day, NO Frozen Foods, NO Preservatives.</h1>
  </div>
  <div className='border-2 border-gray-600 rounded-md sm:grid sm:grid-cols-2 my-3  sm:my-3 lg:my-0 '>
  <img src={img3} alt="image1" className='w-auto md:order-1 lg:order-2  rounded'/>
  <h1 className="text-center text-2xl py-5 sm:order-2 lg:order-1 px-1 sm:flex sm:justify-center sm:items-center ">Authentic - Sindhi, Maharashtrian, Gujarati, Bengali, Punjabi & So Much More!</h1>
  </div>
  <div className='border-2 border-gray-600 rounded-md sm:grid sm:grid-cols-2 my-3 sm:my-0'>
  <img src={img4} alt="image1" className='w-auto sm:order-2 lg:order-2 h-full rounded' style={{height:"224px"}}/>
  <h1 className="text-center text-2xl py-5 sm:order-1 lg:order-1 px-1 sm:flex sm:justify-center sm:items-center ">The Most Convenient Way to Order from Home Chefs Around You.</h1>
  </div>
  </div>
  
  
  </div>
  
  )
}

export default ChooseUs
