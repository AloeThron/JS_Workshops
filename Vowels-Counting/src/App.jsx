import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function getVowel() {
    const text = document.querySelector("#text").value;
    let vowelCount = 0
    for (let i = 0; i < text.length; i++) {
      let word = text[i]
      if (word.match(/[a, e, i, o, u]/)) {
        vowelCount++
      }
    }
    setCount(vowelCount)
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="m-3 text-4xl font-bold">Vowels Count</div>
        <div className="m-3 text-4xl font-bold">{count}</div>
        <div>
          <input
            id="text"
            type="text"
            placeholder="Your text"
            className="m-3 border-black border-[0.13rem] rounded-md p-2"
            onChange={getVowel}
          />
        </div>
      </div>
    </>
  );
}

export default App;
