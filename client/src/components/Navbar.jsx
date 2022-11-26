import React from 'react'
import {Link} from'react-router-dom'
function Navbar() {
  return (
    <>
        <div className='w-full flex justify-between shadow items-center py-3 lg:px-16 md:px-12 sm:px-8 px-2'>
            <div>
                <h1 className='font-bold text-xl'>Name</h1>
            </div>
            <ul className='flex sm:gap-4  gap-3 items-center font-semibold'>
                <li><Link>Login</Link></li>
                <li className='md:flex hidden'><Link>Admin Login</Link></li>
                <li><Link>About Us</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
