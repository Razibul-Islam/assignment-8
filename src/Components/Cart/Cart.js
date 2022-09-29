import "./Cart.css";

const Cart = ({ gym, clickTime }) => {
  const { name, img, time, description } = gym;
  return (
    <div className="cart">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p className="description">{description.slice(0, 86)}...</p>
      <p className="time">
        Time required: <small>{time}s</small>
      </p>
      <button className="cart-btn" onClick={() => clickTime(gym)}>
        Add to list
      </button>
    </div>
  );
};

export default Cart;
