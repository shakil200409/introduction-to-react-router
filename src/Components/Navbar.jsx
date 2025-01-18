const Navbar = () => {
  const navStyle = {
    marginRight: "20px",
  };
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <a style={navStyle} href="/">
          Home
        </a>
        <a style={navStyle} href="/about">
          About
        </a>
        <a style={navStyle} href="/Contact">
          Contact Us
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
