import './globals.css'
import { Navbar } from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">

        {/* FUNDO AZUL */}
        <div className="bg-[#215CA8] min-h-screen p-3 md:p-6">

          {/* CONTAINER PRINCIPAL */}
          <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden max-w-7xl mx-auto">

            <Navbar />

            {/* CONTEÚDO */}
            <main className="px-4 md:px-10 py-6 md:py-10">
              {children}
            </main>

          </div>

        </div>

      </body>
    </html>
  )
}