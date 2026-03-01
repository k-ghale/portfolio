//import navbar
import Nav from "../components/navbar.jsx"
import KabinLogo from "../components/logo.jsx";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="w-full h-screen  flex items-center justify-center bg-black">
        <div className="w-7/10 h-6/10 bg-gray-500 rounded">
          <div className="flex bg-[#24283b] text-[#404971] justify-between h-6 text-sm rounded-t">
            <div className="flex space-x-2 justify-between p-3 items-center">
              <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            </div>
            <div className="">terminal - home</div>
            <div className="w-12"></div>
          </div>

          <div className="w-full h-full gap-5 flex justify-evenly p-4 bg-[#1a1b26] rounded-b">

            <div>
              <KabinLogo />
            </div>

            <div>
              <p className="text-[#4c90e9]">user @portfolio</p>

              <p className="text-[#838cb0]">________________</p>

              <br></br>

              <p className="text-[#838cb0]"> <span className="text-[#cb5e75]">Name : </span> Kabin Ghale</p>
              <p className="text-[#838cb0]"> <span className="text-[#cb5e75]">Role : </span> Backend Dev </p>
              <p className="text-[#838cb0]"> <span className="text-[#cb5e75]">Location : </span> Toronto, Canada </p>
              <p className="text-[#838cb0]"> <span className="text-[#cb5e75]">Email : </span> kabinghale1@gmail.com</p>
              <p className="text-[#838cb0]"> <span className="text-[#cb5e75]">Uptime : </span> 1 year in development</p>

              <p className="text-[#838cb0]">________________</p>

              <br></br>

              <p className="text-[#838cb0]"> <span className="text-[#cb5e75]">Shell : </span> Javascript</p>
              <p className="text-[#838cb0]"> <span className="text-[#cb5e75]">DE : </span> React, NextJS, Vue.js</p>
              <p className="text-[#838cb0]"> <span className="text-[#cb5e75]">Theme : </span> Tokyo Night </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
