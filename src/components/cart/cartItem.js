import { ChevronDown, ChevronUp } from "../../icons/icons";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../features/cart/cartSlice";
/* id,
name_prod,
price,
image,
description,
amount,
id_prod,
ingredients,
amountIngredients,
total,
isLoading */
const CartItem = ({
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
  isLoading,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image} alt={name_prod} />
      <div>
        <h4>{name_prod}</h4>
        <h5>Ingredients:</h5>
        {ingredients.map((ing) => (
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
              <p className="mb-0">And this is more example text.</p>
            </div>
          </div>
        ))}

        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
            dispatch(removeCartItem(id));
          }}
        >
          remove
        </button>
      </div>

      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        {/* check qtyamount to dispatch the right action */}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
