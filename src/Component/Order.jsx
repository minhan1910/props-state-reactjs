/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        {new Date().toLocaleTimeString()} - We're currently open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

export default Order;
