// app/sobre/page.tsx
import Navbar from '@/components/Navbar';

export default function SobreNos() {
  return (
    <main className="min-h-screen bg-[#215CA8] p-4 md:p-8 font-sans">
      {/* Container Central Branco */}
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-7xl mx-auto p-8 md:p-16">
        
        {/* Cabeçalho */}
        <header className="mb-16 text-center">
          <span className="text-[#215CA8] font-bold tracking-widest uppercase text-sm">Nossa Identidade</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#212121] mt-4 mb-6 leading-tight">
            A História da <span className="text-[#215CA8]">Praia da Baleia</span>
          </h1>
        </header>
        
        {/* Conteúdo do Texto Histórico */}
        <div className="text-[#212121] text-lg md:text-xl leading-relaxed space-y-8">
          <p className="font-medium">
            Entre dunas moldadas pelo vento e o ritmo constante do oceano, a Praia da Baleia carrega uma trajetória que vai muito além da paisagem que encanta à primeira vista. Localizada no litoral do município de Itapipoca, essa faixa de costa guarda memórias que atravessam séculos, conectando passado, tradição e pertencimento.
          </p>

          <hr className="border-[#215CA8]/20" />

          <h2 className="text-2xl font-bold text-[#215CA8]">As primeiras presenças</h2>
          <p>
            Muito antes de qualquer registro formal, o litoral de Itapipoca já era frequentado por povos indígenas. O mar não era apenas sustento — era rota, identidade e espiritualidade. Esse isolamento geográfico foi justamente o que preservou a essência natural e cultural da nossa terra.
          </p>

          <h2 className="text-2xl font-bold text-[#215CA8]">A formação da comunidade</h2>
          <p>
            A consolidação da Praia da Baleia se deu através da pesca artesanal. Famílias inteiras estruturaram suas vidas em torno das jangadas, um conhecimento transmitido de pai para filho. Durante décadas, o acesso limitado construiu um forte senso de coletividade: vizinhos que ajudavam a construir casas e celebravam juntos as conquistas.
          </p>

          <h2 className="text-2xl font-bold text-[#215CA8]">O nome “Baleia”</h2>
          <p className="italic border-l-4 border-[#215CA8] pl-6 text-[#215CA8]/80">
            "Histórias orais relatam o aparecimento de grandes animais marinhos — possíveis baleias — que migravam pelo litoral. Para a comunidade, aquilo representava um sinal de grandiosidade, mistério e respeito."
          </p>

          <p>
            Hoje, a Praia da Baleia é um raro exemplo de equilíbrio entre o passado e o futuro, onde o tempo parece respeitar um ritmo diferente, convidando quem chega a viver a verdade de um refúgio que resiste ao tempo.
          </p>
        </div>

        {/* Botão Voltar */}
        <div className="mt-16 text-center">
          <a href="/" className="inline-block bg-[#215CA8] text-white px-10 py-4 rounded-full font-bold hover:bg-[#1a4a88] transition shadow-lg">
            Voltar para o Início
          </a>
        </div>


        {/* Rodapé #212121 */}
        <footer className="w-full mt-16 py-25 bg-[#212121] text-white/80">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
              <a href="/" className="hover:text-white transition">Início</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Contato</a>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Guia Praia da Baleia. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}