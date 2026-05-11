import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0C10] flex flex-col items-center justify-center text-center px-6">
      <h2 className="font-serif text-5xl md:text-7xl text-[#F5F3EE] mb-6">404</h2>
      <p className="text-[#9CA3AF] text-xl mb-12 max-w-md font-light italic">
        Esta porta não faz parte do acervo. Você tentou acessar um protocolo inexistente.
      </p>
      <Link 
        href="/"
        className="px-8 py-4 bg-[#FF3B3B] text-black rounded-full font-black tracking-widest uppercase text-xs shadow-[0_10px_30px_rgba(255,59,59,0.3)] hover:shadow-[0_15px_40px_rgba(255,59,59,0.5)] transition-all"
      >
        Voltar à Biblioteca
      </Link>
    </div>
  );
}
