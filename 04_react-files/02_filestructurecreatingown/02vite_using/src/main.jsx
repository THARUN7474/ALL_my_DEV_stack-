import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Tharun from './Tharun.jsx'


// function Myapp(){
//   return (
//     <div>
//     <h1>hello i am thaurn testing out things --as custom react making to understand react working</h1>
//     </div>
//   )
// };

// const Anothertesting= {
//   <a href="https://github.com/">visit github</a>
// }; we can use this as component directly----like Anothertesting in that below 
// we can use something we define as per our terms like below and expects react to understand it 
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://github.com/",
//     target: "_blank",
//   },
//   //we can call anything -they keyname
//   children: "click me to vist github",
// };

//this works we we can --have no uppercase element 
// const AreactElement = React.createElement(
//   "a",
//   {
//     href: "https://github.com/",
//     target: "_blank",
//   },
//   "click me to vist github",
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Tharun />
    {/* <Myapp/> */}
  </React.StrictMode>,
  //here we can remove REACT.STRICTMODE too as of now !! 
)
