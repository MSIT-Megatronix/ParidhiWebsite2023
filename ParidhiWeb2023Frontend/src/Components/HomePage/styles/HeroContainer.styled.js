import styled from "styled-components";
const HeroContainer = styled.section`
  margin-top: -50px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .countdown {
    width: 80vw;
  }
  .socials {
    position: absolute;

    /* position: relative; */
    top: 325px;
    right: 10px;
  }
  .line {
    width: 2px;
    height: 30px;
    background: #ffffffde;
    border-radius: 10px;
  }
  .socials ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
  }
  .socials ul li {
    padding: 8px;
    transition: 0.3s;
  }
  .socials ul li:hover {
  }

  .fb:hover {
    /* color: #4c88ff; */
    margin-top: -10px;
    cursor: pointer;
  }
  .ldin:hover {
    color: #00a6ff;
    margin-top: -10px;
    cursor: pointer;
  }
  .ytb:hover {
    color: #ff0000;
    margin-top: -10px;
    cursor: pointer;
  }
  .insta:hover {
    color: #fcaf45;
    margin-top: -10px;
    cursor: pointer;
  }
  @media (max-height: 750px) {
    .socials {
      top: 260px;
    }
  }
  @media (max-height: 680px) {
    .socials {
      top: 230px;
    }
  }
  @media (min-width: 900px) {
    .socials {
      top: 395px;
    }
    .socials ul {
      flex-direction: row;
    }
    .line {
      height: 2px;
      width: 30px;
    }
    .socials ul li {
      padding: 10px 15px;
    }
  }
  @media (min-width: 760px) {
    .countdown {
      width: 450px;
    }
  }
`;
const CountDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-weight: 700;
  text-shadow: 0px 0px 30px #00eaff;
  font-family: "K2D", sans-serif;
  .show-counter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .time {
    font-size: 3rem;
    padding: 5px;
    margin-bottom: -10px;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
    font-family: "K2D", sans-serif;
  }
  .time-type {
    text-transform: uppercase;
  }
  .timecol {
    -webkit-text-stroke: 2px #fff;
    color: transparent;
    margin-top: 30px;
    font-size: 2.8rem;
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
export { HeroContainer, CountDownContainer };
