import React from "react";

export default function card(props) {

  return (
    <div>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs lg:max-w-sm">
        <img className="h-80 rounded-t-lg bg-cover bg-center" src={props.url} />
        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {props.type}
          </h5>

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={() => {
                props.setVis("")
                props.setImg(props.name)
            }}>Zoom</button>
        </div>
      </div>
    </div>
  );
}
