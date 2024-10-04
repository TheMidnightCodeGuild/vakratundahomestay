import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/img5.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
          Discover Vakratunda Homestay in Ujjain
        </h1>
        <h2 className="text-3xl md:text-4xl mb-8 font-light italic">
          Where Comfort Meets Spirituality
        </h2>
        <p className="mb-10 text-xl md:text-2xl max-w-3xl leading-relaxed">
          Immerse yourself in the rich culture of Ujjain while enjoying modern
          amenities. Our homestay offers a perfect blend of traditional charm
          and contemporary comfort, just steps away from the sacred
          Mahakaleshwar Temple.
        </p>
        <a
          href="#_"
          className="rounded-full px-8 py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white text-lg font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 shadow-lg">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Book Your Stay Now</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
