import React, { useState } from "react";
import { motion } from "framer-motion";
import megalogo from "./assets/megalogowithstroke.png";
import NavbarContainer, {
  SideModalContainer,
} from "./styles/NavbarContainer.styled";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import NavElem from "./Scripts/NavElements";
import back from "./assets/back.png";
const SideModalVariant = {
  hidden: { opacity: 0, x: -100 },
  transition: { type: "spring", stiffness: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
const NavbarMain = () => {
  const [menuopen, setMenuopen] = useState(false);
  return (
    <>
      {menuopen ? (
        <SideModalContainer menu={menuopen} backPNG={back}>
          <motion.div
            variants={SideModalVariant}
            initial="hidden"
            animate="show"
          >
            <div className="nav-items">
              <img src={megalogo} alt="" style={{ width: "60px" }} />
              <CloseRoundedIcon
                className="toggle"
                onClick={() => {
                  setMenuopen(false);
                }}
              />
            </div>
            <ul className="nav_all">
              {NavElem.map((data, index) => {
                return (
                  <motion.li variants={item} key={index}>
                    {data.nav}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </SideModalContainer>
      ) : (
        <>
          <NavbarContainer menu={menuopen} backPNG={back}>
            <motion.div
              variants={SideModalVariant}
              initial="hidden"
              animate="show"
              className="nav_div"
            >
              <img src={megalogo} alt="" style={{ width: "70px" }} />
              {/* <div className="links"> */}
              <button className="btn1">Sign Up</button>
              <MenuRoundedIcon
                className="toggle"
                onClick={() => {
                  setMenuopen(true);
                }}
              />
              {/* </div> */}
              <ul className="nav_all">
                {NavElem.map((data, index) => {
                  return (
                    <motion.li variants={item} key={index}>
                      {data.nav}
                    </motion.li>
                  );
                })}
              </ul>
              <motion.button variants={item} className="btn2">
                Sign Up
              </motion.button>
            </motion.div>
          </NavbarContainer>
        </>
      )}
    </>
  );
};

export default NavbarMain;
