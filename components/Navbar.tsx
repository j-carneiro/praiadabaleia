// components/Navbar.tsx
'use client'; // Como tem interatividade de menu, precisa ser client

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-15 flex items-center justify-between">
        
        {/* Logo SVG - Substitua o src pelo caminho do seu logo.svg na pasta public */}
        <Link href="/" className="h-12 w-auto">
          <img src="/iconpb.svg" alt="Logo da Praia da Baleia" className="h-full w-auto object-contain" />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 font-bold text-[#215CA8]">
          <Link href="/" className="hover:opacity-70 transition">INÍCIO</Link>
          <Link href="/sobre" className="hover:opacity-70 transition">SOBRE NÓS</Link>
          <Link href="https://www.instagram.com/praiadabaleia/" className="hover:opacity-70 transition">INSTAGRAM</Link>
          <Link href="/#Parceiros" className="hover:opacity-70 transition">PARCEIROS</Link>
        </nav>

        {/* Botão Ação */}
        <Link href="#" className="hidden md:flex items-center gap-2 font-bold text-[#215CA8] border-2 border-[#215CA8] px-6 py-2 rounded-full hover:bg-[#215CA8] hover:text-white transition">
          FAÇA PARTE
        </Link>

        {/* Botão Mobile */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-[#215CA8]" /> : <Menu size={28} className="text-[#215CA8]" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b p-6 flex flex-col gap-4 text-[#215CA8] font-bold">
          <Link href="/" onClick={() => setIsOpen(false)}>INÍCIO</Link>
          <Link href="/sobre" onClick={() => setIsOpen(false)}>SOBRE NÓS</Link>
          <Link href="https://www.instagram.com/praiadabaleia/" onClick={() => setIsOpen(false)}>INSTAGRAM</Link>
          <Link href="/#Parceiros" onClick={() => setIsOpen(false)}>PARCEIROS</Link>
        </div>
      )}
    </header>
  );
}