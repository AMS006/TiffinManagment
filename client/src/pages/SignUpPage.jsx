import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {GrSecure} from 'react-icons/gr'
import {FiUser,FiPhone} from 'react-icons/fi'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { signUp } from '../redux/user/user.action'
function SignUpPage() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [passwordMatch,setPasswordMatch] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(password !== confirmPassword){
      setPasswordMatch(false)
    }
    else{
      const user = {
        name,
        email,
        password,
        phoneNumber,
      }
      dispatch(signUp(user));
      setEmail("")
      setName("")
      setPassword("")
      setConfirmPassword("");
      setPhoneNumber("");
      setPasswordMatch(true);
      navigate("/");
    }
  }
  document.body.onkeydown = function(e) {
    
    if (e.key === "Enter")
        handleSubmit();
  };
  return (
    <div>
      <div className='py-2 sm:px-8 px-2 shadow flex justify-between items-center'>
      <Link to='/'>
          <h1 className='text-2xl font-semibold'>Name</h1>
        </Link>
        <Link to="/" className='flex items-center gap-2'>
            <BiArrowBack />
            <span>Back to home</span>
        </Link>
      </div>
      <div className='flex flex-col gap-10 sm:justify-center items-center sm:py-0 py-8' style={{height:'calc(100vh - 50px)'}}>
        <h1 className='text-center w-full text-slate-900 md:text-3xl text-xl font-semibold'>SignUP</h1>
        <div className='lg:w-1/3 md:w-2/5 sm:w-2/3 w-4/5'>
            <form action="" className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <div className='flex items-center border bg-white w-full'>
                    <span className='px-2 h-full'><FiUser /></span>
                    <input type="text" value={name} name="name" placeholder='Enter Your Name' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="name" required onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='flex items-center border bg-white w-full'>
                    <span className='px-2 h-full'><MdEmail /></span>
                    <input type="email" value={email} name="email" placeholder='Enter Your Email' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="email" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='flex items-center border bg-white w-full'>
                    <span className='px-2 h-full'><FiPhone /></span>
                    <input type="number" value={phoneNumber} name="number" placeholder='Enter Your Mobile Number' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="phone" required onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div className='flex items-center border bg-white w-full'>
                    <span className='px-2 h-full'><GrSecure /></span>
                    <input type="password" value={password} name="password" placeholder='Enter New Password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="password" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                  <div className='flex items-center border bg-white w-full'>
                      <span className='px-2 h-full'><GrSecure /></span>
                      <input type="password" value={confirmPassword} name="password" placeholder='Confirm Your Password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="confirm-password" required onChange={(e) => setConfirmPassword(e.target.value)}/>
                  </div>
                  {!passwordMatch && <small className='text-red-600'>* Password does not match</small>}
                </div>
                <div className='bg-slate-800 text-white py-2 shadow rounded-full'>
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
