import Image from "next/image";
import Hero from "./hero";
import Aboutme from "./aboutme";
import Projects from "./projects";
import Skills from "./skills";
import Connect from "./contact";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
     <Header/>
     <Hero />
     <Aboutme />
     <Projects />
     <Skills />
     <Connect />
     <Footer />
    </div>
  );
}
