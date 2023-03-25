import React, { useEffect, useState } from "react";
import HomepageContainer from "./styles/HomeMain.styled";
import gridImg from "./assets/grid.svg";
import NavbarMain from "../Navbar/NavbarMain";
import Hero from "./components/Hero";
import PreLoader from "./components/PreLoader";
import { motion } from "framer-motion";
const HomeMain = () => {
  const [Data, setData] = useState(false);
  const moveLight = (e) => {
    const light = document.querySelector(".light");
    const grid = document.querySelector(".grid");
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
  };
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 4000);
  }, []);
  return (
    <>
      {Data ? (
        <>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:1}}>
            <NavbarMain />
            <HomepageContainer bg={gridImg} onMouseMove={moveLight}>
              <div className="hex-grid">
                <div className="light"></div>
                <div className="grid"></div>
              </div>
              <div className="text">
                <Hero />
              </div>
            </HomepageContainer>
          </motion.div>
        </>
      ) : (
        <PreLoader />
      )}
    </>
  );
};

export default HomeMain;
