'use client';

import { motion } from 'motion/react';
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

const GoldText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`bg-gradient-to-r from-[#D6B36A] to-[#F1DEB4] bg-clip-text text-transparent opacity-100 ${className}`}>
    {children}
  </span>
);

const GoldButtonCTA = ({ text, className = "" }: { text: string, className?: string }) => (
  <button className={`relative overflow-hidden group bg-gradient-to-r from-[#D6B36A] to-[#E5C98D] text-[#111318] px-8 sm:px-12 py-4 sm:py-5 rounded-lg font-semibold tracking-wide uppercase text-sm transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(214,179,106,0.2)] hover:shadow-[0_8px_30px_-5px_rgba(214,179,106,0.35)] hover:-translate-y-1 ${className}`}>
    <span className="relative z-10">{text}</span>
    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
  </button>
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
    className="relative w-full aspect-[2/3] bg-gradient-to-br from-[#1B1F27] to-[#111318] border border-white/5 rounded-r-xl border-l-[12px] border-l-[#0D0F13] flex flex-col items-center justify-center p-6 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(214,179,106,0.08)] group perspective-1000"
  >
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D6B36A]/10 via-transparent to-transparent pointer-events-none" />
    <Icon className="w-10 h-10 text-[#D6B36A] mb-5 stroke-[1.5] opacity-90" />
    <h3 className="font-serif text-lg md:text-xl text-center text-[#F5F3EE] mb-2 leading-tight drop-shadow-sm">{title}</h3>
    <p className="text-[#D6B36A] tracking-[0.2em] text-[0.6rem] md:text-[0.65rem] uppercase mt-3 text-center opacity-80">{subtitle}</p>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D6B36A]/30 to-transparent" />
  </motion.div>
);

// --- SECTIONS ---

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#111318] z-0">
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B1F27] via-[#111318] to-[#111318]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.02] mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B1F27]/80 border border-white/5 rounded-full mb-8 backdrop-blur-md shadow-sm">
                <Eye className="w-4 h-4 text-[#B8BDC7]" />
                <span className="text-xs tracking-[0.2em] text-[#B8BDC7] uppercase font-medium">Acesso Restrito</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="font-serif text-[2.5rem] md:text-6xl lg:text-[4.5rem] leading-[1.15] text-[#F5F3EE] mb-8 relative">
                O mundo muda quando você <br className="hidden lg:block"/>
                <GoldText>entende as pessoas.</GoldText>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="relative w-full max-w-[280px] sm:max-w-xs mx-auto lg:mx-0 mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] aspect-[9/16]">
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
              <p className="text-lg md:text-xl text-[#B8BDC7] mb-12 max-w-2xl mx-auto lg:mx-0 font-light leading-[1.8]">
                A diferença entre quem é influenciado e quem entende o jogo. Tenha acesso imediato às leituras mais comentadas sobre persuasão, comportamento humano e poder estratégico.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
              <GoldButtonCTA text="Liberar Acesso" />
              
              <div className="flex flex-col gap-3 text-xs tracking-wide text-[#B8BDC7] font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D6B36A]"/> Acesso Imediato</div>
                <div className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-[#D6B36A]"/> Leitura Otimizada</div>
              </div>
            </FadeIn>
          </div>

          {/* Right Mockup */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <FadeIn delay={0.8} className="relative w-full aspect-square flex items-center justify-center">
              <div className="absolute w-[60%] lg:w-[50%] h-[80%] left-[10%] bg-[#15181E] border border-white/5 rounded-[2rem] p-3 shadow-2xl z-0 transform -rotate-6 hidden sm:block opacity-80 lg:translate-x-8">
                <div className="w-full h-full bg-[#111318] rounded-[1.5rem] overflow-hidden border border-white/5 flex flex-col p-4 relative">
                  <div className="w-full h-32 bg-gradient-to-br from-[#1B1F27]/50 to-transparent rounded-lg mb-6 border border-white/5" />
                  <div className="w-3/4 h-3 bg-[#1B1F27] rounded-full mb-5" />
                  <div className="w-1/2 h-3 bg-[#1B1F27] rounded-full mb-5" />
                </div>
              </div>

              <div className="absolute w-[65%] lg:w-[55%] right-[10%] sm:right-[5%] z-10 transform sm:translate-y-8 transition-transform hover:-translate-y-2 lg:translate-x-4 duration-700">
                <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-[#1B1F27] to-[#111318] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-r-xl border-l-[16px] border-l-[#0D0F13] flex flex-col items-center justify-center p-6 lg:p-8 backdrop-blur-sm">
                   <div className="absolute inset-0 bg-white/[0.02] mix-blend-overlay" />
                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D6B36A]/20 to-transparent" />
                   <Crown className="w-12 h-12 lg:w-16 lg:h-16 text-[#D6B36A] mb-8 stroke-[1.5] opacity-90 drop-shadow-sm" />
                   <h3 className="font-serif text-3xl lg:text-4xl text-center text-[#F5F3EE] mb-4 leading-tight drop-shadow-sm">As 48 Leis<br/>do Poder</h3>
                   <div className="w-12 h-[1px] bg-[#D6B36A] opacity-40 my-5" />
                   <p className="text-[#B8BDC7] tracking-[0.2em] text-[0.6rem] lg:text-[10px] uppercase text-center font-medium">Conhecimento Vital</p>
                </div>
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
    <section className="py-24 md:py-32 bg-[#15181E] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <FadeIn>
          <h2 className="font-serif text-[2rem] md:text-[3rem] text-[#F5F3EE] mb-10 leading-[1.2]">
            A verdade é que a maioria das pessoas <br className="hidden md:block"/><GoldText>nunca aprende isso.</GoldText>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-8 text-[1.1rem] md:text-xl text-[#B8BDC7] font-light leading-[1.8]">
            <p>
              Elas passam a vida inteira no piloto automático. São influenciadas em suas decisões diárias, em suas negociações, em seus relacionamentos — e nem sequer percebem.
            </p>
            <p>
              A falta de pensamento estratégico as torna previsíveis. Vulneráveis a quem entende as cordas invisíveis da natureza humana.
            </p>
            <p className="text-[#F5F3EE] font-medium pt-4 text-xl">
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
    { icon: <Target />, title: "Estratégia Social", desc: "A arquitetura invisível das relações. O que você não vê dita os resultados." },
    { icon: <Shield />, title: "Persuasão Oculta", desc: "A arte de comunicar às entrelinhas. Moldar decisões sem forçar argumentos." },
    { icon: <Brain />, title: "Inteligência Emocional", desc: "A fundação inabalável de toda mente estratégica sob pressão." },
    { icon: <Eye />, title: "Comportamento Humano", desc: "Decifrar intenções irreais antes mesmo que sejam reveladas." },
    { icon: <Users />, title: "Padrões Sociais", desc: "Compreender os ciclos previsíveis pelos quais as massas operam." },
    { icon: <Crown />, title: "Mentalidade de Elite", desc: "Como mentes raras processam a realidade e criam vantagens absolutas." },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#111318] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="text-center mb-20 md:mb-24">
          <h2 className="font-serif text-[2rem] md:text-[3rem] text-[#F5F3EE] mb-6">
            Por que essas leituras causam <GoldText>tanto impacto?</GoldText>
          </h2>
          <div className="w-16 h-[2px] bg-[#D6B36A] opacity-30 mx-auto rounded-full" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {points.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group h-full bg-[#1B1F27] border border-white/5 hover:border-[#D6B36A]/20 p-8 md:p-10 rounded-2xl transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#D6B36A]/10 transition-colors duration-700" />
                <div className="w-12 h-12 mb-6 text-[#B8BDC7] group-hover:text-[#D6B36A] transition-colors duration-500 relative z-10">
                  {React.cloneElement(p.icon as React.ReactElement<any>, { className: "stroke-[1.5] w-full h-full" })}
                </div>
                <h3 className="text-xl font-serif text-[#F5F3EE] mb-3 relative z-10">{p.title}</h3>
                <p className="text-[#B8BDC7] leading-relaxed relative z-10 font-light">{p.desc}</p>
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
    <section className="py-24 md:py-32 bg-[#15181E] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D6B36A]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-16 md:mb-24 text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#1B1F27] border border-white/10 rounded-full mb-8 shadow-sm">
            <Library className="w-4 h-4 text-[#D6B36A]" />
            <span className="text-[11px] tracking-[0.2em] text-[#D6B36A] uppercase font-semibold">O Acervo Privado</span>
          </div>
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-[#F5F3EE] mb-6 leading-[1.1]">
            O que você vai desbloquear <br className="hidden md:block"/><GoldText>dentro da coleção</GoldText>
          </h2>
          <p className="text-[#B8BDC7] font-light max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Uma biblioteca cuidadosamente selecionada para pessoas que desejam enxergar além do óbvio.
          </p>
        </FadeIn>
      </div>

      <div className="relative w-full flex overflow-x-hidden group pb-10 pt-4" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex gap-6 md:gap-8 px-6 md:px-8 w-max items-center"
        >
          {marqueeBooks.map((book, idx) => (
            <div key={idx} className="relative w-[240px] md:w-[280px] shrink-0 group/card">
              <div className="absolute inset-0 bg-[#D6B36A]/10 blur-2xl rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[2/3] bg-gradient-to-br from-[#1B1F27] to-[#111318] border border-white/5 rounded-r-xl border-l-[12px] border-l-[#0D0F13] flex flex-col items-center justify-center p-8 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 group-hover/card:shadow-[0_30px_60px_rgba(214,179,106,0.12)] group-hover/card:border-white/10 z-10 hover:z-20 overflow-hidden">
                {book.image && (
                  <div className="absolute inset-0 z-0">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover opacity-70 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/80 to-[#111318]/10" />
                  </div>
                )}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.02] mix-blend-screen z-0" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D6B36A]/20 to-transparent z-10" />
                
                <div className="relative z-10 flex flex-col items-center w-full h-full">
                  {book.image ? (
                    <div className="flex-1"></div>
                  ) : (
                    <div className="flex-1 flex flex-col justify-center items-center w-full">
                      <h3 className="font-serif text-2xl text-center text-[#F5F3EE] mb-5 leading-tight drop-shadow-sm px-2 group-hover/card:text-[#D6B36A] transition-colors">{book.title}</h3>
                      <div className="w-10 h-[1px] bg-[#D6B36A] opacity-30 mb-6 group-hover/card:w-16 transition-all duration-500" />
                    </div>
                  )}
                  
                  {book.image && (
                    <>
                      <h3 className="font-serif text-lg md:text-xl text-center text-[#F5F3EE] mb-3 leading-tight drop-shadow-sm px-2 group-hover/card:text-[#D6B36A] transition-colors">{book.title}</h3>
                      <div className="w-10 h-[1px] bg-[#D6B36A] opacity-30 mb-4 group-hover/card:w-16 transition-all duration-500" />
                    </>
                  )}
                  
                  <p className="text-[#B8BDC7] tracking-[0.2em] text-[9px] md:text-[10px] uppercase text-center font-medium opacity-80 group-hover/card:opacity-100">{book.tag}</p>
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
    <section className="py-24 md:py-32 bg-[#15181E] border-y border-white/5 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D6B36A]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#1B1F27] border border-white/10 rounded-full mb-8 shadow-sm">
            <BookOpen className="w-4 h-4 text-[#B8BDC7]" />
            <span className="text-[11px] tracking-[0.2em] text-[#B8BDC7] uppercase font-semibold">O Acervo Premium</span>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[3rem] lg:text-[4rem] text-[#F5F3EE] mb-8 leading-[1.1]">
            O que você encontrará <br className="hidden md:block"/><GoldText>dentro da coleção</GoldText>
          </h2>
          <p className="text-[#B8BDC7] font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Muito mais do que livros soltos. Uma biblioteca orgânica projetada para elevar sua capacidade analítica, argumentativa e de leitura de cenários.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-[1fr,1.3fr] gap-8 md:gap-10">
          {categories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.1} className={`group ${i === 2 || i === 4 ? (i === 2 ? 'lg:col-span-2' : '') : ''}`}>
              <div className="h-full bg-[#1B1F27] border border-white/5 p-8 md:p-10 rounded-3xl hover:border-[#D6B36A]/20 transition-all duration-500 shadow-md hover:shadow-xl flex flex-col md:flex-row gap-8 lg:gap-10">
                
                <div className="flex-1">
                  <div className="w-14 h-14 bg-[#111318] border border-white/5 rounded-2xl flex items-center justify-center mb-8 text-[#B8BDC7] group-hover:text-[#D6B36A] transition-colors duration-500 shadow-inner">
                    {React.createElement(cat.icon, { className: "w-7 h-7 stroke-[1.5]" } as React.SVGProps<SVGSVGElement>)}
                  </div>
                  <h3 className="font-serif text-2xl text-[#F5F3EE] mb-4">{cat.title}</h3>
                  <p className="text-[#B8BDC7] font-light leading-relaxed mb-6 lg:mb-0">
                    {cat.desc}
                  </p>
                </div>
                
                <div className="md:w-[45%] flex flex-col justify-center">
                  <div className="bg-[#111318] border border-white/5 rounded-2xl p-6 shadow-inner">
                    <p className="text-[10px] text-[#B8BDC7] uppercase tracking-[0.2em] font-medium mb-5">Leituras Inclusas:</p>
                    <ul className="space-y-4">
                      {cat.books.map((book, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#D6B36A]/80 mt-0.5 shrink-0 stroke-[2]" />
                          <span className="text-sm text-[#F5F3EE] font-light leading-snug">{book}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.3} className="mt-20 md:mt-28 text-center">
          <GoldButtonCTA text="Liberar Coleção Completa" className="md:px-14 md:py-6 md:text-base" />
        </FadeIn>

      </div>
    </section>
  )
}

function Pricing({ isFinal = false }: { isFinal?: boolean }) {
  return (
    <section className="py-24 md:py-32 bg-[#111318] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <FadeIn className="text-center mb-20 md:mb-24">
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#F5F3EE] mb-6">
            A porta <GoldText>está aberta.</GoldText>
          </h2>
          <p className="text-[#B8BDC7] max-w-2xl mx-auto font-light text-lg">Selecione o nível de profundidade estratégica que você está pronto para absorver e aplicar hoje.</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          
          {/* PLANO 1 */}
          <FadeIn delay={0.2} className="relative z-0 h-full border border-white/5 bg-[#15181E] rounded-3xl p-8 md:p-10 flex flex-col hover:border-white/10 transition-colors lg:mt-6 shadow-md">
            <div className="mb-8">
              <h3 className="text-[#B8BDC7] font-medium mb-3 uppercase tracking-[0.2em] text-[11px]">Leitura Essencial</h3>
              <div className="text-[2.5rem] leading-none font-serif text-[#F5F3EE] mb-4">R$ 2,99</div>
              <p className="text-sm text-[#B8BDC7] font-light pt-2 pb-6 border-b border-white/5">Uma pequena fresta na porta. O primeiro acesso absoluto.</p>
            </div>
            <div className="flex-1 mb-10">
              <p className="text-[10px] text-[#B8BDC7] uppercase tracking-[0.2em] mb-5 font-semibold">O acesso inclui:</p>
              <ul className="space-y-4 text-[15px] font-light">
                <li className="flex items-start gap-4">
                  <span className="text-white/20 mt-1 font-serif text-lg">/</span>
                  <span className="text-[#B8BDC7] leading-relaxed">Acesso ao livro fundacional:<br/><span className="text-[#F5F3EE] font-normal block mt-1">As 48 Leis do Poder</span></span>
                </li>
              </ul>
            </div>
            <button className="w-full mt-auto py-5 border border-white/10 text-[#F5F3EE] rounded-xl hover:bg-white/5 hover:border-white/20 transition-colors uppercase tracking-[0.2em] text-[11px] font-bold">
              Acessar
            </button>
          </FadeIn>

          {/* PLANO 3 - THE PREMIUM ONE */}
          <FadeIn delay={0} className="relative z-20 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-[#D6B36A]/10 to-transparent rounded-3xl blur-2xl opacity-50" />
            <div className="relative flex-1 border border-[#D6B36A]/30 bg-gradient-to-b from-[#1C2028] to-[#15181E] rounded-3xl p-10 md:p-12 flex flex-col shadow-2xl transform lg:scale-105">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#D6B36A] to-[#F1DEB4] text-[#111318] px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap shadow-md">
                Acesso Completo
              </div>
              
              <div className="mb-8 mt-4 text-center">
                <Crown className="w-8 h-8 text-[#D6B36A] mx-auto mb-6 stroke-[1.5]" />
                <h3 className="text-[#D6B36A] font-medium mb-4 uppercase tracking-[0.2em] text-[11px]">Coleção Poder & Estratégia</h3>
                <div className="text-[3.5rem] leading-none font-serif text-[#F5F3EE] mb-4 drop-shadow-sm">R$ 19,90</div>
                <p className="text-sm text-[#B8BDC7] font-light pt-2 pb-8 border-b border-white/10 leading-relaxed">Acesso completo à biblioteca estratégica. Leituras que mudaram a forma como milhares entendem o mundo.</p>
              </div>

              <div className="flex-1 mb-12">
                <p className="text-[10px] text-[#B8BDC7] uppercase tracking-[0.2em] mb-6 text-center font-semibold">Acervo Total Inclui Todos os Livros:</p>
                <ul className="space-y-4 font-light">
                  {['Poder, Estratégia & Influência', 'Mentalidade & Evolução Intelectual', 'Filosofia, História & Conhecimento', 'Liberdade Financeira & Sistemas', 'Psicologia Humana & Comportamento'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-[#F5F3EE]">
                      <CheckCircle2 className="w-5 h-5 text-[#D6B36A] shrink-0 stroke-[2]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-auto py-5 bg-gradient-to-r from-[#D6B36A] to-[#E5C98D] text-[#111318] rounded-xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-[0.2em] text-[12px] font-bold shadow-[0_8px_20px_rgba(214,179,106,0.25)]">
                Desbloquear Coleção
              </button>
            </div>
          </FadeIn>

          {/* PLANO 2 */}
          <FadeIn delay={0.4} className="relative z-10 h-full border border-white/5 bg-[#1B1F27] rounded-3xl p-8 md:p-10 flex flex-col hover:border-white/10 transition-colors lg:mt-6 shadow-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A303C] text-[#F5F3EE] border border-white/10 px-5 py-1.5 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase whitespace-nowrap shadow-sm">
              Mais Escolhida
            </div>
            <div className="mb-8 mt-3">
              <h3 className="text-[#F5F3EE] font-medium mb-3 uppercase tracking-[0.2em] text-[11px]">Arsenal da Persuasão</h3>
              <div className="text-[2.5rem] leading-none font-serif text-[#F5F3EE] mb-4">R$ 10,90</div>
              <p className="text-sm text-[#B8BDC7] font-light pt-2 pb-6 border-b border-white/5 leading-relaxed">Seleção estratégica avançada para aplicação persuasiva.</p>
            </div>
            <div className="flex-1 mb-10">
               <p className="text-[10px] text-[#B8BDC7] uppercase tracking-[0.2em] mb-5 font-semibold">A seleção inclui:</p>
               <ul className="space-y-4 font-light">
                  {['As 48 Leis do Poder', 'As Armas da Persuasão', '33 Estratégias de Guerra', 'Engenharia Social', 'Poder e Manipulação'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[15px] text-[#F5F3EE]">
                      <ArrowRight className="w-4 h-4 text-[#B8BDC7] shrink-0 stroke-[2]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
            <button className="w-full mt-auto py-5 border border-[#D6B36A]/40 text-[#D6B36A] rounded-xl hover:bg-[#D6B36A]/10 transition-colors uppercase tracking-[0.2em] text-[11px] font-bold">
              Desbloquear Agora
            </button>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

function IdentityBlock() {
  return (
    <section className="py-24 md:py-32 bg-[#15181E] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <FadeIn>
          <Target className="w-12 h-12 text-[#D6B36A] mx-auto mb-10 stroke-[1.5] opacity-80" />
          <h2 className="font-serif text-[2rem] md:text-[3.5rem] text-[#F5F3EE] mb-10 leading-[1.2]">
            Esse tipo de leitura <br className="hidden md:block"/><span className="italic text-[#B8BDC7] font-light">não interessa</span> para pessoas comuns.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-8 text-lg md:text-xl text-[#B8BDC7] font-light leading-[1.8] max-w-3xl mx-auto">
            <p>
              Este não é um conhecimento concebido para quem aceita a mediocridade, ou para quem prefere o conforto da ignorância.
            </p>
            <p>
              É destinado exclusivamente àqueles que desejam enxergar além das aparências. Pessoas que não se contentam com o óbvio e que exigem sair do automático.
            </p>
            <p className="text-[#F5F3EE] font-medium pt-4 text-xl">
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
    { icon: <Lock />, title: "Ambiente Seguro", desc: "Criptografia de ponta a ponta. Seus dados invisíveis e protegidos." },
    { icon: <Zap />, title: "Acesso Instantâneo", desc: "Acesso liberado no segundo em que a transação é confirmada." },
    { icon: <Smartphone />, title: "Leitura Adaptativa", desc: "Formatado milimetricamente para qualquer tela ou dispositivo." }
  ];

  return (
    <section className="py-24 bg-[#111318] relative">
       <div className="container mx-auto px-6 max-w-6xl">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           {items.map((it, i) => (
             <FadeIn key={i} delay={i * 0.1} className="flex flex-col text-center md:text-left items-center md:items-start p-10 border border-white/5 bg-[#1B1F27] rounded-3xl hover:border-white/10 transition-colors shadow-sm">
               <div className="mb-6 w-14 h-14 bg-[#111318] border border-white/5 rounded-2xl flex items-center justify-center text-[#D6B36A] shadow-inner">
                 {React.cloneElement(it.icon as React.ReactElement<any>, { className: "w-6 h-6 stroke-[1.5]" })}
               </div>
               <h4 className="text-[#F5F3EE] font-medium mb-3 text-sm tracking-wide uppercase">{it.title}</h4>
               <p className="text-[#B8BDC7] font-light leading-relaxed">{it.desc}</p>
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
    <section className="py-24 md:py-32 bg-[#1B1F27] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#D6B36A]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        <FadeIn className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#F5F3EE] mb-6">
            Perguntas <GoldText>Frequentes</GoldText>
          </h2>
          <p className="text-[#B8BDC7] font-light text-lg">Tudo o que você precisa saber antes de desbloquear a coleção.</p>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-[#15181E] border-[#D6B36A]/30 shadow-[0_10px_30px_rgba(214,179,106,0.05)]' : 'bg-[#111318]/50 border-white/5 hover:border-white/10'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-6 md:p-8 flex items-center justify-between gap-6"
                >
                  <span className={`font-medium md:text-lg transition-colors ${openIndex === i ? 'text-[#D6B36A]' : 'text-[#F5F3EE]'}`}>{faq.q}</span>
                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-500 ${openIndex === i ? 'bg-[#D6B36A] rotate-180' : 'bg-[#1B1F27] text-[#B8BDC7]'}`}>
                    <ChevronDown className={`w-4 h-4 ${openIndex === i ? 'text-[#111318]' : ''}`} />
                  </div>
                </button>
                <div
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-40 pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#B8BDC7] font-light leading-relaxed">{faq.a}</p>
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
    <section className="py-32 md:py-40 bg-[#15181E] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <Crown className="w-[600px] h-[600px] text-white" />
      </div>
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <FadeIn>
          <h2 className="font-serif text-[2.5rem] md:text-[4.5rem] text-[#F5F3EE] mb-8 leading-[1.1]">
            A diferença entre quem <br className="hidden md:block"/><GoldText>apenas observa</GoldText>... <br className="hidden md:block"/> e quem entende o jogo.
          </h2>
          <p className="text-[#B8BDC7] mb-12 font-light text-lg md:text-xl">A decisão sobre de qual lado você quer estar é, e sempre será, sua.</p>
          <GoldButtonCTA text="Desbloquear a Coleção" className="px-12 py-6 text-sm shadow-xl" />
        </FadeIn>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#111318] py-16 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl text-center flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-xl mb-8 bg-[#1B1F27]">
           <Crown className="w-5 h-5 text-[#B8BDC7] stroke-[1.5]" />
        </div>
        <p className="text-[#B8BDC7] text-xs tracking-[0.2em] font-medium mb-8 uppercase">
          Estratégia & Poder Oficial
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-[11px] text-[#B8BDC7] uppercase tracking-widest font-semibold">
          <a href="#" className="hover:text-[#F5F3EE] transition-colors">Termos</a>
          <a href="#" className="hover:text-[#F5F3EE] transition-colors">Privacidade</a>
          <a href="#" className="hover:text-[#F5F3EE] transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <main className="w-full bg-[#111318] min-h-screen overflow-hidden font-sans text-[#B8BDC7] selection:bg-[#D6B36A]/30 flex flex-col justify-stretch items-stretch">
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
