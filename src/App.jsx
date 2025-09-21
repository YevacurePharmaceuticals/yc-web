import { Routes, Route, Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations
import { FiMenu, FiX, FiInfo, FiPackage, FiMail, FiHome } from "react-icons/fi"; // Icons
import Home from "./pages/Home";  
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <nav>
        <div className="nav-content">
          <div className="logo" onClick={() => navigate("/home")}>
            <img 
              src="/yc-logo.webp" 
              alt="Yevacure Logo" 
              className="logo-image"
            />
            <span className="logo-text">Yevacure</span>
          </div>
          <div className="nav-links">
            <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>
              <FiHome className="nav-icon" />
              Home
            </Link>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              <FiInfo className="nav-icon" />
              About
            </Link>
            <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>
              <FiPackage className="nav-icon" />
              Products
            </Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
              <FiMail className="nav-icon" />
              Contact
            </Link>
          </div>
          <div className="nav-actions">
            <ThemeToggle />
            <div className="mobile-menu-toggle">
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
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
          <Link to="/home">
            <FiHome className="nav-icon" />
            Home
          </Link>
          <Link to="/about">
            <FiInfo className="nav-icon" />
            About
          </Link>
          <Link to="/products">
            <FiPackage className="nav-icon" />
            Products
          </Link>
          <Link to="/contact">
            <FiMail className="nav-icon" />
            Contact
          </Link>
        </motion.div>
      )}
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
      
      <footer>
        <div className="footer-content">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section company-info">
              <h3>Yevacure Pharmaceutical Pvt Ltd</h3>
              <p>
                Quality pharmaceuticals since 2020. Your trusted partner in health and wellness, 
                delivering science-backed solutions for skincare, haircare, body care, and pet care.
              </p>
              <div className="contact-details">
                <p><strong>Address:</strong> #UG15 HRC SHOPPING COMPLEX UPPER, GROUND FLOOR GH PLOT NO 1/2 VAIBHAV KHAND, INDIRAPURAM, GHAZIABAD, Uttar Pradesh 201014, India</p>
                <p><strong>Email:</strong> yevacurepharmaceuticals@gmail.com</p>
                {/* <p><strong>Phone:</strong> +91-9871285873</p> */}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="footer-section">
              <h4>Certifications</h4>
              <ul>
                <li>✓ ISO 9001:2015</li>
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
        </div>
      </footer>
    </div>
  );
}

export default App;