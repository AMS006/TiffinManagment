import React from 'react'
import {Link} from'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
function NavbarLg(){
  return(
    <>
        <div className='w-full md:flex hidden justify-between shadow items-center py-3 lg:px-16 md:px-12 sm:px-8 px-2'>
            <div>
                <h1 className='font-bold text-xl'>Name</h1>
            </div>
            <ul className='gap-4 flex items-center font-semibold '>
                <li><Link>Tiffin Providers</Link></li>
                <li><Link>About Us</Link></li>
                <li><Link>Contact Us</Link></li>
                <li className='border border-slate-900 text-slate-900 px-2 py-1'><Link to="/signin">Login</Link></li>
                <li className="bg-slate-900 text-white px-2 py-1"><Link to="/signup">SignUp</Link></li>
                {/* <li className='border border-slate-900 text-slate-900 px-2 py-1'><Link>Admin Login</Link></li> */}
            </ul>
        </div>
    </>
  )
}
function NavbarSm(){
  const [open,setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen(!open)
  }
  return(
    <>
      <div className='flex md:hidden px-4 py-2 shadow justify-between '>
            <div>
              <h1 className='font-bold text-xl'>Name</h1>
            </div>
            <div onClick={handleOpen} className='cursor-pointer'>
              <span className='' style={{fontSize:'1.6rem'}}>
                <FaBars />
              </span>
            </div>
      </div>
       <ul className={`gap-3 flex flex-col items-center absolute z-10 font-semibold h-64 transition ease-in-out duration-500  py-3 w-full ${open?'translate-x-0':'-translate-x-full'}`} style={{backgroundColor:'#eef2f2'}}>
        <li><Link>Tiffin Providers</Link></li>
        <li><Link>About Us</Link></li>
        <li><Link>Contact Us</Link></li>
        <li className='border border-slate-900 text-slate-900 px-2 py-1'><Link to="/signin">Login</Link></li>
        <li className="bg-slate-900 text-white px-2 py-1"><Link to="/signup">SignUp</Link></li>
      </ul>
    </>
  )
}
function Navbar() {
  return (
    <>
      <NavbarLg />
      <NavbarSm />
    </>
  )
}

export default Navbar
