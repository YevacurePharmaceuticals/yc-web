import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations
import { FiMenu, FiX } from "react-icons/fi"; // Icons
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Redirect from root to /yc-web
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/yc-web', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="app-container">
      <nav>
        <div className="nav-content">
          <div className="logo" onClick={() => navigate("/yc-web")}>
            <img 
              src="/yc-web/yevacure-removebg-preview.jpg" 
              alt="Yevacure Logo" 
              className="logo-image"
            />
            <span className="logo-text">Yevacure</span>
          </div>
          <div className="nav-links">
            <Link to="/yc-web/about" className={location.pathname === "/yc-web/about" ? "active" : ""}>About</Link>
            <Link to="/yc-web/products" className={location.pathname === "/yc-web/products" ? "active" : ""}>Products</Link>
            <Link to="/yc-web/contact" className={location.pathname === "/yc-web/contact" ? "active" : ""}>Contact</Link>
          </div>
          <div className="mobile-menu-toggle">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mobile-menu"
        >
          <Link to="/yc-web/about">About</Link>
          <Link to="/yc-web/products">Products</Link>
          <Link to="/yc-web/contact">Contact</Link>
        </motion.div>
      )}
      
      <main className="main-content">
        <Routes>
          <Route path="/yc-web" element={<Home />} />
          <Route path="/yc-web/" element={<Home />} />
          <Route path="/yc-web/about" element={<About />} />
          <Route path="/yc-web/products" element={<Products />} />
          <Route path="/yc-web/contact" element={<Contact />} />
          <Route path="/yc-web/product/:id" element={<ProductDetails />} />
          {/* Keep root route for redirect */}
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      
      <footer>
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section company-info">
            <h3>Yevacure Pharmaceutical Pvt Ltd</h3>
            <p>
              Quality pharmaceuticals since 2020. Your trusted partner in health and wellness, 
              delivering science-backed solutions for skincare, haircare, body care, and pet care.
            </p>
            <div className="contact-details">
              <p><strong>Address:</strong> SRC-24-B, Shipra Rivera, Indirapuram, Ghaziabad, UP 201014</p>
              <p><strong>Email:</strong> yevacurepharmaceutical123@gmail.com</p>
              <p><strong>Phone:</strong> +91-8047785182</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/yc-web">Home</Link></li>
              <li><Link to="/yc-web/about">About Us</Link></li>
              <li><Link to="/yc-web/products">Products</Link></li>
              <li><Link to="/yc-web/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="footer-section">
            <h4>Certifications</h4>
            <ul>
              <li>✓ FDA Approved</li>
              <li>✓ ISO 9001:2015</li>
              <li>✓ GMP Compliant</li>
              <li>✓ Cruelty Free</li>
              <li>✓ Dermatologically Tested</li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Yevacure Pharmaceutical Pvt Ltd. All rights reserved.
          </div>
          <div className="social-links">
            <a 
              href="https://www.facebook.com/p/Yevacure-Pharmaceutical-pvtltd-100069694669312/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
            >
              📘 Facebook
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
            >
              📷 Instagram
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
            >
              🐦 Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;