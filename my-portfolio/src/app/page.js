import Hero from "@/Components/Hero";
import Navbar from "../Components/Navbar";
import MouseCircle from "@/Components/MouseCircle";
import About from "@/Components/About";
import AboutNew from "../Components/AboutNew";
import Contact from "@/Components/Contact";
import Footer from "../Components/Footer";
import Projects from "../Components/Projects";


export default function Home() {
  return (
    <div className="">
      <MouseCircle/>
      <Navbar/>
      <Hero/>
      <AboutNew/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}
