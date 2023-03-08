import styled from "styled-components";
const NavbarContainer = styled.nav`
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 3;
  .nav_div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  overflow: hidden;
  .nav_all li {
    font-size: 15px;
    font-weight: 600;
    font-family: "K2D", sans-serif;
    /* height: 100vh; */
    -webkit-text-stroke: 1px solid;
    color: transparent;
  }
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav_all {
    display: none;
  }
  .btn1 {
    display: block;
    border: 1px solid #fff;
    padding: 2px 10px;
    border-radius: 20px 5px 20px 5px;
    transition: 0.7s;
    background: #fff;
    color: #000;
    right: 50px;
    position: absolute;
    /* padding: 0px 5px; */
  }

  .toggle {
    z-index: 1;
    cursor: pointer;
    padding: 0px 5px;
    margin-right: 5px;
  }
  .btn2 {
    display: none;
  }
  @media (min-width: 900px) {
    .btn2 {
      display: block;
    }
    .btn1 {
      display: none;
    }

    .toggle {
      display: none;
    }
    .nav_all {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      left: 0;
    }
    .nav_all li {
      font-size: 1.2rem;
      padding: 0px 10px;
      -webkit-text-stroke: 0.6px #fff;
      font-weight: 600;
      color: transparent;
      text-transform: uppercase;
      background: url(${(props) => props.backPNG});
      background-clip: initial;
      -webkit-background-clip: text;
      background-position: 5px 5px;
      animation: backSlide 20s linear infinite;
      transition: 0.25s ease-in-out;
    }
    .nav_all li:hover {
      cursor: pointer;
      margin-top: -5px;
      text-shadow: 0px 0px 5px #00eaff;
      letter-spacing: 2px;
      
    }
    li::after {
      content: "";
      position: relative;
      bottom: 0;
      left: 0;
      display: block;
      height: 0;
      width: 35px;
      text-align: center;
      background-color: #0c0;
      background-color: #00eaff;
      transition: height 250ms ease-in-out;
    }
    li:hover::after {
      height: 3px;
    }
    /* .active::after {
    content: "";
    position: relative;
    bottom: 0;
    left: 0;
    display: block;
    height: 3px;
    width: 35px;
    text-align: center;
    background-color: #00eaff;
    transition: height 250ms ease-in-out;
  } */
    @keyframes backSlide {
      10% {
        background-position: 0px 200px;
      }
      40% {
        background-position: 200px 350px;
      }
      70% {
        background-position: 400px 550px;
      }
      100% {
        background-position: 1000px 700px;
      }
    }
    /* .nav_all li:hover {
      color: #17cf97;
    } */
    /* .nav_all li::after:hover {
      content: "";
      color: #17cf97;
      width: 30%;
      height: 2px;
      background: #fff;
      bottom: -4px;
      left: 20px;
    } */
    button {
      display: block;
      margin-right: 10px;
      width: 100px;
      border: 1px solid #fff;
      padding: 4px;
      border-radius: 20px 5px 20px 5px;
      transition: 0.7s;
      background: #fff;
      font-family: "K2D", sans-serif;
      color: #000;
    }
    button:hover {
      background: transparent;
      color: #fff;
    }
  }
  
  .active::after {
    content: "";
    position: relative;
    bottom: 0;
    left: 10px;
    display: block;
    height: 3px;
    width: 35px;
    text-align: center;
    background-color: #00eaff;
    transition: height 250ms ease-in-out;
  }
`;

const SideModalContainer = styled.section`
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 3;
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  background-color: #000;
  height: 100vh;
  li::after {
    content: "";
    position: relative;
    bottom: 0;
    left: 0;
    display: block;
    height: 0;
    width: 35px;
    text-align: center;
    /* background-color: #0c0; */
    background-color: #00eaff;
    transition: height 250ms ease-in-out;
  }
  li:hover::after {
    height: 3px;
  }
  .active::after {
    content: "";
    position: relative;
    bottom: 25px;
    left: 30px;
    display: block;
    height: 3px;
    width: 35px;
    text-align: center;
    background-color: #00eaff;
    transition: height 250ms ease-in-out;
  }
  .toggle {
    cursor: pointer;
    margin-right: 10px;
  }
  .nav-items {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav_all {
    list-style: none;
    padding: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
  }
  .nav_all li {
    z-index: 2;
    padding: 30px;
    font-weight: 600;
    -webkit-text-stroke: 0.6px #fff;
    color: transparent;
    transition: 1s;
    text-transform: uppercase;
    background: url(${(props) => props.backPNG});
    background-clip: initial;
    -webkit-background-clip: text;
    background-position: 5px 10px;
    animation: backSlide 20s linear infinite;
    transition: 5s linear;
  }
  @keyframes backSlide {
    10% {
      background-position: 0px 200px;
    }
    40% {
      background-position: 200px 350px;
    }
    70% {
      background-position: 400px 550px;
    }
    100% {
      background-position: 1000px 700px;
    }
  }
`;
export default NavbarContainer;
export { SideModalContainer };
