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
        </div>
        `
        <div className="text">
          <WorkshopCard
            image={
              "https://paridhinewbucket.s3.ap-south-1.amazonaws.com/CivilAll/TOT.jpeg"
            }
            data={
              "Let the games be ventured! Megatronix brings the exclusive Pre Praidhi event for MSIT student where they can experience the thrill and adventure of the event “Treasure Hunt” to gear up before the mega fest Paridhi 2023. Register now and win exciting goodies! Registration"
            }
            len={150}
            name="Treasure Hunt"
            registration_link="https://forms.gle/bjdbwe9LuFhaSvFB8"
          />
          <WorkshopCard
            image={
              "https://paridhinewbucket.s3.ap-south-1.amazonaws.com/mainDomain/WhatsApp+Image+2023-03-29+at+9.45.52+AM.jpeg"
            }
            data={
              "Gear up for ultimate Pre-Paridhi event before the main showdown at Paridhi 2023!! Megatronix presents to you the Doodling Pre-Paridhi event on 29th&30th March to portray your artistic skills before the mega event. Rules: a) Draw and post your pictures on fb and tag Paridhi 2023 on your post. (The Picture should follow a theme of your choosing) b) Give hashtags #Paridhi2023 and #megatronix c) Selected doodle artists will win exclusive goodies. Don't miss this opportunity and experience the excitement before! Contact: MEGHA RANJAN - 8240960460 ANIKET BANERJEE - 9330481602"
            }
            len={150}
            name={"Sketch It"}
            disable={true}
            disableMsg={"Registration not required"}
            // registration_link={""}
          />
          <WorkshopCard
            image={
              "https://paridhinewbucket.s3.ap-south-1.amazonaws.com/mainDomain/CodingMain.jpeg"
            }
            data={
              "As paridhi is right around the corner,Megatronix is here to give you a taste of the grand Fiesta! Participate in the pre paridhi coding contest and stand a chance to win exciting prizes!"
            }
            len={150}
            name="CP practice contest"
            disable={true}
            registration_link="https://forms.gle/izk6gTF1hyG6d57P9"
          />
        </div>
      </WorkshopContainer>
    </>
  );
};

export default PreParidhiEventsMain;
