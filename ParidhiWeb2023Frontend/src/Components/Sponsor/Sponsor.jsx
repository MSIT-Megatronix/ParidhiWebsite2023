import React from "react";
import NavbarMain from "../Navbar/NavbarMain";
import { sponsors } from "./SponsorData";

import { SponsorWrapper } from "./SponsorWrapper";
const Sponsor = () => {
  const moveLight = (e) => {
    const light = document.querySelector(".light");
    const grid = document.querySelector(".grid");
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
  };
  return (
    <>
      <NavbarMain />
      <SponsorWrapper onMouseMove={moveLight}>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        <div className="text">
          {sponsors.map((data,index) => {
            return (
              <div className="sponsor" key={data.names+data.index}>
                <img
                  src={data.img}
                  alt=""
                  style={{ padding: "10px", marginTop: "-20px" }}
                  width={180}
                />
                <div className="sporsor-details">{data.name}</div>
              </div>
            );
          })}
        </div>
      </SponsorWrapper>
    </>
  );
};

export default Sponsor;
