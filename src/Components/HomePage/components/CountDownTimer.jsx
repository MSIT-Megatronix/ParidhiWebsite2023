import React from "react";
import { useCountdown } from "../hooks/useCountDown";
import { CountDownContainer } from "../styles/HeroContainer.styled";
import DateTimeDisplay from "./DateTimeDisplay";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <CountDownContainer>
      <div className="show-counter">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <span className="timecol">:</span>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <span className="timecol">:</span>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <span className="timecol">:</span>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    </CountDownContainer>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
