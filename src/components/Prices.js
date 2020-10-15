import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza1.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margherita</h1>
              <p className="price__text">
              Tastes like fresh mozzarella. Sauce is sweet and tangy, more of a marinara/pasta sauce flavor.
              </p>
              <p className="price_rs">Rs 300</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza2.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Veg Pizza </h1>
              <p className="price__text">
              Veggie Pizza. When you want to jazz up your cheese pizza with color and texture, 
              veggies are the perfect topping.
              </p>
              <p className="price_rs">Rs 125</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza3.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margherita</h1>
              <p className="price__text">
                Tastes like fresh mozzarella. Sauce is sweet and tangy, more of a marinara/pasta sauce flavor.
                 Crust is great and has those Neapolitan-esque burnt bubbles. Chewy but manageable.
              </p>
              <p className="price_rs">Rs 150.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza4.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Cheese Pizza</h1>
              <p className="price__text">
              The most popular cheeses used in the preparation of pizza are mozzarella (accounting for about 30%), provolone, cheddar and Parmesan. Emmental, 
              Romano and ricotta are often used as toppings 

              </p>
              <p className="price_rs">Rs 250</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza5.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Barbeque Pizza </h1>
              <p className="price__text">
              We make the original Barbeque pizza even better in our Barbeque pizza,
               which features traditional ham and pineapple as well as smoked bacon,mozzarella, and provolone cheese.
              </p>
              <p className="price_rs">Rs 300</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza6.png" alt="pizza" />
              </div>
              <h1 className="price__heading"> Pepperoni Pizza</h1>
              <p className="price__text">
              Pepperoni dominates as the most popular pizza topping. 
A whopping 36% of people order pepperoni on their pizzas, 
according to research by business advisor Brian Roemmele
              </p>
              <p className="price_rs">Rs 200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;