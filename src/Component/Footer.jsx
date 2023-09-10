/* eslint-disable react/no-unescaped-entities */

import Order from "./Order";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("we're currently open");
  // } else {
  //   alert("Sorry, we're close");
  // }
  if (!isOpen) {
    return (
      <p>
        We're happy to see you between {openHour}:00 and {closeHour}:00
      </p>
    );
  }

  return (
    <footer className="footer">
      <Order closeHour={closeHour} openHour={openHour} />
    </footer>
  );
}

export default Footer;
