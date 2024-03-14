
import { FaHome } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import React from 'react'

const Header = () => {
  return (
    <nav
      className="
     w-full
     h-8
     flex
     items-center
     justify-center
     font-poppins
     bg-skillsColor
     text-m
     text-white
     transition
     sticky
     top-0
     z-20
     lg:text-xl
     "
      >
        <a href="#home" className="mr-6 hover:underline cursor-pointer">logo</a>
        <a href="#project" className="mr-6 hover:underline cursor-pointer">my projects</a>
        <a href="#aboutme" className="mr-6 hover:underline cursor-pointer">about me</a>
        <a href="#contact" className="underline hover:no-underline cursor-pointer">lets connect</a>
      </nav>
    );
}

export default Header