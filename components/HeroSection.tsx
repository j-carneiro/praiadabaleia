"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  videoSrc: string;
}

export function HeroSection({ title, subtitle, videoSrc }: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative h-screen w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">

      {/* LOADING */}
      {!loaded && (
        <div className="absolute inset-0 bg-[rgb(var(--color-dark))] animate-pulse z-10" />
      )}

      {/* VIDEO */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onLoadedData={() => setLoaded(true)}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/60" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <h1 className="mb-6 max-w-3xl">{title}</h1>

        <i className="text-lg text-[#D4AF37] md:text-xl font-semibold mb-8 opacity-90 max-w-xl">
          {subtitle}
        </i>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/sobre" className="btn-primary">Explorar</Link>
          <Link href="/experiencias" className="btn-outline">Experiências</Link>
        </div>
      </motion.div>
    </section>
  );
}
