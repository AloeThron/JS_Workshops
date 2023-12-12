import React from "react";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

export default function Card({ id, img }) {
  return (
    <div className=" max-h-[800px] p-6 sm:p-24 lg:p-8 flex justify-center items-center">
      <div className="rounded-lg md:flex items-center bg-gray-100 shadow-xl">
        <div className="rounded-t-lg md:rounded-t-none md:rounded-l-lg">
          <img
            className="w-full max-h-[800px] object-cover object-center rounded-l-lg"
            src={img}
          />
        </div>
        <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
          <div className="p-12 md:pr-24 md:pl-16 md:py-12">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              sequi voluptatibus ad omnis, pariatur corporis consequatur animi
              magnam exercitationem, mollitia dolore illum, iste ab! Distinctio
              excepturi odit neque incidunt. Quisquam?
            </p>
            <a
              className="mt-10 flex items-baseline text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
              href="#"
            >
              <span>More about</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
