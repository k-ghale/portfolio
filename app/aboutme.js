
import Image from "next/image";
import React from 'react'

const Aboutme = () => {
  return (
    <div className='
    w-[428px]
    lg:w-screen
    h-screen
    bg-skills
    bg-cover
    bg-center
    overflow-hidden'
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
                I am passionate web developer with a strong background in front-end development. I love creating beautiful and functional websites that provide an enjoyable user experience.

With 10+ years of experience in the field, I have honed my skills in HTML, CSS, JavaScript, and various front-end frameworks such as ReactJS and TailwindCSS.</p>
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