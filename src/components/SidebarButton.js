import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";
import { BsFillPuzzleFill } from "react-icons/bs";
import { FaCircleQuestion } from "react-icons/fa6";
import { SlSupport } from "react-icons/sl";

const SidebarButton = () => {
  return (
    <>
      <button className="btn sidebar-btn">
        <MdDashboard
          style={{ color: "darkblue", fontSize: "24px", marginRight: "10px" }}
        />{" "}
        Dashboard
      </button>
      <button className="btn sidebar-btn">
        <RiPlantFill
          style={{ color: "darkblue", fontSize: "24px", marginRight: "10px" }}
        />{" "}
        Perks
      </button>
      <button className="btn sidebar-btn">
        <BsFillPuzzleFill
          style={{ color: "darkblue", fontSize: "24px", marginRight: "10px" }}
        />{" "}
        Addons
      </button>
      <button className="btn sidebar-btn">
        <FaCircleQuestion
          style={{ color: "darkblue", fontSize: "24px", marginRight: "10px" }}
        />{" "}
        FAQ
      </button>
      <button className="btn sidebar-btn">
        <SlSupport
          style={{ color: "darkblue", fontSize: "24px", marginRight: "10px" }}
        />{" "}
        Support
      </button>
    </>
  );
};

export default SidebarButton;
