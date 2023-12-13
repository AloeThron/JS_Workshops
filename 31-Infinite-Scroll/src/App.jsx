import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let nums = [];
    for (let i = 0; i < Math.ceil(Math.random() * (100 - 30 + 1) + 30); i++) {
      nums.push({ id: i, imageUrl: `https://source.unsplash.com/random/${i}` });
    }
    setImages(nums);
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-16">Random Images Pagination</h1>
      </div>

      <div className="flex flex-wrap sm:gap-10 justify-center 2xl:justify-around">
        {images.map((image) => (
          <div key={image.id}>
            <Card  id={image.id} img={image.imageUrl} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
