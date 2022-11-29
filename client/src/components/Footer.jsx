import React from 'react'
import img1 from '../images/chooseus-1.jpg';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <>
      <div className=" mx-auto py-4 bg-gray-200 sm:grid sm:grid-cols-2 sm:px-4 md:grid md:grid-cols-3 px-5 lg:grid lg:grid-cols-3 ">
      <div className="naem order-1 pt-5 md:pl-7 lg:flex flex-col items-center ">
        <h1 className='font-bold text-5xl text-fuchsia-500 md:text-4xl md:pt-1'>TifinWala</h1>
        <p className='sm:text-xl sm:font-medium px-3 pt-4 text-lg font-normal md:px-0'>Your Everyday Meals</p>
        <p className='sm:text-xl sm:font-medium px-3 text-lg font-normal md:px-0'>Made Convenient</p>
      </div>
      <div className="contactus py-4 order-2  md:py-4 lg:flex flex-col items-center">
      <h1 className="font-bold py-2  text-2xl">Contact Us</h1>
      <ul className='flex flex-col'>
        <li className='px-2 flex gap-2 items-center text-gray-900 text-lg'><EmailIcon className=''
        />tifinwala420@gmail.com</li>
        <li className='px-2 flex gap-1  text-gray-900 text-lg'><PhoneAndroidIcon className=''
        />9356569973 / 9322960587</li>
        <li className='px-2 py-2 flex gap-2 items-center text-gray-900 text-lg cursor-pointer'><FacebookRoundedIcon color="primary"/> <InstagramIcon sx={{color:"pink[500]"}}/> <TwitterIcon color="primary"/></li>
      </ul>
      </div>
      <div className="links order-2  md:pt-4 md:pl-5 lg:flex flex-col items-center">
     <ul className='pb-3 px-1'>
     <h1 className='font-bold text-2xl py-2 '>Links</h1>
     <NavLink to="#"><li className=' font-medium cursor-pointer hover:text-blue-700'>Home</li></NavLink>
     <NavLink to="#"><li className=' font-medium cursor-pointer  hover:text-blue-700'>List of Providers</li></NavLink>
     <NavLink to="#"><li className=' font-medium cursor-pointer  hover:text-blue-700'>Contact Us</li></NavLink>
     <NavLink to="#"><li className=' font-medium cursor-pointer  hover:text-blue-700'>About Us</li></NavLink>
     <NavLink to="#"><li className=' font-medium cursor-pointer  hover:text-blue-700'>User Login</li></NavLink>
     <NavLink to="#"><li className=' font-medium cursor-pointer  hover:text-blue-700'>Admin Login</li></NavLink>
     </ul>
     </div>
      </div>
      
    </>
  )
}

export default Footer;
