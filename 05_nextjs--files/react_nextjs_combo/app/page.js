// "use client";
// import React from "react";

// const page = () => {
//   let a = 10;
//   const changemarks = () => {
//     console.log(a);
//     a = 20;
//     console.log(a);
//   };
//   return (
//     <div className="font-bold text-xl">
//       hello {a}
//       <button className="bg-blue-300 divide-fuchsia-200" onClick={changemarks}>change</button>
//       {/* this is not way of calling functions or using varibales */}
//     </div>
//   );
// };

// export default page;

"use client";
import { useState } from "react";
import React from "react";
import Header from "@/Components/Header";
// import Link from "next/link";


const page = () => {
  const [marks, setMarks] = useState(80);
  const [user, setUser] = useState("THARUN");
  return (
    <>
    <Header user={user}/>
      <div className="p-6 m-2">
        <div className="font-bold text-3xl ">hello marks are {marks}</div>
        <button
          className="bg-blue-300 p-2 m-2"
          onClick={() => {
            setMarks(100);
          }}
        >
          Update
        </button>
        <div>
          <h2>THIS IS HOME page AND TESING FOR ROUTING </h2>
          {/* <Link href="/about"></Link> */}
          <a href="/About">ABOUT</a>
          <a href="/Contact">CONTACT</a>
        </div>
      </div>
    </>
  );
};

export default page;
