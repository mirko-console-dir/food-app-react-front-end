import { ChevronDown, ChevronUp } from "../../icons/icons";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeCustomItem,
  calculateTotalsCustom,
  increaseCustomItem,
  decreaseCustomItem,
  increaseIngredientItem,
  decreaseIngredientItem,
  removeIngredient,
} from "../../features/customItem/customItemSlice";

const CustomItem = ({
  id,
  name_prod,
  price,
  image,
  description,
  amount,
  id_prod,
  ingredients,
  amountIngredients,
  total,
}) => {
  const dispatch = useDispatch();
  const { customItems } = useSelector((store) => store.customItem);

  return (
    <article className="cart-item">
      <img src={image} alt={name_prod} />
      <div>
        <h4>{name_prod}</h4>
        <h4>${price}</h4>

        <div>
          <h5>Ingredients:</h5>
          {ingredients?.map((ing) => (
            <div className="dropdown" key={ing.id}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {ing.name_variant}
              </button>
              <div
                className="dropdown-menu p-4 text-muted"
                style={{ maxWidth: "200px" }}
              >
                <p>{ing.description}</p>
                <h4 className="item-price">${ing.price}</h4>
                <div>
                  <button
                    className="amount-btn"
                    onClick={() => {
                      dispatch(increaseIngredientItem(ing.id));
                      dispatch(calculateTotalsCustom(customItems[0].price));
                    }}
                  >
                    <ChevronUp />
                  </button>
                  <p className="amount">{ing.amount} qty</p>{" "}
                  {/*          check qtyamount to dispatch the right action
                   */}{" "}
                  <button
                    className="amount-btn"
                    onClick={() => {
                      if (ing.amount === 1) {
                        dispatch(removeIngredient(ing.id));
                        dispatch(calculateTotalsCustom(customItems[0].price));
                        return;
                      }
                      dispatch(decreaseIngredientItem(ing.id));
                      dispatch(calculateTotalsCustom(customItems[0].price));
                    }}
                  >
                    <ChevronDown />
                  </button>
                </div>
                <p className="mb-0">Tot Ingr ${ing.total}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeCustomItem());
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increaseCustomItem());
            dispatch(calculateTotalsCustom(customItems[0].price));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount} qty</p>{" "}
        {/*          check qtyamount to dispatch the right action
         */}{" "}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeCustomItem());
              return;
            }
            dispatch(decreaseCustomItem());
            dispatch(calculateTotalsCustom(customItems[0].price));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CustomItem;
