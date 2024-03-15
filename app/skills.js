import { FaCss3, FaPython, FaReact, FaJava, FaGithub, FaHtml5 } from "react-icons/fa"
import { BiLogoTypescript } from "react-icons/bi"
import { IoLogoJavascript } from "react-icons/io5"
import { SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:w-screen h-full bg-skillsColor overflow-hidden">
        <h2 className=" text-[32px] font-poppins font-semibold p-8 ">here are some of my skills</h2>
        
        {/* Python */}
        <div className="flex flex-col justify-center items-center p-8 mt-8">
            <FaPython size={100} />
            <div className="w-[75%] lg:w-50% flex flex-col">
                <h3 className="font-poppins text-center text-[32px] font-semibold">Python</h3>
                <p className=" mt-8 lg:text-xl font-poppins text-gray-600 font-light">I am a passionate and experienced Python developer with a strong background in web development and data analysis. I have worked on a variety of projects, ranging from web applications to data science projects, using Python as my primary tool.</p>
            </div>
        </div>


        {/* React */}
        <div className="flex flex-col justify-center items-center p-8 mt-8">
            <FaReact size={100} />
            <div className="w-[75%] flex flex-col">
                <h3 className="font-poppins text-center text-[32px] font-semibold">ReactJS</h3>
                <p className=" mt-8 lg:text-xl font-poppins text-gray-600 font-light">I am a passionate and experienced front-end developer with a focus on React.js. I have a strong background in building responsive and user-friendly web applications. I enjoy working with React because of its component-based architecture and the ability to create dynamic and interactive user interfaces.
                </p>
            </div>
        </div>


        {/* Javascript */}
        <div className="flex flex-col justify-center items-center p-8 mt-8">
            <IoLogoJavascript size={100} />
            <div className="w-[75%] flex flex-col">
                <h3 className="font-poppins text-center text-[32px] font-semibold">Javascript</h3>
                <p className=" mt-8 lg:text-xl font-poppins text-gray-600 font-light">I am a dedicated front-end developer with a passion for JavaScript. I specialize in creating interactive and user-friendly web experiences.. I enjoy working with JavaScript because of its flexibility and the ability to create dynamic and engaging web applications.
</p>
            </div>
        </div>



        {/* Github */} 
        <div className="flex flex-col justify-center items-center p-8 mt-8">
            <FaGithub size={100} />
            <div className="w-[75%] flex flex-col">
                <h3 className="font-poppins text-center text-[32px] font-semibold">Github</h3>
                <p className=" mt-8 lg:text-xl font-poppins text-gray-600 font-light">I actively contribute to open-source projects and showcase my coding projects on GitHub. My GitHub profile is a reflection of my passion for coding and continuous learning. I believe in the power of collaboration and community-driven development.
</p>
            </div>
        </div>


        {/* Java */}
        <div className="flex flex-col justify-center items-center p-8 mt-8">
            <FaJava size={100} />
            <div className="w-[75%] flex flex-col">
                <h3 className="font-poppins text-center text-[32px] font-semibold">Java</h3>
                <p className=" mt-8 lg:text-xl font-poppins text-gray-600 font-light">I am a passionate Java developer with a focus on building robust and scalable applications. I have a strong foundation in Java programming and enjoy solving complex problems using Java technologies.
</p>
            </div>
        </div>


        {/* HTML */}
        <div className="flex flex-col justify-center items-center p-8 mt-8">
            <FaHtml5 size={100} />
            <div className="w-[75%] flex flex-col">
                <h3 className="font-poppins text-center text-[32px] font-semibold">HTML</h3>
                <p className=" mt-8 lg:text-xl font-poppins text-gray-600 font-light">I am a skilled front-end developer with a passion for creating beautiful and responsive user interfaces using CSS. I specialize in creating modern and visually appealing designs that enhance the user experience.
</p>
            </div>
        </div>



        {/* CSS */}
        <div className="flex flex-col justify-center items-center p-8 mt-8">
            <FaCss3 size={100} />
            <div className="w-[75%] flex flex-col">
                <h3 className="font-poppins text-center text-[32px] font-semibold">CSS</h3>
                <p className=" mt-8 lg:text-xl font-poppins text-gray-600 font-light">I am a skilled front-end developer with a passion for creating beautiful and responsive user interfaces using CSS. I specialize in creating modern and visually appealing designs that enhance the user experience.
</p>
            </div>
        </div>



        {/* Tailwind */}
        <div className="flex flex-col justify-center items-center p-8 mt-8">
            <SiTailwindcss size={100} />
            <div className="w-[75%] flex flex-col">
                <h3 className="font-poppins text-center text-[32px] font-semibold">TailwindCSS</h3>
                <p className=" mt-8 lg:text-xl font-poppins text-gray-600 font-light">I am a front-end developer with a passion for creating beautiful and responsive user interfaces using Tailwind CSS. I specialize in designing modern and visually appealing websites that prioritize usability and accessibility.</p>
            </div>
        </div>


        {/* Skills end line */}
        <p className="mt-10 pl-4 text-center pb-10 text-2xl font-poppins font-semibold flex justify-center items-center">I enjoy learning more skills and knowledge</p>

    </div>

  )
}

export default Skills