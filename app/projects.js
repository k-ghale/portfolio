import React from 'react'
import { GoProject } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import Image from "next/image";

const Projects = () => {
  return (
    <div className='
    w-[428px]
    lg:w-screen
    lg:text-2xl
    lg:font-bold
    lg:pt-10
    h-screen
    text-xl
    bg-home
    bg-center
    bg-cover
    '
    id='projects'>

    <div className="w-full h-full p-12">

    {/* <Image src="/Projects.svg" className="relative top-3/4 left-2/4 bg-center w-96" alt="alt" width={400} height={400} /> */}
    
    <h2 className="font-poppins text-4xl font-semibold mb-12">My Past Projects</h2>

   {/* Row 1  */}
    <div className="
    flex 
    flex-col
    lg:pl-40 lg:flex-row">

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center text-black items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProject size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer" href="https://github.com/k-ghale/basic-library-system">Library System</a>
        <span className="text-[12px] text-neutral-400">16 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center text-black items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProjectSymlink size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer" href="https://github.com/k-ghale/javascript-dom-manupulation">DOM Manupulation</a>
        <span className="text-[12px] text-neutral-400">18 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>
  </div>

{/* Row 2     */}
    <div className="
    flex 
    flex-col
    lg:pl-40
    lg:flex-row" >

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center text-black items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProject size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer" href="https://github.com/k-ghale/restaurant_website_practice_project">Restaurant Website</a>
        <span className="text-[12px] text-neutral-400">20 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center text-black items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProjectSymlink size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer" href="https://github.com/k-ghale/advance-JS">Advance JS</a>
        <span className="text-[12px] text-neutral-400">21 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>
  </div>

    {/* Row 3  */}
    <div className="
    flex 
    flex-col
    lg:pl-40
    lg:flex-row">

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center text-black items-center rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProject size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer" href="https://github.com/k-ghale/portfolio">Portfolios</a>
        <span className="text-[12px] text-neutral-400">22 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>

    <div className="flex flex-row flex-1 gap-8 justify-start items-center w-full">
      {/* icon */}
      <div className="flex justify-center items-center text-black rounded-2xl p-4 w-16 h-16 bg-white">
        <GoProjectSymlink size={100}/>
      </div>
      {/* description and date*/}
      <div className="flex flex-col items-center justify-center p-4">
        <a className="text-[20px] cursor-pointer" href="https://github.com/k-ghale/phpClass">php</a>
        <span className="text-[12px] text-neutral-400">23 Feb 2020</span>
        <span className="text-gray-600">_____________________</span>
      </div>
    </div>


    </div>
    <div className="lg:flex lg:justify-center lg:items-center lg:w-1/2 lg:text-center">
      <p className="text-[16px] lg:relative lg:left-80 text-center lg:p-4 lg:text-2xl lg:flex lg:justify-center lg:items-center">Explore some of my recent projects above. Each project represents a unique challenge and showcases my skills as a developer.</p>
    </div>
    </div>
    </div>
  )
}

export default Projects