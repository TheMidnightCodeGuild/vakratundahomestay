import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-opacity-10 backdrop-blur-sm text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo.png" className="h-14 sm:h-16" alt="Logo" />
          <span className="text-xl sm:text-2xl text-white font-semibold whitespace-nowrap">
            Vakratunda Homestay
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center w-auto h-10 justify-center text-sm text-black rounded-lg md:hidden hover:text-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-opacity-50"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}>
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen || !isMobile ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-transparent text-white">
            <li>
              <Link
                href="#about"
                onClick={closeMenu}
                className="block py-2 px-3 rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent">
                About
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                onClick={closeMenu}
                className="block py-2 px-3 rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent">
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="#destination"
                onClick={closeMenu}
                className="block py-2 px-3 rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent">
                Destinations
              </Link>
            </li>
            <li>
              <Link
                href="#testimonial"
                onClick={closeMenu}
                className="block py-2 px-3 rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
