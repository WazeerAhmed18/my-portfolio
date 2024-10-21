"use client"
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from 'react-spring';

const skillsData = [
  { name: "HTML", percentage: 97 },
  { name: "CSS", percentage: 95 },
  { name: "Javascript", percentage: 90 },
  { name: "React JS", percentage: 93 },
  { name: "Next JS", percentage: 89 },
  { name: "Tailwind CSS", percentage: 94 },
  { name: "Bootstrap", percentage: 93 },
  { name: "Figma", percentage: 96 },
];

const About = () => {
  AOS.init();
  const [triggered, setTriggered] = useState(false);

  const onEnterViewport = () => {
    setTriggered(true);
  };

  const onExitViewport = () => {
    setTriggered(false);
  };

  // Spring animation for the fade-in effect
  const fadeInProps = useSpring({
    opacity: triggered ? 1 : 0,
    transform: triggered ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 },
  });

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div id="skills-section" className="pb-16 px-8 bg-black text-center w-full">
        <div className="flex flex-col justify-center items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="300"
            style={fadeInProps}
            className="text-4xl text-white font-bold mb-7"
          >
            <span className="text-white">MY</span>{" "}
            <span className="text-green">
              <span>
                SKILLS
              </span>
            </span>
          </div>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="300"
            className="text-slate-300 mx-2 mb-8 lg:text-center text-sm lg:text-lg lg:mx-80 "
          >
            As a frontend developer, I excel in creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS. My focus is on delivering seamless user experiences and modern designs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill text-center hover:scale-110">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full">
                  <circle
                    className="text-gray-300"
                    strokeWidth="6"
                    stroke="currentColor"
                    fill="transparent"
                    r="44"
                    cx="50%"
                    cy="50%"
                  />
                  <circle
                    className="text-green"
                    strokeWidth="6"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="44"
                    cx="50%"
                    cy="50%"
                    style={{
                      strokeDasharray: "276.46",
                      strokeDashoffset: triggered
                        ? `calc(276.46 - (276.46 * ${skill.percentage}) / 100)`
                        : "276.46",
                      transition: "stroke-dashoffset 2s ease-out",
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-xl font-semibold text-white">
                    {triggered ? (
                      <CountUp start={0} end={skill.percentage} duration={4} />
                    ) : (
                      0
                    )}
                    %
                  </span>
                </div>
              </div>
              <p className="mt-5 font-medium text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default About;