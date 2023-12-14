import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const apiKey = `zp0BGJGUJtBhrTEzacC0UXzyjQ5M2efitpF7Vzo5xBE`;
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let nums = [];
    for (let i = 0; i < Math.ceil(Math.random() * (100 - 30 + 1) + 30); i++) {
      nums.push({ id: i, imageUrl: `https://source.unsplash.com/random/${i}` });
    }
    setImages(nums);
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsLoading(true);
  //     try {
  //       const res = await fetch(
  //         `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
  //       );
  //       const data = res.json();
  //       setPhotos((oldData) => {
  //         return [...oldData, ...data];
  //       });
  //     } catch (error) {
  //       console.log("Fetching data is error: ", error);
  //     }
  //   }
  //   fetchData();
  // }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >
          document.body.offsetHeight - 500 &&
        !isLoading
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-16">Random Images Pagination</h1>
      </div>

      <div className="flex flex-wrap sm:gap-10 justify-center 2xl:justify-around">
        {images.map((image) => (
          <div key={image.id}>
            <Card id={image.id} img={image.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
