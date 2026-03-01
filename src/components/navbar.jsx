
const Nav = () => {
  return (
    <>
      <nav className="flex justify-around h-10 items-center bg-[#161b22] text-white">
        <p className="text-white">Portfolio</p>
        <div className="flex gap-3 ">
          <a className="no-underline" href="/home">Home</a>
          <a className="no-underline" href="/about">About</a>
          <a className="no-underline" href="skills">Skills</a>
          <a className="no-underline" href="projects">Projects</a>
          <a className="no-underline" href="contact">Contact</a>
        </div>
      </nav>
    </>
  )
}

export default Nav
