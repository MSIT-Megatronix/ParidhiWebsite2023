import React from "react";
import NewsTickerContainer from "../styles/NewsTicker.styled";
import bg from '../../Navbar/assets/back.png'
const NewsTicker = () => {
  return (
    <NewsTickerContainer backPNG={bg}>
      {/* <div></div> */}
      {/* <marquee
        // width="100%"
        behavior="scroll"
        direction="left"
        scrollamount="30"
        className="marque"
      >
        Paridhi <span>2023</span> coming soon
      </marquee> */}
      {/* <marquee behavior="scroll" direction="left" scrollamount="20">
        Fast Scrolling
      </marquee> */}
      {/* <div></div> */}
      <span>
        <p id="paridhi">Paridhi&nbsp;<span id='year'>2023</span></p>
        <p>Announced</p>
        <p className="date">31ST march</p>
        <p className="date">1st & 2nd April</p>
      </span>
    </NewsTickerContainer>
  );
};

export default NewsTicker;
