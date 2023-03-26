import styled from "styled-components";
const TeamPageContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  background: #242424;
  /* padding: 0 20px; */
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
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 30em;
    height: 30em;
    border-radius: 50%;
    filter: blur(20px);
    background: linear-gradient(90deg, #00eaff 0%, #002b43 100%);
    z-index: 0;
  }
  .text {
    width: 100vw;
    padding: 70px 0px;
    position: relative;
    color: #fff;
    margin-top: 30px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  overflow-y: hidden;
  overflow-x: hidden;
  .teamcard {
    z-index: 2;
    width: 250px;
    height: 300px;
    margin: 10px;
    /* padding: 10px; */
    backdrop-filter: blur(8px) saturate(180%);
    -webkit-backdrop-filter: blur(8px) saturate(180%);
    background-color: rgba(17, 17, 17, 0.333);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: 0px 10px 10px #000000cd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .teamcard:hover {
    cursor: pointer;
  }
  .teamcard:hover .socialMedia {
    display: flex;
  }
  /* .imgdiv {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ffffffbe;
  } */
  .imgdiv img {
    border-radius: 50%;
    width: 130px;
    height: 130px;
    border: 1.2px solid #ffffffac;
    /* box-shadow: 0px 0px 20px #05eaff5d; */
  }
  .name,
  .year {
    font-family: "K2D", sans-serif;
    font-weight: 600;
    padding: 5px 0px;
    text-transform: uppercase;
  }
  .name {
    -webkit-text-stroke: 0.5px #fff;
    text-shadow: 0px 0px 4px #00eaffa4;
    color: transparent;
    font-size: 20px;
  }
  .socialMedia {
    /* position: absolute; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    /* background: #00eaff9a; */
    /* box-shadow: 0px 10px 10px #00000047; */
    /* height: 30px; */
  }
  .socialMedia a {
    margin-bottom: -5px;
    color: #fff;
    padding: 5px;
  }
  .teamcard:hover.socialMedia {
    display: flex;
  }
`;
export default TeamPageContainer;
export { CardContainer };
