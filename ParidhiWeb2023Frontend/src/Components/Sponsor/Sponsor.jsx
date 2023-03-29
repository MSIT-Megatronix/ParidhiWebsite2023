import React from "react";
import NavbarMain from "../Navbar/NavbarMain";
import { sponsors } from "./SponsorData";
import { SponsorWrapper } from "./SponsorWrapper";
import { motion } from "framer-motion";
const Sponsor = () => {
  const moveLight = (e) => {
    const light = document.querySelector(".light");
    const grid = document.querySelector(".grid");
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChilder:1
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
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
          <motion.div className="card_div" variants={container} initial={"hidden"} animate={"show"}>
            {sponsors.map((data, index) => {
              return (
                <motion.div
                  className="sponsor"
                  key={data.name + index}
                  variants={item}
                >
                  <img
                    src={data.img}
                    alt=""
                    style={{ padding: "10px", marginTop: "-20px" }}
                    width={180}
                  />
                  <div className="sporsor-details">{data.name}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </SponsorWrapper>
    </>
  );
};

export default Sponsor;
