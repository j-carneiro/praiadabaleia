"use client";

import { motion } from "framer-motion";

interface GalleryItem {
  src: string;
  alt?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="relative overflow-hidden rounded-3xl group cursor-pointer break-inside-avoid"
        >
          {/* IMAGEM */}
          <img
            src={item.src}
            alt={item.alt || "Imagem da galeria"}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/0 group-hover:bg-[rgb(var(--color-dark))]/40 transition" />
        </motion.div>
      ))}
    </div>
  );
}