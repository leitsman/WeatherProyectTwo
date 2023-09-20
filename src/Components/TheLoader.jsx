import React from "react";
import reactLogo from "../assets/react.svg";

const TheLoader = ({ children, ...props }) => {
  return (
    <div {...props} className="loader">
      <div>
        <img src={reactLogo} className="logo" alt="loaderImg" />
      </div>
      <h2>{children}</h2>
    </div>
  );
};

export default TheLoader;
