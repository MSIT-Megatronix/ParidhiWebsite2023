import React from "react";
import HomepageContainer from "./styles/HomeMain.styled";
import gridImg from "./assets/grid.svg";
import NewsTicker from "./components/NewsTicker";
import NavbarMain from "../Navbar/NavbarMain";
import Hero from "./components/Hero";
const HomeMain = () => {
  const moveLight = (e) => {
    const light = document.querySelector(".light");
    const grid = document.querySelector(".grid");
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
  };

  return (
    <>
      <NavbarMain/>
      <HomepageContainer bg={gridImg} onMouseMove={moveLight}>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        <div className="text">
          <Hero/>
          {/* <NewsTicker/> */}
        </div>
      </HomepageContainer>
    </>
  );
};

export default HomeMain;
