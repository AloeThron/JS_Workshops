import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Zoom from "./components/Zoom";
import data from "./components/Food"

function App() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  const [vis, setVis] = useState("hidden");
  const [img, setImg] = useState("");

  const link = list.map((n) => {
    return `https://raw.githubusercontent.com/AloeThron/React_Workshops/main/Image-Popup/src/components/foods-images/small/s_${n}.jpg`;
  });

  return (
    <>
      <div>
        <div className="m-10 flex justify-center box-content">
          <div className="flex flex-wrap md:gap-10 justify-center 2xl:justify-around">
            {data.map((f, index) => (
              <div key={index}>
                <Card type={f.type} url={f.url} setVis={setVis} setImg={setImg} />
              </div>
            ))}
          </div>
        </div>
        <Zoom vis={vis} setVis={setVis} img={img} />
      </div>
    </>
  );
}

export default App;
