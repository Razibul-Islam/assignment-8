import React from "react";
import './Break.css';

const Break = () => {
  const breakTime = [10, 20, 30, 40, 50];
  return (
    <div>
      <h3>Add A Break</h3>
          <div className="break-time">{
              breakTime.map((time) => (
                  <button>{time}s</button>
              ))
      }</div>
    </div>
  );
};

export default Break;
