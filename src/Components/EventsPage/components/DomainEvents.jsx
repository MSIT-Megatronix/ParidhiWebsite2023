import React, { useState, useEffect } from "react";
import NavbarMain from "../../Navbar/NavbarMain";
import { CardData, EventsData } from "../StaticJS/CardData";
import { EventspageContainer } from "../styles/EventspageContainer.styled";
import Cards from "./Cards";
import gridImg from "../../HomePage/assets/grid.svg";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { PageLoader } from "../../HomePage/components/PreLoader";
import axios from "axios";
const DomainEvents = () => {
  const [open, setOpen] = useState(false);
  const { domain } = useParams();
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

  const [eventData, setEventData] = useState([]);
  const [domainName, setDomainName] = useState("");
  const [dataAvailable, setDataAvailable] = useState(false);
  const getData = async () => {
    const response = await axios.get("http://localhost:6969/events");
    switch (domain) {
      case "coding":
        setEventData(response.data.allevents[0].domainevents);
        break;
      case "electrical":
        setEventData(response.data.allevents[1].domainevents);
        break;
      case "gaming":
        setEventData(response.data.allevents[2].domainevents);
        break;
      case "robotics":
        setEventData(response.data.allevents[3].domainevents);
        break;
      case "general":
        setEventData(response.data.allevents[4].domainevents);
        break;
      case "civil":
        setEventData(response.data.allevents[5].domainevents);
        break;
      default:
        break;
    }
    setDataAvailable(true);
    // console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavbarMain />
      <EventspageContainer bg={gridImg} onMouseMove={moveLight}>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        {dataAvailable ? (
          <div className="text">
            <motion.div
              className="domainEvents"
              onClick={() => {
                setOpen(true);
              }}
              variants={CardVariant}
              initial="hidden"
              animate="show"
            >
              {/* {eventData[0]} */}
              {eventData.map((data, index) => {
                return (
                  <Cards
                    image={`https://drive.google.com/uc?export=view&id=${
                      data.PosterLink.split("/")[5]
                    }`}
                    name={data.EventName}
                    button={"view details"}
                    details={`${data.EventDesc}`.slice(0, 140) + "..."}
                    key={index}
                    onClick={() => {
                      setOpen(true);
                    }}
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

export default DomainEvents;
