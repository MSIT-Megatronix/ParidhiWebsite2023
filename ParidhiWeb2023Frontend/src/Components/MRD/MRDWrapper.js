import styled from "styled-components";

export const MRDWrapper = styled.section`
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
  .text {
    position: relative;
    width: 100vw;
    z-index: 2;
    margin-top: 80px;
    height: max-content;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    .form {
      border-radius: 5px;
      width: 350px;
      padding: 15px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: "K2D", sans-serif;
      backdrop-filter: blur(8px) saturate(180%);
      -webkit-backdrop-filter: blur(8px) saturate(180%);
      background-color: rgba(17, 17, 17, 0.333);
      border-radius: 12px;
      border: 1px solid #ffffff53;
      box-shadow: 0px 10px 10px #000000cd;
      .onesec {
        display: flex;
        justify-content: flex-start;
        overflow: hidden;
      }
      .lable {
        font-weight: 600;
      }
    }
    button {
      background: #fff;
      color: #000;
      width: 100%;
    }
    .iptag {
      background: transparent;
      outline: none;
      border: none;
      border-bottom: 2px solid #fff;
      font-size: 1rem;
    }
    .iptag:focus {
      background: transparent;
    }
  }
`;
