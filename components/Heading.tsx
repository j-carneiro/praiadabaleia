interface HeadingProps {
  title: string;
  subtitle?: string;
}

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-dark))] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[rgb(var(--color-gray-soft))]">{subtitle}</p>
      )}
    </div>
  );
}