import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  image: string;
}

export function ExperienceCard({ title, image }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6 }}
      className="relative h-64 rounded-[2rem] overflow-hidden cursor-pointer group"
    >
      {/* IMAGEM */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/40 group-hover:bg-[rgb(var(--color-dark))]/60 transition" />

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex items-end p-6">
        <h3 className="text-white text-xl font-semibold">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}