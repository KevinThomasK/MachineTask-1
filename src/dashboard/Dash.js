import React, { useState } from "react";
import Cards from "../components/Cards";

const Dash = () => {
  const [activeButton, setActiveButton] = useState("month");

  return (
    <div className="dashboard">
      <div className="first-div">
        <h4 className="text-bold">Choose a plan that's just right for you !</h4>
        <div className="toggle-btn-container">
          <button
            className={
              activeButton === "month"
                ? "dashboard-toggle-btn month-btn"
                : "dashboard-toggle-btn"
            }
            onClick={() => setActiveButton("month")}
          >
            Monthly
          </button>
          <button
            className={
              activeButton === "annual"
                ? "dashboard-toggle-btn month-btn ann"
                : "dashboard-toggle-btn ann"
            }
            onClick={() => setActiveButton("annual")}
          >
            Annualy<sup className="green">-10%</sup>
          </button>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Dash;
