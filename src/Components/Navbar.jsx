import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    marginRight: "20px",
  };
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link style={navStyle} to="/">
          Home
        </Link>
        <Link style={navStyle} to="/about">
          About
        </Link>
        <Link style={navStyle} to="/contact">
          Contact Us
        </Link>
        <Link style={navStyle} to="/users">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
