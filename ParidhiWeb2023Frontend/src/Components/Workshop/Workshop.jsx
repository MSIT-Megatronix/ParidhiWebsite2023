import React from "react";
import NavbarMain from "../Navbar/NavbarMain";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import civil from "./assets/Civil.png";
import coding from "./assets/Coding.png";
import { WorkshopPageContainer } from "./Styles/Workshop.styled";
import BiggerCardContainer from "../EventsPage/styles/CardBigger.styled";
import GamingMain from "./assets/GamingMain.jpeg";
import WorkshopContainer from "./Styles/WorkShopContainer.styled";
import Cards from "../EventsPage/components/Cards";
import WorkshopCard from "./WorkshopCard";
const lorem =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam voluptates quibusdam nihil magni nobis quo laudantium ea iste sint ab blanditiis et qui, at, placeat libero tenetur similique. Maiores, exercitationem, impedit nulla ex a distinctio corporis asperiores cumque modi sed, voluptatem numquam recusandae libero illo blanditiis. Assumenda nesciunt repellat reiciendis asperiores. Commodi nam repellat aliquid animi! Accusantium, eum molestias? Nulla eaque culpa deserunt, labore alias velit quibusdam obcaecati illum explicabo quos consectetur voluptatem rerum repellat veritatis quo corporis et numquam? Iusto, ipsa asperiores obcaecati dicta vero possimus mollitia veritatis ab facere consectetur voluptatibus? Neque, fuga in mollitia enim tempore doloribus.";
const Workshop = () => {
  const moveLight = (e) => {
    const light = document.querySelector(".light");
    const grid = document.querySelector(".grid");
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
  };
  return (
    <>
      <NavbarMain />
      <WorkshopContainer onMouseMove={moveLight}>
        {/* <BiggerCardContainer> */}
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        <div className="text">
          <WorkshopCard
          image={"https://paridhinewbucket.s3.ap-south-1.amazonaws.com/mainDomain/CodingMain.jpeg"}
          name={"Coding"}
          // link={}
          onspot={true}
            len={70}
            data={
              "Still afraid of coding? Don't know where to start? Fear not, because Megatronix brings to you Workshops 2.0! For all those who want to learn but don't know how... for all those who feel they're hopelessly falling behind. Workshops 2.0 gives you an opportunity to go back to the basics, learn from the ground up! Extended sessions of Java, Python, Competitive Programming and much more to help you build your base in coding. So, get ready, because Workshops 2.0 starts soon!"
            }
          />
          <WorkshopCard image={"https://paridhinewbucket.s3.ap-south-1.amazonaws.com/mainDomain/WhatsApp+Image+2023-03-14+at+10.13.46+PM.jpeg"} name={"Autonomous"} disable={true} len={60} data={"Ever felt so lazy that you just didn't wanna get up and wished there was a robot to do the work for you? Maybe you even had the idea about the robot but didn't have the resources or knowledge to make it? Megatronix is providing you with that knowledge and resources through our Autonomous Robotics Workshop. Its time to finally make those robots you always dreamed of."} />
          {/* <WorkshopCard len={70} data={lorem} /> */}
        </div>
      </WorkshopContainer>
    </>
  );
};

export default Workshop;
