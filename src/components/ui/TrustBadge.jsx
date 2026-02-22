export default function TrustBadge({ icon: Icon, label, description }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-white px-5 py-4 shadow-sm border border-gray-100">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        {description && (
          <p className="text-xs text-gray-500 leading-snug">{description}</p>
        )}
      </div>
    </div>
  );
}
