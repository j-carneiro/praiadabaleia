// components/NegocioCard.tsx
import { Star } from 'lucide-react';
import { Estabelecimento } from '@/types/'; // Importa o tipo criado

interface NegocioCardProps {
  item: Estabelecimento;}

// 2. Defina a interface das PROPS do componente
interface NegocioCardProps {
  item: Estabelecimento;
}

// 3. Aplique a interface na função do componente
export default function NegocioCard({ item }: NegocioCardProps) {
  return (
    <div className="bg-white rounded-4xl p-6 shadow-xl border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-2xl">
      {/* ... seu código permanece igual aqui ... */}
      <div className="relative -mt-16 mb-4">
        <div className="w-32 h-32 rounded-full border-4 border-[#215CA8] overflow-hidden shadow-lg bg-slate-100">
           <img src={item.foto_url || "/placeholder-logo.png"} alt={item.nome} className="w-full h-full object-cover" />
        </div>
        <div className={`absolute bottom-2 right-2 w-6 h-6 rounded-full border-4 border-white ${item.status_aberto ? 'bg-green-500' : 'bg-red-500'}`} />
      </div>
      
      <h3 className="text-xl font-bold text-[#212121] mb-1">{item.nome}</h3>
      <div className="flex text-[#FFC107] mb-2">
        {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" />)}
      </div>
      <p className="text-sm font-semibold text-slate-600 mb-6">
        {item.status_aberto ? 'Aberto Agora' : 'Fechado no momento'}
      </p>
      <a href={`/estabelecimento/${item.id}`} className="w-full bg-[#215CA8] text-white py-3 rounded-2xl font-bold hover:bg-[#1a4a88] transition">
        SABER MAIS
      </a>
    </div>
  );
}