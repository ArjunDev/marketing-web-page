import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className='fixed flex justify-center items-center bg-white px-4 gap-4 w-full shadow-sm p-1'>
      <span className='absolute left-4 lg:left-12 font-medium'>Logo</span>

      <div className='flex justify-between items-center gap-6 md:gap-16 p-1.5 px-3'>
        <NavLink 
          to="/" 
          end
          className={({isActive}) => isActive ? "text-indigo-600 font-medium bg-white px-6 rounded-2xl p-1 shadow-sm" : "font-medium px-6 rounded-2xl p-1"}
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