"use client";

import { Estabelecimento } from "@/types";

interface PartnerCardProps {
  data: Estabelecimento;
}

export function PartnerCard({ data }: PartnerCardProps) {
  return (
    <a
      href={data.whatsapp_link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition"
    >
      {/* IMAGE */}
      <div
        className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${data.foto_url})` }}
      />

      {/* INFO */}
      <div className="p-6 bg-white">
        <span className="text-sm text-gray-500">
          {data.categorias?.nome || "Categoria"}
        </span>

        <h3 className="font-semibold text-lg mt-1 text-[#212121]">
          {data.nome}
        </h3>

        {/* BADGES */}
        <div className="flex gap-2 mt-3 flex-wrap">
          {data.is_featured && (
            <span className="text-xs bg-[#215CA8] text-white px-3 py-1 rounded-full">
              Destaque
            </span>
          )}

          {data.status_aberto && (
            <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">
              Aberto
            </span>
          )}
        </div>
      </div>
    </a>
  );
}