import React, { useState } from "react";
import megalogo from "./assets/megalogowithstroke.png";
import NavbarContainer from "./styles/NavbarContainer.styled";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const SideModal = () => {
  return (
    <>
      <img src={megalogo} alt="" style={{ width: "80px" }} />
      <div className="nav-items">
        {menuopen === "block" ? (
          <CloseRoundedIcon
            className="toggle"
            onClick={() => {
              setMenupen("none");
            }}
          />
        ) : (
          <MenuRoundedIcon
            className="toggle"
            onClick={() => {
              setMenupen("block");
            }}
          />
        )}
        <ul className="nav_all">
          <li>Events</li>
          <li>Workshop</li>
          <li>Pre-Paridhi Events</li>
          <li>Our Team</li>
        </ul>
      </div>
    </>
  );
};

export default SideModal;
