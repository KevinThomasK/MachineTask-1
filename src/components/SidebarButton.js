import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";
import { BsFillPuzzleFill } from "react-icons/bs";
import { FaCircleQuestion } from "react-icons/fa6";
import { SlSupport } from "react-icons/sl";

const SidebarButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="btn sidebar-btn" onClick={() => navigate("/")}>
        <MdDashboard className="sidebar-icon" /> Dashboard
      </button>
      <button className="btn sidebar-btn" onClick={() => navigate("/perks")}>
        <RiPlantFill className="sidebar-icon" /> Perks
      </button>
      <button className="btn sidebar-btn" onClick={() => navigate("/add-ons")}>
        <BsFillPuzzleFill className="sidebar-icon" /> Addons
      </button>
      <button className="btn sidebar-btn" onClick={() => navigate("/faq")}>
        <FaCircleQuestion className="sidebar-icon" /> FAQ
      </button>
      <button className="btn sidebar-btn" onClick={() => navigate("/support")}>
        <SlSupport className="sidebar-icon" /> Support
      </button>
    </>
  );
};

export default SidebarButton;
