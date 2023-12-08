import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Zoom from "./components/Zoom";

function App() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  const [vis, setVis] = useState("hidden")

  const link = list.map((n) => {
    return `./foods-images/small/s_${n}.jpg`;
  });

  return (
    <>
    <div className="m-10 flex justify-center box-content">
      <div className="flex flex-wrap md:gap-10 justify-center 2xl:justify-around">
        {link.map((m) => (
          <div key={m}>
            <Card name={m} setVis={setVis} />
          </div>
        ))}
      </div>
    </div>
    <Zoom vis={vis} setVis={setVis} />
    </>
  );
}

export default App;
