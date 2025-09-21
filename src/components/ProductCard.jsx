import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";
import RatingStars from "./RatingStars";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);

  // Generate a random rating between 3.5 and 5.0 for demo purposes
  // In a real app, this would come from the product data
  const productRating = product.rating || (Math.random() * 1.5 + 3.5);
  const reviewCount = product.reviewCount || Math.floor(Math.random() * 200) + 50;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="product-card group"
      >
        {/* Image Section */}
        <div className="product-image-container relative overflow-hidden">
          {!imageError ? (
            <div
              className="cursor-pointer relative"
            >
              <LazyLoadImage
                effect="blur"
                src={product.image.path}
                alt={product.image.alt || product.name}
                className="product-image"
                onError={handleImageError}
              />

              {/* Hover Overlay */}
              <div className="product-image-overlay">
                <div className="overlay-content">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-sm font-medium">Click to enlarge</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="product-image-placeholder">
              <div className="placeholder-content">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-sm font-medium">Image not available</p>
              </div>
            </div>
          )}

          {/* Category Badge */}
          <div className="product-category-badge">
            <span className="category-text">
              {product.category}
            </span>
          </div>

          {/* Price Badge */}
          {/* {product.price && (
            <div className="product-price-badge">
              <span className="price-text">
                {product.price}
              </span>
            </div>
          )} */}
        </div>

        {/* Content Section */}
        <div className="product-content">
          {/* Title and Rating Row */}
          <div className="product-header">
            <h3 className="product-title">
              {product.name}
            </h3>
            <div className="product-rating">
              <RatingStars
                rating={productRating}
                size="sm"
                showScore={true}
                showCount={true}
                reviewCount={reviewCount}
              />
            </div>
          </div>

          {/* Description */}
          <p className="product-description">
            {product.shortDescription}
          </p>

          {/* Features Preview */}
          {product.features && product.features.length > 0 && (
            <div className="product-features">
              <div className="features-grid">
                {product.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="feature-item">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {product.certifications && product.certifications.length > 0 && (
            <div className="product-certifications">
              <div className="certifications-header">
                <span className="certifications-title">Certifications</span>
              </div>
              <div className="certifications-grid">
                {product.certifications.slice(0, 2).map((cert, index) => (
                  <span
                    key={index}
                    className="certification-tag"
                  >
                    {cert}
                  </span>
                ))}
                {product.certifications.length > 2 && (
                  <span className="more-certifications">
                    +{product.certifications.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="product-actions">
            <Link
              to={`/product/${product.id}`}
              className="product-link"
            >
              <span className="link-text">View Details</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>

    </>
  );
}

export default ProductCard;
