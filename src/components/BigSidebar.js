import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import logo from "../assets/logo.png";
import ProfileView from "./ProfileView";
import SidebarButton from "./SidebarButton";

const BigSidebar = () => {
  return (
    <Wrapper>
      <div className="logo-div">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ProfileView />
      <SidebarButton />
    </Wrapper>
  );
};

export default BigSidebar;
