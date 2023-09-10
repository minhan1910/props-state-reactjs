/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas }) {
  return (
    <Fragment>
      {pizzas.map((pizza) => (
        <Pizza {...pizza} key={pizza.name} />
      ))}
    </Fragment>
  );
}

export default PizzaList;
