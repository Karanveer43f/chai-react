import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("white");
  let colors = [
    "red-500",
    "blue-500",
    "green-500",
    "gray-500",
    "orange-500",
    "white",
    "black",
  ];

  const changeColor = (colorIndex) => {
    setColor(colors[colorIndex]);
  };

  return (
    <>
      <div
        className={`w-full h-full fixed top-0 left-0 bg-${color} flex justify-center p-4 items-end`}
      >
        <div className="h-fit flex justify-around w-fit bg-black rounded-2xl border-white border-4">
          <button
            className="h-fit border-white bg-red-500 rounded-2xl m-4"
            onClick={() => changeColor(0)}
          >
            Red
          </button>
          <button
            className="h-fit border-white bg-blue-500 rounded-2xl m-4"
            onClick={() => changeColor(1)}
          >
            Blue
          </button>
          <button
            className="h-fit border-white bg-green-500 m-4 rounded-2xl"
            onClick={() => changeColor(2)}
          >
            Green
          </button>
          <button
            className="h-fit bg-gray-500 border-white m-4 rounded-2xl"
            onClick={() => changeColor(3)}
          >
            Gray
          </button>
          <button
            className="h-fit bg-orange-500 border-white m-4 rounded-2xl"
            onClick={() => changeColor(4)}
          >
            Orange
          </button>
          <button
            className="h-fit bg-white text-black border-yellow-400 m-4 rounded-2xl"
            onClick={() => changeColor(5)}
          >
            White
          </button>
          <button
            className="h-fit bg-black border-white m-4 rounded-2xl"
            onClick={() => changeColor(6)}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
