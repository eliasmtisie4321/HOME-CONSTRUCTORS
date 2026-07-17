import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Ourservice from "./ourservice";
import Footer from "./footer";
import Contact from "./contact";
import Loader from "./Loader";


function App() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);


    return () => clearTimeout(timer);

  }, []);



  if (loading) {
    return <Loader />;
  }



  return (
    <>

      <Navbar />


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route 
          path="/ourservice" 
          element={<Ourservice />} 
        />

        <Route 
          path="/contact" 
          element={<Contact />} 
        />


      </Routes>


      <Footer />


    </>
  );
}


export default App;