import React from "react";
import "./Break.css";

const Break = () => {
  const breakTime = [10, 20, 30, 40, 50];
    const clickTime = () => {
        const newBreakTime = [...breakTime];
        newBreakTime.filter((item, index) => {
            console.log(item, index);
        })
    // console.log(e.newBreakTime);
  };
  return (
    <div>
      <h3>Add A Break</h3>
      <div className="break-time">
        {breakTime.map((time) => (
          <button onClick={clickTime}>{time}s</button>
        ))}
      </div>
    </div>
  );
};

export default Break;
