import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Progressbar from "./components/Progressbar";
import Navbar from "./components/Navbar";
import Heros from "./components/Heros";
import Features from "./components/Features";
import Footers from "./components/Footers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="w-screen justify-center items-center"><Progressbar />
    <Navbar />
    <Heros />
    <Features />
    <Features />
    <Features />
    <Features />
    <Features />
    <Features />
    <Footers /></div>
    </>
  );
}

export default App;
