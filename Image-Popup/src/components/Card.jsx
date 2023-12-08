import React from "react";

export default function card(props) {

  return (
    <div>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs lg:max-w-sm">
        <img className="rounded-t-lg" src="https://picsum.photos/500" />
        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 mb-3">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => {props.setVis("")}}>Zoom</button>
        </div>
      </div>
    </div>
  );
}
