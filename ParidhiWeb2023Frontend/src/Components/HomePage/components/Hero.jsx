import React from "react";
import { motion } from "framer-motion";
import { HeroContainer } from "../styles/HeroContainer.styled";
import CountdownTimer from "./CountDownTimer";
import NewsTicker from "./NewsTicker";
import YouTube from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

const Hero = () => {
  const LEFT_DAYS_IN_MS = 27 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterLeftDays = NOW_IN_MS + LEFT_DAYS_IN_MS;

  return (
    <>
      <HeroContainer>
        <div className="countdown">
          <CountdownTimer targetDate={dateTimeAfterLeftDays} />
        </div>
        <div className="paridhi">
          <NewsTicker />
        </div>
        <motion.div className="socials">
          <ul>
            <li><div className="line"></div></li>
            <li><Facebook/></li>
            <li><Instagram/></li>
            <li><LinkedIn/></li>
            <li><YouTube/></li>
          </ul>
        </motion.div>
      </HeroContainer>
    </>
  );
};

export default Hero;
