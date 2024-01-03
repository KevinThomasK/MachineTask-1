import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../feautures/sidebarSlice";
import SidebarButton from "./SidebarButton";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <img src={logo} className="logo" alt="logo" />
          </header>
          <div className="nav-links">
            <SidebarButton />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
