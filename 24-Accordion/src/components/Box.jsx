import React from "react";
import { useState } from "react";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

export default function Box({ title, description }) {
  const [show, setShow] = useState(false);

  return (
    <div className="my-10 w-[500px] bg-gradient-to-br from-slate-50 to-gray-50 p-5 shadow rounded">
      <div className="flex justify-between">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-xl" onClick={() => setShow(!show)}>
          {show ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
        </div>
      </div>
      <div className={`${show ? "" : "hidden"} mt-4`}>{description}</div>
    </div>
  );
}
