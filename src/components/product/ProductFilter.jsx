import { Search, X, ChevronDown, SlidersHorizontal } from 'lucide-react';

const sortOptions = [
  { value: 'name-asc', label: 'Name A-Z' },
  { value: 'name-desc', label: 'Name Z-A' },
  { value: 'category', label: 'Category' },
  { value: 'price-asc', label: 'Price Low-High' },
  { value: 'price-desc', label: 'Price High-Low' },
];

function ProductFilter({
  categories = [],
  dosageForms = [],
  selectedCategories = [],
  selectedDosageForms = [],
  onCategoryChange,
  onDosageFormChange,
  onSearchChange,
  searchValue = '',
  sortBy = 'name-asc',
  onSortChange,
}) {
  const hasActiveFilters =
    selectedCategories.length > 0 || selectedDosageForms.length > 0 || searchValue.trim() !== '';

  const handleClearAll = () => {
    if (onCategoryChange) {
      selectedCategories.forEach((cat) => onCategoryChange(cat));
    }
    if (onDosageFormChange) {
      selectedDosageForms.forEach((form) => onDosageFormChange(form));
    }
    if (onSearchChange) {
      onSearchChange('');
    }
  };

  return (
    <aside className="w-full">
      {/* Active Filter Chips */}
      {hasActiveFilters && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Active Filters
            </span>
            <button
              onClick={handleClearAll}
              className="text-xs font-semibold text-red-600 hover:text-red-700 transition-colors duration-150"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {searchValue.trim() !== '' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200">
                Search: &ldquo;{searchValue}&rdquo;
                <button
                  onClick={() => onSearchChange && onSearchChange('')}
                  className="ml-0.5 hover:text-primary-900 transition-colors"
                  aria-label="Remove search filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCategories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200"
              >
                {cat}
                <button
                  onClick={() => onCategoryChange && onCategoryChange(cat)}
                  className="ml-0.5 hover:text-blue-900 transition-colors"
                  aria-label={`Remove ${cat} filter`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedDosageForms.map((form) => (
              <span
                key={form}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200"
              >
                {form}
                <button
                  onClick={() => onDosageFormChange && onDosageFormChange(form)}
                  className="ml-0.5 hover:text-gray-900 transition-colors"
                  aria-label={`Remove ${form} filter`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Search Input */}
      <div className="mb-6">
        <label htmlFor="product-search" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Search Products
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            id="product-search"
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            placeholder="Search by name or keyword..."
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-150"
          />
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="mb-6">
        <label htmlFor="product-sort" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Sort By
        </label>
        <div className="relative">
          <select
            id="product-sort"
            value={sortBy}
            onChange={(e) => onSortChange && onSortChange(e.target.value)}
            className="w-full appearance-none pl-3 pr-9 py-2.5 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-150 cursor-pointer"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Therapeutic Category Checkboxes */}
      {categories.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
            <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            Therapeutic Category
          </h4>
          <div className="space-y-2">
            {categories.map((cat) => {
              const isChecked = selectedCategories.includes(cat);
              return (
                <label
                  key={cat}
                  className="flex items-center gap-2.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onCategoryChange && onCategoryChange(cat)}
                    className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-150">
                    {cat}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Dosage Form Checkboxes */}
      {dosageForms.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
            <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            Dosage Form
          </h4>
          <div className="space-y-2">
            {dosageForms.map((form) => {
              const isChecked = selectedDosageForms.includes(form);
              return (
                <label
                  key={form}
                  className="flex items-center gap-2.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onDosageFormChange && onDosageFormChange(form)}
                    className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-150">
                    {form}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
}

export default ProductFilter;
