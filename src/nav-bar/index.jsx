import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className='fixed flex justify-center items-center bg-amber-400 p-2 px-4 gap-4 w-full'>
      <span className='absolute left-4 lg:left-12'>Logo</span>

      <div className='flex justify-between items-center gap-4 md:gap-16 '>
        <NavLink 
          to="/" 
          end
          className={""}
        >Home</NavLink>
        <NavLink 
          to="/contact"
          className={""}
        >Contact</NavLink>
      </div>
    </nav>
  )
}

export default NavBar