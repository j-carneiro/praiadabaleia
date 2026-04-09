"use client";

import { Section } from "@/components/Section";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { PartnerCard } from "@/components/PartnerCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ParceirosPage() {
  const partners = [
    {
      name: "Pousada Beira Mar",
      category: "Hospedagem",
      image: "/images/parceiro1.jpg",
      link: "#",
    },
    {
      name: "Restaurante Maré Alta",
      category: "Gastronomia",
      image: "/images/parceiro2.jpg",
      link: "#",
    },
    {
      name: "Baleia Tour",
      category: "Experiências",
      image: "/images/parceiro3.jpg",
      link: "#",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="h-[50vh] flex items-center justify-center bg-[rgb(var(--color-primary))] text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4">Parceiros da Praia da Baleia</h1>
          <p className="max-w-2xl mx-auto opacity-90">
            Negócios locais que tornam sua experiência ainda mais completa
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <Section className="py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[rgb(var(--color-gray-soft))]">
            Aqui você encontra hospedagens, restaurantes e experiências
            selecionadas para aproveitar ao máximo sua visita à Praia da Baleia.
          </p>
        </div>
      </Section>

      {/* GRID */}
      <Section className="py-20">
        <Heading
          title="Explore nossos parceiros"
          subtitle="Escolha onde ficar, comer e viver momentos únicos"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </Section>

      {/* CTA PARA PARCERIA */}
      <Section className="py-20">
        <div className="bg-[#f8fafc] rounded-[2rem] p-10 text-center">
          <h2 className="mb-4">Tem um negócio na região?</h2>
          <p className="mb-6 text-[rgb(var(--color-gray-soft))]">
            Faça parte da nossa vitrine e conecte seu serviço a visitantes que já estão prontos para consumir.
          </p>

          <Link href="#">
            <Button>Quero ser parceiro</Button>
          </Link>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-20">
        <div className="bg-[rgb(var(--color-primary))] text-white text-center py-16 rounded-[2rem]">
          <h2 className="mb-6">Planeje sua viagem completa</h2>

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
