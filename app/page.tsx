'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import {
  Crown,
  Lock,
  Smartphone,
  CheckCircle2,
  Eye,
  ChevronDown
} from 'lucide-react';
import React from 'react';

// --- ATOMIC COMPONENTS ---

const RedText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`bg-gradient-to-r from-[#FF2B2B] to-[#FF4D4D] bg-clip-text text-transparent font-bold ${className}`}>
    {children}
  </span>
);

const RedButtonCTA = ({ text, className = "", href = "https://pay.wiapy.com/f8cibSpxjL" }: { text: string, className?: string, href?: string }) => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`relative inline-block overflow-hidden group bg-[#FF2B2B] text-[#FFFFFF] px-8 sm:px-12 py-4 sm:py-5 rounded-lg font-bold tracking-widest uppercase text-sm transition-all duration-500 shadow-[0_10px_30px_rgba(255,43,43,0.3)] hover:shadow-[0_15px_40px_rgba(255,43,43,0.5)] hover:-translate-y-1 active:scale-95 text-center ${className}`}
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
    </a>
  );
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- SECTIONS ---

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#000000] z-0">
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#101010] via-[#000000] to-[#000000]" />
        {/* Cinematic Red Glow */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#FF2B2B]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#FF2B2B]/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
        <div className="flex flex-col items-center">
          
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] border border-white/10 rounded-full mb-6 backdrop-blur-md shadow-sm mx-auto">
              <Eye className="w-4 h-4 text-[#FF2B2B]" />
              <span className="text-[10px] tracking-[0.3em] text-[#FFFFFF] uppercase font-black">Acesso Restrito</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-[3rem] md:text-8xl lg:text-[7.5rem] leading-[1] text-[#FFFFFF] mb-8 relative tracking-tighter font-bold">
              O mundo muda quando você <br className="hidden md:block"/>
              <RedText>entende as pessoas.</RedText>
            </h1>
          </FadeIn>

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[1fr,1.2fr] gap-12 items-center mt-4">
            <FadeIn delay={0.3}>
              <div className="relative w-[240px] md:w-full max-w-xs mx-auto rounded-3xl overflow-hidden border border-[#FF2B2B]/40 shadow-[0_30px_80px_rgba(255,43,43,0.2)] aspect-[9/16] transition-transform hover:scale-[1.02] duration-500">
                <iframe 
                  src="https://player.vimeo.com/video/1191305513?background=1&autoplay=1&loop=1&byline=0&title=0" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen" 
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <div className="text-center md:text-left space-y-8">
              <FadeIn delay={0.4}>
                <p className="text-xl md:text-2xl text-[#EAEAEA] font-light leading-snug max-w-xl">
                  A diferença entre quem é influenciado e quem <RedText className="italic">entende o jogo.</RedText> Tenha acesso às estratégias mais poderosas de influência e poder.
                </p>
              </FadeIn>

              <FadeIn delay={0.5} className="flex flex-col gap-6">
                <RedButtonCTA href="#ofertas" text="DESBLOQUEAR ACESSO" className="w-full md:w-auto py-6 text-base" />
                <div className="flex items-center gap-6 justify-center md:justify-start text-[10px] tracking-[0.2em] text-[#B8B8B8] font-bold">
                   <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#FF2B2B]"/> 100% SEGURO</div>
                   <div className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-[#FF2B2B]"/> ACESSO IMEDIATO</div>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const list = [
    "Entenda o comportamento humano real",
    "Desenvolva pensamento estratégico de elite",
    "Aprenda persuasão e influência avançada",
    "Identifique padrões sociais invisíveis",
    "Saia do automático definitivamente"
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/5 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="font-serif text-[2.5rem] md:text-[4.5rem] text-[#FFFFFF] leading-[1.1] tracking-tight mb-6">
              Assuma o <RedText>controle</RedText> <br/>da narrativa.
            </h2>
            <p className="text-[#B8B8B8] text-lg md:text-xl font-light leading-relaxed">
              Pare de reagir ao mundo e comece a mapear as engrenagens que movem as decisões à sua volta.
            </p>
          </FadeIn>
          
          <div className="space-y-4">
            {list.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-center gap-4 p-5 bg-[#000000] border border-white/5 rounded-2xl hover:border-[#FF2B2B]/30 transition-all group">
                  <div className="w-8 h-8 rounded-full bg-[#FF2B2B]/10 flex items-center justify-center text-[#FF2B2B] border border-[#FF2B2B]/20 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 stroke-[3]" />
                  </div>
                  <span className="text-[#FFFFFF] font-medium text-lg md:text-xl tracking-tight">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BookCarousel() {
  const books = [
    { title: "As 48 Leis do Poder", tag: "Estratégia social", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_43_jpnq24" },
    { title: "33 Estratégias de Guerra", tag: "Tática avançada", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_45_josgoe" },
    { title: "As Armas da Persuasão", tag: "Influência & percepção", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/shopping_c9wrii" },
    { title: "Antifrágil", tag: "Mentalidade antifrágil", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/1_PvIe2185gG0HPfdGIh7PTw_mqhphz" },
    { title: "Engenharia Social", tag: "Comportamento humano", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_42_zze2qb" },
    { title: "Bitcoin", tag: "Liberdade financeira", image: "https://m.media-amazon.com/images/I/61287ouYT1L.jpg" },
    { title: "Trabalhe 4 Horas por Semana", tag: "Sistemas & produtividade", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/4_HORAS_alegqa" },
    { title: "O Caminho da Servidão", tag: "Visão econômica", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_39_tur4ql" },
    { title: "A Chave Mestra", tag: "Evolução mental", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_40_lsrjgd" },
    { title: "Ponerologia", tag: "Psicologia profunda", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_41_bho8zl" },
  ];

  const marqueeBooks = [...books, ...books];

  return (
    <section className="py-24 bg-[#000000] relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <FadeIn>
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] text-[#FFFFFF] mb-6 tracking-tight leading-tight">
            O que você vai <RedText>receber</RedText>
          </h2>
          <p className="text-[#B8B8B8] font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Uma biblioteca estratégica completa. +30 leituras fundamentais otimizadas para consumo rápido e aplicação imediata.
          </p>
        </FadeIn>
      </div>

      <div className="relative w-full flex overflow-x-hidden pb-12" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex gap-6 md:gap-8 px-6 w-max items-center"
        >
          {marqueeBooks.map((book, idx) => (
            <div key={idx} className="relative w-[220px] md:w-[260px] shrink-0 group/card">
              <div className="relative aspect-[2/3] bg-[#0A0A0A] border border-white/10 rounded-r-xl border-l-[10px] border-l-[#0D0F13] flex flex-col items-center justify-center p-6 shadow-xl transition-all duration-500 group-hover/card:border-[#FF2B2B]/40 group-hover/card:-translate-y-2 overflow-hidden">
                {book.image && (
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={book.image} 
                      alt={book.title} 
                      fill 
                      className="object-cover opacity-40 group-hover/card:opacity-60 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent" />
                  </div>
                )}
                <div className="relative z-10 w-full text-center">
                  <h3 className="font-serif text-lg md:text-xl text-[#FFFFFF] mb-3 leading-tight drop-shadow-md font-bold">{book.title}</h3>
                  <div className="w-8 h-[1px] bg-[#FF2B2B] mx-auto mb-3" />
                  <p className="text-[#B8B8B8] tracking-[0.2em] text-[8px] uppercase font-black">{book.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="ofertas" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#FF2B2B]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-[3rem] md:text-[4.5rem] text-[#FFFFFF] mb-6 tracking-tight leading-none px-4">
            A porta <RedText>está aberta.</RedText>
          </h2>
          <p className="text-[#B8B8B8] max-w-2xl mx-auto font-light text-lg">
            Escolha seu nível de acesso. Ativação imediata em segundos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* PLANO 1 */}
          <FadeIn delay={0.2} className="relative z-0 h-full border border-white/10 bg-[#0A0A0A] rounded-[2rem] p-8 flex flex-col hover:border-white/20 transition-all duration-500 shadow-xl">
            <div className="mb-8">
              <h3 className="text-[#B8B8B8] font-black mb-3 uppercase tracking-[0.2em] text-[10px]">Leitura Inicial</h3>
              <div className="text-[2.5rem] leading-none font-serif text-[#FFFFFF] mb-4">R$ 2,90</div>
              <p className="text-sm text-[#B8B8B8] font-light pb-6 border-b border-white/5">O primeiro vislumbre da estratégia real.</p>
            </div>
            <div className="flex-1 mb-10">
              <ul className="space-y-4 text-[14px] font-light">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-4 h-4 text-[#FF2B2B] mt-1 shrink-0" />
                  <span className="text-[#EAEAEA]">As 48 Leis do Poder</span>
                </li>
              </ul>
            </div>
            <a href="https://pay.wiapy.com/-y8krRsN8t" className="w-full mt-auto py-5 border border-white/20 text-[#FFFFFF] rounded-xl hover:bg-white/5 transition-all text-center uppercase tracking-[0.2em] text-[11px] font-black">
              LIBERAR AGORA
            </a>
          </FadeIn>

          {/* PLANO 3 - PREVALENT ONE */}
          <FadeIn delay={0} className="relative z-20 h-full flex flex-col group/premium scale-105 lg:scale-110">
            <div className="absolute inset-0 bg-[#FF2B2B]/10 blur-[60px] rounded-full opacity-60 pointer-events-none" />
            <div className="relative flex-1 border-[2px] border-[#FF2B2B] bg-[#0A0A0A] rounded-[2.5rem] p-10 flex flex-col shadow-[0_40px_100px_rgba(255,43,43,0.2)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF2B2B] text-[#FFFFFF] px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase whitespace-nowrap shadow-xl">
                MAIS ESCOLHIDO
              </div>
              
              <div className="mb-8 mt-4 text-center">
                <Crown className="w-10 h-10 text-[#FF2B2B] mx-auto mb-6 drop-shadow-[0_0_10px_rgba(255,43,43,0.5)]" />
                <h3 className="text-[#FFFFFF] font-black mb-3 uppercase tracking-[0.2em] text-[11px]">Acesso Completo</h3>
                <div className="text-[1rem] text-[#B8B8B8] line-through mb-1">De R$ 197,00</div>
                <div className="text-[3.5rem] leading-none font-serif text-[#FFFFFF] mb-6 tracking-tight">R$ 19,90</div>
                <p className="text-base text-[#EAEAEA] font-light pb-8 border-b border-white/10 italic">A biblioteca total. Todas as obras fundamentais inclusas.</p>
              </div>

              <div className="flex-1 mb-10">
                <ul className="space-y-4 font-light text-sm">
                  {['Poder & Influência', 'Mentalidade de Elite', 'Evolução Intelectual', 'Estratégica & Guerra', 'Acesso Vitalício'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[#FFFFFF]">
                      <CheckCircle2 className="w-5 h-5 text-[#FF2B2B] shrink-0" />
                      <span className="font-bold">{item}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-4 text-[#FF2B2B] font-black pt-2">+30 LIVROS ESTRATÉGICOS</li>
                </ul>
              </div>

              <a href="https://pay.wiapy.com/f8cibSpxjL" className="w-full mt-auto py-6 bg-[#FF2B2B] text-[#FFFFFF] rounded-xl hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,43,43,0.4)] transition-all uppercase tracking-[0.2em] text-[13px] font-black text-center shadow-lg">
                DESBLOQUEAR TUDO
              </a>
            </div>
          </FadeIn>

          {/* PLANO 2 */}
          <FadeIn delay={0.4} className="relative z-10 h-full border border-white/10 bg-[#0A0A0A] rounded-[2rem] p-8 flex flex-col hover:border-white/20 transition-all duration-500 lg:mt-0 shadow-xl">
            <div className="mb-8">
              <h3 className="text-[#FFFFFF] font-black mb-3 uppercase tracking-[0.2em] text-[10px]">Arsenal Tático</h3>
              <div className="text-[2.5rem] leading-none font-serif text-[#FFFFFF] mb-4">R$ 10,90</div>
              <p className="text-sm text-[#B8B8B8] font-light pb-6 border-b border-white/5">Seleção focada em persuasão aplicada.</p>
            </div>
            <div className="flex-1 mb-10">
               <ul className="space-y-4 font-light text-[14px]">
                  {['As 48 Leis do Poder', 'Armas da Persuasão', 'Engenharia Social', 'Poder e Manipulação'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[#FFFFFF]">
                      <CheckCircle2 className="w-4 h-4 text-[#FF2B2B] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
            <a href="https://pay.wiapy.com/ekL00qUKO2" className="w-full mt-auto py-5 border border-[#FF2B2B]/40 text-[#FF2B2B] rounded-xl hover:bg-[#FF2B2B]/10 transition-all text-center uppercase tracking-[0.2em] text-[11px] font-black">
              LIBERAR AGORA
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação. Enviamos os dados de acesso para o seu e-mail funcional." },
    { q: "Posso ler no celular?", a: "Sim. Formato otimizado para leitura digital em qualquer dispositivo com nitidez absoluta." },
    { q: "O acesso é vitalício?", a: "Sim. Uma vez desbloqueada, a coleção permanece em seu acervo pessoal para sempre." },
    { q: "Preciso baixar algo?", a: "Não. Acesso via plataforma segura e criptografada direto no seu navegador." }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#FFFFFF] mb-4 tracking-tight">FAQ</h2>
          <p className="text-[#B8B8B8] font-light">Dúvidas rápidas.</p>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className={`border rounded-2xl overflow-hidden transition-all duration-500 ${openIndex === i ? 'bg-[#0A0A0A] border-[#FF2B2B]/30' : 'bg-transparent border-white/10'}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-6 flex items-center justify-between gap-4"
                >
                  <span className={`font-bold text-base md:text-lg ${openIndex === i ? 'text-[#FFFFFF]' : 'text-[#B8B8B8]'}`}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${openIndex === i ? 'text-[#FF2B2B] rotate-180' : 'text-[#B8B8B8]'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#B8B8B8] font-light leading-relaxed text-base border-t border-white/5 pt-4">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 bg-[#000000] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF2B2B]/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <FadeIn>
          <h2 className="font-serif text-[2.5rem] md:text-[4.5rem] text-[#FFFFFF] mb-8 leading-tight tracking-tight font-bold">
            A maioria continuará <br className="hidden md:block"/>vivendo no <span className="italic text-[#B8B8B8]">automático.</span>
          </h2>
          <p className="text-[#B8B8B8] mb-12 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Enquanto alguns apenas reagem ao mundo… outros aprendem como ele funciona.
          </p>
          <RedButtonCTA href="#ofertas" text="ACESSAR O ACERVO AGORA" className="px-12 py-6 text-base" />
        </FadeIn>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#050505] py-24 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl text-center flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center border border-white/10 rounded-2xl mb-10 bg-[#101010] shadow-xl group hover:border-[#FF2B2B]/40 transition-all duration-700">
           <Crown className="w-7 h-7 text-[#FF2B2B] stroke-[1.5] group-hover:scale-110 transition-transform" />
        </div>
        <p className="text-[#FFFFFF] text-xs tracking-[0.4em] font-black mb-10 uppercase opacity-90">
          ESTRATÉGIA & PODER OFICIAL
        </p>
        <div className="flex flex-wrap justify-center gap-10 text-[12px] text-[#B8B8B8] uppercase tracking-[0.3em] font-bold">
          <a href="#" className="hover:text-[#FF2B2B] transition-all duration-500 hover:tracking-[0.4em]">Termos</a>
          <a href="#" className="hover:text-[#FF2B2B] transition-all duration-500 hover:tracking-[0.4em]">Privacidade</a>
          <a href="#" className="hover:text-[#FF2B2B] transition-all duration-500 hover:tracking-[0.4em]">Contato</a>
        </div>
        <div className="mt-16 pt-10 border-t border-white/5 w-full flex justify-center">
           <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2024 Todos os Direitos Reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent');
    }
  }, []);

  return (
    <main className="w-full bg-[#000000] min-h-screen overflow-hidden font-sans text-[#B8B8B8] selection:bg-[#FF2B2B]/30 flex flex-col justify-stretch items-stretch">
      <Hero />
      <Benefits />
      <BookCarousel />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
