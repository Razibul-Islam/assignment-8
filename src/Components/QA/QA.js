import React from 'react';
import './QA.css'

const QA = () => {
    return (
      <div className="question">
        <div className="question-parent">
          <h4>Q1: How does react work</h4>
          <small className="answer">
            <h3>Answer:</h3>
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code
          </small>
        </div>
        <div className="question-parent">
          <h4>Q2: Difference between props and state</h4>
          <small className="answer">
            <h3>Answer:</h3>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components. The this.setState property is
            used to update the state values in the component.
          </small>
        </div>
        <div className="question-parent">
          <h4>Q3: What can do useEffect accept api data load</h4>
          <small className="answer">
            <h3>Answer:</h3>
            The useEffect Hook allows you to perform side effects in your
            components. Some examples of side effects are: directly updating the
            DOM, and timers.
          </small>
        </div>
      </div>
    );
};

export default QA;