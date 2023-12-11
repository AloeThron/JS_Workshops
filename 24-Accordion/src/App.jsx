import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import data from "./data/data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="mb-10 text-4xl font-bold">Web Dev Tools</div>
        <div>
          {data.map((d) => (
            <div key={d.id}>
              <Box title={d.title} description={d.description} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
