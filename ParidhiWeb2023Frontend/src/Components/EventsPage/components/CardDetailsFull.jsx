import React from "react";
import { useParams } from "react-router-dom";
import NavbarMain from "../../Navbar/NavbarMain";
import BiggerCardContainer from "../styles/CardBigger.styled";
import GamingMain from "../assets/GamingMain.jpeg";
const CardDetailsFull = (props) => {
  const { event } = useParams();
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
      <BiggerCardContainer onMouseMove={moveLight}>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        <div className="text">
          {/* <div className="eventSection"> */}
          <img src={GamingMain} alt="" className="poster" />

          <div className="details">
            <div className="event">{event}</div>
            <hr />
            <div className="regFee">Registration Fee : RS.200</div>
            <hr />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            harum eius ipsum rerum alias saepe dolore dignissimos natus, aut
            facilis laboriosam nihil quibusdam rem sit corrupti. Quaerat
            nesciunt non esse facere atque natus, dolor doloremque nihil
            praesentium, mollitia quisquam rem perspiciatis unde accusamus animi
            deserunt? Consequuntur similique sequi dolorum, iste fugiat
            doloribus quaerat nam at unde voluptates dignissimos, voluptatum
            tempore odit. Beatae optio consectetur sapiente dolor reprehenderit
            labore doloremque rerum provident amet nemo sint recusandae dolore,
            veritatis eaque dicta velit veniam nesciunt, dignissimos, eligendi
            facere distinctio aut nisi? Error libero repellendus itaque nostrum
            dolor unde atque delectus totam ex veniam?
            <button>Event Rules</button>
          </div>
          {/* </div> */}
        </div>
      </BiggerCardContainer>
    </>
  );
};

export default CardDetailsFull;
