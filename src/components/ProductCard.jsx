import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="product-short-desc">{product.shortDescription}</p>
      <Link to={`/product/${product.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
