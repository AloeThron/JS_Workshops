import { useState } from "react";
import "./App.css";
import { FaFacebook } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";

function App() {
  const [fcount, setfCount] = useState(0);
  const [ycount, setyCount] = useState(0);
  const [icount, setiCount] = useState(0);

  const social = [
    {
      name: "f",
      start: fcount,
      end: 70000,
    },
    {
      name: "y",
      start: ycount,
      end: 50000,
    },
    {
      name: "i",
      start: icount,
      end: 10000,
    },
  ];

  setTimeout(() => {
    if (social[0].start < social[0].end) {
      setfCount(Math.ceil((social[0].start += social[0].end / 200)));
    }
    if (social[1].start < social[1].end) {
      setyCount(Math.ceil((social[1].start += social[1].end / 200)));
    }
    if (social[2].start < social[2].end) {
      setiCount(Math.ceil((social[2].start += social[2].end / 200)));
    }
  }, 5);

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="grid grid-cols-3">
          <div className="m-5 p-5 flex flex-col justify-center items-center bg-blue-50 rounded-lg">
            <div className="m-3">
              <FaFacebook className="text-9xl text-blue-700" />
            </div>
            <div className="m-3 text-4xl font-bold">{fcount}</div>
            <div className="m-3 text-4xl font-bold">Facebook</div>
          </div>
          <div className="m-5 p-5 flex  flex-col justify-center items-center bg-red-50 rounded-lg">
            <div className="m-3">
              <RiYoutubeFill className="text-9xl text-red-700" />
            </div>
            <div className="m-3 text-4xl font-bold">{ycount}</div>
            <div className="m-3 text-4xl font-bold">Youtube</div>
          </div>
          <div className="m-5 p-5 flex flex-col justify-center items-center bg-pink-50 rounded-lg">
            <div className="m-3">
              <GrInstagram className="text-9xl text-pink-700" />
            </div>
            <div className="m-3 text-4xl font-bold">{icount}</div>
            <div className="m-3 text-4xl font-bold">Instagram</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
