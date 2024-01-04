import React from "react";
import classes from "./Cards.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { IoMdCloudOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import Plans from "./Plans";

const Cards = () => {
  return (
    <div className="main-container">
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <h3>Basic</h3>
          <div className={classes.cardContent}>
            <h6 className="crossed">$ 89.99/mo</h6>
            <h4>$ 9.99/mo</h4>
            <button className="btn basic-btn">
              Get Started <FaArrowRightLong style={{ marginLeft: "10px" }} />
            </button>
            <hr className={classes.horizontal}></hr>
            <h6>What you'll get :</h6>
            <h5>
              <FaRegUser style={{ marginTop: "8px", marginRight: "5px" }} />{" "}
              Upto 25 Users
            </h5>
            <h5>
              <IoMdCloudOutline style={{ marginRight: "5px" }} /> Upto 25gb
              Storage
            </h5>
            <h5>
              <MdOutlineMail style={{ marginRight: "7px" }} />
              Email Support
            </h5>
            <h2>
              EXPLORE FEAUTURES <MdPlayArrow style={{ color: "orange" }} />
            </h2>
          </div>
        </div>

        {/* ---- -- second card ---- --- - */}

        <div className={classes.card}>
          <h3>Standard</h3>
          <div className={classes.cardContent}>
            <h6 className="crossed"> $ 189.99/mo</h6>
            <h4>$ 99.99/mo</h4>
            <button className="btn standard-btn">
              Get Started <FaArrowRightLong style={{ marginLeft: "10px" }} />
            </button>
            <hr className={classes.horizontal}></hr>
            <h6>What you'll get :</h6>
            <h5>
              <FaRegUser style={{ marginTop: "8px", marginRight: "5px" }} />{" "}
              Upto 50 Users
            </h5>
            <h5>
              <IoMdCloudOutline style={{ marginRight: "5px" }} /> Upto 60gb
              Storage
            </h5>
            <h5>
              <MdOutlineMail style={{ marginRight: "7px" }} />
              Email + Chat Support
            </h5>
            <h2>
              EXPLORE FEAUTURES <MdPlayArrow style={{ color: "pink" }} />
            </h2>
          </div>
        </div>

        {/* ---- -- third card ---- --- - */}

        <div className={classes.card}>
          <h3>Premium</h3>
          <div className={classes.cardContent}>
            <h6 className="crossed"> $ 389.99/mo</h6>
            <h4>$ 199.99/mo</h4>
            <button className="btn premium-btn">
              Get Started <FaArrowRightLong style={{ marginLeft: "10px" }} />
            </button>
            <hr className={classes.horizontal}></hr>
            <h6>What you'll get :</h6>
            <h5>
              <FaRegUser style={{ marginTop: "8px", marginRight: "5px" }} />{" "}
              Upto 75 Users
            </h5>
            <h5>
              <IoMdCloudOutline style={{ marginRight: "5px" }} /> Upto 100gb
              Storage
            </h5>
            <h5>
              <MdOutlineMail style={{ marginRight: "7px" }} />
              Email + Chat + Whatsapp Support
            </h5>
            <h2>
              EXPLORE FEAUTURES <MdPlayArrow style={{ color: "violet" }} />
            </h2>
          </div>
        </div>
      </div>
      <Plans />
    </div>
  );
};

export default Cards;
