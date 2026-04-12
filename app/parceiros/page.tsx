import { Section } from "@/components/Section";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { PartnerCard } from "@/components/PartnerCard";
import { getPartners } from "@/lib/getPartners";

import Link from "next/link";

export default async function ParceirosPage() {
  const partners = await getPartners();

  const featured = partners.filter((p) => p.is_featured);
  const others = partners.filter((p) => !p.is_featured);

  return (
    <>
      {/* HERO */}
      <section className="h-[50vh] flex items-center justify-center bg-[rgb(var(--color-primary))] text-white text-center px-4">
        <div>
          <h1 className="mb-4">Parceiros da Praia da Baleia</h1>
          <i className="max-w-2xl text-[#D4AF37] mx-auto">
            Negócios locais que tornam sua experiência mais completa
          </i>
        </div>
      </section>

      {/* INTRO */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-500">
            Selecionamos hospedagens, restaurantes e experiências que fazem parte
            do dia a dia da Praia da Baleia. Aqui você encontra opções confiáveis
            para viver o melhor da região.
          </p>
        </div>
      </Section>

      {/* DESTAQUES (MONETIZAÇÃO) */}
      {featured.length > 0 && (
        <Section className="py-24 bg-[#f8fafc]">
          <Heading
            title="Parceiros em destaque"
            subtitle="Os mais procurados e recomendados"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {featured.map((item) => (
              <PartnerCard key={item.id} data={item} />
            ))}
          </div>
        </Section>
      )}

      {/* TODOS OS PARCEIROS */}
      <Section className="py-24">
        <Heading
          title="Todos os parceiros"
          subtitle="Explore todas as opções disponíveis"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {others.map((item) => (
            <PartnerCard key={item.id} data={item} />
          ))}
        </div>
      </Section>

      {/* CTA PARCERIA */}
      <Section className="py-20">
        <div className="bg-[#f8fafc] rounded-4xl p-10 text-center">
          <h2 className="mb-4">Tem um negócio na região?</h2>
          <p className="mb-6 text-gray-500">
            Coloque sua marca em evidência e conecte-se com visitantes prontos
            para consumir na Praia da Baleia.
          </p>

          <Link href="#">
            <Button>Quero ser parceiro</Button>
          </Link>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-20">
        <div className="bg-[rgb(var(--color-primary))] text-white text-center py-16 rounded-4xl">
          <h2 className="mb-6">Planeje sua experiência completa</h2>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/experiencias">
              <Button>Ver experiências</Button>
            </Link>
            <Link href="/sobre">
              <Button variant="white">Conhecer a praia</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}