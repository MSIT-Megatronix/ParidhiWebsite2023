import styled from "styled-components";
const BiggerCardContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  background: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    margin: 80px 10px 10px 10px;
    width: 100vw;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    z-index: 2;
    backdrop-filter: blur(0px) saturate(180%);
    -webkit-backdrop-filter: blur(0px) saturate(180%);
    background-color: rgba(0, 0, 0, 0.75);
    /* border-radius: 12px; */
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
  .regFee{
    font-family: 'K2D',sans-serif;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 10px;
  }
  button{
    text-transform: uppercase;
    width: 100%;
    outline: none;
  }
  .poster {
    width: 100%;
  }
  .details {
    padding: 15px 0px 10px 0px;
    text-align: justify;
  }
  @media (min-width: 900px) {
    .text{
        flex-wrap: nowrap;
    }
    .poster {
      width: 50%;
    }
    .details{
        padding: 10px 10px;
    }
  }
`;
export default BiggerCardContainer;
