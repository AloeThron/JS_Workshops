import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toggle, setToggle] = useState("toggle_off");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (toggle == "toggle_off") {
        setToggle("toggle_on");
      } else {
        setToggle("toggle_off");
      }
  };

  return (
    <div htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
      <span className=" material-symbols-outlined text-3xl dark:text-white">light_mode</span>
      <span
        className="m-4 material-symbols-outlined text-5xl dark:text-red-500"
        onClick={handleDarkModeToggle}
      >
        {toggle}
      </span>
      <span className="material-symbols-outlined text-3xl dark:text-white">dark_mode</span>
    </div>
  );
};

export default DarkModeToggle;
