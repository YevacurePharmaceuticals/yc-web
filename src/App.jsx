import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";
import React from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="app-content">
        <nav className="navbar">
          <div
            className="navbar-brand"
            onClick={() => navigate("/")}
            tabIndex={0}
            role="button"
            aria-label="Go to home page"
          >
            Yevacure
          </div>
          <div
            className="hamburger"
            onClick={() => setMenuOpen((m) => !m)}
            tabIndex={0}
            role="button"
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`navbar-links${menuOpen ? " open" : ""}`}>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
            <Link
              to="/products"
              className={location.pathname === "/products" ? "active" : ""}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            &copy; {new Date().getFullYear()} Yevacure. All rights reserved.
          </div>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
