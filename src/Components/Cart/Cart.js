import "./Cart.css";

const Cart = (props) => {
    const { name, img, time, description } = props.gym;
  return (
    <div className="cart">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p className="description">{description.slice(0, 86)}...</p>
      <p className="time">
        Time required: <small>{time}</small>
      </p>
      <button className="cart-btn">
        Add to list
      </button>
    </div>
  );
};

export default Cart;