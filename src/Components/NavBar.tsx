import React, { useState } from 'react'

import { navLinks } from '../constants'
import { close, logo, menu } from '../assets'
const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img className='w-[124px] h-[32px]' src={logo} alt="hoodbank" />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav:any, index:any) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${index === navLinks.length-1 ? 'mr-0':'mr-10'}`}>
            <a href={`# ${nav.id}`} >{nav.title}</a>

          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end text-white'>
        <img
          src={`${toggle ? close : menu}`}
          alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=>setToggle((prev)=> !prev)}

        />
        <div className={`${toggle? 'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col  justify-end items-center flex-1'>
        {navLinks.map((nav:any, index:any) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${index === navLinks.length-1 ? 'mr-0':'mb-4 '}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>


          </li>
        ))}
      </ul>
          
         </div>
      </div>
    </nav>
  )
}

export default NavBar 