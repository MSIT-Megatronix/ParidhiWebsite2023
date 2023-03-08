import styled from "styled-components";
export const EventspageContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  /* padding: 0px 20px; */
  .hex-grid .grid {
    position: absolute;
    top: 0;
    left: 0;
    background: url(${(props) => props.bg}) repeat;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-size: 200px;
  }
  .hex-grid .light {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30em;
    height: 30em;
    border-radius: 50%;
    filter: blur(20px);
    background: linear-gradient(90deg, #00eaff 0%, #002b43 100%);
    z-index: 0;
  }

  @keyframes glowing {
    0% {
      background: linear-gradient(10deg, #00eaff 0%, #002b43 40%);
    }
    40% {
      background: linear-gradient(90deg, #00eaff 0%, #002b43 60%);
    }
    60% {
      background: linear-gradient(230deg, #00eaff 0%, #002b43 80%);
    }
    100% {
      background: linear-gradient(310deg, #00eaff 0%, #002b43 100%);
    }
  }
  .text {
    width: 100%;
    padding: 70px 0px;
    position: relative;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    color: #fff;
    margin-top: 50px;
  }
  .events {
    /* padding: 30px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* margin: 10px 20px; */
    /* position: fixed; */
    /* bottom: 0; */
  }
  .box {
    background: #fff;
    width: 600px;
    height: 600px;
  }
  @media (min-width: 1000px) {
    height: 100vh;
    overflow: hidden;
    .text {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0px;
    }
  }
  @media (min-width: 1150px) {
    .events {
      justify-content: space-around;
      margin: 0px 80px 0px 80px;
    }
  }
`;

export const CardsWrapper = styled.div`
  .card {
    border: 3px solid #fff;
    background-color: #121212;
    margin: 40px 20px;
    width: 280px;
    height: 380px;
    box-shadow: 0px 0px 10px #ffffff8b;
    transition: 0.5s;
    border-radius: 20px 0px 20px 0px;
    /* rotate: 20deg; */
  }
  .domImgDiv {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .domainImg {
    /* position: absolute; */
    /* top: 10px; */
    margin-top: -10px;
    width: 250px;
    transition: 0.4s;
  }
  .card:hover {
    box-shadow: 0px 0px 20px #ffffff8b;
    margin-top: -50px;
    border-radius: 0px 20px 0px 20px;
  }
  /* .card:hover .domainImg {
    width: 240px;
  } */
  .corner-top {
    /* position: absolute; */
    margin-top: -100px;
    margin-right: 150px;
    height: 40px;
    width: 100px;
    border: none;
    background: #ffffffcd;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    height: 50px;
    width: 50px;
  }
  .details {
    height: 90px;
    width: 95%;
    margin-top: 20px;
    border-radius: 0px 30px 0px 0px;
    background: #ffffffcd;
  }
  .heading {
    padding: 10px 5px;
    font-weight: 800;
    color: #1b1b1b;
    font-size: 15px;
    text-transform: uppercase;
  }
  .domainDetails {
    font-weight: 600;
    padding: 0px 5px;
    margin-top: -10px;
    line-height: normal;
    font-size: 10px;
    color: #1b1b1b;
    background: transparent;
  }
  @media (min-width: 1000px) {
    .card {
      /* height: 50px;
      width: 350px; */
      /* margin-left: -10px;
      margin-right: -10px; */
      height: 300px;
      width: 250px;
      /* width: 50vw; */
    }
    .up {
      position: relative;
      z-index: 2;
      margin-top: 0px;
    }
    .bt {
      position: relative;
      margin-top: -50%;
      z-index: 1;
      scale: 0.8;
    }
    .bt:hover {
      animation: fronte 0.2s linear forwards;
      scale: 1;
      margin-top: -250px;
    }
    .bt:hover .up {
      scale: 0.8;
    }

    @keyframes fronte {
      from {
        z-index: 1;
        transform: scale(0.9);
        opacity: 0;
      }
      to {
        z-index: 2;
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;
