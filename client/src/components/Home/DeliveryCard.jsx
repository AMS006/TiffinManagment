import React from 'react'

function DeliveryCard(props) {
  return (
    <div className='flex flex-col items-center gap-2 justify-center '>
      <div className='w-32 h-auto '>
        <img src={props.image}  alt={props.title} className='w-full h-full object-center' style={{borderRadius:"50%"}} />
      </div>
      <h4 className='text-xl'>
        {props.title}
      </h4>
    </div>
  )
}

export default DeliveryCard