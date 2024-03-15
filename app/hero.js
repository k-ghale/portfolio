"use client"
import React from 'react';
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Hero = () => {
  return (
    <div 
    id="home"
    className="
        w-[428px]
        h-screen
        bg-projects
        bg-cover
        bg-center
        text-center
        overflow-hidden
        lg:w-screen flex flex-col justify-center items-center
    "> 
        {/* <Image src="/1.svg" className='absolute left-80 top-4 inset-0 w-full h-full object-contain z-0' width={200} height={200} alt='myimage'/> */}
        {/* Introduction or Hero Page Intro */}
          <h1 className="
          text-8xl
          font-poppins 
          font-bold 
          p-4
          lg:text-[120px] relative z-10
          ">Hello! I am Kabin Ghale</h1>
        
        {/* <ul>LINKS FOR CONTACT</ul> */}

        <div className="">
          <h3 className="
          font-bold 
          font-rubik 
          text-2xl 
          pl-4
          pr-4
          lg:text-4xl relative z-10
          ">
            A Web Developer from Kathmandu, Nepal.
          </h3><br/>
          <p className="
          font-poppins 
          pl-4 
          pr-4
          lg:text-lg lg:w-[600px] relative z-10 text-center
          "
          >
          Discover how I blend creativity with technical expertise to craft unique solutions. Lets embark on a journey through my work together.</p>
          <span></span>

          <div className="lg:mt-16 mt-10 relative z-10">
            <div className="">
            <a className="
            bg-black
            lg:text-xl
            lg:p-4
            p-2
            w-36 
            mt-4
            ml-4
            mr-4 
            h-12
            border-2
            border-black
            rounded-2xl 
            hover:bg-white 
            hover:text-black 
            hover:border-black 
            hover:border-2 
            transition" 
            
            href='#contact'
            >
              Talk with me
            </a>
            <a className="
            bg-black 
            w-36  
            h-12
            p-2
            lg:text-xl
            lg:p-4
            border-2
            border-black
            rounded-2xl 
            hover:bg-white 
            hover:text-black 
            hover:border-black 
            hover:border-2 
            transition"
            
            href='#projects'
            >
              See my works
            </a>

            </div>
          </div>
          
          <div className="
          lg:bottom-8
          top-8
          relative z-10
          flex
          justify-center
          cursor-pointer
          
          ">
            <div className="flex">
            <FaGithub className="
            bg-white
            text-black
            w-12
            h-12
            p-2 
            rounded-full
            hover:bg-black
            hover:text-white
            transition" 
            
            onClick={()=>{window.open("http://www.github.com/k-ghale/","blank")}}
            />
            <CiLinkedin className="
            bg-white
            text-black
            w-12
            h-12
            ml-2
            p-2
            rounded-full
            hover:bg-black
            hover:text-white
            transition" 
            
            onClick={()=>{window.open("https://www.linkedin.com/in/kabin-ghale-069b19268/","blank")}}
            />
            <FaFacebook className="
            bg-white
            text-black
            w-12
            h-12
            ml-2
            p-2
            rounded-full
            hover:bg-black
            hover:text-white
            transition" 
            
            onClick={()=>{window.open('http://www.facebook.com','blank')}}
            />

            <FaInstagram className="
            bg-white
            text-black
            w-12
            h-12
            ml-2
            p-2
            rounded-full
            hover:bg-black
            hover:text-white
            transition" 
            
            onClick={()=>{window.open('http://www.instagram.com','blank')}}
            />

          </div>
          </div>

        </div>
    </div>
    )
}

export default Hero;