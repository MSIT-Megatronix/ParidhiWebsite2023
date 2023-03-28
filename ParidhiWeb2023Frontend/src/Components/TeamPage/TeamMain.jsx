import React, { useEffect } from "react";
import MemberCard from "./components/MemberCard";
import TeamPageContainer from "./Styles/TeamPageContainer.styled";
import gridImg from "../HomePage/assets/grid.svg";
import NavbarMain from "../Navbar/NavbarMain";
import { team } from "./Static/csvjson";
const TeamMain = () => {
  const moveLight = (e) => {
    const light = document.querySelector(".light");
    const grid = document.querySelector(".grid");
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
  };

  team.sort((a, b) => {
    return b["1.WHICH YEAR ?"] - a["1.WHICH YEAR ?"];
  });
  team.sort((a, b) => {
    if (a["1.WHICH YEAR ?"] == b["1.WHICH YEAR ?"]) {
      if (a["6.NAME"] > b["6.NAME"]) return 1;
      else if (a["6.NAME"] < b["6.NAME"]) return -1;
      else return 0;
    }
  });
  console.log(team);
  return (
    <>
      <NavbarMain />
      <TeamPageContainer bg={gridImg} onMouseMove={moveLight}>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        <div className="text">
          <div className="allcards">
            {team.map((data, index) => {
              return (
                <MemberCard
                  key={index + data["6.NAME"]}
                  name={data["6.NAME"]}
                  image={`https://drive.google.com/uc?export=view&id=${data["ADD PHOTO"].split('id=')[1]}`}
                  email={data.Username}
                  insta={data["3.INSTAGRAM ID"]}
                  linkedin={data["4.LINKEDIN ID"]}
                  year={data["1.WHICH YEAR ?"]}
                  fb={data["5.FACEBOOK ID"]}
                />
                // <div>{data["6.NAME"]} {data["1.WHICH YEAR ?"]}</div>
              );
            })}
          </div>
        </div>
      </TeamPageContainer>
    </>
  );
};

export default TeamMain;
