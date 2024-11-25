import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/favicon.png'
import { FiSearch } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ShopContext } from '../context/ShopContext';



const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, token, navigate, setToken } = useContext(ShopContext);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
  }

  return (
    <div className='flex items-center justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-5 font-medium'>
      <Link to='/'><img src={logo} className='inline-block px-2' alt="" />Book Review</Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className="flex flex-col items-center gap-1">
          <p className='cursor-pointer hover:text-black'>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/books' className="flex flex-col items-center gap-1">
          <p className='cursor-pointer hover:text-black'>BOOKS</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className="flex flex-col items-center gap-1">
          <p className='cursor-pointer hover:text-black'>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className="flex flex-col items-center gap-1">
          <p className='cursor-pointer hover:text-black'>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <FiSearch onClick={() => setShowSearch(true)} className='w-8 cursor-pointer' />

        <div className='group relative'>
          <Link to={'/login'}> <RiUser3Line className='w-8 cursor-pointer' /></Link>


          {/* ------------ Dropdown Menu -------- */}
          {
            token &&
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p onClick={() => navigate('/profile')} className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          }
        </div>


        <HiOutlineMenuAlt1 onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden' />

      </div>
      {/* ------------------- Sidebar menu for small screens ---------------- */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <FaAngleLeft className='h-4 rotate-180 ' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/books'>BOOKS</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar