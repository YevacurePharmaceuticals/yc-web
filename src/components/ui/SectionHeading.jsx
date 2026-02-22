export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 rounded bg-primary-700 ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p className={`mt-4 text-lg text-gray-500 max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
