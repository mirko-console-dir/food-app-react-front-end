import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../navbars/Navbar";
import CartContainer from "../cart/cartContainer";
import ModalCart from "../modals/ModalCart";
import Products from "../../features/products/Products";
import { calculateTotals, getCartItems } from "../../features/cart/cartSlice";

const About = () => {
  const dispatch = useDispatch();
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
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Is Loading...</h1>
      </div>
    );
  }

  /*   const url = "http://127.0.0.1:8000/api/products";
  const [products, setProducts] = useState([]); */

  /*  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
    return () => {};
  }, []); */
  return (
    <>
      <section id="section-1" className="section-1">
        {isOpen && <ModalCart />}

        <Navbar />
        <div className="cart-container" style={{ marginTop: "10em" }}>
          <CartContainer />
        </div>
      </section>

      {/* <Products products={products} /> */}
    </>
  );
};

export default About;
