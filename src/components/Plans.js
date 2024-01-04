import React from "react";
import classes from "./Cards.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { IoMdCloudOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";

const Plans = () => {
  return (
    <div className={classes.plans}>
      <div className={classes.plansDiv}>
        <div className={classes.plansMain}>
          <button className="btn free-btn">free forever</button>
          <h2>Free starter</h2>
          <p>
            The quickest and eazy way to to try protocols with basic
            functionalities.
          </p>
          <button className="btn get-btn">
            Get Started <FaArrowRightLong style={{ marginLeft: "10px" }} />
          </button>
        </div>
        <div className={classes.plansInner}>
          <h5>What you'll get:</h5>
          <h4>
            <FaRegUser style={{ marginTop: "8px", marginRight: "5px" }} /> Upto
            8 Users
          </h4>
          <h4>
            <IoMdCloudOutline style={{ marginRight: "5px" }} />
            Upto 3gb Storage
          </h4>
          <h4>
            {" "}
            <MdOutlineMail style={{ marginRight: "7px" }} />
            Email Support
          </h4>
          <h4>
            <FaCheckDouble style={{ marginRight: "7px" }} />
            Basic of Documents,Task flow,Voting
            Accounting,Banking,Notes,Investor,Director and team management
            included
          </h4>
        </div>
      </div>
      <div className={classes.plansDiv}>
        <div className={classes.plansMain}>
          <button className="btn connect-btn">Lets connect</button>
          <h2>Enterprise Plan</h2>
          <p>
            Effortlesly customize and fine-tune services as your needs
            shift,ensuring the perfect tools for success
          </p>
          <button className="btn contact-btn">
            Contact us <FaArrowRightLong style={{ marginLeft: "10px" }} />
          </button>
        </div>
        <div className={classes.plansInner}>
          <h5>What you'll get:</h5>
          <h4>
            <FaRegUser style={{ marginTop: "8px", marginRight: "5px" }} /> More
            than 75 Users
          </h4>
          <h4>
            {" "}
            <MdOutlineMail style={{ marginRight: "7px" }} />
            Email Support
          </h4>
          <h4>
            <FaCheckDouble style={{ marginRight: "7px" }} />
            Customization of all other feautures
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Plans;
