import { createClient } from '@/utils/supabase/server';
import ListaDestaques from '@/components/ListaDestaques';

export default async function Home() {
  const supabase = await createClient();

  // Busca os dados diretamente no servidor
  const { data: destaques } = await supabase
    .from('estabelecimentos')
    .select('*, categorias(nome)');

  return (
    <main className="min-h-screen bg-[#215CA8] p-4 md:p-8 font-sans">
      
      {/* Container Central (O "Cartão" Branco) */}
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-7xl mx-auto">

        {/* Video Section e Links Laterais - Alinhados e Centralizados */}
        <section className="py-10 px-4 md:px-12">
          {/* items-center garante o alinhamento vertical entre o bloco do vídeo e o bloco de matérias */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Coluna do Vídeo (Ocupa 7 colunas) */}
            <div className="lg:col-span-7">
              <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/SEU_ID_DO_VIDEO" 
                  title="Vídeo Turístico"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Coluna das Matérias Relacionadas (Ocupa 5 colunas) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h3 className="p-2 text-2xl font-black text-[#215CA8]">Leia também:</h3>
              
              {/* Link de Matéria 1 */}
              <a href="/materias/dicas-de-praia" className="block p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition border-l-4 border-[#215CA8]">
                <h4 className="font-bold text-[#212121] text-lg">As 5 melhores barracas na Praia da Baleia</h4>
                <p className="text-sm text-slate-600 mt-1">Saiba onde comer aquele peixe fresco com o pé na areia.</p>
              </a>

              {/* Link de Matéria 2 */}
              <a href="/materias/como-chegar" className="block p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition border-l-4 border-[#215CA8]">
                <h4 className="font-bold text-[#212121] text-lg">Guia Completo: Como chegar à Baleia</h4>
                <p className="text-sm text-slate-600 mt-1">Dicas de transporte, melhores horários e estradas.</p>
              </a>

              {/* Link de Matéria 3 */}
              <a href="/materias/temporada" className="block p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition border-l-4 border-[#215CA8]">
                <h4 className="font-bold text-[#212121] text-lg">A melhor época para visitar o Ceará</h4>
                <p className="text-sm text-slate-600 mt-1">Sol o ano todo? Entenda o clima da nossa região.</p>
              </a>
            </div>

          </div>
        </section>

        {/* Lista de Destaques (Componente Interativo) */}
        <ListaDestaques initialData={destaques || []} />
        
      </div>
    </main>
  );
}