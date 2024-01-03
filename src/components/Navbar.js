import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaBahai } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <Wrapper>
      <button className="btn">
        <FaBahai
          style={{ color: "brown", width: "1.2rem", height: "1.2rem" }}
        />{" "}
        XYZ enterprice Pvt.ltd
      </button>
      <button className="btn btn-down">
        <FaAngleDown />
      </button>
    </Wrapper>
  );
};

export default Navbar;
