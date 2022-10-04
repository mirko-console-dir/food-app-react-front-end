import { React, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbars/Navbar";
import CartContainer from "../cart/cartContainer";
import ModalCart from "../modals/ModalCart";
import Products from "../../features/products/Products";
import { calculateTotals, getCartItems } from "../../features/cart/cartSlice";
import cartItems from "../../cartItemsTest";
/* order */
import {
  useGetPurchasesQuery,
  useAddPurchaseMutation,
} from "../../service/purchaseRTKservice";
import Purchase from "../purchase";
/* order */
/* order */
const About = () => {
  /* order */
  const orderEl = useRef("");
  const {
    data: purchases = [],
    error,
    isLoading: aliasNameLoading,
    isFetching,
    refetch: reloadPurchases, // alias inserito
  } = useGetPurchasesQuery();
  const [
    addPurchase,
    {
      isLoading: isLoadingPurchase,
      isSuccess: isSuccessPurchase,
      error: purchaseError,
      isError: isErrorPurchase,
    },
  ] = useAddPurchaseMutation();

  /* order */
  const dispatch = useDispatch();
  const [toggleForm, setToggleForm] = useState(false);
  const { isOpen } = useSelector((store) => store.modalCart);
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  /* every time change something in cart items call calculateTotals */
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  /* only on mount */
  /* we can pass an argument 'random' to the asynckThunck call in cartSlice */
  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  const pur = {
    fullname: "t",
    email: "tttt",
    phone: 212,
    cart: "fas",
    amount: 21,
    delivery_street: "15 Bennet st",
    delivery_town: "Bondi",
    delivery_state: "NSW",
    delivery_post_code: "2000",
    note: "Nessuna in particular",
    type: "delivery",
  };

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Is Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="">
        {purchases?.map((purchase) => (
          <Purchase purchase={purchase} key={purchase.id} />
        ))}
        {/* bind per passare alla funzione il parametro, null per il this */}
        <button onClick={addPurchase.bind(null, pur)}>ad order</button>
      </div>

      {/* <Products products={products} /> */}
      <section id="section-1" className="section-1 ">
        {isOpen && <ModalCart />}

        <Navbar />
      </section>
      <div className="container-fluid order">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
              </h4>
              <CartContainer />
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Shipping address</h4>
              <form
                className="needs-validation"
                noValidate
                data-dashlane-rid="60614360c3bb6c5f"
                data-form-type
              >
                <div className="row g-3 delivery-address">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First name"
                      required
                      data-dashlane-rid="dbfd51cd3e74f74e"
                      data-form-type
                      data-kwimpalaid="1663559906091-0"
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last name"
                      required
                      data-dashlane-rid="11c83182bb5231e8"
                      data-form-type
                      data-kwimpalaid="1663559906091-1"
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div className="col-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-muted"></span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                      required
                      data-dashlane-rid="424167f7c0c2474a"
                      data-form-type
                      data-kwimpalaid="1663559906091-3"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div className="col-6">
                    <label htmlFor="phone" className="form-label">
                      Phone <span className="text-muted"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="+61 4140230"
                      required
                      data-form-type
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="delivery_street" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="delivery_street"
                      placeholder="1234 Main St"
                      required
                      data-dashlane-rid="632970c3c4559f5a"
                      data-form-type
                      data-kwimpalaid="1663559906091-4"
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="note" className="form-label">
                      Note <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="note"
                      placeholder="Apartment or suite"
                      data-dashlane-rid="394a70b61c22733d"
                      data-form-type
                    />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="delivery_town" className="form-label">
                      Town
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="delivery_town"
                      placeholder="Glebe"
                      required
                      data-dashlane-rid="632970c3c4559f5a"
                      data-form-type
                      data-kwimpalaid="1663559906091-4"
                    />
                    <div className="invalid-feedback">
                      Please select a valid Town.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="delivery_state" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="delivery_state"
                      placeholder="NSW"
                      required
                      data-dashlane-rid="632970c3c4559f5a"
                      data-form-type
                      data-kwimpalaid="1663559906091-4"
                    />
                    <div className="invalid-feedback">
                      Please select a valid State.
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label
                      htmlFor="delivery_postal_code"
                      className="form-label"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="delivery_postal_code"
                      placeholder="2037"
                      required
                      data-dashlane-rid="632970c3c4559f5a"
                      data-form-type
                      data-kwimpalaid="1663559906091-4"
                    />
                    <div className="invalid-feedback">
                      Please select a valid Postal Code.
                    </div>
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="form-check">
                  <input
                    onClick={() => setToggleForm(!toggleForm)}
                    type="checkbox"
                    className="form-check-input"
                    id="same-address"
                    data-dashlane-rid="18d7a320c5681ce2"
                    data-form-type
                  />
                  <label className="form-check-label" htmlFor="same-address">
                    Insert different billing address
                  </label>
                  {toggleForm && (
                    <div className="row g-3 bill-address" name="bill-address">
                      <h4 className="mb-3">Billing address</h4>
                      <div className="col-12">
                        <label htmlFor="bill_street" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="bill_street"
                          placeholder="1234 Glebe Point Rd St"
                          data-dashlane-rid="632970c3c4559f5a"
                          data-form-type
                          data-kwimpalaid="1663559906091-4"
                        />
                        <div className="invalid-feedback">
                          Please enter your billing address.
                        </div>
                      </div>
                      <div className="col-md-5">
                        <label htmlFor="bill_town" className="form-label">
                          Town
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="bill_town"
                          placeholder="Glebe"
                          data-dashlane-rid="632970c3c4559f5a"
                          data-form-type
                          data-kwimpalaid="1663559906091-4"
                        />
                        <div className="invalid-feedback">
                          Please select a valid Town.
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="bill_state" className="form-label">
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="bill_state"
                          placeholder="NSW"
                          data-dashlane-rid="632970c3c4559f5a"
                          data-form-type
                          data-kwimpalaid="1663559906091-4"
                        />
                        <div className="invalid-feedback">
                          Please select a valid State.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label
                          htmlFor="bill_postal_code"
                          className="form-label"
                        >
                          Postal Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="bill_postal_code"
                          placeholder="2037"
                          data-dashlane-rid="632970c3c4559f5a"
                          data-form-type
                          data-kwimpalaid="1663559906091-4"
                        />
                        <div className="invalid-feedback">
                          Please select a valid Postal Code.
                        </div>
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <hr className="my-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="my-3">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      defaultChecked
                      required
                      data-dashlane-rid="00ed04e5bf3d35dd"
                      data-form-type
                      data-kwimpalastatus="dead"
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                      data-dashlane-rid="eb5bd809085d3c9b"
                      data-form-type
                      data-kwimpalastatus="dead"
                    />
                    <label className="form-check-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                      data-dashlane-rid="676df7747fc35a05"
                      data-form-type
                      data-kwimpalaid="1663559906091-11"
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                      data-dashlane-rid="4b7209f98e8b0941"
                      data-form-type
                      data-kwimpalaid="1663559906091-12"
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                      data-dashlane-rid="7c9633ca0cc33055"
                      data-form-type
                      data-kwimpalaid="1663559906091-13"
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                      data-dashlane-rid="6d9e25aeffc2c2bf"
                      data-form-type
                      data-kwimpalaid="1663559906091-14"
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <button
                  className="w-100 btn btn-primary btn-lg"
                  type="submit"
                  data-dashlane-rid="eb8b90de1544ed14"
                  data-dashlane-label="true"
                  data-form-type
                >
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
