import React from 'react'
import ReactStars from "react-rating-stars-component";

function TestimonialCard(props) {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <div className='border border-slate-900 rounded flex flex-col shadow shadow-slate-800 items-center w-4/5 h-64 px-2 py-3'>
        <div className='w-12 h-12 rounded-full overflow-hidden'>
            <img src={props.img} alt={props.name} />
        </div>
        <div>
            <ReactStars
                count={5}
                value={props.rating}
                size={24}
                edit={false}
                activeColor='#0f172a'
            />
        </div>
        <div>
            <h2 className='text-xl text-center font-semibold font-mono py-1'>{props.name}</h2>
        </div>
        <div>
            <p className='font-serif text-center text-slate-900'>{props.reviewText}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
