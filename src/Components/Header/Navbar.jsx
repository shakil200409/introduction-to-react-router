import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navStyle = {
    marginRight: "20px",
  };
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <NavLink style={navStyle} to="/">
          Home
        </NavLink>
        <NavLink style={navStyle} to={"/about"}>
          About
        </NavLink>
        <NavLink style={navStyle} to="/contact">
          Contact Us
        </NavLink>
        <NavLink style={navStyle} to="/users">
          Users
        </NavLink>
        <NavLink style={navStyle} to="/posts">
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
