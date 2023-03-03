import React from "react";
import NewsTickerContainer from "../styles/NewsTicker.styled";

const NewsTicker = () => {
  return (
    <NewsTickerContainer>
      <div></div>
      <marquee
        width="100%"
        behavior="scroll"
        direction="left"
        height="200px"
        scrollamount="30"
        className="marque"
      >
        Paridhi <span>2023</span> coming soon
        {/* coming soon{" "} */}
      </marquee>
      {/* <marquee behavior="scroll" direction="left" scrollamount="20">
        Fast Scrolling
      </marquee> */}
      <div></div>
    </NewsTickerContainer>
  );
};

export default NewsTicker;
