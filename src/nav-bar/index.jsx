import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className='fixed flex justify-end md:justify-center items-center px-4 gap-4 w-full shadow-sm p-1 bg-gradient-to-bl from-violet-50 via-white to-blue-50'>
      <div className='absolute left-4 lg:left-12 flex justify-center items-center gap-2'>
        <span className='bg-indigo-400 w-6 h-6 rounded-full'></span>
        <span className='font-medium'>Logo</span>
      </div>

      <div className='flex justify-between items-center gap-6 md:gap-16 p-1.5'>
        <NavLink 
          to="/" 
          end
          className={({isActive}) => isActive ? "text-indigo-600 font-medium bg-white px-6 rounded-2xl p-1 shadow-sm " : "font-medium px-6 rounded-2xl p-1"}
        >Home</NavLink>
        <NavLink 
          to="/contact"
          className={({isActive}) => isActive ? "text-indigo-600 font-medium bg-white px-6 rounded-2xl p-1 shadow-sm" : "font-medium px-6 rounded-2xl p-1"}
        >Contact</NavLink>
      </div>
    </nav>
  )
}

export default NavBar