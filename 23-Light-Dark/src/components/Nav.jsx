import React, { useState, useEffect } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

export default function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toggle, setToggle] = useState("toggle_off");

//   const isMode =
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches;

//   if (isMode) {
//     console.log("Dark mode is enabled");
//   } else {
//     console.log("Light mode is enabled");
//   }

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (toggle == "toggle_off") {
      setToggle("toggle_on");
    } else {
      setToggle("toggle_off");
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div htmlFor="darkModeToggle">
      <div className="flex justify-between p-10 text-black dark:text-white">
        <div>Mode {isDarkMode ? "Dark" : "Light"}</div>
        <div className="inline-flex">
          <div className="mx-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
            <IoIosSunny />
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-orange-600"
              onClick={handleDarkModeToggle}
            ></div>
          </label>
          <div className="mx-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
            <IoIosMoon />
          </div>
        </div>
      </div>
    </div>
  );
}
