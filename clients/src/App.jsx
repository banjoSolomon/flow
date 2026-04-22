import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";



const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Navbar />
      <Footer />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
     
      
    </div>
  )
}

export default App
