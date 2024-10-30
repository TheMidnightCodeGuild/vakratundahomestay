import React, { useEffect } from "react";
import CustomNavbar from "./Components/HomeNavbar";
import ReactLenis from "lenis/react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Galllery";
import Destination from "./Components/Destination";
import Contact from "./Components/Contact";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Swiper from "./Components/Swiper";
const Index = () => {
  return (
    <>
      <ReactLenis root>
        <CustomNavbar />
        <div className="overflow-x-hidden overflow-y-hidden  bg-[#F3FBF1]">
          <Hero />
          <div id="about">
            <About />
          </div>
          <div id="gallery">
            <Gallery />
          </div>
          <div className="hidden sm:block" id="destination">
            <Swiper />
          </div>
          <div className="sm:hidden block" id="destination">
            <Destination />
          </div>
          <div id="testimonial">
            <Testimonial />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
};

export default Index;
