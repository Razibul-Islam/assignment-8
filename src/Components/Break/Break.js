import React, { useEffect, useState } from "react";
import Addbreak from "../AddBreak/AddBreak";
import "./Break.css";

const Break = () => {
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    if (breakTime !== 0) {
      localStorage.setItem("break-time", breakTime);
    }
  }, [breakTime]);

  useEffect(() => {
    const storedTime = localStorage.getItem("break-time");
    if (storedTime) {
      setBreakTime(storedTime);
    }
  }, []);
    
  const clickBreakTime = (time) => {
    setBreakTime(time);
    };

  return (
    <div>
      <h3>Add A Break</h3>
      <div className="break-time">
        <button onClick={() => clickBreakTime(10)}>10</button>
        <button onClick={() => clickBreakTime(20)}>20</button>
        <button onClick={() => clickBreakTime(30)}>30</button>
        <button onClick={() => clickBreakTime(40)}>40</button>
        <button onClick={() => clickBreakTime(50)}>50</button>
      </div>
          <Addbreak breakTime={breakTime}></Addbreak>
    </div>
  );
};

export default Break;
