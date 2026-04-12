import { Section } from "@/components/Section";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { PartnerCard } from "@/components/PartnerCard";
import { getPartners } from "@/lib/getPartners";

import Link from "next/link";

export default async function PasseiosPage() {
  const partners = await getPartners();

  // filtra apenas experiências relacionadas
  const passeios = partners.filter((p) =>
    p.categorias?.slug?.includes("exper")
  );

  return (
    <>
      {/* HERO */}
      <section className="h-[60vh] flex items-center justify-center bg-[rgb(var(--color-primary))] text-white text-center px-4">
        <div>
          <h1 className="mb-4">Passeios na Praia da Baleia</h1>
          <i className="max-w-2xl text-[#D4AF37] mx-auto">
            Dunas, vento e adrenalina — descubra experiências únicas no litoral
          </i>
        </div>
      </section>

      {/* INTRO */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p>
            A Praia da Baleia é um dos destinos ideais para quem busca aventura.
            Entre dunas, lagoas e ventos constantes, você encontra experiências
            que vão do relaxamento à adrenalina.
          </p>
        </div>
      </Section>

      {/* EXPERIÊNCIAS FIXAS (CONTEÚDO RICO) */}
      <Section className="py-24 bg-[#f8fafc]">
        <Heading
          title="O que você pode viver aqui"
          subtitle="Experiências que marcam sua viagem"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Passeio de buggy nas dunas",
              desc: "Explore paisagens incríveis com emoção e segurança.",
            },
            {
              title: "Kitesurf",
              desc: "Ventos perfeitos para iniciantes e profissionais.",
            },
            {
              title: "Lagoas escondidas",
              desc: "Refúgios naturais para relaxar após o passeio.",
            },
          ].map((item, i) => (
            <div key={i} className="card p-8 text-center">
              <h3 className="mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PARCEIROS DE PASSEIOS */}
      <Section className="py-24">
        <Heading
          title="Agende seu passeio"
          subtitle="Fale diretamente com quem oferece a experiência"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {passeios.map((item) => (
            <PartnerCard key={item.id} data={item} />
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-20">
        <div className="bg-[rgb(var(--color-primary))] text-white text-center py-16 rounded-4xl">
          <h2 className="mb-6">Pronto para viver essa experiência?</h2>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/parceiros">
              <Button>Ver todos os parceiros</Button>
            </Link>
            <Link href="/experiencias">
              <Button variant="white">Outras experiências</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}