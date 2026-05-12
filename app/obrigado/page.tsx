'use client';

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import * as fpixel from '@/lib/fpixel';

export default function ThankYouPage() {
  useEffect(() => {
    // Fire Purchase event
    // You can pass value and currency if you have them, e.g. { value: 19.90, currency: 'BRL' }
    fpixel.event('Purchase', { value: 19.90, currency: 'BRL' });
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF2B2B]/10 via-transparent to-transparent pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-[#0A0A0A] border border-white/10 p-12 rounded-[2.5rem] shadow-2xl relative z-10"
      >
        <div className="w-20 h-20 bg-[#FF2B2B]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#FF2B2B]/20">
          <CheckCircle2 className="w-10 h-10 text-[#FF2B2B]" />
        </div>
        
        <h1 className="font-serif text-[2.5rem] md:text-5xl text-white mb-6 leading-tight">
          Acesso <span className="text-[#FF2B2B]">Confirmado.</span>
        </h1>
        
        <p className="text-[#B8B8B8] text-lg mb-10 leading-relaxed font-light">
          Parabéns pela decisão estratégica. <br />
          As instruções de acesso foram enviadas para o seu e-mail funcional. Verifique sua caixa de entrada e spam.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-3 text-[#B8B8B8] hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>
      </motion.div>
    </main>
  );
}
