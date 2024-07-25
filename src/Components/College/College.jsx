import React from "react";
import "./college.scss";
// import collegeImg from "../../assets/images/lpu22.jpeg";
const College = () => {
  return (
    <div className="college">
      <p>EDUCATION</p>
      <div className="college__desc">
        <h4>Lovely Professional University, Punjab</h4>
        <h4 className="colname">School of Computer Science and Engineering</h4>
        <p>
          Bachelor of Technology (Computer Science & Engineering) - A four years
          undergraduate program
        </p>
      </div>
      <figure className="college__image">
        <img
          // src={collegeImg}
          alt="Lovely Professional University campus during rainy season"
        />
        <figcaption>University campus during rainy season</figcaption>
      </figure>
    </div>
  );
};

export default College;
