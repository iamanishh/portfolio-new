import React from "react";
import "./information.scss";
import profile from "../../assets/images/profile.jpg";

const Information = () => {
  return (
    <div className="story">
      <h3 className="heading-cv">My Story</h3>

      <div className="profile">
        <div className="profile__left">
          <img className="blurry-image" src={profile} alt="profile-img" />
        </div>
        <div className="profile__right">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            nesciunt incidunt consequatur necessitatibus maiores amet sint
            placeat error vel iste dolorem dolor eveniet itaque cupiditate
            eligendi autem esse culpa nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
