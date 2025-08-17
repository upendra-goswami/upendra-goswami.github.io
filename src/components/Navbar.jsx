import { Link } from "react-router-dom";
import "./Navbar.css"; // keep CSS separate for clarity

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        {/* <img src="/logo.png" alt="Logo" className="navbar-logo-img" /> */}
        <span className="brand-name">Upendra Goswami Blogs</span>
      </Link>
      <div className="flex space-x-6">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
