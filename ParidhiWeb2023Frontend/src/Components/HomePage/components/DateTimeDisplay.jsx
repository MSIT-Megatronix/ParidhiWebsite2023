import React from "react";
import { CountDownContainer } from "../styles/HeroContainer.styled";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <CountDownContainer className={isDanger ? "countdown danger" : "countdown"}>
      <p className="time">{value < 10 ? `0${value}` : value}</p>
      <span className="time-type">{type}</span>
    </CountDownContainer>
  );
};

export default DateTimeDisplay;
