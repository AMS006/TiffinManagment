import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoLocation } from 'react-icons/io5'
import ImageViewer from './ImageViewer'
import Skeleton from './Skeleton';

function ProviderTopBar() {
    const [openBackground, setOpenBackground] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleOpen = () => {
        setOpenBackground(true);
    }
    const params = useParams();
    const _id = params._id
    const providers = useSelector((state) => state.provider?.allProviders);
    let provider = undefined
    if (providers && providers.length > 0)
        provider = providers.find((pr) => pr._id === _id)
    return (
        <>
            {provider && <div className='lg:mx-8 border shadow mb-2'>
                <ImageViewer img={provider.providerLogo} open={openBackground} setOpen={setOpenBackground} />
                <div className='md:flex gap-4'>
                    <div className='w-full lg:h-60 h-52 shadow relative border-b cursor-pointer' onClick={() => handleOpen()}>
                        {loading && <Skeleton />}
                        <img src={provider.providerLogo} onLoad={() => setLoading(false)} className={`${loading ? 'hidden' : 'block'} h-full w-full`} alt="backgroundLogo" />
                    </div>
                    <div className='w-full px-4 flex flex-col gap-1 py-4'>
                        <h2 className='font-bold text-2xl '>{provider.name}</h2>
                        <p className='text-sm'>Veg, Non-Veg , Dinner, Lunch</p>
                        <p className='flex items-center text-gray-600'><span><IoLocation /></span>{provider.address}</p>
                        <p className='flex gap-1 items-center'><span className='font-semibold'>Contact-Number : </span> <span>+91 {provider.phoneNumber}</span></p>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ProviderTopBar