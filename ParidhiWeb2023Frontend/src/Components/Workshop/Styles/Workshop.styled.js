import styled from "styled-components";

export const WorkshopPageContainer = styled.section`
  width: 100vw;
  height: 100%;
  /* position: relative; */
  /* overflow-y: hidden; */
  overflow-x: hidden;
  background: #242424;

  .text {
    /* width: 100vw; */
    /* height: 100vh; */
    margin: 80px 10px 20px 10px;
    z-index: 2;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* backdrop-filter: blur(0px) saturate(180%);
    -webkit-backdrop-filter: blur(0px) saturate(180%);
    background-color: rgba(0, 0, 0, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.125); */
  }
  .carousel_item {
    /* margin-bottom: -50px; */
    /* width: 100vw; */
  }
  .carousel_item div {
    height: 100%;
    width: 100%;
    padding: 10px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .regFee,
  .event {
    font-family: "K2D", sans-serif;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 10px;
  }
  .carousel_item div .poster {
    width: 100%;
  }
  .carousel_item div .details {
    padding: 15px 0px 10px 0px;
    /* text-align: justify; */
  }

  @media (min-width: 900px) {
    height: 100vh;

    overflow-y: hidden;
    .text {
        height: 99vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .carousel_item div {
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      margin-bottom: 30px;
    }
    .carousel_item div .poster {
      width: 50%;
    }
    .carousel_item div .details {
      padding: 10px 10px;
    }
  }
`;
