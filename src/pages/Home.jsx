//import navbar

const Home = () => {
  return (

    <>
    //nav
      <div className="w-full h-screen  flex items-center justify-center bg-black">
        <div className="w-6/10 h-6/10 bg-gray-500 rounded">
          <p className="bg-[#24283b] rounded-t">terminal - home</p>
          <div className="w-full h- bg-[#1a1b26] rounded-b">
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
    </>
  )
}

export default Home;
