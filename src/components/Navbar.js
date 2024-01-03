import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaBahai } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../feautures/sidebarSlice";

const Navbar = () => {
  const { sidebar } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <>
      <Wrapper>
        <div className="nav-logo">
          <MdMenuOpen className="sidebar-toggle-btn" onClick={toggle} />
        </div>

        <div className="nav-button">
          <button className="btn">
            <FaBahai
              style={{ color: "brown", width: "1.2rem", height: "1.2rem" }}
            />{" "}
            XYZ enterprice Pvt.ltd
          </button>
          <button className="btn btn-down">
            <FaAngleDown />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

export default Navbar;
