import React from "react";
import reactLogo from "../assets/react.svg";

const TheLoader = ({ ValueMessage, opacityy, ZIndex }) => {
  return (
    <div className="loader" style={{ opacity: opacityy, zIndex: ZIndex }}>
      <div>
        <img src={reactLogo} className="logo" alt="loaderImg" />
      </div>
      {ValueMessage && <h2>se debe dar permisos de geolocalizacion</h2>}
    </div>
  );
};

export default TheLoader;
