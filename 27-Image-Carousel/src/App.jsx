import "./App.css";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 1;

  useEffect(() => {
    let nums = [];
    for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
      nums.push({ id: i, imageUrl: `https://source.unsplash.com/random/${i}` });
    }
    setImages(nums);
  }, []);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="h-screen flex flex-col justify-center items-center">

      <div className="text-4xl font-bold">
        <h1>Images Carousel</h1>
      </div>

      <div className="max-h-[1000px] mx-10 my-20">
        {currentImages.map((image) => (
          <div key={image.id}>
          <Card  id={image.id} img={image.imageUrl} />
        </div>
        ))}
      </div>

      <div>
        <div className="text-center">
          {Array.from(
            { length: Math.ceil(images.length / imagesPerPage) },
            (_, index) => (
              <button
                className="mx-1 p-2 px-4 bg-gradient-to-br from-slate-50 to-gray-50 border border-gray-200 rounded-lg hover:shadow-sm"
                key={index + 1}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>

    </div>
  );
}

export default App;
