import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Heros from "./components/Heros";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  const [vis, setVis] = useState("invisible")

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scroll = (scrollTop / pageHeight) * 100;
      if (scroll > 30) {
        setVis("visible")
      }
      else {
        setVis("invisible")
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <div>
        <Navbar />
        <Heros />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Footer />
      </div>
      <div className={vis}>
        <button className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8" onClick={scrollToTop}>
          <div className="lg:w-50 px-6 lg:px-0">
            <div className="p-2 bg-blue-500 rounded-lg shadow-lg sm:p-3">
              <p className="ml-1 font-medium tracking-wide text-white truncate">
                Back to top
              </p>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default App;
