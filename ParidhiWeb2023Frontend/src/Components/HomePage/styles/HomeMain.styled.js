import styled from "styled-components";
const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #242424;

  @keyframes glowing {
    0% {
      background: linear-gradient(90deg, #00eaff 0%, #002b43 40%);
    }
    40% {
      background: linear-gradient(90deg, #00eaff 0%, #002b43 60%);
    }
    60% {
      background: linear-gradient(90deg, #00eaff 0%, #002b43 80%);
    }
    100% {
      background: linear-gradient(90deg, #00eaff 0%, #002b43 100%);
    }
  }
  .text {
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }
`;

export default HomepageContainer;
