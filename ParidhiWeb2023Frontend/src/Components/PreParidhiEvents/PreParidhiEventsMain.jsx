import React from "react";
import NavbarMain from "../Navbar/NavbarMain";
import WorkshopContainer from "../Workshop/Styles/WorkShopContainer.styled";
import WorkshopCard from "../Workshop/WorkshopCard";

const PreParidhiEventsMain = () => {
  return (
    <>
      <NavbarMain />
      <WorkshopContainer>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>`
        <div className="text">
          <WorkshopCard
            data={
              "As paridhi is right around the corner,Megatronix is here to give you a taste of the grand Fiesta! Participate in the pre paridhi coding contest and stand a chance to win exciting prizes!"
            }
            link={'https://paridhinewbucket.s3.ap-south-1.amazonaws.com/mainDomain/CodingMain.jpeg'}
            len={130}
            heading="CP practice contest"
            registration_link="https://forms.gle/j1LXmS12TwPe72Gu6"
          />
        </div>
      </WorkshopContainer>
    </>
  );
};

export default PreParidhiEventsMain;
