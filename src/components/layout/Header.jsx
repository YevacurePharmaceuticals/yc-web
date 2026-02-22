import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavItems } from '../../data/navigationData';
import MegaMenu from './MegaMenu';
import data from '../../data/data.json';
import './Header.css';

/**
 * Header -- Sticky corporate navigation header.
 * Desktop: horizontal nav with MegaMenu on Products hover.
 * Mobile (<1024px): hamburger with slide-down menu and accordion sub-menu.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const megaTimerRef = useRef(null);
  const productsRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname]);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Desktop mega menu hover handlers with delay
  const handleMegaEnter = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    setMegaMenuOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimerRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  const closeMegaMenu = () => {
    setMegaMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const toggleMobileProducts = () => {
    setMobileProductsOpen((prev) => !prev);
  };

  return (
    <nav className={`header-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-content">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <img
            src="/yc-logo.webp"
            alt="Yevacure Pharmaceutical"
            className="logo-image"
          />
          <span className="logo-text">Yevacure</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {mainNavItems.map((item) =>
            item.hasMegaMenu ? (
              <div
                key={item.path}
                className={`products-trigger${megaMenuOpen ? ' mega-open' : ''}`}
                ref={productsRef}
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active' : ''}`
                  }
                >
                  {item.label}
                  <ChevronDown className="nav-link-chevron" />
                </NavLink>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>

        {/* Right Actions */}
        <div className="nav-actions">
          <a
            href="/YevacureProductCatalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="catalog-btn"
          >
            <Download className="catalog-btn-icon" />
            Download Catalog
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop MegaMenu - rendered outside nav-content for full-width positioning */}
      {megaMenuOpen && (
        <div
          onMouseEnter={handleMegaEnter}
          onMouseLeave={handleMegaLeave}
        >
          <MegaMenu onClose={closeMegaMenu} />
        </div>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {mainNavItems.map((item) =>
              item.hasMegaMenu ? (
                <div key={item.path} className="mobile-products-section">
                  <button
                    className={`mobile-products-toggle${
                      location.pathname.startsWith('/products') ? ' active' : ''
                    }`}
                    onClick={toggleMobileProducts}
                    aria-expanded={mobileProductsOpen}
                  >
                    {item.label}
                    <ChevronDown
                      className={`mobile-products-chevron${
                        mobileProductsOpen ? ' open' : ''
                      }`}
                    />
                  </button>

                  {mobileProductsOpen && (
                    <div className="mobile-products-submenu">
                      <NavLink
                        to="/products"
                        className={({ isActive }) =>
                          `mobile-submenu-link${isActive ? ' active' : ''}`
                        }
                        end
                      >
                        All Products
                      </NavLink>
                      {data.categories.map((category) => (
                        <div key={category.id}>
                          <div className="mobile-submenu-category">
                            {category.name}
                          </div>
                          {category.products.map((productId) => {
                            const product = data.products.find(
                              (p) => p.id === productId
                            );
                            return (
                              <NavLink
                                key={productId}
                                to={`/products/${category.id}/${productId}`}
                                className={({ isActive }) =>
                                  `mobile-submenu-link${isActive ? ' active' : ''}`
                                }
                              >
                                {product ? product.name : productId}
                              </NavLink>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `mobile-nav-link${isActive ? ' active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}

            <a
              href="/YevacureProductCatalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-catalog-btn"
            >
              <Download size={16} />
              Download Catalog
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
