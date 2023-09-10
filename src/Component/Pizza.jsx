/* eslint-disable react/prop-types */

// name: "Focaccia",
// ingredients: "Bread with italian olive oil and rosemary",
// price: 6,
// photoName: "pizzas/focaccia.jpg",
// soldOut: false,
function Pizza({ photoName, name, ingredients, price, soldOut }) {
  // if (!soldOut) {
  //   return null;
  // }

  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

export default Pizza;
