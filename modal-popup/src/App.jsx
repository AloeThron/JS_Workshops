import { useState } from "react";
import "./App.css";
import Popup from "./components/popup";

function App() {
  const [cls, setCls] = useState("z-10 absolute left-0 top-0 h-screen w-full invisible");

  function show() {
    setCls("z-10 absolute left-0 top-0 h-screen w-full visible")
  }

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <button
          className="rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40"
          onClick={show}
        >
          Show Detail
        </button>
      </div>
      <div id="btn" className={cls}>
        <Popup setCls={setCls} />
      </div>
    </>
  );
}

export default App;
