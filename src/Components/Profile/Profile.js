import React from "react";
import "./Profile.css";
import profile from "../../img/profile.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="personal-info">
        <img src={profile} alt="" />
        <div className="info-text">
          <h3>Razibul Islam</h3>
          <p>
            <small>Web developer</small>
          </p>
        </div>
      </div>
      <div className="break">
        <h3>Add A Break</h3>
        <div className="break-time">
          <p>10s</p>
          <p>20s</p>
          <p>30s</p>
          <p>40s</p>
          <p>50s</p>
        </div>
      </div>
      <div className="exercise-info">
        <h3>Exercise Details</h3>
        <div className="total-exercise">
          <p>Exercise Details</p>
          <small>200 seconds</small>
        </div>
        <div className="total-exercise">
          <p>Break time</p>
          <small>40 seconds</small>
        </div>
      </div>
      <div className="activity-btn">
        <button>Activity Completed</button>
      </div>
    </div>
  );
};

export default Profile;
