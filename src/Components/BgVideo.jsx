import React from "react";
import videoBg from "../assets/cloudsLoop.mp4";

const BgVideo = () => {
  return (
    <video
      src={videoBg}
      autoPlay
      muted
      loop
      className="h-screen object-cover w-full fixed object-top -z-10"
    ></video>
  );
};

export default BgVideo;
