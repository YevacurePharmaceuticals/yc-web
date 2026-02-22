import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Stethoscope,
  Scissors,
  Pill,
  ShieldPlus,
  Bug,
  Heart,
} from 'lucide-react';
import data from '../../data/data.json';
import './MegaMenu.css';

const categoryIcons = {
  dermatology: Stethoscope,
  trichology: Scissors,
  nutraceuticals: Pill,
  hepatoprotective: ShieldPlus,
  'anti-infective': Bug,
  'general-wellness': Heart,
};

/**
 * Lookup a product name by its ID from the products array.
 */
function getProductName(productId) {
  const product = data.products.find((p) => p.id === productId);
  return product ? product.name : productId;
}

/**
 * MegaMenu -- Full-width dropdown showing product categories and products.
 * Rendered inside Header, positioned absolutely below the nav bar.
 */
export default function MegaMenu({ onClose }) {
  const { categories } = data;

  return (
    <div
      className="megamenu-overlay"
      onMouseLeave={onClose}
      role="menu"
      aria-label="Products navigation"
    >
      <div className="megamenu-content">
        {/* Header */}
        <div className="megamenu-header">
          <span className="megamenu-title">Our Product Range</span>
          <Link
            to="/products"
            className="megamenu-view-all"
            onClick={onClose}
          >
            View All Products
            <ArrowRight className="megamenu-view-all-icon" />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="megamenu-grid">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.id] || Pill;
            return (
              <div key={category.id} className="megamenu-category">
                <div className="megamenu-category-header">
                  <IconComponent className="megamenu-category-icon" />
                  <Link
                    to={`/products/${category.id}`}
                    className="megamenu-category-name"
                    onClick={onClose}
                  >
                    {category.name}
                  </Link>
                </div>
                <p className="megamenu-category-desc">{category.description}</p>
                <ul className="megamenu-product-list">
                  {category.products.map((productId) => (
                    <li key={productId}>
                      <Link
                        to={`/products/${category.id}/${productId}`}
                        className="megamenu-product-link"
                        onClick={onClose}
                      >
                        {getProductName(productId)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="megamenu-footer">
          <Link
            to="/products"
            className="megamenu-footer-link primary"
            onClick={onClose}
          >
            <ArrowRight className="megamenu-footer-icon" />
            Browse All Products
          </Link>
          <a
            href="/YevacureProductCatalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="megamenu-footer-link catalog"
          >
            <Download className="megamenu-footer-icon" />
            Download Catalog
          </a>
        </div>
      </div>
    </div>
  );
}
