import React from 'react'
import {IoLocation} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
function ProviderCard({img,name,address,cuisines,rating}) {
  return (
    <Link className='flex flex-col p-2 border border-white hover:shadow hover:border-gray-300 rounded  gap-3'>
      <div className='w-full h-44'>
        <img src={img} alt="name" className='w-full h-full'/>
      </div>
      <div className='flex flex-col gap-1 p-2 text-slate-900 font-sans'>
        <div className='text-lg font-semibold flex justify-between items-center'>
          <h1>{name}</h1>
          <span className='flex items-center bg-slate-900 rounded-lg px-1 text-white'>{rating} <AiFillStar /></span>
          </div>
        <p className='text-sm'>{cuisines}</p>
        <p className='flex items-center text-gray-600'><span><IoLocation /></span>{address}</p>
      </div>
    </Link>
  )
}

export default ProviderCard
