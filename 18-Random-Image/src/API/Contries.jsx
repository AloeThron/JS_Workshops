import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function ContriesAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="m-10 flex justify-center box-content">
        <div className="flex flex-wrap md:gap-10 justify-center 2xl:justify-around">
          {data.map((m) => (
            <div key={m.name.common}>
              <Card name={m.name.common} region={m.region} area={m.area} flag={m.flags.png} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
