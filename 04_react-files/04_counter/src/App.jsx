import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;

  // const addvalue =()=>{
  //   counter = counter + 1;
  //   console.log(counter);
  // }//we canit update things like this here in react

  //state----> re rendering UI when there is any change in UI

  const [counter, setCounter] = useState(15); //name and method --> var and function, every time we update we get new const state so we can use no need of let

  const addvalue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);//bundels everthing---reconsilation algo ---batching 
  };

  const decval = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Tharun basic project-1</h1>
      <h2>COUNTER VALUE : {counter}</h2>
      <button onClick={addvalue}>ADD VAL</button>{" "}
      <button onClick={decval}>REMOVE VAL</button>
      <h3>previous count : {counter - 1}</h3>
      <p>footer: </p>
    </>
  );
}

export default App;
