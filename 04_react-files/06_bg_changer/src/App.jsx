import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const [color2, setColor2] = useState("olive");

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {setColor2("red"), setColor("olive")}}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
            style={{ backgroundColor: color2 }}
          >
            getback
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
