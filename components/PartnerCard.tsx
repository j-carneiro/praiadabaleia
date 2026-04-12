import Link from "next/link";
import { Estabelecimento } from "@/types";

interface PartnerCardProps {
  data: Estabelecimento;
}

export function PartnerCard({ data }: PartnerCardProps) {
  return (
    <Link href={`/parceiros/${data.slug || data.id}`}>
      <div className="card p-4 cursor-pointer group">

        {/* IMAGEM */}
        {data.foto_url && (
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={data.foto_url}
              alt={data.nome}
              className="w-full h-48 object-cover group-hover:scale-105 transition"
            />
          </div>
        )}

        {/* CONTEÚDO */}
        <h3 className="mb-2 group-hover:text-[rgb(var(--color-primary))] transition">
          {data.nome}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {data.descricao}
        </p>

        {/* CTA VISUAL */}
        <span className="text-sm text-[rgb(var(--color-primary))] mt-3 inline-block">
          Ver mais →
        </span>

      </div>
    </Link>
  );
}