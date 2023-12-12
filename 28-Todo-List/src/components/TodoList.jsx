import React from "react";

export default function TodoList({ id, title, editItem, removeItem }) {
  return (
    <div>
      <div className="flex mb-4 items-center bg-gradient-to-br from-slate-50 to-gray-50 px-5 py-2 rounded-md">
        <p className="w-full text-grey-darkest">{title}</p>
        <button
          className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-orange-600 text-green border-green hover:bg-green"
          onClick={() => {
            editItem(id);
          }}
        >
          Edit
        </button>
        <button
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-red-600 hover:bg-red"
          onClick={() => {
            removeItem(id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
