"use client";
import React from 'react'
import { FaGithub, FaLinkedin ,FaInstagram , FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
// import ContactForm from './contactform';

const Connect = () => {
  return (
    <div id="contact" className="w-full lg:w-screen p-8 h-full bg-projects bg-cover bg-center overflow-hidden">
        <h1 className="font-poppins font-semibold text-[56px]">
            Let us Connect
        </h1>

        {/* form for contact */}
        <form className='flex flex-col font-bold font-poppins mt-20'> 
            <label className='p-2'>Name :</label>
            <input type="text" className='bg-black text-white p-2 h-12  lg:w-[600px] w-[350px]' required/><br />
            
            <label className='p-2'>Email :</label>
            <input type="email" className='bg-black text-white p-2 h-12 lg:w-[600px] w-[350px]' required /><br />
            
            <label className='p-2'>Message:</label>
            <input type="text" className='bg-black text-white p-2 h-40 lg:w-[600px] w-[350px]' required /><br />

            <input type="submit" className='bg-black mt-8 text-white p-2 h-30 w-40 cursor-pointer border-2 rounded-xl hover:bg-white hover:text-black hover:border-black hover:border-2 transition' value="Submit" />

        </form>


        <p className="font-poppins text-2xl mt-12">Feel free to reach out to us via the contact form below, and our dedicated team will get back to you as soon as possible. Alternatively, you can contact us directly via email or phone using the information provided. Your inquiries are important to us, and we strive to provide timely and helpful responses to all messages we receive.</p>
        
        <div className="flex flex-row gap-8 mt-16 mb-24">
            <FaLinkedin size={100} className="cursor-pointer" onClick={()=>{window.open("https://www.linkedin.com/in/kabin-ghale/","blank");}}/>
            <FaFacebook size={100} className="cursor-pointer" onClick={()=>{window.open("https://www.facebook.com/","blank");}}/>
            <FaInstagram size={100} className="cursor-pointer" onClick={()=>{window.open("https://www.instagram.com/","blank");}}/>
            <FaGithub className="cursor-pointer" size={100} onClick={()=>{window.open("http://www.github.com/k-ghale","blank");}}/>
            {/* <MdOutlineEmail className="cursor-pointer" size={100} onClick={()=>{window.open("http://www.gmail.com","_blank");}}/> */}
        </div>
    </div>
  )
}

export default Connect