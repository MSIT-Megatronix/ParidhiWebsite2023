import styled from "styled-components";
const HeroContainer = styled.section`
  margin-top: -50px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  .countdown {
    width: 80vw;
  }
  .paridhi{
    margin-top: 30px;
  }
  .socials {
    /* position: absolute; */
    top: 325px;
    right: 10px;
  }
  /* .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10vw;
  } */
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
  .socials ul li a {
    text-decoration: none;
    color: #fff;
  }
  .btn:hover {
    margin-left: -15px;
    cursor: pointer;
  }
  .btn:hover .fb {
    color: #4c88ff;
  }
  .btn:hover .ldin {
    color: #00a6ff;
  }
  .btn:hover .ytb {
    color: #ff0000;
  }
  .btn:hover .insta {
    color: #fcaf45;
  }
  .chat-bot {
    /* position: absolute; */
    left: 10px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #000;
    transition: 0.5s;
  }
  .chat-bot:hover {
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
  .chat-bot-mega {
    z-index: 2;
    border-radius: 10px;
    border: none;
    position: fixed;
    bottom: 50px;
    left: 50px;
    height: 300px;
    width: 280px;
  }
  .footer {
    width: 100vw;
    align-items: center;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
  }
  .chat-bot {
    margin-bottom: -180px;
    margin-left: 10px;
  }
  /* @media (max-height: 750px) {
    .socials {
      top: 260px;
    }
    .chat-bot{
      bottom: -160px;
    } 
    .chat-bot-mega{
      left: 50px;
      top: 160px;
    }
  } */
  /* @media (max-height: 680px) {
    .socials {
      top: 230px;
    }
  } */
  @media (min-width: 900px) {
    .socials {
      top: 390px;
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
    .btn:hover {
      margin-top: -10px;
      margin-left: 0;
    }
    .chat-bot {
      margin-bottom: 0px;
    }
    .chat-bot-mega{
    }
    /* .chat-bot-mega{
      left: 50px;
      top: 120px;
    } */
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
