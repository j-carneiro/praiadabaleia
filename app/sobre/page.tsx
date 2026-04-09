"use client";

import { Section } from "@/components/Section";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SobrePage() {
  return (
    <>
      {/* HERO */}
      <section className="h-[60vh] flex items-center justify-center bg-[rgb(var(--color-primary))] text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4">Sobre a Praia da Baleia</h1>
          <p className="max-w-2xl mx-auto opacity-90">
            Um destino que vai além da paisagem — é experiência, cultura e conexão.
          </p>
        </motion.div>
      </section>

      {/* HISTÓRIA */}
      <Section className="py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Uma história que se sente</h2>
            <p className="mb-4">
              No litoral de Itapipoca, a Praia da Baleia não é apenas um destino —
              é um convite para desacelerar e viver o tempo no ritmo do mar.
            </p>
            <p className="mb-4">
              Sua origem está ligada à força de uma comunidade simples, moldada
              pela pesca artesanal, pelas marés e pelas histórias passadas de
              geração em geração.
            </p>
            <p>
              Aqui, cada detalhe carrega autenticidade. Não é sobre pressa, é sobre
              presença.
            </p>
          </div>

          <div className="h-80 rounded-[2rem] bg-gray-200" />
        </div>
      </Section>

      {/* CULTURA (quebra suave) */}
      <Section className="bg-[#f8fafc] py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-80 rounded-[2rem] bg-gray-200" />

          <div>
            <h2 className="mb-6">Mais que paisagem, uma identidade</h2>
            <p className="mb-4">
              A cultura local é viva — está no sorriso de quem recebe, no peixe
              fresco servido à beira-mar e nas conversas que acontecem sem pressa.
            </p>
            <p className="mb-4">
              A Praia da Baleia preserva um estilo de vida que muitos já esqueceram:
              o de valorizar o simples, o natural e o verdadeiro.
            </p>
            <p>
              É esse equilíbrio entre natureza e essência humana que transforma
              cada visita em algo memorável.
            </p>
          </div>
        </div>
      </Section>

      {/* MOTIVOS */}
      <Section className="py-28">
        <Heading
          title="Por que visitar?"
          subtitle="Motivos que tornam a Praia da Baleia única"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {["Tranquilidade", "Belezas naturais", "Cultura local"].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[2rem] p-8 shadow-sm text-center"
            >
              <h3 className="font-semibold mb-2">{item}</h3>
              <p>
                Experimente momentos únicos em um cenário que combina natureza e
                autenticidade.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-20">
        <div className="bg-[rgb(var(--color-primary))] text-white text-center py-16 rounded-[2rem]">
          <h2 className="mb-6">Agora é sua vez de viver essa experiência</h2>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/experiencias">
              <Button>Explorar experiências</Button>
            </Link>
            <Link href="/hospedagem">
              <Button variant="white">Onde ficar</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}