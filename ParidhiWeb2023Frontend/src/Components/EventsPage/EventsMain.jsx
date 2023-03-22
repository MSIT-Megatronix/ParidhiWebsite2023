import React, { useState } from "react";
import NavbarMain from "../Navbar/NavbarMain";
import gridImg from "../HomePage/assets/grid.svg";
import { EventspageContainer } from "./styles/EventspageContainer.styled";
import Cards from "./components/Cards";
import { motion } from "framer-motion";
import { CardData } from "./StaticJS/CardData";
const EventsMain = () => {
  const moveLight = (e) => {
    const light = document.querySelector(".light");
    const grid = document.querySelector(".grid");
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
  };
  const CardVariant = {
    hidden: { opacity: 0, y: 600 },
    transition: { type: "spring", stiffness: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavbarMain />
      <EventspageContainer onMouseMove={moveLight}>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        <div className="text">
          <motion.div
            className="events"
            onClick={() => {
              setOpen(true);
            }}
            variants={CardVariant}
            initial="hidden"
            animate="show"
          >
            {CardData.map((data, index) => {
              console.log(data.details);
              return (
                <Cards
                  bt={data.class}
                  image={data.image}
                  name={data.name}
                  key={index}
                  details={data.details}
                  button="events"
                />
              );
            })}
          </motion.div>
          {open && <div></div>}
        </div>
      </EventspageContainer>
    </>
  );
};

export default EventsMain;
