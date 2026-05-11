'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import {
  Shield,
  Zap,
  Crown,
  Brain,
  Target,
  Users,
  Lock,
  Smartphone,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Eye,
  Library,
  Coins,
  ChevronDown
} from 'lucide-react';
import React from 'react';

// --- ATOMIC COMPONENTS ---

const RedText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`bg-gradient-to-r from-[#FF2B2B] to-[#FF4D4D] bg-clip-text text-transparent font-bold ${className}`}>
    {children}
  </span>
);

const RedButtonCTA = ({ text, className = "", href = "https://pay.wiapy.com/f8cibSpxjL" }: { text: string, className?: string, href?: string }) => (
  <a 
    href={href}
    className={`relative inline-block overflow-hidden group bg-[#FF2B2B] text-[#FFFFFF] px-8 sm:px-12 py-4 sm:py-5 rounded-lg font-bold tracking-widest uppercase text-sm transition-all duration-500 shadow-[0_10px_30px_rgba(255,43,43,0.3)] hover:shadow-[0_15px_40px_rgba(255,43,43,0.5)] hover:-translate-y-1 active:scale-95 text-center ${className}`}
  >
    <span className="relative z-10">{text}</span>
    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
  </a>
);

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

const BookMockupCss = ({ title, subtitle, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, rotateY: -5, rotateX: 5, y: 20 }}
    whileInView={{ opacity: 1, rotateY: 0, rotateX: 0, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className="relative w-full aspect-[2/3] bg-gradient-to-br from-[#151515] to-[#050505] border border-white/10 rounded-r-xl border-l-[12px] border-l-[#0D0F13] flex flex-col items-center justify-center p-6 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,43,43,0.1)] group perspective-1000"
  >
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF2B2B]/10 via-transparent to-transparent pointer-events-none" />
    <Icon className="w-10 h-10 text-[#FF2B2B] mb-5 stroke-[1.5] opacity-90" />
    <h3 className="font-serif text-lg md:text-xl text-center text-[#FFFFFF] mb-2 leading-tight drop-shadow-sm">{title}</h3>
    <p className="text-[#FF2B2B] tracking-[0.2em] text-[0.6rem] md:text-[0.65rem] uppercase mt-3 text-center font-bold">{subtitle}</p>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2B2B]/30 to-transparent" />
  </motion.div>
);

// --- SECTIONS ---

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505] z-0">
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#101010] via-[#050505] to-[#050505]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] mix-blend-screen" />
        {/* Cinematic Red Glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#FF2B2B]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#FF2B2B]/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
        <div className="flex flex-col items-center">
          
          {/* Main Text Content */}
          <div className="w-full">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#151515] border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-sm mx-auto">
                <Eye className="w-4 h-4 text-[#B8B8B8]" />
                <span className="text-xs tracking-[0.2em] text-[#B8B8B8] uppercase font-bold text-white/80">Acesso Restrito</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="font-serif text-[3.5rem] md:text-8xl lg:text-[7rem] leading-[1.05] text-[#FFFFFF] mb-12 relative tracking-tight">
                O mundo muda quando você <br className="hidden md:block"/>
                <RedText>entende as pessoas.</RedText>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="relative w-full max-w-[280px] sm:max-w-xs mx-auto mb-12 rounded-2xl overflow-hidden border border-[#FF2B2B]/30 shadow-[0_30px_70px_rgba(255,43,43,0.15)] aspect-[9/16] transition-transform hover:scale-[1.02] duration-500">
                <iframe 
                  src="https://player.vimeo.com/video/1190634149?h=9b58d0d63f&badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  className="absolute top-0 left-0 w-full h-full"
                  title="Vimeo Video"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-3xl text-[#EAEAEA] mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                A diferença entre quem é influenciado e quem entende o jogo. Tenha acesso às leituras mais comentadas sobre persuasão, comportamento humano e poder estratégico.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} className="flex flex-col sm:flex-row items-center gap-10 justify-center">
              <RedButtonCTA href="#ofertas" text="LIBERAR MEU ACESSO IMEDIATO" className="shadow-[0_20px_50px_rgba(255,43,43,0.3)]" />
              
              <div className="flex flex-col gap-4 text-xs tracking-widest text-[#B8B8B8] font-bold text-left">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FF2B2B]"/> ACESSO IMEDIATO</div>
                <div className="flex items-center gap-3"><Smartphone className="w-5 h-5 text-[#FF2B2B]"/> LEITURA OTIMIZADA</div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

function PainBlock() {
  return (
    <section className="py-32 md:py-48 bg-[#101010] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <FadeIn>
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] text-[#FFFFFF] mb-12 leading-[1.1] tracking-tight">
            A verdade é que a maioria das pessoas <br className="hidden md:block"/><RedText>nunca aprende isso.</RedText>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-12 text-[1.25rem] md:text-2xl text-[#B8B8B8] font-light leading-relaxed max-w-4xl mx-auto">
            <p>
              Elas passam a vida inteira no piloto automático. São influenciadas em suas decisões diárias, em suas negociações, em seus relacionamentos — e nem sequer percebem.
            </p>
            <p>
              A falta de pensamento estratégico as torna previsíveis. Vulneráveis a quem entende as cordas invisíveis da natureza humana.
            </p>
            <p className="text-[#FFFFFF] font-medium pt-8 text-2xl border-t border-white/5">
              O invisível molda o visível. E ignorar como a influência, o poder e a percepção operam... é escolher jogar com os olhos vendados.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CuriosityBlock() {
  const points = [
    { icon: Target, title: "Estratégia Social", desc: "A arquitetura invisível das relações. O que você não vê dita os resultados." },
    { icon: Shield, title: "Persuasão Oculta", desc: "A arte de comunicar às entrelinhas. Moldar decisões sem forçar argumentos." },
    { icon: Brain, title: "Inteligência Emocional", desc: "A fundação inabalável de toda mente estratégica sob pressão." },
    { icon: Eye, title: "Comportamento Humano", desc: "Decifrar intenções irreais antes mesmo que sejam reveladas." },
    { icon: Users, title: "Padrões Sociais", desc: "Compreender os ciclos previsíveis pelos quais as massas operam." },
    { icon: Crown, title: "Mentalidade de Elite", desc: "Como mentes raras processam a realidade e criam vantagens absolutas." },
  ];

  return (
    <section className="py-32 md:py-48 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="text-center mb-24 md:mb-32">
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] text-[#FFFFFF] mb-8 tracking-tight">
            Por que essas leituras causam <br className="md:hidden"/><RedText>tanto impacto?</RedText>
          </h2>
          <div className="w-24 h-[3px] bg-[#FF2B2B] mx-auto rounded-full" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {points.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group h-full bg-[#151515] border border-white/10 hover:border-[#FF2B2B]/40 p-10 md:p-12 rounded-3xl transition-all duration-700 relative overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(255,43,43,0.1)]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF2B2B]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#FF2B2B]/15 transition-colors duration-700" />
                <div className="w-16 h-16 mb-10 text-[#EAEAEA] group-hover:text-[#FF2B2B] transition-all duration-500 relative z-10 transform group-hover:scale-110">
                  <p.icon className="stroke-[1.5] w-full h-full" />
                </div>
                <h3 className="text-2xl font-serif text-[#FFFFFF] mb-5 relative z-10">{p.title}</h3>
                <p className="text-[#B8B8B8] text-lg leading-relaxed relative z-10 font-light group-hover:text-[#EAEAEA] transition-colors">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
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

  // We can duplicate the books once or twice for an infinite scroll effect.
  const marqueeBooks = [...books, ...books];

  return (
    <section className="py-32 md:py-48 bg-[#101010] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF2B2B]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-24 md:mb-32 text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#151515] border border-white/10 rounded-full mb-10 shadow-lg">
            <Library className="w-4 h-4 text-[#FF2B2B]" />
            <span className="text-[12px] tracking-[0.3em] text-[#FF2B2B] uppercase font-black">O ACERVO PRIVADO</span>
          </div>
          <h2 className="font-serif text-[3rem] md:text-[4rem] lg:text-[5rem] text-[#FFFFFF] mb-8 leading-[1.05] tracking-tight">
            O que você vai desbloquear <br className="hidden md:block"/><RedText>dentro da coleção</RedText>
          </h2>
          <p className="text-[#EAEAEA] font-light max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed opacity-80">
            Uma biblioteca cuidadosamente selecionada para pessoas que desejam enxergar além do óbvio.
          </p>
        </FadeIn>
      </div>

      <div className="relative w-full flex overflow-x-hidden group pb-16 pt-8" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          className="flex gap-8 md:gap-12 px-8 md:px-12 w-max items-center"
        >
          {marqueeBooks.map((book, idx) => (
            <div key={idx} className="relative w-[280px] md:w-[320px] shrink-0 group/card">
              <div className="absolute inset-0 bg-[#FF2B2B]/15 blur-3xl rounded-2xl opacity-0 group-hover/card:opacity-100 transition-all duration-700" />
              <div className="relative aspect-[2/3] bg-gradient-to-br from-[#151515] to-[#050505] border border-white/10 rounded-r-2xl border-l-[14px] border-l-[#0D0F13] flex flex-col items-center justify-center p-10 shadow-2xl transition-all duration-700 hover:-translate-y-6 hover:rotate-1 group-hover/card:shadow-[0_40px_80px_rgba(255,43,43,0.15)] group-hover/card:border-[#FF2B2B]/30 z-10 hover:z-20 overflow-hidden">
                {book.image && (
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={book.image} 
                      alt={book.title} 
                      fill 
                      className="object-cover opacity-60 group-hover/card:opacity-80 transition-all duration-700 scale-105 group-hover/card:scale-110" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/10" />
                  </div>
                )}
                <div className="absolute inset-0 bg-white/[0.02] mix-blend-overlay z-0" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2B2B]/30 to-transparent z-10" />
                
                <div className="relative z-10 flex flex-col items-center w-full h-full justify-end text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#FFFFFF] mb-4 leading-tight drop-shadow-xl font-bold group-hover/card:text-[#FF2B2B] transition-colors">{book.title}</h3>
                  <div className="w-12 h-[2px] bg-[#FF2B2B] mb-5 group-hover:w-20 transition-all duration-700" />
                  <p className="text-[#B8B8B8] tracking-[0.3em] text-[10px] md:text-[11px] uppercase font-black group-hover:text-white transition-colors">{book.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Collection() {
  const categories = [
    {
      title: "Poder, Estratégia & Influência",
      desc: "A fundação para entender as dinâmicas ocultas do comportamento humano. Aprenda a ler nas entrelinhas, influenciar decisões e construir uma vantagem estratégica absoluta.",
      icon: Crown,
      books: [
        "As 48 Leis do Poder",
        "33 Estratégias de Guerra",
        "Poder e Manipulação",
        "As Armas da Persuasão",
        "Engenharia Social"
      ]
    },
    {
      title: "Mentalidade & Evolução Intelectual",
      desc: "Mude a forma como seu cérebro processa informações e adversidades. Desenvolva uma produtividade implacável, adaptação extrema e uma inteligência emocional de elite.",
      icon: Brain,
      books: [
        "Antifrágil",
        "Aprendendo Inteligência",
        "A Chave Mestra",
        "Trabalhe 4 Horas por Semana"
      ]
    },
    {
      title: "Filosofia, História & Conhecimento",
      desc: "A expansão intelectual através dos séculos. Obtenha visão de mundo e pensamento crítico absorvendo as maiores ideias, erros e construções da história.",
      icon: Library,
      books: [
        "A História da Ciência para Quem Tem Pressa",
        "A História da Filosofia para Quem Tem Pressa",
        "A História do Brasil para Quem Tem Pressa",
        "A História da Mitologia",
        "Filosofia em 60 Segundos"
      ]
    },
    {
      title: "Liberdade Financeira & Sistemas",
      desc: "Entenda o jogo do dinheiro e as engrenagens silenciosas da economia global. Conhecimentos essenciais para conquistar independência real e compreender sistemas de poder.",
      icon: Coins,
      books: [
        "Bitcoin",
        "Desestatização do Dinheiro",
        "O Caminho da Servidão",
        "As Seis Lições"
      ]
    },
    {
      title: "Psicologia Humana & Comportamento",
      desc: "Um mergulho profundo no abismo da mente humana. Compreenda a gênese dos padrões malignos, a psicologia das massas e como o comportamento coletivo é orquestrado.",
      icon: Eye,
      books: [
        "Ponerologia"
      ]
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-[#101010] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF2B2B]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn className="text-center mb-24 md:mb-32">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#151515] border border-white/10 rounded-full mb-10 shadow-lg">
            <BookOpen className="w-4 h-4 text-[#B8B8B8]" />
            <span className="text-[12px] tracking-[0.3em] text-[#B8B8B8] uppercase font-black">O ACERVO PREMIUM</span>
          </div>
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#FFFFFF] mb-10 leading-[1.05] tracking-tight">
            O que você encontrará <br className="hidden md:block"/><RedText>dentro da coleção</RedText>
          </h2>
          <p className="text-[#EAEAEA] font-light max-w-3xl mx-auto text-xl leading-relaxed opacity-80">
            Muito mais do que livros soltos. Uma biblioteca orgânica projetada para elevar sua capacidade analítica, argumentativa e de leitura de cenários.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-[1fr,1.3fr] gap-10 md:gap-12">
          {categories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.1} className={`group ${i === 2 || i === 4 ? (i === 2 ? 'lg:col-span-2' : '') : ''}`}>
              <div className="h-full bg-[#151515] border border-white/10 p-10 md:p-12 rounded-[2.5rem] hover:border-[#FF2B2B]/30 transition-all duration-700 shadow-xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex flex-col md:flex-row gap-10 lg:gap-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF2B2B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="flex-1">
                  <div className="w-16 h-16 bg-[#050505] border border-white/10 rounded-2xl flex items-center justify-center mb-10 text-[#B8B8B8] group-hover:text-[#FF2B2B] transition-all duration-500 shadow-inner group-hover:scale-110">
                    {React.createElement(cat.icon, { className: "w-8 h-8 stroke-[1.5]" } as React.SVGProps<SVGSVGElement>)}
                  </div>
                  <h3 className="font-serif text-3xl text-[#FFFFFF] mb-6 tracking-tight">{cat.title}</h3>
                  <p className="text-[#B8B8B8] text-lg font-light leading-relaxed mb-6 lg:mb-0 group-hover:text-[#EAEAEA] transition-colors">
                    {cat.desc}
                  </p>
                </div>
                
                <div className="md:w-[45%] flex flex-col justify-center">
                  <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 shadow-inner relative group/list">
                    <div className="absolute inset-0 bg-[#FF2B2B]/5 opacity-0 group-hover/list:opacity-100 transition-opacity rounded-3xl" />
                    <p className="text-[11px] text-[#FF2B2B] uppercase tracking-[0.3em] font-black mb-6 relative">LEITURAS INCLUSAS:</p>
                    <ul className="space-y-5 relative">
                      {cat.books.map((book, j) => (
                        <li key={j} className="flex items-start gap-4 group/item">
                          <CheckCircle2 className="w-5 h-5 text-[#FF2B2B] mt-0.5 shrink-0 stroke-[2.5] group-hover/item:scale-110 transition-transform" />
                          <span className="text-[15px] text-[#EAEAEA] font-light leading-tight">{book}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.3} className="mt-24 md:mt-32 text-center">
          <RedButtonCTA href="#ofertas" text="LIBERAR MEU ACESSO IMEDIATO" className="md:px-16 md:py-7 md:text-base scale-110" />
        </FadeIn>

      </div>
    </section>
  )
}

function Pricing({ isFinal = false }: { isFinal?: boolean }) {
  return (
    <section id="ofertas" className="py-32 md:py-48 bg-[#050505] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#FF2B2B]/5 to-transparent blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <FadeIn className="text-center mb-24 md:mb-32">
          <h2 className="font-serif text-[3rem] md:text-[4.5rem] text-[#FFFFFF] mb-8 tracking-tight">
            A porta <RedText>está aberta.</RedText>
          </h2>
          <p className="text-[#B8B8B8] max-w-3xl mx-auto font-light text-xl leading-relaxed">
            Selecione o nível de profundidade estratégica que você está pronto para absorver e aplicar hoje.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch pt-10">
          
          {/* PLANO 1 */}
          <FadeIn delay={0.2} className="relative z-0 h-full border border-white/10 bg-[#101010] rounded-[2.5rem] p-10 md:p-12 flex flex-col hover:border-white/20 transition-all duration-500 lg:mt-8 shadow-xl">
            <div className="mb-10">
              <h3 className="text-[#B8B8B8] font-black mb-4 uppercase tracking-[0.3em] text-[12px]">Leitura Essencial</h3>
              <div className="text-[3rem] leading-none font-serif text-[#FFFFFF] mb-6">R$ 2,99</div>
              <p className="text-base text-[#B8B8B8] font-light pt-4 pb-8 border-b border-white/5 leading-relaxed">Uma pequena fresta na porta. O primeiro acesso absoluto.</p>
            </div>
            <div className="flex-1 mb-12">
              <p className="text-[11px] text-[#B8B8B8] uppercase tracking-[0.3em] mb-6 font-black">O ACESSO INCLUI:</p>
              <ul className="space-y-6 text-[16px] font-light">
                <li className="flex items-start gap-5">
                  <span className="text-white/30 mt-1 font-serif text-xl">/</span>
                  <span className="text-[#B8B8B8] leading-relaxed group-hover:text-[#FFFFFF] transition-colors">Acesso ao livro fundacional:<br/><span className="text-[#FFFFFF] font-bold block mt-2">As 48 Leis do Poder</span></span>
                </li>
              </ul>
            </div>
            <a href="https://pay.wiapy.com/-y8krRsN8t" className="w-full mt-auto py-6 border border-white/20 text-[#FFFFFF] rounded-2xl hover:bg-white/5 hover:border-white/40 transition-all duration-500 uppercase tracking-[0.3em] text-[12px] font-black text-center">
              LIBERAR MEU ACESSO IMEDIATO
            </a>
          </FadeIn>

          {/* PLANO 3 - THE PREMIUM ONE */}
          <FadeIn delay={0} className="relative z-20 h-full flex flex-col group/premium">
            <div className="absolute inset-0 bg-[#FF2B2B]/20 blur-[100px] rounded-full opacity-60 group-hover/premium:opacity-100 transition-opacity duration-700" />
            <div className="relative flex-1 border-[2px] border-[#FF2B2B] bg-gradient-to-b from-[#151515] to-[#050505] rounded-[3rem] p-12 md:p-14 flex flex-col shadow-[0_40px_100px_rgba(255,43,43,0.3)] transform lg:scale-110 transition-transform duration-700 hover:lg:scale-[1.12]">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF2B2B] text-[#FFFFFF] px-8 py-3 rounded-full text-[12px] font-black tracking-[0.3em] uppercase whitespace-nowrap shadow-xl">
                Ouro do Conhecimento
              </div>
              
              <div className="mb-12 mt-6 text-center">
                <Crown className="w-12 h-12 text-[#FF2B2B] mx-auto mb-8 stroke-[1.5] drop-shadow-[0_0_15px_rgba(255,43,43,0.5)]" />
                <h3 className="text-[#FF2B2B] font-black mb-6 uppercase tracking-[0.3em] text-[13px]">Coleção Poder & Estratégia</h3>
                <div className="text-[4.5rem] leading-none font-serif text-[#FFFFFF] mb-6 drop-shadow-lg tracking-tight">R$ 19,90</div>
                <p className="text-lg text-[#EAEAEA] font-light pt-4 pb-10 border-b border-white/10 leading-relaxed opacity-90 italic">Acesso completo à biblioteca estratégica. Leituras que mudaram a forma como milhares entendem o mundo.</p>
              </div>

              <div className="flex-1 mb-14">
                <p className="text-[12px] text-[#B8B8B8] uppercase tracking-[0.3em] mb-8 text-center font-black">ACERVO TOTAL INCLUI:</p>
                <ul className="space-y-6 font-light">
                  {['Poder, Estratégia & Influência', 'Mentalidade & Evolução Intelectual', 'Filosofia, História & Conhecimento', 'Liberdade Financeira & Sistemas', 'Psicologia Humana & Comportamento'].map((item, i) => (
                    <li key={i} className="flex items-center gap-5 text-[17px] text-[#FFFFFF]">
                      <CheckCircle2 className="w-6 h-6 text-[#FF2B2B] shrink-0 stroke-[3]" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="https://pay.wiapy.com/f8cibSpxjL" className="w-full mt-auto py-7 bg-[#FF2B2B] text-[#FFFFFF] rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,43,43,0.45)] transition-all duration-700 uppercase tracking-[0.3em] text-[14px] font-black shadow-lg text-center">
                LIBERAR MEU ACESSO IMEDIATO
              </a>
            </div>
          </FadeIn>

          {/* PLANO 2 */}
          <FadeIn delay={0.4} className="relative z-10 h-full border border-white/10 bg-[#151515] rounded-[2.5rem] p-10 md:p-12 flex flex-col hover:border-white/20 transition-all duration-500 lg:mt-8 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A2A2A] text-[#FFFFFF] border border-white/20 px-6 py-2 rounded-full text-[11px] font-black tracking-[0.3em] uppercase whitespace-nowrap shadow-md">
              Mais Escolhida
            </div>
            <div className="mb-10 mt-4">
              <h3 className="text-[#FFFFFF] font-black mb-4 uppercase tracking-[0.3em] text-[12px]">Arsenal da Persuasão</h3>
              <div className="text-[3rem] leading-none font-serif text-[#FFFFFF] mb-6">R$ 10,90</div>
              <p className="text-base text-[#B8B8B8] font-light pt-4 pb-8 border-b border-white/5 leading-relaxed">Seleção estratégica avançada para aplicação persuasiva.</p>
            </div>
            <div className="flex-1 mb-12">
               <p className="text-[11px] text-[#B8B8B8] uppercase tracking-[0.3em] mb-6 font-black">A SELEÇÃO INCLUI:</p>
               <ul className="space-y-6 font-light">
                  {['As 48 Leis do Poder', 'As Armas da Persuasão', '33 Estratégias de Guerra', 'Engenharia Social', 'Poder e Manipulação'].map((item, i) => (
                    <li key={i} className="flex items-center gap-5 text-[16px] text-[#FFFFFF]">
                      <ArrowRight className="w-5 h-5 text-[#FF2B2B] shrink-0 stroke-[3]" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
            <a href="https://pay.wiapy.com/ekL00qUKO2" className="w-full mt-auto py-6 border border-[#FF2B2B]/40 text-[#FF2B2B] rounded-2xl hover:bg-[#FF2B2B]/10 transition-all duration-500 uppercase tracking-[0.3em] text-[12px] font-black text-center">
              LIBERAR MEU ACESSO IMEDIATO
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

function IdentityBlock() {
  return (
    <section className="py-32 md:py-48 bg-[#101010] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF2B2B]/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <FadeIn>
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-[#FF2B2B] blur-3xl opacity-20" />
            <Target className="w-16 h-16 text-[#FF2B2B] mx-auto relative z-10 stroke-[1.5] drop-shadow-[0_0_10px_rgba(255,43,43,0.3)]" />
          </div>
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] text-[#FFFFFF] mb-12 leading-[1.1] tracking-tight">
            Esse tipo de leitura <br className="hidden md:block"/><span className="italic text-[#B8B8B8] font-light">não interessa</span> para pessoas comuns.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-10 text-xl md:text-[1.5rem] text-[#B8B8B8] font-light leading-relaxed max-w-4xl mx-auto">
            <p>
              Este não é um conhecimento concebido para quem aceita a mediocridade, ou para quem prefere o conforto da ignorância.
            </p>
            <p>
              É destinado exclusivamente àqueles que desejam enxergar além das aparências. Pessoas que não se contentam com o óbvio e que exigem sair do automático.
            </p>
            <p className="text-[#FFFFFF] font-bold pt-10 text-[1.5rem] md:text-3xl border-t border-white/10 mt-8">
              Compreender os padrões que a grande maioria ignora é o que separa os arquitetos da própria realidade... daqueles que apenas vivem nela.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function Guarantee() {
  const items = [
    { icon: Lock, title: "Ambiente Seguro", desc: "Criptografia de ponta a ponta. Seus dados invisíveis e protegidos." },
    { icon: Zap, title: "Acesso Instantâneo", desc: "Acesso liberado no segundo em que a transação é confirmada." },
    { icon: Smartphone, title: "Leitura Adaptativa", desc: "Formatado milimetricamente para qualquer tela ou dispositivo." }
  ];

  return (
    <section className="py-32 bg-[#050505] relative border-b border-white/5">
       <div className="container mx-auto px-6 max-w-7xl">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
           {items.map((it, i) => (
             <FadeIn key={i} delay={i * 0.1} className="group flex flex-col text-center md:text-left items-center md:items-start p-12 border border-white/10 bg-[#101010] rounded-[2rem] hover:border-[#FF2B2B]/30 transition-all duration-700 shadow-xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#FF2B2B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="mb-10 w-16 h-16 bg-[#050505] border border-white/10 rounded-2xl flex items-center justify-center text-[#FF2B2B] shadow-inner group-hover:scale-110 transition-transform duration-500 relative z-10">
                 <it.icon className="w-7 h-7 stroke-[1.5]" />
               </div>
               <h4 className="text-[#FFFFFF] font-black mb-5 text-[15px] tracking-[0.2em] uppercase relative z-10">{it.title}</h4>
               <p className="text-[#B8B8B8] font-light leading-relaxed text-lg relative z-10 group-hover:text-[#EAEAEA] transition-colors">{it.desc}</p>
             </FadeIn>
           ))}
         </div>
       </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: "Como recebo acesso à coleção?", a: "Acesso imediato após a confirmação do pagamento. Você receberá um e-mail silencioso com todas as instruções de entrada." },
    { q: "Os livros podem ser acessados pelo celular?", a: "Sim. A coleção é formatada com tecnologia adaptativa e pode ser acessada de forma extremamente elegante por celular, tablet ou computador." },
    { q: "Por quanto tempo terei acesso?", a: "Acesso vitalício à coleção adquirida. Uma vez destrancada, a biblioteca é sua para sempre." },
    { q: "Os livros estão em formato digital?", a: "Sim. Todo o acervo é entregue digitalmente para leitura imersiva e confidencial onde você estiver." },
    { q: "Preciso instalar algum aplicativo?", a: "Não. O acesso é direto em um ambiente criptografado no seu navegador, sem necessidade de downloads pesados." },
    { q: "Qual a diferença entre os planos?", a: "O plano 'Leitura Essencial' oferece acesso a uma obra fundacional. O 'Arsenal da Persuasão' entrega as ferramentas táticas de forma concentrada. A 'Coleção Poder & Estratégia' desbloqueia definitivamente o acesso à totalidade do nosso acervo premium." }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-32 md:py-48 bg-[#050505] relative border-t border-white/5">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#FF2B2B]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <FadeIn className="text-center mb-24 md:mb-32">
          <h2 className="font-serif text-[3rem] md:text-[4.5rem] text-[#FFFFFF] mb-8 tracking-tight">
            Perguntas <RedText>Frequentes</RedText>
          </h2>
          <p className="text-[#B8B8B8] font-light text-xl leading-relaxed">Tudo o que você precisa saber antes de desbloquear a coleção.</p>
        </FadeIn>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className={`border rounded-3xl overflow-hidden transition-all duration-700 ${openIndex === i ? 'bg-[#151515] border-[#FF2B2B]/40 shadow-[0_20px_60px_rgba(255,43,43,0.1)]' : 'bg-[#101010]/50 border-white/10 hover:border-white/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-8 py-8 md:p-10 flex items-center justify-between gap-8 group"
                >
                  <span className={`font-bold text-lg md:text-xl transition-all duration-500 scale-100 group-hover:scale-[1.01] ${openIndex === i ? 'text-[#FFFFFF]' : 'text-[#B8B8B8]'}`}>{faq.q}</span>
                  <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-700 ${openIndex === i ? 'bg-[#FF2B2B] rotate-180 shadow-[0_0_15px_rgba(255,43,43,0.5)]' : 'bg-[#151515] text-[#B8B8B8]'}`}>
                    <ChevronDown className={`w-5 h-5 ${openIndex === i ? 'text-[#FFFFFF]' : ''}`} />
                  </div>
                </button>
                <div
                  className={`px-8 md:px-10 overflow-hidden transition-all duration-700 ease-in-out ${openIndex === i ? 'max-h-60 pb-10 md:pb-12 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#B8B8B8] font-light leading-relaxed text-lg border-t border-white/5 pt-8">{faq.a}</p>
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
    <section className="py-48 md:py-64 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
        <Crown className="w-[800px] h-[800px] text-[#FF2B2B]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF2B2B]/10 via-transparent to-transparent pointer-events-none blur-3xl scale-125" />
      
      <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">
        <FadeIn>
          <h2 className="font-serif text-[3rem] md:text-[6rem] text-[#FFFFFF] mb-12 leading-[1.05] tracking-tight font-bold">
            A diferença entre quem <br className="hidden md:block"/><RedText>apenas observa</RedText>... <br className="hidden md:block"/> e quem entende o jogo.
          </h2>
          <p className="text-[#B8B8B8] mb-16 font-light text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed group hover:text-[#FFFFFF] transition-colors">
            A decisão sobre de qual lado você quer estar é, e sempre será, sua.
          </p>
          <RedButtonCTA href="#ofertas" text="LIBERAR MEU ACESSO IMEDIATO" className="px-16 py-8 text-base shadow-[0_30px_70px_rgba(255,43,43,0.45)] hover:scale-105" />
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
  return (
    <main className="w-full bg-[#050505] min-h-screen overflow-hidden font-sans text-[#B8B8B8] selection:bg-[#FF2B2B]/30 flex flex-col justify-stretch items-stretch">
      <Hero />
      <PainBlock />
      <CuriosityBlock />
      <BookCarousel />
      <Collection />
      <Pricing />
      <IdentityBlock />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
