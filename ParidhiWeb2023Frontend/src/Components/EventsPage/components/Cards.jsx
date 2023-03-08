import React from "react";
import { Button, SvgIcon } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { CardsWrapper } from "../styles/EventspageContainer.styled";
import codingImg from "../assets/CodingImg.png";
import megalogo from "../../Navbar/assets/megalogowithstroke.png";
import { motion } from "framer-motion";
const Cards = (props) => {
  const Card = {
    hidden: { opacity: 0, x: -100 },
    transition: { type: "spring", stiffness: 200 },
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
  return (
    <CardsWrapper>
      <motion.div
        variants={Card}
        viewport={{ once: false }}
        initial="hidden"
        whileInView="show"
        // animate="show"
        className={`card ${props.bt}`}
      >
        <motion.div className="domImgDiv" variants={item}>
          <img src={codingImg} alt="" className="domainImg" />
        </motion.div>
        <motion.div className="corner-top" variants={item}>
          <img src={megalogo} alt="logo" className="logo" />
        </motion.div>
        <motion.div className="details" variants={item}>
          <div className="heading">Robotics</div>
          <div className="domainDetails">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            non et,Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus, dolorum?
          </div>
        </motion.div>
      </motion.div>
    </CardsWrapper>
  );
};

export default Cards;
