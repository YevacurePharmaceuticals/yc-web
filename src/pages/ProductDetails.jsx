import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import products from "../data/products";
import ProductSchema from '../components/ProductSchema';

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
      className="border border-gray-200 rounded-lg overflow-hidden"
      initial={false}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-blue-600"
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
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-white">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function ProductDetails() {
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link 
            to="/products" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
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
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            to="/products" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <span className="mr-2">←</span>
            Back to Products
          </Link>
        </motion.div>

        {/* Product Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Product Image */}
          <motion.div variants={itemVariants} className="space-y-4">
            <LazyLoadImage
              effect="blur"
              src={product.image.path}
              alt={product.name}
              className="w-full rounded-2xl shadow-2xl"
            />
            
            {/* Certifications */}
            {product.certifications && product.certifications.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, index) => (
                    <span 
                      key={index}
                      className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Product Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium mb-4">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Manufacturer Info */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
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
          className="space-y-4 mb-16"
        >
          <Accordion 
            title="Key Features" 
            isOpen={openSections.features} 
            onToggle={() => toggleSection('features')}
          >
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </Accordion>

          <Accordion 
            title="Ingredients" 
            isOpen={openSections.ingredients} 
            onToggle={() => toggleSection('ingredients')}
          >
            <ul className="space-y-2">
              {product.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{ing}</span>
                </li>
              ))}
            </ul>
          </Accordion>

          <Accordion 
            title="Usage Instructions" 
            isOpen={openSections.usage} 
            onToggle={() => toggleSection('usage')}
          >
            <p className="text-gray-700 leading-relaxed">{product.usage}</p>
          </Accordion>

          <Accordion 
            title="Benefits" 
            isOpen={openSections.benefits} 
            onToggle={() => toggleSection('benefits')}
          >
            <ul className="space-y-2">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </Accordion>

          <Accordion 
            title="Warnings & Safety" 
            isOpen={openSections.warnings} 
            onToggle={() => toggleSection('warnings')}
          >
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-yellow-800 font-medium">{product.warnings}</p>
            </div>
          </Accordion>

          <Accordion 
            title="Compliance & Quality" 
            isOpen={openSections.compliance} 
            onToggle={() => toggleSection('compliance')}
          >
            <div className="space-y-4">
              {product.compliance && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-gray-900">Batch Number:</strong>
                      <p className="text-gray-700">{product.compliance.batchNumber}</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">Expiry Date:</strong>
                      <p className="text-gray-700">{product.compliance.expiryDate}</p>
                    </div>
                  </div>
                  <div>
                    <strong className="text-gray-900">Storage Instructions:</strong>
                    <p className="text-gray-700">{product.compliance.storage}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Regulatory Compliance:</strong>
                    <p className="text-gray-700">{product.compliance.regulatory}</p>
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
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <Link to={`/product/${relatedProduct.id}`}>
                    <LazyLoadImage
                      effect="blur"
                      src={relatedProduct.image.path}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
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
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Why Trust This Product?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🔬", text: "Clinically Tested" },
              { icon: "🌿", text: "Natural Ingredients" },
              { icon: "🛡️", text: "Quality Assured" }
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="text-sm font-medium">{badge.text}</p>
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
