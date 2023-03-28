import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import megalogo from "./assets/megalogowithstroke.png";
import NavbarContainer, {
  SideModalContainer,
} from "./styles/NavbarContainer.styled";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import NavElem from "./Scripts/NavElements";
import back from "./assets/back.png";
import { NavLink, useNavigate } from "react-router-dom";
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
  const Navigate = useNavigate();
  const [menuopen, setMenuopen] = useState(false);
  useEffect(() => {
    console.log(menuopen);
    const root = document.getElementById("root");
    if (root) {
      root.style.height = menuopen ? "100vh" : "100%";
    }
  }, [menuopen]);
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
              <img
                src={megalogo}
                alt=""
                style={{ width: "60px", cursor: "pointer" }}
                onClick={() => {
                  Navigate("/");
                }}
              />
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
                  <NavLink
                    className="nav_links"
                    to={data.link}
                    style={({ isActive }) => ({
                      textShadow: isActive ? "0px 0px 5px #00eaff" : "",
                    })}
                    key={index}
                  >
                    <motion.li variants={item}>{data.nav}</motion.li>
                  </NavLink>
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
              <img
                src={megalogo}
                alt=""
                style={{ width: "70px", cursor: "pointer" }}
                onClick={() => {
                  Navigate("/");
                }}
              />
              <button className="btn1">Sign Up</button>
              <MenuRoundedIcon
                className="toggle"
                onClick={() => {
                  setMenuopen(true);
                }}
              />
              <ul className="nav_all">
                {NavElem.map((data, index) => {
                  return (
                    <NavLink
                      className="nav_links"
                      to={data.link}
                      style={({ isActive }) => ({
                        textShadow: isActive ? "0px 0px 5px #00eaff" : "",
                        letterSpacing: isActive ? "2px" : "",
                      })}
                      key={index}
                    >
                      <motion.li variants={item}>{data.nav}</motion.li>
                    </NavLink>
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
