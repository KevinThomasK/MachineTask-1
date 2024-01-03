import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/BigSidebar";
import logo from "../assets/logo.png";
import ProfileView from "./ProfileView";
import SidebarButton from "./SidebarButton";
import { FaPowerOff } from "react-icons/fa";

const BigSidebar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="logo-div" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ProfileView />
      <SidebarButton />
      <button className="logout-btn">
        logout <FaPowerOff style={{ marginTop: "7px", marginLeft: "7px" }} />
      </button>
    </Wrapper>
  );
};

export default BigSidebar;
