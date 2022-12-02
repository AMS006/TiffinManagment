import React, { useState } from 'react'
import {IoLocation} from 'react-icons/io5'
import ImageViewer from './ImageViewer'

function ProviderTopBar() {
    const [openProfile, setOpenProfile] = useState(false);
    const [openBackground, setOpenBackground] = useState(false);
    const handleOpen = (name) =>{
        console.log("Opened")
        setOpenProfile(false);
        setOpenBackground(false);
        if(name === "profile"){
            setOpenProfile(true)
        }
        else{
            setOpenBackground(true);
        }
    }
  return (
    <div className='lg:mx-8 border shadow my-2'>
        <ImageViewer img={"http://www.dakshadesign.com/assets/uploads/client-logo/10/ghr-wala-tiffin.png"} open={openBackground} setOpen={setOpenBackground}/>
        <ImageViewer img={"https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg"} open={openProfile} setOpen={setOpenProfile}/>

        <div className='w-full lg:h-52 h-40 shadow relative border-b cursor-pointer' onClick={() =>handleOpen("Background")}>
            <img src="http://www.dakshadesign.com/assets/uploads/client-logo/10/ghr-wala-tiffin.png" className='h-full w-full' alt="backgroundLogo" />
        </div>
        <div className="rounded-full md:h-40 shadow md:w-40 h-28 w-28 absolute top-40 overflow-hidden cursor-pointer lg:left-12 md:left-8 left-3 border" onClick={() => handleOpen("profile")}>
            <img src="https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg" alt="" className='h-full w-full'/>
        </div>
        <div className='lg:mt-8 md:mt-20 mt-12 md:px-8 px-4 flex md:flex-row flex-col gap-4 justify-between py-4'>
            <div>
                <h2 className='font-bold text-2xl '>Anas Sain</h2>
                <p className='text-sm'>Veg, Non-Veg , Dinner, Lunch</p>
                <p className='flex items-center text-gray-600'><span><IoLocation /></span>Maharashtra Raigad, Lonere</p>
            </div>
            <div className='md:w-1/3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores natus assumenda aliquid </p>
            </div>
        </div>
    </div>
  )
}

export default ProviderTopBar