"use client"
import React, { useState } from "react";
import ScrollTrigger from 'react-scroll-trigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from 'react-spring';

const AboutNew = () => {
  AOS.init();

  const [triggered, setTriggered] = useState(false);

  const onEnterViewport = () => {
    setTriggered(true);
  };

  const onExitViewport = () => {
    setTriggered(false);
  };

  const fadeInProps = useSpring({
    opacity: triggered ? 1 : 0,
    from: { opacity: 0.25 },
    config: { duration: 500 },
    onRest: () => {
      if (!triggered) {
        setTriggered(false);
      }
    },
  });

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <section className="pt-16 pb-5 lg:pb-10 bg-black text-white">
        <div id="skills-section" className="text-center w-full mb-10">
          <animated.h2
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="300"
            style={fadeInProps}
            className="text-4xl font-bold mb-7"
          >
            <span className="text-green">ABOUT</span>{" "}
            <span className="text-white">
              <span className="word" style={{ opacity: triggered ? 1 : 0 }}>ME</span>
            </span>
          </animated.h2>
          <p 
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="300"
          className="text-slate-300 mx-2 mb-8 text-center text-sm lg:text-lg lg:mx-80">A passionate frontend developer dedicated to crafting visually appealing and user-friendly web experiences. With a focus on HTML, CSS, JavaScript, and React.js. My goal is to continuously learn and apply best practices in frontend development to deliver seamless and engaging user interfaces.</p>
        </div>

        
          
      </section>
    </ScrollTrigger>
  );
};

export default AboutNew;