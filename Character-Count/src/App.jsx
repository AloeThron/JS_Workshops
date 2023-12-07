import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function getText() {
    setCount(document.querySelector("#text").value.length);
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="text-4xl font-bold">Charactor Count</div>
        <div className="mt-5 text-3xl font-bold">{count}</div>
        <div className="mt-5 flex items-center">
          <input
            id="text"
            type="text"
            className="border-black border-[0.13rem] rounded-md pl-2"
            placeholder="Your text"
            onChange={getText}
          />
        </div>
      </div>
    </>
  );
}

export default App;
