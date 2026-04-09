"use client";

import { HeroSection } from "@/components/HeroSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Section } from "@/components/Section";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Descubra a Praia da Baleia"
        subtitle="Natureza, tranquilidade e experiências inesquecíveis"
        videoSrc="/hero.mp4"
      />

      {/* HUB DE NAVEGAÇÃO */}
      <Section>
        <Heading
          title="Planeje sua experiência"
          subtitle="Tudo o que você precisa para viver o melhor da Praia da Baleia"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "A Praia", link: "/sobre" },
            { title: "Experiências", link: "/experiencias" },
            { title: "Hospedagem", link: "/hospedagem" },
            { title: "Gastronomia", link: "/gastronomia" },
            { title: "Como Chegar", link: "/como-chegar" },
            { title: "Galeria", link: "/galeria" },
          ].map((item, i) => (
            <Link key={i} href={item.link}>
              <div className="card flex items-center justify-center h-40 cursor-pointer">
                <span className="font-semibold text-lg text-[rgb(var(--color-dark))] hover:text-[rgb(var(--color-primary))] transition">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* EXPERIÊNCIAS */}
      <Section>
        <Heading
          title="Experiências"
          subtitle="Viva momentos únicos na Praia da Baleia"
        />

        <div className="grid md:grid-cols-3 gap-6">
          <ExperienceCard title="Passeios" image="/images/passeios.jpg" />
          <ExperienceCard title="Pôr do Sol" image="/images/pordosol.jpg" />
          <ExperienceCard title="Gastronomia" image="/images/gastronomia.jpg" />
        </div>
      </Section>

      {/* GALERIA */}
      {/*<Section>/*}
        {/*<Heading title="Galeria" subtitle="Veja de perto a beleza da Praia da Baleia"/>/*}

        {/*<GalleryGrid items={images} />/*}
      {/*</Section> /*}

      {/* STORY */}
      <Section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="mb-6">Uma história que conecta</h2>
          <p className="mb-6">
            A Praia da Baleia é um encontro com a cultura, o tempo desacelerado
            e a essência do litoral cearense.
          </p>
          <Link href="/sobre" className="text-[rgb(var(--color-primary))] font-semibold">
            Conhecer mais →
          </Link>
        </div>

        <div className="h-80 rounded-[2rem] bg-gray-200" />
      </Section>

      {/* CTA FINAL */}
      <Section>
        <div className="bg-[rgb(var(--color-primary))] text-white text-center py-16 rounded-[2rem]">
          <h2 className="mb-6">Agora é sua vez de viver essa experiência</h2>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button>Planejar viagem</Button>
            <Button variant="white">Onde ficar</Button>
          </div>
        </div>
      </Section>
    </>
  );
}