import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <App>
    //   <App.Route path="/" exact component={Home} />
    //   <App.Route path="/about" exact component={About} />
    // </App>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      {/* always means it inside / so-it hits when it is home */}
      <Route path="about" element={<About />} />
      {/* <Route path="contact/" element={<Layout />}>
        <Route path=":media1" element={<Insta />} />
      </Route> */}
      {/* above is for child child, deep routing */}
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route path="user" element={<User />} />
      <Route path="github" element={<Github />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
