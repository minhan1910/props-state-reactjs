/* eslint-disable react/no-unescaped-entities */
import pizzaData from "../../public/data";
import MenuContent from "./MenuContent";

// name: "Focaccia",
// ingredients: "Bread with italian olive oil and rosemary",
// price: 6,
// photoName: "pizzas/focaccia.jpg",
// soldOut: false,

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <MenuContent pizzas={pizzas} />
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

export default Menu;
