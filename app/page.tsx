import { HeroSection } from "@/components/HeroSection";
import { Section } from "@/components/Section";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { ExperienceCard } from "@/components/ExperienceCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PartnersSection } from "@/components/PartnersSection";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Conheça a Praia da Baleia"
        subtitle="Natureza, tranquilidade e experiências inesquecíveis"
        videoSrc="/hero.mp4"
      />

      {/* HUB DE NAVEGAÇÃO */}
      <Section className="py-24">
        <Heading
          title="Planeje sua experiência"
          subtitle="Tudo o que você precisa para viver o melhor da Praia da Baleia"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "A Praia", link: "/sobre" },
            { title: "Experiências", link: "/experiencias" },
            { title: "Hospedagem", link: "/parceiros" },
            { title: "Gastronomia", link: "/parceiros" },
            { title: "Como Chegar", link: "/como-chegar" },
            { title: "Galeria", link: "/galeria" },
          ].map((item, i) => (
            <Link key={i} href={item.link}>
              <div className="bg-[#215CA8] rounded-4xl p-8 text-center shadow-sm hover:shadow-md transition cursor-pointer">
                <span className="font-semibold text-lg text-white hover:text-[#FFCC00] transition">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* EXPERIÊNCIAS */}
      <Section className="py-24 bg-[#f8fafc]">
        <Heading
          title="Experiências"
          subtitle="Viva momentos únicos na Praia da Baleia"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <ExperienceCard title="Passeios" image="/images/passeios.jpg" />
          <ExperienceCard title="Pôr do Sol" image="/images/pordosol.jpg" />
          <ExperienceCard title="Gastronomia" image="/images/gastronomia.jpg" />
        </div>
      </Section>

      {/* GALERIA */}
      <Section className="py-24">
        <Heading
          title="Galeria"
          subtitle="Veja de perto a beleza da Praia da Baleia"
        />

        <GalleryGrid
          items={[
            { src: "/images/galeria1.jpg" },
            { src: "/images/galeria2.jpg" },
            { src: "/images/galeria3.jpg" },
            { src: "/images/galeria4.jpg" },
            { src: "/images/galeria5.jpg" },
            { src: "/images/galeria6.jpg" },
          ]}
        />
      </Section>

      {/* PARCEIROS (DINÂMICO SUPABASE) */}
      <PartnersSection />

      {/* CTA FINAL */}
      <Section className="py-20">
        <div className="bg-[rgb(var(--color-primary))] text-white text-center py-16 rounded-4xl">
          <h2 className="mb-6">Planeje sua viagem completa</h2>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/experiencias">
              <Button>Ver experiências</Button>
            </Link>
            <Link href="/parceiros">
              <Button variant="white">Onde ficar</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}