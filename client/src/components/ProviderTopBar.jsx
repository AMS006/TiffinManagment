import React, { useState } from 'react'
import {IoLocation} from 'react-icons/io5'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ImageViewer from './ImageViewer'

function ProviderTopBar() {
    const [openBackground, setOpenBackground] = useState(false);
    const handleOpen = () =>{
        setOpenBackground(true);
    }
    const params = useParams();
    const _id = params._id
    const providers = useSelector((state) => state.provider?.allProviders);
    let provider = undefined
    if(providers && providers.length > 0)
        provider = providers.find((pr)=> pr._id === _id)
  return (
    <>
        {provider && <div className='lg:mx-8 border shadow my-2'>
            <ImageViewer img={provider.providerLogo} open={openBackground} setOpen={setOpenBackground}/>

            <div className='w-full lg:h-60 h-52 shadow relative border-b cursor-pointer' onClick={() =>handleOpen()}>
                <img src={provider.providerLogo} className='h-full w-full' alt="backgroundLogo" />
            </div>
            <div className='md:px-8 px-4 flex md:flex-row flex-col gap-4 justify-between py-4'>
                <div>
                    <h2 className='font-bold text-2xl '>{provider.name}</h2>
                    <p className='text-sm'>Veg, Non-Veg , Dinner, Lunch</p>
                    <p className='flex items-center text-gray-600'><span><IoLocation /></span>{provider.address}</p>
                </div>
                <div className='md:w-1/3'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores natus assumenda aliquid </p>
                </div>
            </div>
        </div>}
    </>
  )
}

export default ProviderTopBar