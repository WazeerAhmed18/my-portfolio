"use client"
import React, { useState, useEffect } from 'react';
import heroImg from '../assets/MAN1.png';
import { FaWhatsapp, } from "react-icons/fa";


import TextTransition, { presets } from "react-text-transition";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect/dist/core';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {

  AOS.init();
  const [index, setIndex] = useState(0);
  const subtitles = ["FRONTEND", "REACT JS", "UX UI"];

  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true); // Update state to indicate the file was downloaded
  };

  const config = {
    social: {
      linkedin: "https://www.linkedin.com/in/wazeer-ahmed-681b08232",
      github: 'https://github.com/WazeerAhmed18',
      whatsapp: 'https://wa.me/qr/JDRCXBNX7XSBK1'
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      autoStart: true,
      loop: false,
      delay: 75,
      onComplete: () => {
        document.getElementById('typewriter').innerHTML = "<span>HI, I'M <span style='color: #00FF00;'>WAZEER AHMED M</span></span>";
      }
    });

    typewriter.typeString("<span>HI, I'M <span style='color: #00FF00;'>WAZEER AHMED M</span></span>").start();

    return () => typewriter.stop();
  }, []);

  return (
    <div className="flex flex-col w-full md:flex-row px-10  pt-16 md:pt-0 bg-black justify-center items-center">
      <div 
      data-aos="fade-right"
      data-aos-duration="700"
      data-aos-delay="300"
      className='md:w-1/2 flex flex-col font-title lg:pl-24 pl-0'>
        <h1
          
          className='w-full font-semibold text-white text-lg md:text-2xl lg:text-4xl hover:text-gradient-to-r hover:from-transparent hover:to-white hover:text-[length:200%_100%] hover:text-left transition-all duration-500 ease-in-out'
        >
          <span id="typewriter"></span>
          <br />
          <TextTransition
            
            className='text-lg md:text-2xl lg:text-4xl py-3'
            springConfig={presets.wobbly}
            inline={true}
          >
            <span style={{ color: '#00FF00' }}>
              {subtitles[index % subtitles.length]}
            </span>
          </TextTransition> DEVELOPER
        </h1>
        <p 
        
        className='text-slate-300 text-base lg:text-lg pt-4 w-full'>"Passionate frontend developer with expertise in responsive design and building modern web applications."</p>
     <div className="mt-5 mb-10">
            
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green text-xl">
                <FaFacebookF className='md:h-6 md:w-6 '/>
              </a>
              <a href="#" className="text-white hover:text-green text-xl">
                <FaWhatsapp className='md:h-6 md:w-6'/>
              </a>
              <a href="#" className="text-white hover:text-green text-xl ">
                <FaLinkedinIn className='md:h-6 md:w-6'/>
              </a>
              <a href="#" className="text-white hover:text-green text-xl ">
                <FaInstagram className='md:h-6 md:w-6'/>
              </a>
            </div>
          </div>

      <div
      
      className='mt-6 flex flex-row items-center text-base sm:text-sm'
    >
      <a
        href="/CV.pdf"
        download="Wazeer_Ahmed_CV.pdf"
        onClick={handleDownload} // Handle click to update the state
        className="relative inline-flex items-center justify-start px-4 py-2 text-sm overflow-hidden font-semibold transition-all md:text-base bg-white rounded hover:bg-white group"
      >
        <span className="w-48 h-48 rounded rotate-[-40deg] bg-green absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white items-center">
          {isDownloaded ? 'Downloaded' : 'Download CV'}
          {isDownloaded ? 
          <FileDownloadDoneIcon className='md:h-6 md:w-6'/> 
          : <FileDownloadIcon className='md:h-6 md:w-6'/>}
        </span>
      </a>
    </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="300"
        className='md:w-1/2 h-full flex justify-center items-center'
      >
        <Image
          className='w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out'
          src={heroImg}
          alt="Hero"
        />
      </div>
    </div>
  );
}

export default Hero;