/* import customItem from "./customItem"; */
import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { removeCustomItem } from "../../features/customItem/customItemSlice";
import CustomItem from "./customItem";

const CustomItemContainer = () => {
  /*   const dispatch = useDispatch();
  const { cartItems, total, amountItems } = useSelector((store) => store.cart); */

  /* if (amountItems < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  } */
  const dispatch = useDispatch();
  const { customItem } = useSelector((store) => store);

  if (customItem.customItems[0].total === 0) {
    return (
      <section className="custom-item">
        <header>
          <h2>your Custom Item</h2>
        </header>
        <div>
          <p>Empty choice</p>
        </div>
        <footer>
          <hr />
        </footer>
      </section>
    );
  }
  return (
    <section className="custom-item">
      <header>
        <h2>your Custom Item</h2>
      </header>
      <div>
        <section className="cart">
          <header></header>
          <div>
            {/* {...item} to pass all the rest proprieties */}
            {customItem.customItems?.map((item) => {
              return <CustomItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className="cart-total">
              {customItem.customItems?.map((item) => {
                return (
                  <h4 key={item.id}>
                    total <span>${item.total.toFixed(2)}</span>
                  </h4>
                );
              })}
            </div>
            <button
              className="btn clear-btn"
              onClick={() => dispatch(removeCustomItem())}
            >
              clear CustomItem
            </button>
          </footer>
        </section>
      </div>
      <footer>
        <hr />
      </footer>
    </section>
  );

  /* return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItem?.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch()}>
          clear cart
        </button>
      </footer>
    </section>
  );
 */
};
export default CustomItemContainer;
