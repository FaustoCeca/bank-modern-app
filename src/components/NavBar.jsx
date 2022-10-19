import { useState } from "react";

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'

const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={ logo } alt="logo" className="w-[124px] h-[32px]"/>

      {/* Desktop */}
      <div className="ss:flex hidden justify-end items-center flex-1 gap-6">
        { navLinks.map((link, index) => (
          <a href={ link.id } key={ link.id } className="font-normal cursor-pointer font-poppins text-[16px] text-white">{ link.title }</a>
        ))}
      </div>

      {/* Mobile */}
      <div className="ss:hidden flex flex-1 justify-end items-center">
          <img 
            src={ toggle ? close : menu } alt="menu" 
            className="w-[28px] h-[28px] object-contain"
            onClick={ () => setToggle((prevState) => !prevState) }  
          />

          <div className={`${ toggle  ? 'flex' : 'hidden'} p-6 bg-black-gradient 
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <div className="flex justify-end items-center flex-1 gap-6 flex-col">
                { navLinks.map((link, index) => (
                  <a href={ link.id } key={ link.id } className="font-normal cursor-pointer font-poppins text-[16px] text-white">{ link.title }</a>
                ))}
              </div>
          </div>
      </div>
    </nav>
  )
}

export default NavBar;