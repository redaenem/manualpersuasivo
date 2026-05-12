'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Crown, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ObrigadoPage() {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: 19.90,
        currency: 'BRL',
      });
    }
  }, []);

  return (
    <main className="w-full bg-[#000000] min-h-screen overflow-hidden font-sans text-[#B8B8B8] flex flex-col items-center justify-center relative px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF2B2B]/10 via-transparent to-transparent pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-12 text-center shadow-2xl relative z-10"
      >
        <div className="w-20 h-20 bg-[#FF2B2B]/10 rounded-3xl flex items-center justify-center text-[#FF2B2B] mx-auto mb-8 border border-[#FF2B2B]/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-[#FFFFFF] mb-6 tracking-tight font-bold">
          Acesso <span className="text-[#FF2B2B]">Confirmado</span>
        </h1>
        
        <p className="text-lg text-[#B8B8B8] font-light leading-relaxed mb-10">
          Parabéns pela sua decisão estratégica. O seu acesso ao acervo completo acaba de ser enviado para o seu e-mail.
        </p>

        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-4 p-4 bg-[#000000] border border-white/5 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-[#FF2B2B]/10 flex items-center justify-center text-[#FF2B2B]">
               <Crown className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-bold uppercase tracking-widest">Acesso Vitalício</p>
              <p className="text-[#B8B8B8] text-xs">A biblioteca é sua para sempre.</p>
            </div>
          </div>
        </div>

        <Link 
          href="/"
          className="inline-flex items-center gap-3 bg-[#FF2B2B] text-white px-10 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform shadow-lg shadow-[#FF2B2B]/20"
        >
          Voltar para a página inicial
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <div className="mt-12 text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
        © 2024 ESTRATÉGIA & PODER
      </div>
    </main>
  );
}
