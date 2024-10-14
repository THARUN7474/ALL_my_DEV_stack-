import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Headers/Header";
import Footer from "./components/Fotters/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
//this header footer is alwasys in other pages
export default Layout;
