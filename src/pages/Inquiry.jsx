import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Send, ArrowLeft, Package, CheckCircle } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import PageBanner from '../components/layout/PageBanner';
import Button from '../components/ui/Button';
import data from '../data/data.json';
import './Inquiry.css';

const inquiryTypes = [
  'General Inquiry',
  'Distribution Partnership',
  'Bulk Order',
  'Product Sample Request',
  'Contract Manufacturing',
];

function Inquiry() {
  const { productId } = useParams();
  const product = data.products.find((p) => p.id === productId);

  const [formData, setFormData] = useState({
    inquiryType: 'General Inquiry',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    cityState: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Product Inquiry: ${product.name} - ${formData.inquiryType}`
    );

    const bodyLines = [
      `Product: ${product.name}`,
      `Inquiry Type: ${formData.inquiryType}`,
      '',
      `Name: ${formData.fullName}`,
      `Company/Organization: ${formData.company || 'N/A'}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'N/A'}`,
      `City / State: ${formData.cityState || 'N/A'}`,
      '',
      `Message:`,
      formData.message,
    ];

    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailtoLink = `mailto:yevacurepharmaceuticals@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const detailPath = `/products/${product.therapeuticCategory?.toLowerCase().replace(/\s+/g, '-')}/${product.id}`;

  const categoryColors = {
    'Dermatology': 'bg-blue-100 text-blue-700',
    'Trichology': 'bg-purple-100 text-purple-700',
    'Nutraceuticals': 'bg-green-100 text-green-700',
    'Hepatoprotective': 'bg-amber-100 text-amber-700',
    'Anti-Infective': 'bg-red-100 text-red-700',
    'General Wellness': 'bg-teal-100 text-teal-700',
  };

  const categoryColor = categoryColors[product.therapeuticCategory] || 'bg-gray-100 text-gray-700';

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: product.name, path: detailPath },
    { label: 'Send Inquiry' },
  ];

  return (
    <div className="inquiry-page">
      <MetaTags
        title={`Inquiry - ${product.name}`}
        description={`Send an inquiry about ${product.name} from Yevacure Pharmaceutical. Contact us for distribution partnerships, bulk orders, product samples, and more.`}
      />

      <PageBanner
        title="Send Inquiry"
        subtitle={`Interested in ${product.name}? Fill out the form below and our team will get back to you.`}
        breadcrumbItems={breadcrumbItems}
      />

      <div className="inquiry-wrapper">
        <div className="inquiry-layout">
          {/* Left Column - Form */}
          <div className="inquiry-form-card">
            <h2 className="inquiry-form-title">Product Inquiry Form</h2>

            {submitted && (
              <div className="success-message">
                <CheckCircle className="success-icon" size={20} />
                <div>
                  <p className="success-text-bold">Your email client should open shortly.</p>
                  <p className="success-text">
                    If it doesn't, you can email us directly at{' '}
                    <a href="mailto:yevacurepharmaceuticals@gmail.com" className="success-link">
                      yevacurepharmaceuticals@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="inquiry-form">
              {/* Product Name (read-only) */}
              <div className="form-field">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  value={product.name}
                  readOnly
                  className="form-input"
                />
              </div>

              {/* Inquiry Type */}
              <div className="form-field">
                <label htmlFor="inquiryType" className="form-label">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name */}
              <div className="form-field">
                <label htmlFor="fullName" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Company / Organization */}
              <div className="form-field">
                <label htmlFor="company" className="form-label">
                  Company / Organization Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your company or organization name"
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div className="form-field">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* City / State */}
              <div className="form-field">
                <label htmlFor="cityState" className="form-label">
                  City / State
                </label>
                <input
                  type="text"
                  id="cityState"
                  name="cityState"
                  value={formData.cityState}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your city and state"
                />
              </div>

              {/* Message */}
              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-textarea"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn inquiry-submit-btn">
                <Send size={18} />
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Right Column - Product Info */}
          <div className="product-info-sidebar">
            <div className="product-info-card">
              <div className="product-info-image-wrapper">
                <img
                  src={product.image.path}
                  alt={product.image.alt || product.name}
                  className="product-info-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="product-info-image-fallback" style={{ display: 'none' }}>
                  <Package size={40} className="text-gray-400" />
                  <span className="text-sm text-gray-400 mt-2">Image not available</span>
                </div>
              </div>

              <div className="product-info-details">
                <h3 className="product-info-name">{product.name}</h3>

                {product.therapeuticCategory && (
                  <span className={`product-info-category ${categoryColor}`}>
                    {product.therapeuticCategory}
                  </span>
                )}

                {product.dosageForm && (
                  <span className="product-info-dosage">
                    {product.dosageForm}
                    {product.strength && product.strength !== '-' ? ` - ${product.strength}` : ''}
                  </span>
                )}

                {product.price && (
                  <p className="product-info-price">MRP {product.price}</p>
                )}

                {product.shortDescription && (
                  <p className="product-info-description">{product.shortDescription}</p>
                )}

                <Link to={detailPath} className="product-info-back-link">
                  <ArrowLeft size={16} />
                  Back to Product Details
                </Link>
              </div>
            </div>

            {/* Quick Help */}
            <div className="inquiry-help-card">
              <h4 className="inquiry-help-title">Need Help?</h4>
              <p className="inquiry-help-text">
                You can also reach us directly at:
              </p>
              <a
                href="mailto:yevacurepharmaceuticals@gmail.com"
                className="inquiry-help-email"
              >
                yevacurepharmaceuticals@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inquiry;
