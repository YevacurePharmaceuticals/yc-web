import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from 'react';
import { Send, ArrowRight, Package } from 'lucide-react';
import './ProductCard.css';

const categoryColors = {
  'Dermatology': { bg: 'bg-blue-100', text: 'text-blue-700' },
  'Trichology': { bg: 'bg-purple-100', text: 'text-purple-700' },
  'Nutraceuticals': { bg: 'bg-green-100', text: 'text-green-700' },
  'Hepatoprotective': { bg: 'bg-amber-100', text: 'text-amber-700' },
  'Anti-Infective': { bg: 'bg-red-100', text: 'text-red-700' },
  'General Wellness': { bg: 'bg-teal-100', text: 'text-teal-700' },
};

function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const category = product.therapeuticCategory || '';
  const colors = categoryColors[category] || { bg: 'bg-gray-100', text: 'text-gray-700' };

  const detailPath = `/products/${product.therapeuticCategory?.toLowerCase().replace(/\s+/g, '-')}/${product.id}`;

  const inquiryPath = `/inquiry/${product.id}`;

  const isRx = product.prescriptionRequired === true;

  return (
    <div className="product-card bg-white border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {!imageError ? (
          <LazyLoadImage
            effect="blur"
            src={product.image.path}
            alt={product.image.alt || product.name}
            className="product-card-image w-full"
            onError={handleImageError}
          />
        ) : (
          <div className="product-card-image w-full bg-gray-100 flex items-center justify-content-center">
            <div className="flex flex-col items-center justify-center w-full h-full text-gray-400">
              <Package className="w-10 h-10 mb-2" />
              <span className="text-sm font-medium">Image not available</span>
            </div>
          </div>
        )}

        {/* Category Badge */}
        {category && (
          <span
            className={`absolute top-3 left-3 inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text}`}
          >
            {category}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        {/* Product Name + Rx Badge */}
        <div className="flex items-start gap-2 mb-1">
          <h3 className="font-semibold text-lg text-gray-900 leading-snug line-clamp-2 flex-1">
            {product.name}
          </h3>
          {isRx && (
            <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold border border-red-600 text-red-600 rounded shrink-0 mt-0.5">
              Rx
            </span>
          )}
        </div>

        {/* Short Description */}
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
          {product.shortDescription}
        </p>

        {/* Dosage Form & Strength */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {product.dosageForm && (
            <span className="inline-block px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
              {product.dosageForm}
            </span>
          )}
          {product.strength && product.strength !== '-' && (
            <span className="text-xs text-gray-500">
              {product.strength}
            </span>
          )}
        </div>

        {/* Price */}
        {product.price && (
          <p className="text-lg font-bold text-primary-700 mb-4">
            MRP {product.price}
          </p>
        )}

        {/* Spacer to push buttons to bottom */}
        <div className="mt-auto flex gap-2">
          {/* View Details Button */}
          <Link
            to={detailPath}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg border-2 border-primary-700 text-primary-700 bg-transparent hover:bg-primary-50 transition-colors duration-200"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Send Inquiry / For Authorized Distributors Button */}
          <Link
            to={inquiryPath}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg border-2 border-primary-700 bg-primary-700 text-white hover:bg-primary-800 transition-colors duration-200"
          >
            <Send className="w-4 h-4" />
            {isRx ? 'For Authorized Distributors' : 'Send Inquiry'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
