import styled from "styled-components";
const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
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
