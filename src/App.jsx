import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about"; 
import Ourservice from "./ourservice"
import Footer from "./footer"
import Contact from "./contact";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourservice" element={<Ourservice/>}/>
        <Route path="/Contact" element={<Contact/>}/>

      </Routes>
       <Footer />
    </>
  );
}

export default App;