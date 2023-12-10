import React from "react";
import { useState, useEffect } from "react";

export default function Navbar() {

  const [bg, setBg] = useState("w-full fixed z-10 bg-white");

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scroll = (scrollTop / pageHeight) * 100;
      if (Math.ceil(scroll) > 30) {
        setBg("w-full fixed z-10 bg-blue-50")
      }
      else {
        setBg("w-full fixed z-10 bg-white")
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [scroll]);


  return (
    <div className={bg}>
      <div className="text-gray-700 border-t border-gray-100 shadow-sm body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
            <a href="#" className="mr-5 font-medium hover:text-gray-900">
              Home
            </a>
            <a href="#" className="mr-5 font-medium hover:text-gray-900">
              About
            </a>
            <a href="#" className="font-medium hover:text-gray-900">
              Contact
            </a>
          </nav>
          <a className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
            Moocup-Web
          </a>
          <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
            <a href="#" className="mr-5 font-medium hover:text-gray-900">
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-blue-500 rounded shadow outline-none active:bg-blue-700 hover:shadow-md focus:outline-none ease"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
