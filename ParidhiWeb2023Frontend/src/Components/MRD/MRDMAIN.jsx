import React, { useState } from "react";
import NavbarMain from "../Navbar/NavbarMain";
import Mrd from "./Mrd";
import { MRDWrapper } from "./MRDWrapper";

const MRDMAIN = () => {
  const moveLight = (e) => {
    const light = document.querySelector(".light");
    const grid = document.querySelector(".grid");
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
  };
  const [Form, setForm] = useState(false);
  const [password, setPassword] = useState("");
  const handleChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <NavbarMain />
      <MRDWrapper onMouseMove={moveLight}>
        <div className="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </div>
        <div className="text">
          {!Form ? (
            <>
              <div>
                <label>Password:</label>
                <input type="password" name="password" onChange={handleChange} />
                <button
                  onClick={(e) => {
                    if (password === "Rabai2023") {
                      setForm(true);
                    } else {
                      alert("Wrong Password");
                    }
                  }}
                  style={{marginTop:"5px",padding:"5px"}}
                >Login</button>
              </div>
            </>
          ) : (
            <Mrd />
          )}
        </div>
      </MRDWrapper>
    </>
  );
};

export default MRDMAIN;
