import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProviderSkeleton() {
  return (
    <div className='flex flex-col p-2 border rounded gap-3'>
      <div className='w-full h-44'>
        <Skeleton className='w-full h-full'/>
      </div>
      <div className='flex flex-col gap-1 p-2 '>
        <div className='flex justify-between items-center'>
            <Skeleton className='w-1/2 h-full ' width={150}/>
            <Skeleton className='' width={60} height={25}/>
        </div>
        <Skeleton height={12}/>
        <Skeleton />
      </div>
    </div>
  )
}

export default ProviderSkeleton
