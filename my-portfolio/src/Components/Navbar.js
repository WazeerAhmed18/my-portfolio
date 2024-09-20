"use client"
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Typewriter from 'typewriter-effect/dist/core';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('HOME');

  return (
    <header className='flex w-full justify-around items-center px-5 py-5 bg-gray-950 shadow-2xl sticky top-0 z-50'>
      <a 
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-delay="300"
      className="text-2xl font-bold" href="">
        <span className="text-green">Port</span><span className="text-white">folio</span>
      </a>

      <nav className='hidden md:block'>
        <ul data-aos="fade-down"
              data-aos-duration="700"
              data-aos-delay="300"
              className='flex items-center justify-center gap-8 text-white'>
          {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS'].map((link) => (
            <li
              key={link}
              className={`relative ${activeLink === link ? 'font-bold text-green-500' : 'font-medium'}`}
              onClick={() => setActiveLink(link)}
            >
              <a
              
                href={`#${link}`}
                className={`pb-2 ${
                  activeLink === link
                    ? 'text-green border-b-2 border-green'
                    : 'hover:border-b-2 hover:border-green hover:font-bold hover:text-green'
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
          <div className='flex ml-52'>
          <li>
          <a 
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="300"
          href="#Contact" class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-white rounded hover:bg-white group">
             <span class="w-48 h-48 rounded rotate-[-40deg] bg-green absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
             <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">CONTACT</span>
          </a>
            
          </li>
          </div>
        </ul>
         
      </nav>

    
    </header>
  )
}

export default Navbar