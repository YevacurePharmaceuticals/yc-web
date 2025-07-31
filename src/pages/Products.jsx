import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Products.css";

const categories = ["all", "face", "hair", "body", "petcare"];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-controls">
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn${
                selectedCategory === cat ? " active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-products">No products found.</div>
        )}
      </div>
    </div>
  );
}

export default Products;
