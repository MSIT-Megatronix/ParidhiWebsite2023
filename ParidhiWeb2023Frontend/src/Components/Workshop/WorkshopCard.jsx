import React, { useState } from "react";
import { WorkshopCardContainer } from "./Styles/WorkShopContainer.styled";
import GamingMain from "./assets/GamingMain.jpeg";
import { motion } from "framer-motion";

const WorkshopCard = (props) => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repellat nemo, dicta deleniti vel reprehenderit accusantium! Nam nulla laboriosam corporis quaerat necessitatibus, voluptatem fuga fugit nesciunt dolore expedita qui suscipit obcaecati inventore nihil ab odio laborum earum consequuntur. Dolor rerum ducimus totam veritatis. Maxime corrupti voluptas minus, inventore quibusdam soluta.";
  const seeMore = (
    <span style={{ fontWeight: "700", cursor: "pointer" }}>...See More</span>
  );
  const seeLess = (
    <span style={{ fontWeight: "700", cursor: "pointer" }}>...See Less</span>
  );

  const [Open, setOpen] = useState(false);
  return (
    <WorkshopCardContainer>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.5, delay: 0.2 },
        }}
      >
        <motion.div
          layout
          transition={{
            layout: { duration: 0.8, type: "spring", bounce: 2, stiffness: 50 },
          }}
          className="card"
        >
          <motion.img
            layout="position"
            src={GamingMain}
            alt=""
            className="poster"
          />
          <motion.hr layout="position" />

          <motion.div layout="position" className="heading">
            {props.heading || "Coding workshop"}
          </motion.div>
          <motion.hr layout="position" />

          {!Open ? (
            <motion.div
              className="details"
              onClick={() => {
                setOpen(!Open);
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              // layout
            >
              {props.data.slice(0, props.len) || lorem.slice(0, 70)}
              {props.data.length <= 70 || props.data.length <= props.len
                ? seeMore
                : ""}
            </motion.div>
          ) : (
            <motion.div
              className="details"
              onClick={() => {
                setOpen(!Open);
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              // layout
            >
              {props.data || lorem}
              {props.data.length() <= 70 || props.data.length() <= props.length
                ? seeLess
                : ""}
            </motion.div>
          )}
          <button
            onClick={() => {
              window.open(props.registration_link, "_blank");
            }}
          >
            Register
          </button>
        </motion.div>
      </motion.div>
    </WorkshopCardContainer>
  );
};

export default WorkshopCard;
