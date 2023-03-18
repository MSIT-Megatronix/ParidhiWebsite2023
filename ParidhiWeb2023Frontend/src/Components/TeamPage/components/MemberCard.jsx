import React from "react";
import TeamPageContainer, {
  CardContainer,
} from "../Styles/TeamPageContainer.styled";
import YouTube from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
const socialMedia = [
  {
    data: <Facebook />,
    cls: "fb",
    link: "https://www.facebook.com/profile.php?id=100014167597895",
  },
  {
    data: <Instagram />,
    cls: "insta",
    link: "https://www.facebook.com/profile.php?id=100014167597895",
  },
  {
    data: <LinkedIn />,
    cls: "ldin",
    link: "https://www.facebook.com/profile.php?id=100014167597895",
  },
];
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
const MemberCard = () => {
  return (
    <>
      <CardContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10].map(() => {
          return (
            <motion.div
              className="teamcard"
              variants={container}
              initial="hidden"
              whileInView="visible"
            >
              <motion.div className="imgdiv" variants={item}>
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </motion.div>
              <motion.div className="name" variants={item}>
                Shubhojit Halder
              </motion.div>
              <motion.div className="year" variants={item}>
                3rd Year{" "}
              </motion.div>
              <motion.div className="socialMedia" variants={item}>
                <a href="" variants={item1}>
                  <Facebook />
                </a>
                <a href="" variants={item1}>
                  <Instagram />
                </a>
                <a href="" variants={item1}>
                  <LinkedIn />
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </CardContainer>
    </>
  );
};

export default MemberCard;
