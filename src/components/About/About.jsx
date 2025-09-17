import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt'
import profile1 from '../../assets/profile2.jpg'

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] 2xl:px-[16vw] 3xl:px-[20vw] font-sans mt-1 md:mt-24 lg:mt-32'
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className='md:w-1/2 text-center md:text-left mt-0 md:mt-8 md:mt-0'>

          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-4 5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Manav Dubey
          </h2>

          {/* Skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am a &nbsp;
            </span>
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Fullstack Developer',
                2000,
                'Java Developer',
                2000,
                'Coder',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I have pursued my Bachelors in Computer Science in 2025.
            I have solved more than 500 Data Structure & Algorithm problems.
            I have a strong hold in React, NextJS, Java, Python, Hibernate and Springboot.
            I am enthusiastic in AI and ML and love to build projects that are solutions for a real world problem.
          </p>

          {/* Resume button */}
          <a href="https://drive.google.com/file/d/1fEChlgidRrQqpZ7281oAcqLQlDSSmLTc/view?usp=sharing"
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold
          transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }} >
            Download CV</a>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 flex  sm:mb-0 justify-end p-6">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}>
            <div className='drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'>
              <div className="border-4 border-purple-700 transform: scale-110 w-48 h-48 md:w-72  md:h-72 lg:w-96 lg:h-96
                              rounded-full  overflow-hidden">
                <img
                  src={profile1}
                  alt="Manav Dubey"
                  className="pointer-events-none  rounded-full "
                />
              </div>
            </div>


          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
