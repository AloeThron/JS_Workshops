import React from "react";

export default function Zoom(props) {

  return (
    <div className={props.vis}>
      <div className="h-screen w-screen z-10 absolute top-0 left-0">
        <div className="z-20 bg-gray-50 opacity-70 min-h-screen" onClick={() => {props.setVis("hidden")}}></div>
        <div>
          <img
            className="z-30 rounded-lg absolute inset-x-0 inset-y-0 m-auto"
            src="./foods-images/full/1.jpg"
          />
        </div>
      </div>
    </div>
  );
}
