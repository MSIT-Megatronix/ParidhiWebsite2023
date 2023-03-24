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
          style={{ width: "300px",'@media(minWidth:600px)':{ width: "400px"} }}
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

const PageLoader=()=>{
  return(
    <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          position:"relative",
          zIndex:2,
          justifyContent: "center",
          alignItems:"center",
          background: "transparent",
        }}
      >
        <img src={loading} alt="" />
      </div>
  )
}

export default PreLoader;
export {PageLoader};
