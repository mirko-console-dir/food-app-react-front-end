import { React, useEffect } from "react";
import Navbar from "../navbars/Navbar";
import HeaderH from "./HeaderH";
import SectionOverEffect from "./SectionOverEffect";
import SectionLaptop from "./SectionLaptop";
import SectionPersonalize from "./SectionPersonalize";
import BannerHome from "./BannerHome";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "../../features/cart/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  /* only on mount */
  /* we can pass an argument 'random' to the asynckThunck call in cartSlice */
  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  return (
    <>
      <section id="section-1" className="section-1">
        <Navbar />
        <HeaderH />
      </section>
      <section id="section-2" className="section-2">
        <SectionOverEffect />
      </section>
      <section className="section-3 center" id="section-3">
        <SectionLaptop />
      </section>
      <section className="section-4 center" id="section-4">
        <SectionPersonalize />
      </section>
      <section className="section-5 center" id="section-5">
        <BannerHome />
      </section>
      <Footer />
    </>
  );
};
export default Home;
