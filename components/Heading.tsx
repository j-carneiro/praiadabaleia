interface HeadingProps {
  title: string;
  subtitle?: string;
}

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {subtitle && (
        <p className="subtitle mb-2">
          {subtitle}
        </p>
      )}

      <h2>{title}</h2>
    </div>
  );
}