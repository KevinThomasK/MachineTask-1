import React from "react";
import profilepic from "../assets/profilepic.jpg";
import { FaAngleRight } from "react-icons/fa";

const ProfileView = () => {
  return (
    <div className="profile">
      <div className="profileitems">
        <img src={profilepic} alt="profilepic" className="profilepic" />
        <div className="profile-name">
          <p style={{ marginBottom: 0, fontSize: "18px", fontWeight: 500 }}>
            Kevin Thomas
          </p>
          <FaAngleRight
            style={{
              paddingLeft: "10px",
              color: "darkblue",
              fontSize: "20px",
              marginTop: "3px",
            }}
          />
        </div>
        <div>kevinthomas@gmail.com</div>
      </div>
    </div>
  );
};

export default ProfileView;
