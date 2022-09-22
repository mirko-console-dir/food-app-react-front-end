import CartItem from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modalCart/modalSlice";
import { clearCart } from "../../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amountItems } = useSelector((store) => store.cart);

  if (amountItems < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <>
      {/*  <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {...item} to pass all the rest proprieties 
          {cartItems?.map((item) => {
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
          <button
            className="btn clear-btn"
            onClick={() => dispatch(openModal())}
          >
            clear cart
          </button>
        </footer>
      </section> */}

      <ul className="list-group mb-3">
        {cartItems?.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        {/* scont */}
        {/*     <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">−$5</span>
                </li> */}
        {/* scont */}
        <form
          className="card p-2"
          data-dashlane-rid="39c201b386156f89"
          data-form-type
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Promo code"
              data-dashlane-rid="314febdf6599d89b"
              data-form-type
            />
            <button
              type="submit"
              className="btn btn-secondary"
              data-dashlane-rid="8d450c5ed74d1efd"
              data-dashlane-label="true"
              data-form-type
            >
              Redeem
            </button>
          </div>
        </form>
        <li className="list-group-item d-flex justify-content-between">
          <span className="mt-1">Total (USD)</span>
          <h5 className="mt-1">${total.toFixed(2)}</h5>
        </li>

        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </ul>
    </>
  );
};
export default CartContainer;
