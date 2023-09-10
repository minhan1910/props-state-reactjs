/* eslint-disable react/no-unescaped-entities */
import Pizza from "./Pizza";
import pizzaData from "../../public/data";
import { Fragment } from "react";

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
        <Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose form. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza {...pizza} key={pizza.name} />
            ))}
          </ul>
        </Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

export default Menu;
