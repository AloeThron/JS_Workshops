import { useEffect, useState } from "react";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [time, setTime] = useState(new Date());
  const [hours, setHours] = useState(time.getHours());
  const [minutes, setMinuts] = useState(time.getMinutes());
  const [seconds, setSeconds] = useState(time.getSeconds());

  setInterval(() => {
    setSeconds(new Date().getSeconds());
  }, 1000);

  useEffect(() => {
    setTime(new Date());
    setHours(time.getHours());
    setMinuts(time.getMinutes());
    setSeconds(time.getSeconds());
  }, [seconds]);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center transition-all duration-700 ease-out dark:bg-black dark:transition-all dark:duration-700 dark:ease-out">
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
