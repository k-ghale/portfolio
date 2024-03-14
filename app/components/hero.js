import React from 'react';
import Image from 'next/image'

const Hero = () => {
  return (
    <div 
    id="home"
    className="
        w-full
        h-screen
    ">
        
      {/* Introduction or Hero Page Intro */}
        <div className="">
          <h1 className="">Hello! I am Kabin Ghale</h1>
          {/* <ul>LINKS FOR CONTACT</ul> */}
        </div>

        <div className="">
          <h3 className="">A Web Developer from Kathmandu, Nepal.</h3><br/>
          <p className="">Discover how I blend creativity with technical expertise to craft unique solutions. Lets embark on a journey through my work together.</p>
          <span></span>

          <div className="">
            <div className="">
            <button className="">Talk with me</button>
            <button className="">See my Work</button>
            </div>
          </div>

          <img src='/public/images/homeImg.jpg' alt='myphoto'/>
        </div>
    </div>
    )
}

export default Hero;