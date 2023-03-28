import React from "react";
import TeamPageContainer, {
  CardContainer,
} from "../Styles/TeamPageContainer.styled";
import YouTube from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
const container = {
  hidden: { opacity: 1, scale: 0 },
  transition: { type: "spring", stiffness: 200 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  transition: {
    delayChildren: 0.3,
    staggerChildren: 0.2,
  },
};
const item1 = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const MemberCard = (props) => {
  return (
    <>
      <CardContainer>
        <motion.div
          // key={data}
          className="teamcard"
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="imgdiv" variants={item}>
            <img src={props.image} width={200} height={200} alt="" loading="lazy"/>
          </motion.div>
          <motion.div className="name" variants={item}>
            {props.name}
          </motion.div>
          <motion.div className="year" variants={item}>
            {props.year === 4 ? "4TH YEAR" : ""}
            {props.year === 3 ? "3RD YEAR" : ""}
            {props.year === 2 ? "2ND YEAR" : ""}
            {props.year === "volunteer" ? "VOLUNTEER" : ""}
            {/* 4th year */}
          </motion.div>
          <motion.div className="socialMedia" variants={item}>
            <a
              variants={item1}
              href={
                props.fb.split(".com/")[0] !== "https://www.facebook"
                  ? "https://www.facebook.com/"
                  : props.fb
              }
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href={
                props.insta.split(".com/")[0] !== "https://www.instagram"
                  ? "https://www.instagram.com/"
                  : props.insta
              }
              target="_blank"
              variants={item1}
            >
              <Instagram />
            </a>
            <a
              href={
                props.linkedin.split(".com/")[0] !== "https://www.linkedin"
                  ? "https://www.linkedin.com/"
                  : props.linkedin
              }
              target="_blank"
              variants={item1}
            >
              <LinkedIn />
            </a>
            <a variants={item1} href={`mailto:${props.email}`}>
              <EmailRoundedIcon />
            </a>
          </motion.div>
        </motion.div>
      </CardContainer>
    </>
  );
};

export default MemberCard;
