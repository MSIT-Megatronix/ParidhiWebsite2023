import styled from "styled-components";

const WorkshopContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  .text {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-wrap: wrap;
  }

  @media (min-width: 900px) {
  }
`;
export const WorkshopCardContainer = styled.div`
  z-index: 3;
  margin: 10px 20px;
  .card {
    padding: 10px;
    backdrop-filter: blur(0px) saturate(180%);
    -webkit-backdrop-filter: blur(0px) saturate(180%);
    background-color: rgba(0, 0, 0, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.125);
    width: 300px;
    height: 350px;
    transition: height 0.5s;
    font-family: "K2D", sans-serif;
  }
  .poster {
    width: 100%;
  }
  .heading {
    font-size: 1.4rem;
    letter-spacing: 1.4pt;
    text-transform: uppercase;

    text-align: center;
  }
  .details {
    /* font-size: rem; */
    text-transform: capitalize;
    text-align: justify;
  }
  button {
    margin-top: 10px;
    width: 100%;
    border-radius: 4px;
  }
`;

export default WorkshopContainer;
