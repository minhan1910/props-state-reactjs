/* eslint-disable react/prop-types */
import { Fragment } from "react";
import PizzaList from "./PizzaList";

export default function MenuContent({ pizzas }) {
  return (
    <Fragment>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose form. All from
        our stone oven, all organic, all delicious.
      </p>

      <ul className="pizzas">
        <PizzaList pizzas={pizzas} />
      </ul>
    </Fragment>
  );
}
