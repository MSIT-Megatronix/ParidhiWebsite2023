import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Router, useNavigate, useParams } from "react-router-dom";
import NavbarMain from "../../Navbar/NavbarMain";
import BiggerCardContainer from "../styles/CardBigger.styled";
import GamingMain from "../assets/GamingMain.jpeg";
import { PageLoader } from "../../HomePage/components/PreLoader";
import PdfViewer from "./PdfViewer";
const CardDetailsFull = (props) => {
  const Navigate = useNavigate();
  const { domain, event } = useParams();
  const moveLight = (e) => {
    const light = document.querySelector(".light");
    const grid = document.querySelector(".grid");
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
  };
  const [eventData, setEventData] = useState([]);
  const [eachEventdetails, setEachEventDetails] = useState([]);
  const [dataAvailable, setDataAvailable] = useState(true);
  const getData = async () => {
    const response = await axios.get("http://localhost:6969/events");
    // console.log(response.data.allevents[1].domainevents[0].EventPosterLink);
    switch (domain) {
      case "coding":
        response.data.allevents[0].domainevents.forEach((element) => {
          if (event == element.EventName.toLowerCase()) {
            console.log(element.EventName);
            setEachEventDetails(element);
            console.log(element);
          }
        });
      case "electrical":
        setEventData(response.data.allevents[1].domainevents);
        response.data.allevents[1].domainevents.forEach((element) => {
          if (event === element.EventName.toLowerCase()) {
            setEachEventDetails(element);
            console.log(element);
          }
        });
        break;
      case "gaming":
        setEventData(response.data.allevents[2].domainevents);
        response.data.allevents[2].domainevents.forEach((element) => {
          if (event === element.EventName.toLowerCase())
            setEachEventDetails(element);
        });
        break;
      case "robotics":
        setEventData(response.data.allevents[3].domainevents);
        response.data.allevents[3].domainevents.forEach((element) => {
          if (event === element.EventName.toLowerCase())
            setEachEventDetails(element);
        });
        break;
      case "general":
        setEventData(response.data.allevents[4].domainevents);
        response.data.allevents[44].domainevents.forEach((element) => {
          if (event === element.EventName.toLowerCase())
            setEachEventDetails(element);
        });
        break;
      case "civil":
        setEventData(response.data.allevents[5].domainevents);
        response.data.allevents[5].domainevents.forEach((element) => {
          if (event === element.EventName.toLowerCase())
            setEachEventDetails(element);
        });
        break;
      default:
        console.log("no match");
        break;
    }
    setDataAvailable(true);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavbarMain />
      <BiggerCardContainer onMouseMove={moveLight}>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        {dataAvailable ? (
          <div className="text">
            {/* <div className="eventSection"> */}
            <img
              src={`https://drive.google.com/uc?export=view&id=${
                eachEventdetails.EventPosterLink.split("/")[5]
              }`}
              alt=""
              className="poster"
            />

            <div className="details">
              <div className="event">{event}</div>
              <hr />
              <div className="regFee">
                Registration Fee:{eachEventdetails.RegCost}
              </div>
              <hr />
              {eachEventdetails.EventDesc}
              <button Navigate="/viewpdf">Event Rules</button>
              {/* <Routes>
                <Route path="/viewpdf" component={<PdfViewer/>}></Route>
              </Routes> */}
            </div>
          </div>
        ) : (
          <PageLoader />
        )}
      </BiggerCardContainer>
    </>
  );
};

export default CardDetailsFull;
