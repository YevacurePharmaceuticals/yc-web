import Breadcrumb from '../ui/Breadcrumb';

export default function PageBanner({ title, subtitle, breadcrumbItems }) {
  return (
    <section className="bg-gradient-to-r from-primary-800 to-primary-900 py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <div className="mb-4 flex justify-center">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
