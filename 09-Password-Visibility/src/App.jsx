import { useState } from "react";
import "./App.css";
import Visible from "./components/Visible";

function App() {
  const [vis, setVis] = useState(true);
  const [pass, setPass] = useState("password");

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center shadow-md bg-white sm:bg-gradient-to-r from-blue-200 to-cyan-200">
        <div className="p-2 w-[500px] h-[500px] flex flex-wrap content-center justify-center rounded-l-md rounded-r-md lg:rounded-r-none bg-white">
          <div className="p-5 w-[300px]">
            <h1 className="text-2xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">
              Welcome back! Please enter your details
            </small>

            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Password
                </label>
                <div className="flex flex-col relative justify-center">
                  <div>
                    <input
                      type={pass}
                      placeholder="*****"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>
                  <div className="z-10 absolute right-2 flex items-center">
                    <Visible vis={vis} setVis={setVis} setPass={setPass} />
                  </div>
                </div>
              </div>

              <div className="mb-7 flex flex-wrap content-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="mr-1 checked:bg-purple-700"
                />{" "}
                <label className="mr-auto text-xs font-semibold">
                  Remember for 30 days
                </label>
                <a href="#" className="text-xs font-semibold text-purple-700">
                  Forgot password?
                </a>
              </div>

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                  Sign in
                </button>
              </div>
            </form>

            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Don't have account?
              </span>
              <a href="#" className="text-xs font-semibold text-purple-700">
                Sign up
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-r-md hidden transition-all duration-100 ease-in lg:block">
          <img
            className="w-300 h-500 bg-center bg-no-repeat bg-contain rounded-r-md"
            src="https://picsum.photos/500"
            height="500"
          />
        </div>
      </div>
    </>
  );
}

export default App;
