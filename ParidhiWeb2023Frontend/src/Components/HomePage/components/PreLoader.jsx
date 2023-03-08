import React from "react";
import Thunder from "../assets/Thunder2.mp4";
import loading from '../../../assets/loading.gif'
const PreLoader = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          background: "#000",
        }}
      >
        <video
          style={{ height: "70%", width: "50%" }}
          src={Thunder}
          autoPlay
          loop
          muted
        />
        {/* <img src={loading} alt="" /> */}
      </div>
    </>
  );
};

export default PreLoader;
