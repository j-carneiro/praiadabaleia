import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "soft" | "primary";
}

export function Section({ children, className, variant = "default" }: SectionProps) {
  const variants = {
    default: "bg-white",
    soft: "bg-gray-50",
    primary: "bg-[rgb(var(--color-primary))] text-white",
  };

  return (
    <section
      className={clsx(
        "w-full py-20",
        variants[variant],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {children}
      </div>
    </section>
  );
}