import { PartnerCard } from "./PartnerCard";
import { getPartners } from "@/lib/getPartners";

export async function PartnersSection() {
  const partners = await getPartners();

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Parceiros Locais
          </h2>
          <p className="text-gray-500 mt-2">
            Negócios que tornam sua experiência completa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((item) => (
            <PartnerCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}