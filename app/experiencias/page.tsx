import { Section } from "@/components/Section";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { PartnerCard } from "@/components/PartnerCard";
import { getPartners } from "@/lib/getPartners";

import Link from "next/link";

export default async function ExperienciasPage() {
  const partners = await getPartners();

  // categorias dinâmicas únicas
  const categorias = Array.from(
    new Set(partners.map((p) => p.categorias?.nome))
  );

  return (
    <>
      {/* HERO */}
      <section className="h-[50vh] flex items-center justify-center bg-[rgb(var(--color-primary))] text-white text-center px-4">
        <div>
          <h1 className="mb-4">Experiências na Praia da Baleia</h1>
          <i className="max-w-2xl mx-auto">
            Descubra atividades, passeios e vivências que tornam sua viagem única
          </i>
        </div>
      </section>

      {/* INTRO */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-500">
            Explore opções selecionadas para viver o melhor da Praia da Baleia.
            Desde gastronomia até passeios inesquecíveis.
          </p>
        </div>
      </Section>

      {/* CATEGORIAS */}
      <Section className="py-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categorias.map((cat, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-[#f1f5f9] text-sm text-[#212121]"
            >
              {cat}
            </span>
          ))}
        </div>
      </Section>

      {/* DESTAQUES */}
      <Section className="py-24 bg-[#f8fafc]">
        <Heading
          title="Experiências em destaque"
          subtitle="As mais procuradas pelos visitantes"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {partners
            .filter((p) => p.is_featured)
            .map((item) => (
              <PartnerCard key={item.id} data={item} />
            ))}
        </div>
      </Section>

      {/* LISTAGEM GERAL */}
      <Section className="py-24">
        <Heading
          title="Todas as experiências"
          subtitle="Escolha como aproveitar sua estadia"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {partners.map((item) => (
            <PartnerCard key={item.id} data={item} />
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-20">
        <div className="bg-[rgb(var(--color-primary))] text-white text-center py-16 rounded-4xl">
          <h2 className="mb-6">Planeje sua viagem completa</h2>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/parceiros">
              <Button>Ver hospedagens</Button>
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