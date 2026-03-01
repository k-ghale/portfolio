//import navbar
import Nav from "../components/navbar.jsx"

const Home = () => {
  return (
    <>
      <Nav />
      <div className="w-full h-screen  flex items-center justify-center bg-black">
        <div className="w-6/10 h-6/10 bg-gray-500 rounded">
          <div className="flex bg-[#24283b] text-[#404971] justify-between h-6 text-sm rounded-t">
            <div className="flex space-x-2 justify-between p-3 items-center">
              <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            </div>
            <div className="">terminal - home</div>
            <div className="w-12"></div>
          </div>
          <div className="w-full h-full flex justify-evenly p-4 bg-[#1a1b26] rounded-b">

            <div>
              ascii key
            </div>

            <div>
              <p className="text-[#4c90e9]">user @portfolio</p>

              <p>Name : Kabin Ghale</p>
              <p>Role : Backend Dev</p>
              <p>Location : Toronto, Canada</p>
              <p>Email : kabinghale1@gmail.com </p>
              <p>Uptime : 1 year in development</p>

              <p>Shell: Javascript</p>
              <p>DE: React, NextJS, Vue.js</p>
              <p>Theme: Tokyo Night</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
