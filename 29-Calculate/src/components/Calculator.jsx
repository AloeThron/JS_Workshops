import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("0");

  const cb =
    "bg-amber-400 w-10 rounded-md m-2 p-2 text-2xl font-bold hover:brightness-90 active:translate-y-1 sm:w-20";
  const nb =
    "bg-gray-200 w-10 rounded-md m-2 p-2 text-2xl font-bold hover:brightness-90 active:translate-y-1 sm:w-20";

  function display(v) {
    if (input.toString().charAt(0) === "0") {
      setInput(v);
    } else {
      setInput(input + v);
    }
  }

  function reset() {
    setInput("0");
  }

  function calculate() {
    let result = eval(input)
    setInput(result)
  }

  return (
    <div className="min-w-[300px] bg-gradient-to-br from-slate-50 to-gray-50 p-5 rounded-lg">
      <div className="m-2 p-4 text-4xl font-bold text-end bg-black text-white rounded-lg">
        {input}
      </div>
      <div>
        <div className="flex justify-center items-center">
          <button className={cb} onClick={() => display("+")}>
            +
          </button>
          <button className={cb} onClick={() => display("-")}>
            -
          </button>
          <button className={cb} onClick={() => display("*")}>
            x
          </button>
          <button className={cb} onClick={() => display("/")}>
            ÷
          </button>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 items-center">
            <button className={nb} onClick={() => display("7")}>
              7
            </button>
            <button className={nb} onClick={() => display("8")}>
              8
            </button>
            <button className={nb} onClick={() => display("9")}>
              9
            </button>
            <button className={nb} onClick={() => display("4")}>
              4
            </button>
            <button className={nb} onClick={() => display("5")}>
              5
            </button>
            <button className={nb} onClick={() => display("6")}>
              6
            </button>
            <button className={nb} onClick={() => display("1")}>
              1
            </button>
            <button className={nb} onClick={() => display("2")}>
              2
            </button>
            <button className={nb} onClick={() => display("3")}>
              3
            </button>
            <button className={nb} onClick={() => display(".")}>
              .
            </button>
            <button className={nb} onClick={() => display("0")}>
              0
            </button>
            <button className={nb} onClick={reset}>
              C
            </button>
          </div>
          <button className={cb} onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
