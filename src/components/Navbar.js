import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink activeClassName="active" className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" className="nav-link" to="/Hero">
        Hero
      </NavLink>
    </nav>
  );
};
export default Navbar;
