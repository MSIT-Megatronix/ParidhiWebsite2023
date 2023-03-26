import styled from "styled-components";
export const PreLoaderCss = styled.div`
  #nest3 {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50px;
    width: 50px;
    margin: -25px 0 0 -25px;
    border: 2px solid transparent;
    border-top-color: #fff;
    /* box-shadow: 0 0 5px #00eaff; */
    border-radius: 50%;
    -webkit-animation: spin9 1.5s ease infinite;
    animation: spin9 1.5s ease infinite;
  }

  #nest3:before {
    content: "";
    position: absolute;
    top: 7px;
    right: 7px;
    bottom: 7px;
    left: 7px;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top-color: #fff;
    -webkit-animation: spin9_x 1s linear infinite;
    animation: spin9_x 1s linear infinite;
  }

  #nest3:after {
    content: "";
    position: absolute;
    top: 15px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top-color: #fff;
    -webkit-animation: spin9 1.5s linear infinite;
    animation: spin9 1.5s linear infinite;
  }

  @-webkit-keyframes spin9 {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  @keyframes spin9 {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  @-webkit-keyframes spin9_x {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
    }
    100% {
      -webkit-transform: rotateX(360deg);
      transform: rotateX(360deg);
    }
  }
  @keyframes spin9_x {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
    }
    100% {
      -webkit-transform: rotateX(360deg);
      transform: rotateX(360deg);
      -webkit-transform: rotateX(360deg);
      transform: rotateX(360deg);
    }
  }
`;