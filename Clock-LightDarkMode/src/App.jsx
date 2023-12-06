import { useState } from "react";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {

  const [time, setTime] = useState(new Date());
  const [hours, setHours] = useState(time.getHours());
  const [minutes, setMinuts] = useState(time.getMinutes());
  const [seconds, setSeconds] = useState(time.getSeconds());

  setInterval(() => {
    setTime(new Date())
    setHours(time.getHours())
    setMinuts(time.getMinutes())
    setSeconds(time.getSeconds())
  }, 2000);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center dark:bg-black">
        <div className="flex justify-center">
          <div id="time" className="text-6xl font-bold dark:text-white">
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
}

export default App;
