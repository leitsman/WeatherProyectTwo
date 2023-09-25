import React from "react";

const BgVideo = () => {
  return (
    <video
      src="/src/assets/cloudsLoop.mp4"
      autoPlay
      muted
      loop
      className="h-screen object-cover w-full fixed object-top -z-10"
    ></video>
  );
};

export default BgVideo;
