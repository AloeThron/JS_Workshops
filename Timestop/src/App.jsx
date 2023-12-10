import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [images, setImages] = useState([]); // เก็บข้อมูลภาพทั้งหมด
  const [currentPage, setCurrentPage] = useState(1); // หน้าปัจจุบันของ Pagination
  const imagesPerPage = 8; // จำนวนของภาพในแต่ละหน้า

  useEffect(() => {
    let nums = [];
    for (let i = 0; i < Math.ceil(Math.random() * (100 - 30 + 1) + 30); i++) {
      nums.push({ id: i, imageUrl: `https://source.unsplash.com/random/${i}` });
    }
    setImages(nums);
  }, []);

  // หา Index ของข้อมูลภาพที่จะแสดงในหน้า Pagination ปัจจุบัน
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Function เปลี่ยนหน้า Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="mt-10 flex justify-center">
        <h1 className="text-4xl font-bold mb-16">Random Images Pagination</h1>
      </div>

      <div className="flex flex-wrap sm:gap-10 justify-center 2xl:justify-around mb-16">
        {currentImages.map((image) => (
          <div key={image.id}>
            <Card img={image.imageUrl} />
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
