import React from "react";
import MemberCard from "./components/MemberCard";
import TeamPageContainer from "./Styles/TeamPageContainer.styled";
import gridImg from "../HomePage/assets/grid.svg";
import NavbarMain from "../Navbar/NavbarMain";
const TeamMain = () => {
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
      <TeamPageContainer bg={gridImg} onMouseMove={moveLight}>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        <div className="text">
          <MemberCard />
        </div>
      </TeamPageContainer>
    </>
  );
};

export default TeamMain;
