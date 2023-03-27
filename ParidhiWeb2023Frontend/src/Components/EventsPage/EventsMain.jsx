import React, { useState, useEffect } from "react";
import NavbarMain from "../Navbar/NavbarMain";
import gridImg from "../HomePage/assets/grid.svg";
import { EventspageContainer } from "./styles/EventspageContainer.styled";
import Cards from "./components/Cards";
import { motion } from "framer-motion";
import { CardData } from "./StaticJS/CardData";
import axios from "axios";
import { PageLoader } from "../HomePage/components/PreLoader";

const EventsMain = () => {
  const [eventData, setEventData] = useState([]);
  const [map, setMap] = useState(false);
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

  const getData = async () => {
    const response = await axios.get("http://localhost:5173/events");
    setEventData(response.data.allevents);
    console.log(response.data.allevents);
    setMap(true);
    // console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavbarMain />
      <EventspageContainer onMouseMove={moveLight}>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        {map ? (
          <div className="text">
            <motion.div
              className="events"
              variants={CardVariant}
              initial="hidden"
              animate="show"
            >
              {eventData.map((data, index) => {
                // console.log(data.details);
                return (
                  <Cards
                    // bt={data.class}
                    image={data.domainevents[0].DomainPosterLink}
                    details={data.domainevents[0].DomainDesc}
                    name={data.domain}
                    key={index}
                    // details={data.details}
                    button="events"
                  />
                );
              })}
            </motion.div>
          </div>
        ) : (
          <PageLoader />
        )}
      </EventspageContainer>
    </>
  );
};

export default EventsMain;
