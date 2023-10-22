import Hero from "./hero";
import Contact from "../contact";
import Feature from "./feature";
import About from "../about";
import Profesional from "./profesional";
import OurService from "./our-service";
import ClientSection from "./client-section";

const HomePage = ()=>{
  return (
    <>
      <Hero />
       <Feature />
       <About />
       <Profesional />
       <OurService />
       <ClientSection />
       <Contact />
    </>
  )
}

export default HomePage
