import { NavLink, Link } from "react-router-dom";
import { CartIcon } from "../../icons/icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  /*   console.log(useSelector((store) => console.log(store))); */
  const amountItems = useSelector((store) => store.cart.amountItems);

  return (
    <>
      <nav className="navbar">
        <NavLink activeClassName="active" className="navbar-link" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="navbar-link" to="/about">
          About
        </NavLink>
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{amountItems}</p>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
