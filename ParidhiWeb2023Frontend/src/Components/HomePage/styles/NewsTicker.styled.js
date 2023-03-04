import styled from "styled-components";

const NewsTickerContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100px;
  overflow: hidden;
  margin-top: 30px;
  .marque {
    /* margin-top: 50px; */
    font-size: 50px;
    text-transform: uppercase;
    font-weight: 800;
    /* text-shadow: 0 0 12px #070ca4; */
  }
  .marque span {
    -webkit-text-stroke:2px #fff;
    color: transparent;

  }
  div {
    width: 300px;
    height: 2px;
    background-color: #fff;
  }
`;
export default NewsTickerContainer;
