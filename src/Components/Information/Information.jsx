import React from "react";
import "./information.scss";
import profile from "../../assets/images/profile.jpg";

const Information = () => {
  return (
    <div className="story">
      <h3 className="heading-cv">My Story</h3>
      <div className="profile">
        <img className="blurry-image" src={profile} alt="profile-img" />
      </div>
    </div>
  );
};

export default Information;
