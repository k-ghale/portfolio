
import Image from "next/image";
import React from 'react'

const Aboutme = () => {
  return (
    <div className='
    w-full
    h-screen
    bg-skills
    bg-cover
    bg-center
    '
    id="aboutme">

          {/* AboutME content */}
        <div className="
        pt-10 
        pl-4 
        pr-4
        flex
        flex-col
        justify-center
        items-center
        ">
        <div className="lg:w-1/2 h-1/2 " >
            <h2 className="
            text-4xl 
            font-poppins 
            font-semibold
            lg:pt-20 lg:text-6xl 
            ">
                I am a Web Developer based in Kathmandu, Nepal</h2>
            <p className="
            font-rubik 
            text-2xl 
            font-extralight 
            mt-4
            lg-font-light lg:text-3xl
            ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur distinctio nemo corporis, cum ipsum numquam. Est blanditiis aut cumque illo sapiente sint dolor odio! Numquam ipsum expedita perspiciatis repellat magni.</p>
        </div>

        {/* About me picture */}
        <div className="
        mt-10 
        flex 
        justify-center
        ">
            <Image src="/pic2.jpg" alt="pic2" width={300} height={300} />
            <Image src="/pic2.jpg" alt="pic2" width={300} height={300} />
            <Image src="/pic2.jpg" alt="pic2" width={300} height={300} />
            {/* <img src={img1} alt="me" className="w-50% h-50%" /> */}
        {/* Stats */}
        </div>

        </div>

    </div>
  )
}

export default Aboutme