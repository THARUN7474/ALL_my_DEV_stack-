import React from "react";

const Header = (propss) => {
  return (
    <div className="bg-8 m-4 px-18 p-3 bg-green-400 h-8 flex items-center justify-between">
      <h2>{propss.user}</h2>
      <div className="flex gap-6">
        <h4>ABOUT</h4>
        <h4>CONTACT</h4>
        <h4>HIRE ME</h4>
        <h4>BLOGS</h4>
      </div>
    </div>
  );
};

export default Header;
