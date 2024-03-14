import React from 'react';
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Hero = () => {
  return (
    <div 
    id="home"
    className="
        w-[375px]
        h-screen
        bg-home
        bg-cover
        lg:w-full flex flex-col justify-center items-center
    "> 
        <Image src="/1.svg" className='absolute left-80 top-4 inset-0 w-full h-full object-contain z-0' width={200} height={200} alt='myimage'/>
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
          lg:text-lg lg:w-[600px] relative z-10
          "
          >
          Discover how I blend creativity with technical expertise to craft unique solutions. Lets embark on a journey through my work together.</p>
          <span></span>

          <div className="lg:mt-16 relative z-10">
            <div className="">
            <button className="
            bg-black 
            w-36 
            mt-4
            ml-4
            mr-4 
            h-12 
            rounded-2xl 
            hover:bg-white 
            hover:text-black 
            hover:border-black 
            hover:border-2 
            transition" 
            >
              Talk with me
            </button>
            <button className="
            bg-black 
            w-36  
            h-12 
            rounded-2xl 
            hover:bg-white 
            hover:text-black 
            hover:border-black 
            hover:border-2 
            transition"
            >
              See my works
            </button>

            </div>
          </div>
          
          <div className="
          lg:left-8 bottom-8
          top-8
          left-6
          relative z-10
          flex
          justify-start
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
            
            />
          </div>
          </div>

        </div>
    </div>
    )
}

export default Hero;