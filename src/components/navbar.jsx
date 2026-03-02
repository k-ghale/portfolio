import About from "../pages/About"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"

const Nav = () => {
  return (
    <>
      <nav className="flex justify-around h-10 items-center bg-[#161b22] text-white">
        <p className="text-white">Portfolio</p>
        <div className="flex gap-7">
          <a className="no-underline hover:text-blue-500" href="/home">Home</a>
          <a className="no-underline hover:text-blue-500" href="/about">About</a>
          <a className="no-underline hover:text-blue-500" href="/skills">Skills</a>
          <a className="no-underline hover:text-blue-500" href="/projects">Projects</a>
          <a className="no-underline hover:text-blue-500" href="/contact">Contact</a>
        </div>
      </nav>
    </>
  )
}

export default Nav
