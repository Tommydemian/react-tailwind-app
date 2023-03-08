import React, { useState } from 'react'
import { useToggle } from '../hooks/useToggle.jsx'

import logo from '../assets/assets/logo.svg'
import close from '../assets/assets/close.svg'
import menu from '../assets/assets/menu.svg'



import { navLinks } from '../constants'

const Navbar = () => {
  
  const [isOpen, toggle] = useToggle()
  
  
  return (
    <nav className='w-full py-6 flex justify-between items-center px-4 sm:px-0 | navbar'>
    <img src={logo} alt="brand-logo" className='h-8' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1' >
    {
          navLinks.map(link =>(
          <li key={link.id} className={`text-white font-poppins ${navLinks[navLinks.length -1].id === link.id ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
      ))
    }
    </ul>

  <div className='sm:hidden flex flex-1 justify-end items-center'>
    <img
      src={ isOpen ? close : menu }
      alt="hambuerguer-menu-icon"
      className='h-4 object-contain block'
      onClick={toggle}
     />

    <div className={`${isOpen ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl | sidebar`}>
    <ul className='list-none flex flex-col justify-center items-center flex-1' >
    {
          navLinks.map(link =>(
          <li key={link.id} className={`text-white font-poppins ${navLinks[navLinks.length -1].id === link.id ? 'mb-0' : 'mb-4'}`}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
      ))
    }
    </ul>

    </div>


  </div>
    </nav>
  )
}

export default Navbar