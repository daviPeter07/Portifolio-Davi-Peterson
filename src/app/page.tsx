import { Rocket } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-sans p-4">
      <div className="text-center transform transition-all duration-500 hover:scale-105">
        
        {/* Ícone da nave com uma animação sutil */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Rocket 
              className="h-20 w-20 text-cyan-400" 
              strokeWidth={1.5} 
            />
            {/* Efeito de "brilho" atrás do ícone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* Título principal com gradiente */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
          Projeto em andamento...
        </h1>

        {/* Subtítulo explicando o status */}
        <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto">
          Fique atento nas próximas atualizações que estão por vir
        </p>
        
      </div>

      {/* Rodapé sutil */}
      <footer className="absolute bottom-5 text-gray-600 text-sm">
        @Davi Peterson 2025
      </footer>
    </main>
  );
}
