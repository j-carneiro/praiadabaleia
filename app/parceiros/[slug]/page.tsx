import { getPartnerBySlug } from "@/lib/getPartnerBySlug";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

import { Disponibilidade, Menu } from "@/types";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PartnerPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getPartnerBySlug(slug);


  if (!data) {
    return (
      <div className="py-20 text-center">
        <h2>Parceiro não encontrado</h2>
      </div>
    );
  }

  const isHospedagem = data.categorias?.slug === "hospedagem";
  const isFood = data.categorias?.slug === "gastronomia";

  return (
    <>
      {/* HERO */}
      <section className="h-[50vh] bg-[rgb(var(--color-primary))] text-white flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h1 className="mb-4">{data.nome}</h1>
          <p className="opacity-90">{data.descricao}</p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <Section className="py-24">

        {/* 🏨 HOSPEDAGEM */}
        {isHospedagem && (
          <>
            <h2 className="mb-8 text-center">Disponibilidade</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {data.disponibilidade?.length ? (
                data.disponibilidade.map((item: Disponibilidade) => (
                  <div key={item.id} className="card p-6 text-center">
                    <p className="font-semibold">
                      {item.data_inicio} → {item.data_fim}
                    </p>

                    <span
                      className={`text-sm ${
                        item.status === "disponivel"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  Nenhuma disponibilidade cadastrada
                </p>
              )}
            </div>
          </>
        )}

        {/* 🍽️ GASTRONOMIA */}
        {isFood && (
          <>
            <h2 className="mb-8 text-center">Cardápio</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {data.menus?.length ? (
                data.menus.map((item: Menu) => (
                  <div key={item.id} className="card p-6">
                    <h3 className="mb-2">{item.nome}</h3>

                    <p className="mb-3">{item.descricao}</p>

                    <span className="font-semibold text-[rgb(var(--color-primary))]">
                      R$ {item.preco.toFixed(2)}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  Cardápio não disponível
                </p>
              )}
            </div>
          </>
        )}

        {/* 🧭 OUTROS TIPOS */}
        {!isHospedagem && !isFood && (
          <div className="text-center">
            <p className="text-gray-500">
              Entre em contato para mais informações sobre este parceiro.
            </p>
          </div>
        )}

      </Section>

      {/* CTA WHATSAPP */}
      <Section className="py-20">
        <div className="bg-[rgb(var(--color-primary))] text-white text-center py-16 rounded-4xl">
          <h2 className="mb-4">Fale diretamente com o parceiro</h2>

          <p className="mb-6 opacity-90">
            Tire dúvidas, consulte disponibilidade ou faça seu pedido agora mesmo
          </p>

          <a
            href={data.whatsapp_link}
            target="_blank"
            className="btn-white"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
}