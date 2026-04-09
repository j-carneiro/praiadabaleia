/* ================= NAVBAR PREMIUM ================= */
// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Início', href: '/' },
    { name: 'A Praia', href: '/sobre' },
    { name: 'Experiências', href: '/experiencias' },
    { name: 'Hospedagem', href: '/hospedagem' },
    { name: 'Gastronomia', href: '/gastronomia' },
    { name: 'Como Chegar', href: '/como-chegar' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="h-10 flex items-center">
          <img src="/iconpb.svg" alt="Praia da Baleia" className="h-full object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-[#212121]">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative group capitalize">
              <span className={isActive(link.href) ? 'text-[#215CA8]' : ''}>
                {link.name}
              </span>

              {/* underline animada */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#215CA8] transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/planejar"
          className="hidden md:flex items-center justify-center uppercase tracking-wide text-sm font-semibold bg-[#215CA8] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
        >
          Planejar Viagem
        </Link>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg px-6 pb-6 pt-2 flex flex-col gap-5 text-[#212121]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`capitalize ${isActive(link.href) ? 'text-[#215CA8]' : ''}`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/planejar"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-center uppercase tracking-wide bg-[#215CA8] text-white py-3 rounded-full"
          >
            Planejar Viagem
          </Link>
        </div>
      )}
    </header>
  );
}
