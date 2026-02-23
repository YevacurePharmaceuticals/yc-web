import ProductCard from './ProductCard';
import { PackageSearch } from 'lucide-react';

function ProductGrid({ products = [], emptyMessage = 'No products found matching your criteria.' }) {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <PackageSearch className="w-16 h-16 text-gray-300 mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">No Products Found</h3>
        <p className="text-sm text-gray-500 max-w-md">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        Showing <span className="font-semibold text-gray-700">{products.length}</span>{' '}
        {products.length === 1 ? 'product' : 'products'}
      </p>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
