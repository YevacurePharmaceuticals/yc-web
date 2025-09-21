import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import debounce from "lodash.debounce";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useTheme } from "../context/ThemeContext";
import "./Products.css";

const categories = [
  { id: "all", name: "All Products", icon: "🛍️" },
  { id: "face", name: "Face Care", icon: "🧴" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Products() {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 300),
    []
  );

  // Memoized filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        product.longDescription.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "category":
          return a.category.localeCompare(b.category);
        case "newest":
          return b.id.localeCompare(a.id);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, search, sortBy]);

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className={`products-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="products-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="products-header"
        >
          <h1 className="products-title">
            Our Products
          </h1>
          <p className="products-subtitle">
            Discover our premium YC FACIUM Glutathione Brightening Face Wash - 
            a revolutionary Triple-Power Formula that unlocks radiant skin with 
            Glutathione, Kojic Acid & Vitamin C.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="controls-card"
        >
          {/* Search and Sort */}
          <div className="search-sort-container">
            <div className="search-container">
              <label htmlFor="search" className="form-label">
                Search Products
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search by name, description, or category..."
                onChange={handleSearchChange}
                className="form-input"
              />
            </div>
            <div className="sort-container">
              <label htmlFor="sort" className="form-label">
                Sort By
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-select"
              >
                <option value="name">Name (A-Z)</option>
                <option value="category">Category</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            <label className="form-label">
              Filter by Category
            </label>
            <div className="category-buttons">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`category-button ${
                    selectedCategory === category.id
                      ? "category-button-active"
                      : "category-button-inactive"
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="results-count"
        >
          <p className="results-text">
            Showing <span className="results-highlight">{filteredProducts.length}</span> 
            {filteredProducts.length === 1 ? " product" : " products"}
            {selectedCategory !== "all" && (
              <> in <span className="results-highlight">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </span></>
            )}
          </p>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${search}-${sortBy}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="products-grid"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="no-results"
            >
              <div className="no-results-icon">🔍</div>
              <h3 className="no-results-title">
                No products found
              </h3>
              <p className="no-results-text">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("all");
                }}
                className="clear-filters-btn"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="trust-badges"
        >
          <h3 className="trust-badges-title">
            Why Trust Yevacure Products?
          </h3>
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
    </div>
  );
}

export default Products;
