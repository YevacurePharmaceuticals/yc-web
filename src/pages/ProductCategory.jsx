import { useParams, Navigate } from 'react-router-dom';
import { useState, useMemo, useCallback } from 'react';
import debounce from 'lodash.debounce';
import MetaTags from '../components/seo/MetaTags';
import PageBanner from '../components/layout/PageBanner';
import CatalogDownload from '../components/ui/CatalogDownload';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import { Filter, X } from 'lucide-react';
import data from '../data/data.json';
import './Products.css';

function ProductCategory() {
  const { category } = useParams();

  const [selectedDosageForms, setSelectedDosageForms] = useState([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  /* Find the matching category from data */
  const categoryData = useMemo(
    () => data.categories.find((c) => c.id === category),
    [category]
  );

  /* If category not found, redirect to /products */
  if (!categoryData) {
    return <Navigate to="/products" replace />;
  }

  /* Debounced search handler */
  const debouncedSetSearch = useCallback(
    debounce((value) => {
      setDebouncedSearch(value);
    }, 300),
    []
  );

  const handleSearchChange = useCallback(
    (value) => {
      setSearch(value);
      debouncedSetSearch(value);
    },
    [debouncedSetSearch]
  );

  const handleDosageFormChange = useCallback((form) => {
    setSelectedDosageForms((prev) =>
      prev.includes(form) ? prev.filter((f) => f !== form) : [...prev, form]
    );
  }, []);

  /* Get all products belonging to this category */
  const categoryProducts = useMemo(() => {
    return data.products.filter(
      (p) =>
        p.therapeuticCategory &&
        p.therapeuticCategory.toLowerCase() === categoryData.name.toLowerCase()
    );
  }, [categoryData]);

  /* Derive unique dosage forms for this category's products */
  const dosageForms = useMemo(() => {
    const forms = new Set(categoryProducts.map((p) => p.dosageForm).filter(Boolean));
    return [...forms].sort();
  }, [categoryProducts]);

  /* Filter and sort */
  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts];

    /* Filter by dosage form */
    if (selectedDosageForms.length > 0) {
      result = result.filter((p) => selectedDosageForms.includes(p.dosageForm));
    }

    /* Filter by search */
    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          (p.dosageForm && p.dosageForm.toLowerCase().includes(q))
      );
    }

    /* Sort */
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'category':
          return (a.therapeuticCategory || '').localeCompare(b.therapeuticCategory || '');
        case 'price-asc': {
          const pa = parseFloat((a.price || '').replace(/[^0-9.]/g, '')) || 0;
          const pb = parseFloat((b.price || '').replace(/[^0-9.]/g, '')) || 0;
          return pa - pb;
        }
        case 'price-desc': {
          const pa = parseFloat((a.price || '').replace(/[^0-9.]/g, '')) || 0;
          const pb = parseFloat((b.price || '').replace(/[^0-9.]/g, '')) || 0;
          return pb - pa;
        }
        default:
          return 0;
      }
    });

    return result;
  }, [categoryProducts, selectedDosageForms, debouncedSearch, sortBy]);

  return (
    <div className="category-page">
      <MetaTags
        title={categoryData.name}
        description={`${categoryData.name} products by Yevacure Pharmaceutical - ${categoryData.description}`}
      />

      {/* Page Banner */}
      <PageBanner
        title={categoryData.name}
        subtitle={categoryData.description}
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Products', to: '/products' },
          { label: categoryData.name },
        ]}
      />

      {/* Catalog Download */}
      <CatalogDownload />

      {/* Main Content */}
      <section className="category-page-main">
        <div className="category-page-inner">
          <p className="category-page-desc">{categoryData.description}</p>

          {/* Mobile Filter Toggle */}
          <div className="products-filter-toggle">
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="products-filter-toggle-btn"
            >
              {showMobileFilter ? (
                <>
                  <X size={18} />
                  Hide Filters
                </>
              ) : (
                <>
                  <Filter size={18} />
                  Show Filters
                </>
              )}
            </button>
          </div>

          {/* Two Column Layout */}
          <div className="products-main">
            {/* Sidebar - no category filter since we are already on a category page */}
            <div className={`products-sidebar ${showMobileFilter ? 'products-sidebar--open' : ''}`}>
              <ProductFilter
                categories={[]}
                dosageForms={dosageForms}
                selectedCategories={[]}
                selectedDosageForms={selectedDosageForms}
                onDosageFormChange={handleDosageFormChange}
                onSearchChange={handleSearchChange}
                searchValue={search}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>

            {/* Product Grid */}
            <div className="products-content">
              <ProductGrid
                products={filteredProducts}
                emptyMessage={`No ${categoryData.name} products match your current filters. Try adjusting your search or filter criteria.`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCategory;
