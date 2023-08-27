import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProfileAvatar from './Avatar'
import NavbarMenu from './NavbarMenu'
import logo from '../TiffinWalaLogo.png'

function NavbarLg({ name }) {
  return (
    <>
      <div className='w-full md:flex hidden justify-between shadow items-center py-3 lg:px-16 md:px-12 sm:px-8 px-2'>
        <Link to="/" className='flex gap-1.5 items-center'>
          <img src={logo} className='h-[70px] object-contain' alt="" />
          <h1 className='font-bold text-xl font-mono'>Tiffin Wala</h1>
        </Link>
        <ul className='gap-4 flex items-center font-semibold '>
          <li><Link to="/provider">Tiffin Providers</Link></li>
          {name ? <ProfileAvatar name={name} /> : <NavbarMenu />}
        </ul>
      </div>
    </>
  )
}
function NavbarSm({ name }) {
 
  return (
    <>
      <div className='flex md:hidden px-4 py-2 shadow justify-between'>
        <Link to="/" className='flex items-center'>
          <img src={logo} className='h-[50px] object-contain' alt="" />
          <h1 className='font-bold text-xl font-mono'>Tiffin Wala</h1>
        </Link>
        <div className='flex items-center gap-3'>
        {name ? <ProfileAvatar name={name} /> : <NavbarMenu />}
        </div>
      </div>
    </>
  )
}
function Navbar() {
  const user = useSelector((state) => state.user.user);
  return (
    <nav>
      <NavbarLg name={user?.name} />
      <NavbarSm name={user?.name} />
    </nav>
  )
}

export default Navbar
