import Hero from "./hero";
import Contact from "../contact";
import Feature from "./feature";
import About from "../about";
import Profesional from "./profesional";
import OurService from "./our-service";
import ClientSection from "./client-section";

const HomePage = ()=>{
  return (
    <div>
      <Hero />
       <Feature />
       <About />
       <Profesional />
       <OurService />
       <ClientSection />
       <Contact />
    </div>
  )
}

export default HomePage
