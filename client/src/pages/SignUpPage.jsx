import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {GrSecure} from 'react-icons/gr'
import {FiUser,FiPhone} from 'react-icons/fi'
function SignUpPage() {
  return (
    <div>
      <div className='py-2 sm:px-8 px-2 shadow flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Name</h1>
        <Link to="/" className='flex items-center gap-2'>
            <BiArrowBack />
            <span>Back to home</span>
        </Link>
      </div>
      <div className='flex flex-col gap-10 sm:justify-center items-center sm:py-0 py-8' style={{height:'calc(100vh - 50px)'}}>
        <h1 className='text-center w-full text-slate-900 md:text-3xl text-xl font-semibold'>SignUP</h1>
        <div className='lg:w-1/3 md:w-2/5 sm:w-2/3 w-4/5'>
            <form action="" className='flex flex-col gap-6'>
                <div className='flex items-center border bg-white w-full'>
                    <span className='px-2 h-full'><FiUser /></span>
                    <input type="text" name="name" placeholder='Enter Your Name' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="name" required/>
                </div>
                <div className='flex items-center border bg-white w-full'>
                    <span className='px-2 h-full'><MdEmail /></span>
                    <input type="email" name="email" placeholder='Enter Your Email' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="email" required/>
                </div>
                <div className='flex items-center border bg-white w-full'>
                    <span className='px-2 h-full'><FiPhone /></span>
                    <input type="number" name="number" placeholder='Enter Your Mobile Number' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="phone" required/>
                </div>
                <div className='flex items-center border bg-white w-full'>
                    <span className='px-2 h-full'><GrSecure /></span>
                    <input type="password" name="password" placeholder='Enter New Password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="email" required/>
                </div>
                <div className='flex items-center border bg-white w-full'>
                    <span className='px-2 h-full'><GrSecure /></span>
                    <input type="password" name="password" placeholder='Confirm Your Password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="email" required/>
                </div>
                <div className='bg-slate-900 text-white py-2 shadow rounded-full'>
                    <input type="submit" value="SignUp" className='h-full w-full cursor-pointer' />
                </div>
                <div className='text-slate-900 font-semibold text-center'>
                    <Link to="/signin">Already Have Account? Sign In here</Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
