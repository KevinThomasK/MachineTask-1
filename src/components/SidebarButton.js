import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";
import { BsFillPuzzleFill } from "react-icons/bs";
import { FaCircleQuestion } from "react-icons/fa6";
import { SlSupport } from "react-icons/sl";

const SidebarButton = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("dashboard");
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const doubleFunc = (param1, param2) => {
    navigate(param1);
    handleButtonClick(param2);
  };
  return (
    <>
      <button
        className={activeButton === "dashboard" ? "actives" : "btn sidebar-btn"}
        onClick={() => doubleFunc("/", "dashboard")}
      >
        <MdDashboard className="sidebar-icon " /> Dashboard
      </button>
      <button
        className={activeButton === "perks" ? "actives" : "btn sidebar-btn"}
        onClick={() => doubleFunc("/perks", "perks")}
      >
        <RiPlantFill className="sidebar-icon" /> Perks
      </button>
      <button
        className={activeButton === "addons" ? "actives" : "btn sidebar-btn"}
        onClick={() => doubleFunc("/add-ons", "addons")}
      >
        <BsFillPuzzleFill className="sidebar-icon" /> Addons
      </button>
      <button
        className={activeButton === "faq" ? "actives" : "btn sidebar-btn"}
        onClick={() => doubleFunc("/faq", "faq")}
      >
        <FaCircleQuestion className="sidebar-icon" /> FAQ
      </button>
      <button
        className={activeButton === "support" ? "actives" : "btn sidebar-btn"}
        onClick={() => doubleFunc("/support", "support")}
      >
        <SlSupport className="sidebar-icon" /> Support
      </button>
    </>
  );
};

export default SidebarButton;
