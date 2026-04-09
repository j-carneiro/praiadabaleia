interface PartnerCardProps {
  name: string;
  category: string;
  image: string;
  link?: string;
}

export function PartnerCard({ name, category, image, link }: PartnerCardProps) {
  const content = (
    <div className="group cursor-pointer rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition">
      {/* IMAGE */}
      <div
        className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* INFO */}
      <div className="p-6 bg-white">
        <span className="text-sm text-[rgb(var(--color-gray-soft))]">
          {category}
        </span>
        <h3 className="font-semibold text-lg mt-1 text-[rgb(var(--color-dark))]">
          {name}
        </h3>
      </div>
    </div>
  );

  if (link) {
    return <a href={link} target="_blank">{content}</a>;
  }

  return content;
}