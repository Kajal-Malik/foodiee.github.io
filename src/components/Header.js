import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Delievery</h3>
            <h1>KAJAL's PIZZA CAFE</h1>
            <p>
              The one stop for all your cravings.
              Offers on the pizza above Rs 99.
              Grab early.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DELIEVER NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;