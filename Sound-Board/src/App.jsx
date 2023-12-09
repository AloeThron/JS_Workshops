import { useState } from "react";
import "./App.css";
import Player from "./components.jsx/Player";

function App() {
  const sounds = [
    { id: 1, sound: "Effect1", "src": "./sounds/Effect1.wav" },
    { id: 2, sound: "Effect2", "src": "./sounds/Effect2.wav" },
    { id: 3, sound: "Effect3", "src": "./sounds/Effect3.wav" },
    { id: 4, sound: "Effect4", "src": "./sounds/Effect4.wav" },
    { id: 5, sound: "Effect5", "src": "./sounds/Effect5.wav" }
  ];

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        {sounds.map((s) => (
          <div key={s.id}>
            <Player src={s.src} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
