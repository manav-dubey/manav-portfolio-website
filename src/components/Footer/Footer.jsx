import React from 'react'
import { menuItems } from '../Navbar/Navbar'
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className="container mx-auto text-center">
        <h2 className='text-purple-500  text-xl font-semibold'>
          Manav Dubey
        </h2>

        {/* Navigation links*/}
        <nav className='flex flex-wrap justify-center gap-6 mt-4 '>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.id}
              smooth={true}
              offset={item.id === "about" ? -250 : 0}  
              duration={1000}
              className='hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer' >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Social media Icons */}
          <div className='flex flex-wrap justify-center gap-4 mt-6'>
            {[
              {icon: <FaFacebook />, link: "https://www.facebook.com/"},
              {icon: <FaTwitter />, link: "https://x.com/manavdubey7"},
              {icon: <FaLinkedin />, link: "https://www.linkedin.com/in/manavdubey"},
              {icon: <FaInstagram />, link: "https://www.instagram.com/manav___dubey"}, 
              {icon: <FaYoutube />, link: "https://www.youtube.com/@ManavDubey001"},
            ].map((item, index) => (

              <a 
              className = "text-xl hover:text-purple-500 hover:scale-110"
              target='_blank'
              rel='noopener noreferrer'
              href={item.link}> {item.icon}</a>
            ))}
          </div>
          
          {/* Copyright text */}
          <p className='text-sm text-gray-400 mt-6'>© 2025 Manav Dubey. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer