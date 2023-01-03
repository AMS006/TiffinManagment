import React from 'react'
import {Link} from'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import ProfileAvatar from './Avatar'
import { useSelector } from 'react-redux'
function NavbarLg({name}){
  return(
    <>
        <div className='w-full md:flex hidden justify-between shadow items-center py-3 lg:px-16 md:px-12 sm:px-8 px-2'>
            <Link to="/" className='flex items-center'>
                <h1 className='font-bold text-xl font-mono'>Tiffin Wala</h1>
            </Link>
            <ul className='gap-4 flex items-center font-semibold '>
                <li><Link to="/provider">Tiffin Providers</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                {name ?<ProfileAvatar name={name}/>:
                <div className='flex items-center gap-2'>
                  <li className='border border-slate-900 text-slate-900 px-2 py-1'><Link to="/signin">Login</Link></li>
                  <li className="bg-slate-800 text-white px-2 py-1"><Link to="/signup">SignUp</Link></li>
                </div>}
            </ul>
        </div>
   </>
  )
}
function NavbarSm({name}){
  const [open,setOpen] = useState(false);
  window.onresize = function(){
    if(window.innerWidth > 767)
      setOpen(false);
  }
  const handleOpen = () =>{
    setOpen(!open)
  }
  return(
    <>
      <div className='flex md:hidden px-4 py-2 shadow justify-between '>
            <Link to="/">
              <h1 className='font-bold text-xl'>Name</h1>
            </Link>
            <div className='flex items-center gap-3'>
              {name && <ProfileAvatar name={name}/>}
              <div onClick={handleOpen} className='cursor-pointer'>
                <span className='' style={{fontSize:'1.6rem'}}>
                  <FaBars />
                </span>
              </div>
            </div>
      </div>
       <ul className={`gap-3 flex flex-col items-center absolute z-10 font-semibold h-64 transition ease-in-out duration-500  py-3 w-full ${open?'translate-x-0':'-translate-x-full'}`} style={{backgroundColor:'#eef2f2'}}>
        <li><Link to="/providers">Tiffin Providers</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>

        {!name?<div className='flex flex-col gap-3 items-center'>
          <li className='border border-slate-900 text-slate-900 px-2 py-1'><Link to="/signin">Login</Link></li>
          <li className="bg-slate-800 text-white px-2 py-1"><Link to="/signup">SignUp</Link></li>
        </div>:""}
      </ul>
    </>
  )
}
function Navbar() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <NavbarLg name={user?.name}/>
      <NavbarSm name={user?.name}/>
    </>
  )
}

export default Navbar
