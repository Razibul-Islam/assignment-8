import React from "react";
import "./Profile.css";
import profile from "../../img/profile.jpg";
import Break from "../Break/Break";
import AddBreak from "../AddBreak/AddBreak";

const Profile = ({ time }) => {
  let totalTime = 0;
  for (const newTime of time) {
    totalTime = parseInt(totalTime) + parseInt(newTime.time);
  }
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
        <Break></Break>
      </div>
      <div className="exercise-info">
        <h3>Exercise Details</h3>
        <div className="total-exercise">
          <p>Exercise Details</p>
          <small>{totalTime} seconds</small>
        </div>
        <div className="total-exercise">
        </div>
      </div>
      <div className="activity-btn">
        <button>Activity Completed</button>
      </div>
    </div>
  );
};

export default Profile;
