import { getPartnerBySlug } from "@/lib/getPartnerBySlug";
import Image from "next/image";
import Link from "next/link";

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 🔥 NEXT 15 → params é async
  const { slug } = await params;

  const data = await getPartnerBySlug(slug);

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2>Parceiro não encontrado</h2>
      </div>
    );
  }

  // 🔥 NORMALIZAÇÃO (ANTI-ERRO TS)
  const menus = data.menus ?? [];
  const disponibilidade = data.disponibilidade ?? [];

  // 🔥 WHATSAPP COM MENSAGEM PRONTA
  const message = `Olá! Vim pelo site da Praia da Baleia e quero saber mais sobre ${data.nome}`;
  const whatsappUrl = `${data.whatsapp_link}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-[#f8fafc]">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-end">
        <Image
          src={data.foto_url}
          alt={data.nome}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 p-8 text-white max-w-4xl">
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              data.status_aberto ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {data.status_aberto ? "Aberto agora" : "Fechado"}
          </span>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold">
            {data.nome}
          </h1>

          <p className="mt-3 text-lg opacity-90 max-w-xl">
            {data.descricao}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="py-16 max-w-5xl mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl font-semibold">
          Por que escolher {data.nome}?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Uma das experiências mais procuradas da Praia da Baleia,
          ideal para quem busca qualidade, conforto e atendimento direto.
        </p>
      </section>

      {/* CONTEÚDO DINÂMICO */}
      <section className="py-20 max-w-5xl mx-auto px-4">

        {/* MENU */}
        {menus.length > 0 && (
          <>
            <h2 className="mb-10 text-center text-2xl font-semibold">
              Cardápio
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {menus.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-lg">{item.nome}</h3>

                  <p className="text-gray-500 text-sm mt-2">
                    {item.descricao}
                  </p>

                  <p className="mt-4 font-semibold text-[rgb(var(--color-primary))]">
                    R$ {item.preco}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* DISPONIBILIDADE */}
        {disponibilidade.length > 0 && (
          <>
            <h2 className="mt-16 mb-10 text-center text-2xl font-semibold">
              Disponibilidade
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {disponibilidade.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl text-center shadow"
                >
                  <p className="text-sm text-gray-500">
                    {item.data_inicio} → {item.data_fim}
                  </p>

                  <span
                    className={`text-sm font-semibold ${
                      item.status === "disponivel"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center">
        <h2 className="mb-6 text-2xl font-semibold">
          Pronto para viver essa experiência?
        </h2>

        <a
          href={whatsappUrl}
          target="_blank"
          className="bg-[rgb(var(--color-primary))] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Reservar agora via WhatsApp
        </a>
      </section>

      {/* VOLTAR */}
      <div className="text-center pb-10">
        <Link href="/parceiros" className="text-sm text-gray-500 hover:underline">
          ← Voltar para parceiros
        </Link>
      </div>
    </div>
  );
}