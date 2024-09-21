"use client"
import ScrollTrigger from 'react-scroll-trigger';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaUser } from "react-icons/fa6";
import TitleIcon from '@mui/icons-material/Title';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from 'react-spring';
import React, { useState } from "react";

const Contact = () => {
  AOS.init();
  const [triggered, setTriggered] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const onEnterViewport = () => {
    setTriggered(true);
  };

  const onExitViewport = () => {
    setTriggered(false);
  };

  const handleSendMessage = () => {
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 4000); // Hide popup after 4 seconds
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      closePopup();
    }
  };

  const fadeInProps = useSpring({
    opacity: triggered ? 1 : 0,
    from: { opacity: 0.25 },
    config: { duration: 500 },
  });

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div className="bg-black text-white py-16 px-8 md:px-32" id="Contact">
        <animated.h2
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          style={fadeInProps}
          className="text-4xl text-white text-center font-bold mb-10"
        >
          <span className="text-green">CONTACT</span>{" "}
          <span className="text-white">
            <span className="word" style={{ opacity: triggered ? 1 : 0 }}>ME</span>
          </span>
        </animated.h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div 
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="300"
            className="md:w-1/2 w-full"
          >
            {/* Left Section */}
            <p className='text-white pb-4 font-medium text-lg'>Get in Touch</p>
            <h2 className="text-4xl font-bold text-white pb-2">
              Let’s Talk For your 
              <span className="text-green"> Next Projects</span>
            </h2>
            <p className="mt-4 text-slate-300 text-lg">
              Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore veritatis
            </p>
            <div className="mt-8">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-green mr-4 text-xl" />
                <div>
                  <p>Chakrapani St. (Ext) , Kodambakkam,</p>
                  <p>Chennai</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-green mr-4 text-xl" />
                <p>wazeerahmedfl18@gmail.com</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-green mr-4 text-xl" />
                <p>+91 63809 35589</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-white mb-4">Follow Me</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-green text-xl">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white hover:text-green text-xl">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white hover:text-green text-xl">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-white hover:text-green text-xl">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div 
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="300"
            className="md:w-1/2 w-full mt-12 lg:mt-0 bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white">Full Name</label>
                <div className="relative mt-4">
                  <input
                    type="text"
                    placeholder="Richard D"
                    className="w-full p-4 pl-12 bg-gray-800 text-white rounded-md focus:outline-none focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 flex text-green items-center pl-4 pointer-events-none">
                    <FaUser />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white">Email Address</label>
                <div className="relative mt-4">
                  <input
                    type="email"
                    placeholder="support@gmail.com"
                    className="w-full p-4 pl-12 bg-gray-800 text-white rounded-md focus:outline-none focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 flex text-green items-center pl-4 pointer-events-none">
                    <FaEnvelope />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white">Phone Number</label>
                <div className="relative mt-4">
                  <input
                    type="text"
                    placeholder="+91 12345 67890"
                    className="w-full p-4 pl-12 bg-gray-800 text-white rounded-md focus:outline-none focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 flex text-green items-center pl-4 pointer-events-none">
                    <FaPhoneAlt />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white">Subject</label>
                <div className="relative mt-4">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-4 pl-12 bg-gray-800 text-white rounded-md focus:outline-none focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 flex text-green items-center pl-4 pointer-events-none">
                    <TitleIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 focus:border-green">
              <label className="block text-white">Message</label>
              <textarea
                placeholder="Write message"
                className="w-full p-4 mt-4 bg-gray-800 text-white rounded-md h-32 focus:outline-none focus:border-transparent"
              ></textarea>
            </div>

            <button
              onClick={handleSendMessage}
              className="mt-6 flex flex-row items-center text-base sm:text-sm"
            >
              <a
                href="#_"
                className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all text-base bg-white rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-green absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white items-center">
                  Send Message
                </span>
              </a>
            </button>
          </div>
        </div>

        <div 
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="300"
          className="w-full flex justify-center items-center mt-14"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8394410362016!2d80.22037057412156!3d13.045890013247137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266fa9b361fc3%3A0xcd848588097003fa!2sMasjid-E-Raheema%20(Sunnath%20Jama%27th)!5e0!3m2!1sen!2sin!4v1691436264438!5m2!1sen!2sin"
            className="w-full h-[25rem] md:h-[40rem] lg:h-[30rem]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Popup */}
        {popupVisible && (
          <div className="fixed inset-0 flex justify-center bg-black bg-opacity-80 items-center z-50 popup-overlay" onClick={handleOutsideClick}>
            <div className="bg-white rounded-lg shadow-lg px-10 py-16 relative">
              <span 
                className="absolute top-2 right-2 text-black cursor-pointer text-xl" 
                onClick={closePopup}
              >
                ❌
              </span>
              <p className="text-black text-lg font-bold">Message sent successfully 😊 !</p>
            </div>
          </div>
        )}
      </div>
    </ScrollTrigger>
  );
};

export default Contact;