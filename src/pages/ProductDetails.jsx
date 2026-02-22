import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ChevronDown, ArrowLeft, Mail, ShieldCheck, Package } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import ProductSchema from '../components/ProductSchema';
import data from '../data/data.json';
import './ProductDetails.css';

const products = data.products;

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

const Accordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <motion.div className="accordion" initial={false}>
      <button onClick={onToggle} className="accordion-button">
        <span className="accordion-title">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="accordion-arrow"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
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
  const { category, id } = useParams();
  const product = products.find((p) => p.id === id);
  const [openSections, setOpenSections] = useState({
    features: true,
    ingredients: false,
    usage: false,
    benefits: false,
    warnings: false,
    compliance: false,
  });

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const isScheduleH =
    product.compliance &&
    product.compliance.regulatory &&
    product.compliance.regulatory.toLowerCase().includes('schedule h');

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const inquiryMailto = `mailto:yevacurepharmaceuticals@gmail.com?subject=${encodeURIComponent(
    `Inquiry about ${product.name}`
  )}&body=${encodeURIComponent(
    `Hello,\n\nI would like to inquire about the product: ${product.name}\n\nPlease provide more details.\n\nThank you.`
  )}`;

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: product.therapeuticCategory, path: `/products/${category}` },
    { label: product.name },
  ];

  return (
    <div className="product-details-container">
      <MetaTags
        title={product.name}
        description={product.shortDescription}
      />

      {/* Breadcrumb Banner */}
      <div className="product-breadcrumb-banner">
        <div className="product-breadcrumb-inner">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <div className="product-details-wrapper">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="back-button-container"
        >
          <Link to={`/products/${category}`} className="back-button">
            <ArrowLeft size={18} className="back-arrow-icon" />
            Back to Products
          </Link>
        </motion.div>

        {/* Product Details Grid */}
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
                    <span key={index} className="certification-badge">
                      <ShieldCheck size={14} className="cert-icon" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Product Information */}
          <motion.div variants={itemVariants} className="product-info-section">
            <div className="product-header">
              <div className="product-title-row">
                <h1 className="product-title">{product.name}</h1>
                {isScheduleH && <span className="rx-badge">Rx</span>}
              </div>

              <span className="product-category">
                {product.therapeuticCategory}
              </span>

              {product.price && (
                <div className="product-price-display">
                  <span className="product-price-label">MRP</span>
                  <span className="product-price-value">{product.price}</span>
                </div>
              )}

              <p className="product-description">{product.longDescription}</p>

              {isScheduleH && (
                <div className="prescription-warning">
                  <ShieldCheck size={18} className="prescription-icon" />
                  <span>Prescription Required - This is a Schedule H drug</span>
                </div>
              )}
            </div>

            {/* Manufacturer Info */}
            <div className="manufacturer-info">
              <p className="manufacturer-text">
                <strong>Manufacturer:</strong> {product.manufacturer}
              </p>
              {product.dosageForm && (
                <p className="manufacturer-text">
                  <strong>Dosage Form:</strong> {product.dosageForm}
                </p>
              )}
              {product.strength && (
                <p className="manufacturer-text">
                  <strong>Pack Size:</strong> {product.strength}
                </p>
              )}
            </div>

            {/* Send Inquiry Button */}
            <div className="inquiry-button-container">
              <a href={inquiryMailto} className="inquiry-button">
                <Mail size={18} />
                Send Inquiry
              </a>
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
                  <Package size={16} className="list-icon feature-icon" />
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
                  <span className="ingredient-dot"></span>
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
                  <ShieldCheck size={16} className="list-icon benefit-icon" />
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
                      <p className="compliance-value">
                        {product.compliance.batchNumber}
                      </p>
                    </div>
                    <div className="compliance-item">
                      <strong className="compliance-label">Expiry Date:</strong>
                      <p className="compliance-value">
                        {product.compliance.expiryDate}
                      </p>
                    </div>
                  </div>
                  <div className="compliance-item">
                    <strong className="compliance-label">
                      Storage Instructions:
                    </strong>
                    <p className="compliance-value">
                      {product.compliance.storage}
                    </p>
                  </div>
                  <div className="compliance-item">
                    <strong className="compliance-label">
                      Regulatory Compliance:
                    </strong>
                    <p className="compliance-value">
                      {product.compliance.regulatory}
                    </p>
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
            <h2 className="related-products-title">Related Products</h2>
            <div className="related-products-grid">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  whileHover={{ scale: 1.02 }}
                  className="related-product-card"
                >
                  <Link
                    to={`/products/${category}/${relatedProduct.id}`}
                  >
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
                      {relatedProduct.price && (
                        <span className="related-product-price">
                          MRP {relatedProduct.price}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <ProductSchema product={product} />
    </div>
  );
}

export default ProductDetails;
