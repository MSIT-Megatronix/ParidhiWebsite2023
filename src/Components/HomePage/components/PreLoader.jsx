import React from "react";
import Thunder from "../assets/Thunder2.mp4";
import loading from "../../../assets/loading.gif";
import Rhombus from "../assets/Rhombus.gif";
import { PreLoaderCss } from "../styles/PreLoader.styled";
const PreLoader = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
        }}
      >
        <video
          style={{
            width: "300px",
            "@media(minWidth:600px)": { width: "400px" },
          }}
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

const PageLoader = () => {
  return (
    <PreLoaderCss>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          position: "relative",
          zIndex: 2,
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
        }}
      >
        <div id="nest3" />
      </div>
    </PreLoaderCss>
  );
};

export default PreLoader;
export { PageLoader };
