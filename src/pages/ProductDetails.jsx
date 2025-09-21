import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import products from "../data/products";
import ProductSchema from '../components/ProductSchema';
import { useTheme } from "../context/ThemeContext";
import "./ProductDetails.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// Accordion component for expandable sections
const Accordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <motion.div 
      className="accordion"
      initial={false}
    >
      <button
        onClick={onToggle}
        className="accordion-button"
      >
        <span className="accordion-title">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="accordion-arrow"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="accordion-content"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function ProductDetails() {
  const { isDarkMode } = useTheme();
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [openSections, setOpenSections] = useState({
    features: true,
    ingredients: false,
    usage: false,
    benefits: false,
    warnings: false,
    compliance: false
  });

  if (!product) {
    return (
      <div className={`product-not-found ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="not-found-content">
          <div className="not-found-icon">❌</div>
          <h2 className="not-found-title">Product not found</h2>
          <Link 
            to="/products" 
            className="back-btn"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className={`product-details-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="product-details-wrapper">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="back-button-container"
        >
          <Link 
            to="/products" 
            className="back-button"
          >
            <span className="back-arrow">←</span>
            Back to Products
          </Link>
        </motion.div>

        {/* Product Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="product-details-grid"
        >
          {/* Product Image */}
          <motion.div variants={itemVariants} className="product-image-section">
            <LazyLoadImage
              effect="blur"
              src={product.image.path}
              alt={product.name}
              className="product-main-image"
            />
            
            {/* Certifications */}
            {product.certifications && product.certifications.length > 0 && (
              <div className="certifications-card">
                <h3 className="certifications-title">Certifications</h3>
                <div className="certifications-list">
                  {product.certifications.map((cert, index) => (
                    <span 
                      key={index}
                      className="certification-badge"
                    >
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Product Information */}
          <motion.div variants={itemVariants} className="product-info-section">
            <div className="product-header">
              <h1 className="product-title">
                {product.name}
              </h1>
              <span className="product-category">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              <p className="product-description">
                {product.longDescription}
              </p>
            </div>

            {/* Manufacturer Info */}
            <div className="manufacturer-info">
              <p className="manufacturer-text">
                <strong>Manufacturer:</strong> {product.manufacturer}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Accordion Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="accordion-sections"
        >
          <Accordion 
            title="Key Features" 
            isOpen={openSections.features} 
            onToggle={() => toggleSection('features')}
          >
            <ul className="features-list">
              {product.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>
          </Accordion>

          <Accordion 
            title="Ingredients" 
            isOpen={openSections.ingredients} 
            onToggle={() => toggleSection('ingredients')}
          >
            <ul className="ingredients-list">
              {product.ingredients.map((ing, idx) => (
                <li key={idx} className="ingredient-item">
                  <span className="ingredient-icon">•</span>
                  <span className="ingredient-text">{ing}</span>
                </li>
              ))}
            </ul>
          </Accordion>

          <Accordion 
            title="Usage Instructions" 
            isOpen={openSections.usage} 
            onToggle={() => toggleSection('usage')}
          >
            <p className="usage-text">{product.usage}</p>
          </Accordion>

          <Accordion 
            title="Benefits" 
            isOpen={openSections.benefits} 
            onToggle={() => toggleSection('benefits')}
          >
            <ul className="benefits-list">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">{benefit}</span>
                </li>
              ))}
            </ul>
          </Accordion>

          <Accordion 
            title="Warnings & Safety" 
            isOpen={openSections.warnings} 
            onToggle={() => toggleSection('warnings')}
          >
            <div className="warnings-box">
              <p className="warnings-text">{product.warnings}</p>
            </div>
          </Accordion>

          <Accordion 
            title="Compliance & Quality" 
            isOpen={openSections.compliance} 
            onToggle={() => toggleSection('compliance')}
          >
            <div className="compliance-content">
              {product.compliance && (
                <>
                  <div className="compliance-grid">
                    <div className="compliance-item">
                      <strong className="compliance-label">Batch Number:</strong>
                      <p className="compliance-value">{product.compliance.batchNumber}</p>
                    </div>
                    <div className="compliance-item">
                      <strong className="compliance-label">Expiry Date:</strong>
                      <p className="compliance-value">{product.compliance.expiryDate}</p>
                    </div>
                  </div>
                  <div className="compliance-item">
                    <strong className="compliance-label">Storage Instructions:</strong>
                    <p className="compliance-value">{product.compliance.storage}</p>
                  </div>
                  <div className="compliance-item">
                    <strong className="compliance-label">Regulatory Compliance:</strong>
                    <p className="compliance-value">{product.compliance.regulatory}</p>
                  </div>
                </>
              )}
            </div>
          </Accordion>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="related-products-section"
          >
            <h2 className="related-products-title">
              Related Products
            </h2>
            <div className="related-products-grid">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  whileHover={{ scale: 1.02 }}
                  className="related-product-card"
                >
                  <Link to={`/product/${relatedProduct.id}`}>
                    <LazyLoadImage
                      effect="blur"
                      src={relatedProduct.image.path}
                      alt={relatedProduct.name}
                      className="related-product-image"
                    />
                    <div className="related-product-content">
                      <h3 className="related-product-title">
                        {relatedProduct.name}
                      </h3>
                      <p className="related-product-description">
                        {relatedProduct.shortDescription}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="trust-badges-section"
        >
          <h3 className="trust-badges-title">Why Trust This Product?</h3>
          <div className="trust-badges-grid">
            {[
              { icon: "🔬", text: "Clinically Tested" },
              { icon: "🌿", text: "Natural Ingredients" },
              { icon: "🛡️", text: "Quality Assured" }
            ].map((badge, index) => (
              <div key={index} className="trust-badge">
                <div className="trust-badge-icon">{badge.icon}</div>
                <p className="trust-badge-text">{badge.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Add Product Schema for SEO */}
      <ProductSchema product={product} />
    </div>
  );
}

export default ProductDetails;
