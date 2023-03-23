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
          <WorkshopCard length={70} />
          <WorkshopCard length={70} />
          <WorkshopCard length={70} />
        </div>
      </WorkshopContainer>
    </>
  );
};

export default Workshop;
