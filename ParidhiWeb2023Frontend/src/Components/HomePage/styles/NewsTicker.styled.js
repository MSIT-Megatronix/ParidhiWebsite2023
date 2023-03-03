import styled from "styled-components";

const NewsTickerContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  .marque {
    font-size: 80px;
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: -80px;
    /* text-shadow: 0 0 12px #070ca4; */
  }
  .marque span {
    -webkit-text-stroke:2px #fff;
    color: transparent;

  }
  div {
    width: 600px;
    height: 2px;
    background-color: #fff;
  }
`;
export default NewsTickerContainer;
