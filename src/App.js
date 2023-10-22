import { BrowserRouter , Route , Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./components/home-page";
import About from "./components/about";
import Service from "./components";
import Contact from "./components/contact";
function App() {
  return (
       <BrowserRouter>
        <Navbar />
        <Routes >
        <Route exact path='/' element={<HomePage />}  />
        <Route exact path='/about' element={<About />}  />
        <Route exact path='/services' element={<Service />}  />
        <Route exact path='/contact' element={<Contact />}  />
        </Routes>
        <Footer />
     </BrowserRouter>
  );
}

export default App;
