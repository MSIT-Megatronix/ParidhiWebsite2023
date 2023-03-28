import styled from "styled-components";
export const SponsorWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  background: #242424;
  .text {
    position: relative;
    margin-top: 70px;
    z-index: 2;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    .sponsor {
      padding: 5px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid #242424;
      margin: 5px;
      height: 300px;
      position: relative;
      backdrop-filter: blur(0px) saturate(180%);
      -webkit-backdrop-filter: blur(0px) saturate(180%);
      background-color: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.125);
    }
    .sporsor-details {
      text-transform: uppercase;
      padding-bottom: 10px;
      position: absolute;
      bottom: 0;
      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;
      font-family: "K2D", sans-serif;
    }
  }
`;
