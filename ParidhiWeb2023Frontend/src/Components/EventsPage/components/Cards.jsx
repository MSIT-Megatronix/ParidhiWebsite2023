import React from "react";
import { Button, SvgIcon } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { CardsWrapper } from "../styles/EventspageContainer.styled";
// import codingImg from "../assets/CodingImg.png";
import megalogo from "../../Navbar/assets/megalogowithstroke.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
const Cards = (props) => {
  const Navigate = useNavigate();
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
  const Button = {
    hidden: {},
    transition: {
      repeatType: "loop",
      repeat: Infinity,
      type: "spring",
      stiffness: 200,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };
  const btnItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      // transition: {
      //   repeat: Infinity,
      // },
    },
  };
  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch("eco.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "eco.pdf";
  //       alink.click();
  //     });
  //   });
  // };
  return (
    <CardsWrapper>
      <motion.div
        // onClick={() => {
        //   Navigate(`${props.domain.toLowerCase()}`);
        // }}
        variants={Card}
        viewport={{ once: false }}
        initial="hidden"
        whileInView="show"
        // animate="show"
        className={`card ${props.bt}`}
      >
        <motion.div className="domImgDiv" variants={item}>
          <img src={props.image} alt="" className="domainImg" />
        </motion.div>
        {/* <motion.div className="corner-top" variants={item}>
          <img src={megalogo} alt="logo" className="logo" />
        </motion.div> */}
        <motion.div className="details" variants={item}>
          <div className="heading">{props.name}</div>
          <div className="domainDetails">
            {props.details}
          </div>
          <motion.button
            // onClick={onButtonClick}
            className={"event-btn"}
            onClick={() => {
              Navigate(props.name.toLowerCase().split("-")[0]);
            }}
          >
            {props.button}
            <motion.div
              className="arrow-event-btn"
              animate={{ opacity: 0.4 }}
              transition={{
                from: 0,
                duration: 2,
                delay: 2,
                repeatType: "loop",
                repeat: Infinity,
              }}
            >
              <KeyboardArrowRightRoundedIcon />
            </motion.div>
            <motion.div
              className="arrow-event-btn"
              // variants={btnItem}
              animate={{ opacity: 0.6 }}
              transition={{
                from: 0,
                duration: 2,
                delay: 2.5,
                repeatType: "loop",
                repeat: Infinity,
              }}
              // initial={{ opacity: 0 }}
              // animate={{
              //   opacity: 1,
              //   transition:{ repeat: Infinity, duration: 0.5, repeatDelay: 2.5 ,repeatType:"loop"}
              // }}
            >
              <KeyboardArrowRightRoundedIcon />
            </motion.div>
            <motion.div
              className="arrow-event-btn"
              // variants={btnItem}
              animate={{ opacity: 0.8 }}
              transition={{
                from: 0,
                duration: 2,
                delay: 3,
                repeatType: "loop",
                repeat: Infinity,
              }}
              // initial={{ opacity: 0 }}
              // animate={{
              //   opacity: 1,
              //   transition:{ repeat: Infinity, duration: 0.5, repeatDelay: 3,repeatType:"loop" }
              // }}
            >
              <KeyboardArrowRightRoundedIcon />
            </motion.div>
            <motion.div
              className="arrow-event-btn"
              // variants={btnItem}
              animate={{ opacity: 1 }}
              transition={{
                from: 0,
                duration: 2,
                delay: 3.5,
                repeatType: "loop",
                repeat: Infinity,
              }}
              // initial={{ opacity: 0 }}
              // animate={{
              //   opacity: 1,
              //   transition:{ repeat: Infinity, duration: 0.5, repeatDelay:3.5,repeatType:"loop" }
              // }}
            >
              <KeyboardArrowRightRoundedIcon />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </CardsWrapper>
  );
};

export default Cards;
