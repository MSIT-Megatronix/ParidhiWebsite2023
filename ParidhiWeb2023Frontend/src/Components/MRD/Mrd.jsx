import React, { useState } from "react";
import NavbarMain from "../Navbar/NavbarMain";
import { MRDWrapper } from "./MRDWrapper";
import Axios from "axios";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
const Mrd = () => {
  const moveLight = (e) => {
    const light = document.querySelector(".light");
    const grid = document.querySelector(".grid");
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
  };
  const [snackData, setSnackData] = useState("");
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const [data, setData] = useState({
    name: "",
    phone: "",
    roll: "",
    email: "",
    college: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    setData(data);
    console.log(data);
    try {
      const res = await Axios.post("http://localhost:3000/mrd.html", data);
      setSnackData(res.data);
      setState({ open: true, vertical: "top", horizontal: "right" });
    } catch (err) {
      alert(err);
    }
    // console.log(response);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ open: false, vertical: "top", horizontal: "center" });
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseRoundedIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      {/* <NavbarMain /> */}
      <MRDWrapper >
      <form onSubmit={PostData} className="form">
        <div className="onesec">
          <label className="lable">Name:</label>
          <input
            onChange={handleChange}
            type="text"
            value={data.name}
            id="name"
            name="name"
            className="iptag"
            required
            pattern="[a-zA-Z\s]+"
          />
        </div>
        <br />
        <br />
        <div className="onesec">
          <label className="lable">Roll Number:</label>
          <input
            onChange={handleChange}
            value={data.roll}
            type="text"
            id="roll"
            name="roll"
            required
            className="iptag"
          />
        </div>
        <br />
        <br />
        <div className="onesec">
          <label className="lable">Phone Number:</label>
          <input
            onChange={handleChange}
            value={data.phone}
            type="text"
            id="phone"
            className="iptag"
            name="phone"
            required
            pattern="[0-9]{10}"
          />
        </div>
        <br />
        <br />
        <div className="onesec">
          <label className="lable">Email:</label>
          <input
            onChange={handleChange}
            value={data.email}
            type="email"
            id="email"
            className="iptag"
            name="email"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          />
        </div>
        <br />
        <br />
        <div className="onesec">
          <label className="lable">College Name:</label>
          <input
            value={data.college}
            onChange={handleChange}
            type="text"
            id="college"
            name="college"
            required
            className="iptag"
          />
        </div>
        <br />
        <br />

        <button>Send data</button>
      </form>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackData}
        action={action}
        sx={{ marginTop: "80px" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "300px" }}>
          {snackData}
        </Alert>
      </Snackbar>
      </MRDWrapper>
    </>
  );
};

export default Mrd;
