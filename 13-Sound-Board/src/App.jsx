import { useState } from "react";
import "./App.css";
import Player from "./components.jsx/Player";

function App() {
  const sounds = [
    { id: 1, sound: "Effect1", "src": "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { id: 2, sound: "Effect2", "src": "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { id: 3, sound: "Effect3", "src": "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { id: 4, sound: "Effect4", "src": "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { id: 5, sound: "Effect5", "src": "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" }
  ];

  const [idOnPlay, setIdOnPlay] = useState("")
  

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        {sounds.map((s) => (
          <div key={s.id}>
            <Player id={s.id} src={s.src} sound={s.sound} idOnPlay={idOnPlay} setIdOnPlay={setIdOnPlay} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
