import React from 'react';
import './AddBreak.css'

const Addbreak = (props) => {
    return (
      <div>
        <div className="addBreak">
          <p>Break time</p>
          <small>{props.breakTime} seconds</small>
        </div>
      </div>
    );
};

export default Addbreak;
