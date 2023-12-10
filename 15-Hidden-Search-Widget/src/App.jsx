import { useState } from "react";
import "./App.css";
import { IoSearchSharp } from "react-icons/io5";

function App() {
  const [check, setCheck] = useState(false);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <form className="max-w-2xl">
          <div
            className={`rounded-lg transition-all ease-in-out
            ${check ? "w-[500px]" : "w-[60px]"}
            ${check ? "" : "h-[54px]"}
            ${check ? "" : "bg-gray-50 border border-gray-300"}
            ${check ? "duration-500" : "duration-1000"}
            ${check ? "relative" : "flex justify-center"}`}
          >
            <div
              className={`${
                check
                  ? "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                  : "flex justify-center items-center w-[50px]"
              }`}
            >
              <div
                className="w-5 h-5 text-gray-500 flex items-center text-xl"
                onClick={() => {
                  setCheck(!check);
                }}
              >
                <IoSearchSharp />
              </div>
            </div>

            <input
              type="search"
              className={`${
                check ? "" : "hidden"
              } w-full block p-4 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Search Mockups, Logos..."
            />
            <button
              type="submit"
              className={`${
                check ? "" : "hidden"
              } text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2`}
              onClick={() => {
                setCheck(!check);
              }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
