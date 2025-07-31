import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="product-details-container">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <Link to="/products" className="back-link">
        &larr; Back to Products
      </Link>
      <div className="product-details-card">
        <img
          src={product.image}
          alt={product.name}
          className="product-details-image"
        />
        <div className="product-details-info">
          <h2>{product.name}</h2>
          <p className="product-category">
            Category:{" "}
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </p>
          <p className="product-desc">{product.description}</p>
          <div className="product-section">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="product-section">
            <h3>Ingredients</h3>
            <ul>
              {product.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>
          <div className="product-section">
            <h3>Usage Instructions</h3>
            <p>{product.usage}</p>
          </div>
          <div className="product-section">
            <h3>Benefits</h3>
            <ul>
              {product.benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="product-section">
            <h3>Warnings</h3>
            <p>{product.warnings}</p>
          </div>
          <div className="product-section">
            <h3>Manufacturer</h3>
            <p>{product.manufacturer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
