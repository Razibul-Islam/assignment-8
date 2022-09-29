import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import "./Full.css";

const Full = () => {
  const [gymItem, setGymItem] = useState([]);
  const [time, setTime] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGymItem(data));
  }, []);

  const clickTime = (gym) => {
    console.log(gym);
    const newTime = [...time, gym];
    setTime(newTime);
  };

  return (
    <div className="full">
      <div className="main-body">
        <div className="card-main">
          <Header></Header>
          <div className="cartParent">
            {gymItem.map((gym) => (
              <Cart key={gym.id} gym={gym} clickTime={clickTime}></Cart>
            ))}
          </div>
        </div>
        <div>
          <Profile time={time}></Profile>
        </div>
      </div>
    </div>
  );
};

export default Full;
