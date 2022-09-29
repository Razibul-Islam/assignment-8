import React from 'react';

const Cart = (props) => {
    const { name, img, time, description } = props.gym;
    return (
      <div>
        <h3>Select your today's exercise</h3>
        <img src={img} alt="" />
        <h2>Name: {name}</h2>
        <p>{description}</p>
        <p>Time required: {time}</p>
      </div>
    );
};

export default Cart;