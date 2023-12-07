import React from "react";
import { IoIosNotifications } from "react-icons/io";

function popup(props) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg bg-gray-50 px-16 py-14">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-200 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
              <IoIosNotifications className="text-4xl text-green-100" />
            </div>
          </div>
        </div>

        <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
          Congratuation!
        </h3>

        <p className="w-[230px] text-center font-normal text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          veniam sit suscipit illo
        </p>

        <button
          className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8"
          onClick={() => {
            props.setCls("z-10 absolute left-0 top-0 h-screen w-full invisible");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default popup;
