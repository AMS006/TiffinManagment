import React from 'react'
import ProviderCard from '../ProviderCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Order = () => {
    const providers = useSelector((state) => state.provider.allProviders)
  return (
    <>
        {providers && <div className='lg:px-12 md:px-8 px-2.5'>
            <h2 className='text-2xl font-semibold py-2'>Order Your Tiffin Online</h2>
            <div className='md:grid grid-cols-3 hidden items-center gap-4'>
                {providers.map((item,index) =>{
                    if(index <= 2){
                        return(
                            <ProviderCard name={item.name} key={index} providerLogo={item.providerLogo} address={item.address} rating={item.rating} id={item._id} />
                        )
                    }else{
                        return null
                    }
                })}
            </div>
            <div className='md:hidden grid sm:grid-cols-2 grid-cols-1 items-center gap-2.5 justify-around'>
                {providers.map((item,index) =>{
                    if(index <= 1){
                        return(
                            <ProviderCard name={item.name} key={index} providerLogo={item.providerLogo} address={item.address} rating={item.rating} id={item._id} />
                        )
                    }else{
                        return null
                    }
                })}
            </div>
            <div className='md:py-6 py-4 flex justify-center w-full'>
                <Link to='/providers' className='px-2 py-1 text-white bg-slate-900 rounded font-semibold'>More Providers</Link>
            </div>
        </div>}
    </>
  )
}

export default Order