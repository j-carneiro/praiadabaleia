'use client'; // Necessário para usar o useState

import { useState } from 'react';
import NegocioCard from './NegocioCard';
import { Estabelecimento } from '@/types/';

export default function ListaDestaques({ initialData }: { initialData: Estabelecimento[] }) {
  const [filtro, setFiltro] = useState('todos');

  // Filtra os itens baseado na categoria
  const itensFiltrados = filtro === 'todos' 
    ? initialData 
    : initialData.filter(item => item.categorias?.nome.toLowerCase() === filtro);

  return (
    <section id="Parceiros" className="bg-[#D1E1F3] p-8 md:p-12 text-center">
      <h3 className="text-4xl font-black text-[#215CA8] mb-8 tracking-tight">
        NOSSOS PARCEIROS
      </h3>
      
      {/* Botões de Filtro */}
      <div className="flex gap-4 justify-center mb-12">
        {['todos', 'estadias', 'restaurantes', 'mercados'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setFiltro(cat)} 
            className={`px-6 py-2 rounded-full font-bold capitalize transition ${filtro === cat ? 'bg-[#215CA8] text-white' : 'bg-white text-[#215CA8]'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {itensFiltrados.map((item) => (
          <NegocioCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}