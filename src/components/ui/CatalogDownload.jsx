import { Download } from 'lucide-react';
import Button from './Button';

export default function CatalogDownload() {
  return (
    <section className="bg-primary-700 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-lg font-semibold text-white md:text-xl">
          Download our complete product catalog
        </p>
        <Button
          href="/YevacureProductCatalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="md"
        >
          <Download size={18} className="mr-2" />
          Download Catalog
        </Button>
      </div>
    </section>
  );
}
