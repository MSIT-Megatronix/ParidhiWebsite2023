import React, { useState } from "react";
import { WorkshopCardContainer } from "./Styles/WorkShopContainer.styled";
import GamingMain from "./assets/GamingMain.jpeg";
const WorkshopCard = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repellat nemo, dicta deleniti vel reprehenderit accusantium! Nam nulla laboriosam corporis quaerat necessitatibus, voluptatem fuga fugit nesciunt dolore expedita qui suscipit obcaecati inventore nihil ab odio laborum earum consequuntur. Dolor rerum ducimus totam veritatis. Maxime corrupti voluptas minus, inventore quibusdam soluta.";
  const seeMore = (
    <span style={{ fontWeight: "700", cursor: "pointer" }}>...See More</span>
  );
  const seeLess = (
    <span style={{ fontWeight: "700", cursor: "pointer" }}>...See Less</span>
  );
  const [Open, setOpen] = useState(false);
  const [OpenDetails, setOpenDetails] = useState(false);
  return (
    <WorkshopCardContainer>
      <div className="card" style={{ height: Open ? "620px" : "380px" }}>
        <img src={GamingMain} alt="" className="poster" />
        <hr />
        <div className="heading">Coding Workshop</div>
        <hr />
        <div
          className="details"
          onClick={() => {
            setOpen(!Open);
            // setTimeout(() => {
            //   setOpenDetails(!OpenDetails);
            // }, 250);
          }}
        >
          {!Open ? lorem.slice(0, 60) : lorem}
          {!Open ? seeMore : seeLess}
        </div>
        <button>Register</button>
      </div>
    </WorkshopCardContainer>
  );
};

export default WorkshopCard;
