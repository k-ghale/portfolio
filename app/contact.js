"use client";
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
// import ContactForm from './contactform';

const Connect = () => {
  return (
    <div id="contact" className="w-full p-8 h-full bg-projects bg-cover bg-center">
        <h1 className="font-poppins font-semibold text-[56px]">
            Let us Connect
        </h1>

        {/* form for contact */}
        <form className='flex flex-col font-bold font-poppins mt-20'> 
            <label className='p-2'>Name :</label>
            <input type="text" className='bg-black text-white p-2 h-12 w-[350px]' required/><br />
            
            <label className='p-2'>Email :</label>
            <input type="email" className='bg-black text-white p-2 h-12 w-[350px]' required /><br />
            
            <label className='p-2'>Message:</label>
            <input type="text" className='bg-black text-white p-2 h-40 w-[350px]' required /><br />

            <div className='flex flex-start pt-10'>
              <input type="button" className='bg-black text-white p-2 h-30 w-40 cursor-pointer border-2 rounded-xl hover:bg-dimWhite hover:text-black hover:border-black hover:border-2 transition' value="Submit" />
            </div>
        </form>


        <p className="font-poppins text-2xl mt-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident unde porro ad quis, at repellat temporibus itaque illum obcaecati dicta laborum? Debitis, pariatur! Cumque ut exercitationem repellendus similique sed et!</p>
        
        <div className="flex flex-row gap-8 mt-16 mb-24">
            <FaLinkedin size={100} className="cursor-pointer" onClick={()=>{window.open("https://www.linkedin.com/in/kabin-ghale/","blank");}}/>
            <FaGithub className="cursor-pointer" size={100} onClick={()=>{window.open("http://www.github.com/k-ghale","blank");}}/>
            {/* <MdOutlineEmail className="cursor-pointer" size={100} onClick={()=>{window.open("http://www.gmail.com","_blank");}}/> */}
        </div>
    </div>
  )
}

export default Connect