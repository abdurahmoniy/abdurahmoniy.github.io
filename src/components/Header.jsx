import React, { useState } from 'react'
import { navLink } from './consts'
import { styles } from './style'

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => setToggle (prev => !prev)

  return (
    <div className="w-full py-6 flex justify-between items-center">
      <div className={`${styles.header}`}>MyLogo</div>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLink.map((nav, idx) => (
          <li key={nav.id} className={
            `font-myfont font-normal cursor-pointer text-[16px] text-mylight 
            ${idx === navLink.length - 1 ? 'mr-0' : 'mr-10'}
            hover:text-myteal translate-all duration-300
          `}>{nav.title}</li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <i className={`${toggle ? 'fas fa-x fa-2x' : 'fas fa-bars fa-2x'} object-contain text-mylight`} onClick={toggleMenu}></i>
        <div className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-28 right-0 left-0 w-full sidebar bg-myblack`}></div>
      </div>
    </div>
  )
}
