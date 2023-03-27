import React from "react";
import NavbarMain from "../Navbar/NavbarMain";
import { sponsorss } from "./SponsorData";
import a from "./assets/a.png";
import b from "./assets/b.png";
import c from "./assets/c.png";
import d from "./assets/d.png";
import e from "./assets/e.jpeg";
import f from "./assets/f.png";
import g from "./assets/g.png";
import h from "./assets/h.png";
import i from "./assets/i.png";
const Sponsor = () => {
  return (
    <>
      <NavbarMain />
      <div className="hex-grid">
        <div className="light"></div>
        <div className="grid"></div>
      </div>
      <div
        className="text"
        style={{
          position: "absolute",
          zIndex: "3",
          marginTop: "70px",
          padding: "0px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {[a, b, c, d, e, f, i].map((data) => {
          return (
            <img
              src={data}
              alt=""
              style={{ zIndex: 2 ,padding: "10px"}}
              width={200}
            />
          );
        })}
      </div>
    </>
  );
};

export default Sponsor;
