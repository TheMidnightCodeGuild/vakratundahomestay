import React, { useEffect } from "react";
import CustomNavbar from "./Components/HomeNavbar";
import Lenis from "@studio-freight/lenis";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Galllery";
import Destination from "./Components/Destination";
import Contact from "./Components/Contact";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomNavbar />
      <div className="overflow-x-auto mx-2 sm:mx-0 bg-[#D0F0C0]">
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="destination">
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
    </>
  );
};

export default Index;
