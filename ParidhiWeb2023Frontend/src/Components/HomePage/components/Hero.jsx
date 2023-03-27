import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeroContainer } from "../styles/HeroContainer.styled";
import CountdownTimer from "./CountDownTimer";
import NewsTicker from "./NewsTicker";
import YouTube from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";
const socialMedia = [
  {
    data: <Facebook />,
    cls: "fb",
    link: "https://www.facebook.com/msitparidhi2023",
  },
  {
    data: <Instagram />,
    cls: "insta",
    link: "https://www.instagram.com/megatronix__msit/",
  },
  {
    data: <LinkedIn />,
    cls: "ldin",
    link: "https://www.linkedin.com/company/msitmegatronix/",
  },
  {
    data: <YouTube />,
    cls: "ytb",
    link: "https://www.youtube.com/@megatronixmsit921/videos",
  },
];
const Hero = () => {
  const Navigate = useNavigate();
  const [chatbot, setchatbot] = useState(false);
  //   const LEFT_DAYS_IN_MS = 27 * 24 * 60 * 60 * 1000;
  //   var dt = new Date( "March 31, 2023 00:00:00" );
  const PADIDHI_START_DATE_IN_MS = new Date(
    "March 31, 2023 10:00:00"
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
        <div className="footer">
          <button className="chat-bot" onClick={() => setchatbot(!chatbot)}>
            <ForumIcon />
          </button>
          <motion.div className="socials">
            <ul>
              <li>
                <div className="line"></div>
              </li>
              {socialMedia.map((data, index) => {
                return (
                  <li className={`btn`} key={1 + index}>
                    <a
                      className={data.cls}
                      href={data.link}
                      target="#"
                    >
                      {data.data}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
        {chatbot && (
          <iframe
            className="chat-bot-mega"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/4cbd55d9-db0b-47c8-a0db-9ba40da60d02"
          />
        )}
      </HeroContainer>
    </>
  );
};

export default Hero;
