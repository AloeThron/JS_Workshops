import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const name = "Bangkok";
  const apiKey = "54b4eb78009eff9ad25aa26c716f17f8";
  const [city, setCity] = useState({});
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
        );
        const data = await result.json();
        setIsloading(true);
        setCity(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  return (
      (isloading &&
      <div>
        <section className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200 backdrop-blur-lg backdrop-filter bg-opacity-75">
          <div className="py-5 text-center =">
            <h1 className="text-8xl font-bold py-10">{city.name}</h1>
            <p className="text-4xl font-bold py-5">{city.sys.country}</p>
          </div>
          <div className="w-[300px] md:w-[500px]">
            <div className="py-4 text-center bg-gradient-to-b from-indigo-400 to-cyan-400 rounded-t-lg  brightness-110">
              <h1 className="text-6xl font-bold py-5">
                {city.main.temp}&deg;C
              </h1>
              <div className="grid grid-cols-2">
                <small className="text-4xl font-bold py-5">
                  {city.main.temp_max}&deg;C
                </small>
                <small className="text-4xl font-bold py-5">
                  {city.main.temp_min}&deg;C
                </small>
              </div>
            </div>
            <div className="py-2 text-center bg-slate-100 grid grid-cols-3 rounded-b-lg">
              <div className="text-xl font-bold py-5">
                {city.weather[0].main}
              </div>
              <div className="text-xl font-bold py-5">{city.main.humidity}</div>
              <div className="text-xl font-bold py-5">{city.wind.speed}</div>
            </div>
          </div>
        </section>
      </div>
      )
  );
}

export default App;
