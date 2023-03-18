import styled from "styled-components";
export const EventspageContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  background: #242424;
  /* padding: 0px 20px; */
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
    padding: 40px 0px 0px 0px;
    position: relative;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    color: #fff;
    margin-top: 50px;
    overflow-y: auto;
  }
  .domainEvents {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
  @media (min-width: 650px) {
    .hex-grid .light {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  /* @media (min-width: 1000px) {
    height: 100vh;
    overflow: hidden;
    .text {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0;
      /* padding-top: 100px; */
  /* padding-bottom: 40px; */
  /* }
  } */
  /* @media (min-width: 1150px) {
    .events {
      justify-content: space-around;
      margin: 0px 80px 0px 80px;
    }
  }  */
`;

export const CardsWrapper = styled.div`
  .card {
    padding: 5px 5px;
    border: 3px solid #fff;
    /* background-color: #12121273; */
    margin: 40px 20px;
    width: 280px;
    height: 300px;
    /* box-shadow: 0px 0px 10px #ffffff8b; */
    transition: 0.5s;
    /* border-radius: 20px 0px 20px 0px; */
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    /* background-color: rgba(17, 25, 40, 0.75); */
    /* border-radius: 12px; */
    border: 1px solid rgba(255, 255, 255, 0.125);
    /* rotate: 20deg; */
    box-shadow: 0px 10px 10px #000000;

  }
  .domImgDiv {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .domainImg {
    /* position: absolute; */
    /* top: 10px; */
    /* border-radius: 10px 10px 0px 0px; */
    margin-top: 0px;
    margin-bottom: -10px;
    width: 100%;
    transition: 0.4s;
  }
  .card:hover {
    box-shadow: 0px 0px 15px #000;
    /* margin-top: -20px; */
    /* scale: 1; */
    /* border-radius: 0px 20px 0px 20px; */
  }
  .card:hover .domainImg {
      scale: 1.2;
      border-radius: 0;
      margin-bottom: 10px;
    }
  /* .card:hover .domainImg {
    width: 240px;
  } */
  .event-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    outline: none;
    margin-top: 10px;
    box-shadow: 0px 10px 10px #000;
  }
  .arrow-event-btn {
    /* background: #fff; */
    width: 20px;
  }
  .corner-top {
    /* position: absolute; */
    margin-top: 10px;
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
    height: 100px;
    width: 280px;
    margin-top: 20px;
    /* border-radius: 0px 30px 10px 0px; */
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
  @media (min-width: 900px) {
    margin-top: -20px;
    /* .corner-top {
      margin-top: -100px;
    } */
    .card:hover {
      margin-top: -20px;
      scale: 1;
      height: auto;
    }
    
    /* .card{ */
    /* height: 50px;
      width: 350px; */
    /* margin-left: -10px;
      margin-right: -10px; */
    /* height: 300px;
      width: 250px; */
    /* width: 50vw; */
    /* } */
    /* .up {
      box-shadow: 0px 10px 10px #000000;
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
      box-shadow: 0px 0px 10px #000;
      animation: fronte 0.2s linear forwards;
      scale: 1;
      margin-top: -250px;
    }
    .bt:hover .up {
      scale: 0.8; */
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
`;
