import React from "react";
import { motion } from "framer-motion";
import { HeroContainer } from "../styles/HeroContainer.styled";
import CountdownTimer from "./CountDownTimer";
import NewsTicker from "./NewsTicker";
import YouTube from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

const socialMedia = [{data: <Facebook />,cls:'fb'}, {data:<Instagram />,cls:"insta"}, {data:<LinkedIn />,cls:"ldin"}, {data:<YouTube />,cls:"ytb"}];
const Hero = () => {
  //   const LEFT_DAYS_IN_MS = 27 * 24 * 60 * 60 * 1000;
  //   var dt = new Date( "March 31, 2023 00:00:00" );
  const PADIDHI_START_DATE_IN_MS = new Date(
    "March 31, 2023 00:00:00"
  ).getTime();
  const dateTimeAfterLeftDays = PADIDHI_START_DATE_IN_MS;

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
            <li>
              <div className="line"></div>
            </li>
            {socialMedia.map((data, index) => {
              return <li className={`btn ${data.cls}`} key={1+index}>{data.data}</li>;
            })}
          </ul>
        </motion.div>
      </HeroContainer>
    </>
  );
};

export default Hero;
