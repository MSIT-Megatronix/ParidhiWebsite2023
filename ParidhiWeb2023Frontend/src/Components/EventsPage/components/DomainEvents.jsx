import React,{useState} from "react";
import NavbarMain from "../../Navbar/NavbarMain";
import { CardData, EventsData } from "../StaticJS/CardData";
import { EventspageContainer } from "../styles/EventspageContainer.styled";
import Cards from "./Cards";
import gridImg from "../../HomePage/assets/grid.svg";
import { motion } from "framer-motion";
const DomainEvents = (props) => {
  const [open, setOpen] = useState(false)
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
  
  return (
    <>
      <NavbarMain />
        <EventspageContainer bg={gridImg} onMouseMove={moveLight}>
          <div className="hex-grid">
            <div className="light"></div>
            <div className="grid"></div>
          </div>
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
              {EventsData[0].events.map((data, index) => {
                return (
                  <Cards
                    image={data.image}
                    name={data.name}
                    button={"view details"}
                    details={`${data.details}`.slice(0,140)+"..."}
                    key={index}
                    onClick={()=>{
                      setOpen(true)
                    }}
                  />
                );
              })}
            </motion.div>
          </div>
        </EventspageContainer>
    </>
  );
};

export default DomainEvents;
