import styled from "styled-components";

const NewsTickerContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  /* height: 100px; */
  overflow: hidden;
  margin-top: -40px;
  span {
    text-shadow: 0px 0px 15px #00eaff;
  }
  span p {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-family: "K2D", sans-serif;
    font-size: 30px;
    margin-top: -30px;
  }
  #year {
    -webkit-text-stroke: 0.6px #fff;
    color: transparent;
    transition: 1s;
    text-transform: uppercase;
    background: url(${(props) => props.backPNG});
    background-clip: initial;
    -webkit-background-clip: text;
    background-position: 5px 10px;
    animation: backSlide 20s linear infinite;
    transition: 5s linear;
  }
  .date {
    font-weight: 600;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
    font-size: 35px;
  }
  #paridhi {
    margin-top: 60px;
    font-size: 45px;
    margin-bottom: 30px;
    font-weight: 700;
    /* -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate; */
  }
  .marque {
    /* margin-top: 50px; */
    font-size: 50px;
    text-transform: uppercase;
    font-weight: 800;
    /* text-shadow: 0 0 12px #070ca4; */
  }
  .marque span {
    -webkit-text-stroke: 2px #fff;
    color: transparent;
  }
  div {
    width: 300px;
    height: 2px;
    background-color: #fff;
  }
  @keyframes backSlide {
    10% {
      background-position: 0px 100px;
    }
    40% {
      background-position: 100px 350px;
    }
    70% {
      background-position: 400px 550px;
    }
    100% {
      background-position: 1000px 700px;
    }
  }
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #00eaff;
    }
    to {
      text-shadow: 0 0 5px #ffffff7f, 0 0 30px #00eaff;
    }
  }
`;
export default NewsTickerContainer;
