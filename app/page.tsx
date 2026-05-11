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
  <span className={`text-[#FF3B3B] drop-shadow-[0_0_15px_rgba(255,59,59,0.4)] ${className}`}>
    {children}
  </span>
);

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
    <section className="relative min-h-[110vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[#0A0C10] z-0">
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B1F27] via-[#0A0C10] to-[#0A0C10]" />
        
        {/* Red Cinematic Glow */}
        <div className="absolute top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#FF0000]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#FF0000]/3 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(214,179,106,0.05),transparent_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/10 rounded-full mb-10 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <Lock className="w-3.5 h-3.5 text-[#FF3B3B] animate-pulse" />
                <span className="text-[10px] tracking-[0.3em] text-[#B8BDC7] uppercase font-bold">Protocolo de Elite: Acesso Restrito</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="font-serif text-[2.8rem] md:text-7xl lg:text-[5.5rem] leading-[1.05] text-[#F5F3EE] mb-10 relative tracking-tight">
                As regras do jogo <br className="hidden lg:block"/>
                <RedText className="underline decoration-[#FF3B3B]/30 underline-offset-8">nunca foram ensinadas.</RedText>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="relative w-full max-w-[300px] sm:max-w-xs mx-auto lg:mx-0 mb-12 rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] aspect-[9/16] group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />
                <iframe 
                  src="https://player.vimeo.com/video/1190634149?h=9b58d0d63f&badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  className="absolute top-0 left-0 w-full h-full scale-[1.02]"
                  title="Vimeo Video"
                />
                {/* Red Glow around frame */}
                <div className="absolute inset-x-0 -bottom-10 h-20 bg-[#FF3B3B]/20 blur-2xl z-20" />
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-[#D1D5DB] mb-12 max-w-2xl mx-auto lg:mx-0 font-light leading-[1.6]">
                Enquanto a maioria reage emocionalmente ao mundo, algumas pessoas aprendem os <span className="text-[#F5F3EE] font-medium italic">padrões invisíveis</span> que controlam influência, respeito e poder.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} className="flex flex-col sm:flex-row items-center gap-10 justify-center lg:justify-start">
              <GoldButtonCTA text="Desbloquear Acesso Agora" className="scale-110 shadow-[0_10px_40px_rgba(214,179,106,0.3)]" />
              
              <div className="flex flex-col gap-4 text-xs tracking-widest text-[#9CA3AF] font-bold uppercase">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#FF3B3B]"/> Ativação Imediata</div>
                <div className="flex items-center gap-3"><Users className="w-4 h-4 text-[#FF3B3B]"/> +3.400 Membros</div>
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
    <section className="py-40 md:py-64 bg-[#0D0F13] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[50%] h-full bg-[#FF0000]/3 blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <FadeIn>
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] text-[#F5F3EE] mb-14 leading-[1.1] tracking-tight">
            A maioria nunca percebe o que <br className="hidden md:block"/>
            <RedText>realmente controla suas decisões.</RedText>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-12 text-[1.3rem] md:text-3xl text-[#9CA3AF] font-light leading-[1.7] max-w-4xl mx-auto">
            <p>
              Enquanto a maioria reage emocionalmente ao mundo, algumas pessoas aprendem os <span className="text-[#F5F3EE] font-medium italic">padrões invisíveis</span> que controlam influência, respeito e poder.
            </p>
            <p className="border-l-2 border-[#FF3B3B]/30 pl-8 md:pl-12 text-left italic">
              "Algumas pessoas vivem no automático. Outras aprendem como o jogo funciona. O mundo parece diferente quando você entende o comportamento humano."
            </p>
            <div className="pt-12 block">
               <p className="text-[#F5F3EE] font-bold text-3xl md:text-4xl border-t border-white/5 pt-16 inline-block tracking-tighter">
                Quem entende pessoas <RedText>controla ambientes.</RedText>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CuriosityBlock() {
  const points = [
    { icon: <Target />, title: "Estratégia Social", desc: "Aprenda como pessoas estratégicas processam ambientes e criam vantagem absoluta em qualquer cenário corporativo ou social." },
    { icon: <Shield />, title: "Persuasão Oculta", desc: "Entenda como decisões são manipuladas sem confrontos diretos. Domine a arte de influenciar as entrelinhas da conversa." },
    { icon: <Brain />, title: "Domínio Emocional", desc: "A fundação inabalável de mentes que não se curvam à pressão. Mantenha clareza enquanto os outros estão perdidos no caos." },
    { icon: <Eye />, title: "Leitura Comportamental", desc: "Identifique intenções antes mesmo delas serem reveladas. Decifre a linguagem não-dita e antecipe cada movimento do jogo." },
    { icon: <Users />, title: "Padrões Sociais", desc: "Descubra padrões previsíveis usados pelas massas sem perceber. Enxergue a arquitetura da manipulação coletiva." },
    { icon: <Crown />, title: "Visão de Predador", desc: "Aprenda como mentes de elite processam ambientes, detectam vulnerabilidades e criam resultados que parecem sorte para o observador comum." },
  ];

  return (
    <section className="py-40 md:py-64 bg-[#0A0C10] border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="text-center mb-32 md:mb-40">
          <h2 className="font-serif text-[2.8rem] md:text-[5rem] text-[#F5F3EE] mb-10 leading-tight tracking-tighter">
            Vantagens de quem <br className="md:hidden"/><span className="italic text-[#9CA3AF]">parou de</span> <RedText>viver no automático.</RedText>
          </h2>
          <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#FF3B3B] to-transparent mx-auto rounded-full" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {points.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group h-full bg-[#111318] border border-white/5 hover:border-[#FF3B3B]/40 p-12 md:p-14 rounded-[3rem] transition-all duration-700 relative overflow-hidden shadow-2xl hover:shadow-[0_40px_100px_rgba(255,0,0,0.08)] hover:-translate-y-4">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF3B3B]/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="w-16 h-16 mb-10 text-[#9CA3AF] group-hover:text-[#FF3B3B] transition-all duration-500 relative z-10 group-hover:scale-110 drop-shadow-lg">
                  {React.cloneElement(p.icon as React.ReactElement<any>, { className: "stroke-[1] w-full h-full" })}
                </div>
                <h3 className="text-3xl font-serif text-[#F5F3EE] mb-5 relative z-10 tracking-tight group-hover:text-[#FF3B3B] transition-colors">{p.title}</h3>
                <p className="text-[#9CA3AF] text-xl leading-relaxed relative z-10 font-light group-hover:text-[#D1D5DB] transition-colors">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  return (
    <section className="py-32 md:py-48 bg-[#0D0F13] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.02),transparent)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="text-center mb-24">
          <h2 className="font-serif text-[2.5rem] md:text-[3.8rem] text-[#F5F3EE] mb-8 leading-tight">
            Essa coleção <RedText>não é</RedText> para <br className="hidden md:block"/> qualquer pessoa.
          </h2>
          <p className="text-xl text-[#9CA3AF] font-light max-w-2xl mx-auto italic">
            O conhecimento aqui contido exige responsabilidade e uma disposição rara para questionar tudo o que você acredita sobre controle e realidade.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn delay={0.2} className="bg-black/20 border border-white/5 p-10 md:p-12 rounded-[2rem] backdrop-blur-sm">
             <div className="flex items-center gap-4 mb-10 text-[#22C55E]">
                <CheckCircle2 className="w-7 h-7" />
                <h4 className="text-xl font-bold uppercase tracking-widest text-[#F5F3EE]">Ideal para:</h4>
             </div>
             <ul className="space-y-6">
                {[
                  "Desejam desenvolver pensamento estratégico de alto nível",
                  "Querem entender profundamente o comportamento humano",
                  "Cansadas de viver no automático e serem manipuladas",
                  "Buscam vantagem intelectual real em ambientes competitivos",
                  "Valorizam conhecimento raro e fora do radar das massas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-[#D1D5DB] font-light">
                    <span className="text-[#22C55E] mt-1 shrink-0">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
             </ul>
          </FadeIn>

          <FadeIn delay={0.4} className="bg-red-500/5 border border-red-500/10 p-10 md:p-12 rounded-[2rem] backdrop-blur-sm">
             <div className="flex items-center gap-4 mb-10 text-[#FF3B3B]">
                <Lock className="w-7 h-7" />
                <h4 className="text-xl font-bold uppercase tracking-widest text-[#F5F3EE]">NÃO recomendado para:</h4>
             </div>
             <ul className="space-y-6">
                {[
                  "Pessoas acomodadas que evitam o esforço mental",
                  "Quem tem medo de questionar padrões sociais aceitos",
                  "Quem busca apenas entretenimento vazio e superficial",
                  "Mentes que preferem o conforto de uma mentira social",
                  "Pessoas que se ofendem facilmente com a verdade"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-[#9CA3AF] font-light italic">
                    <span className="text-[#FF3B3B] mt-1 shrink-0">✖</span>
                    <span>{item}</span>
                  </li>
                ))}
             </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-24 bg-[#0A0C10] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <FadeIn className="lg:w-1/3">
             <div className="text-[3.5rem] md:text-[5rem] font-serif text-[#F5F3EE] leading-none mb-4">
                +3.000<span className="text-[#FF3B3B] text-[2rem] md:text-[3rem] ml-2">acessos</span>
             </div>
             <p className="text-xl text-[#9CA3AF] font-light italic leading-relaxed">
                Leituras que mudaram drasticamente a forma como milhares de pessoas observam o mundo e detectam padrões sociais.
             </p>
          </FadeIn>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { text: "Depois dessa coleção comecei a perceber padrões sociais em todos os lugares. É como se eu tivesse ganhado um novo sentido.", author: "M. Fernandes" },
               { text: "A forma como observo as pessoas em reuniões mudou completamente. Percebo as intenções antes delas falarem.", author: "R. Alcântara" },
               { text: "Este conteúdo não é um livro, é uma arma intelectual. Minha percepção da realidade expandiu mil vezes.", author: "S. Oliveira" },
               { text: "A biblioteca estratégica mais poderosa que já tive acesso. Cada PDF é um soco de clareza mental.", author: "G. Santos" }
             ].map((t, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-[#111318] border border-white/5 p-8 rounded-2xl relative">
                  <div className="absolute top-4 right-4 opacity-5">
                    <Users className="w-10 h-10" />
                  </div>
                  <p className="text-[#D1D5DB] mb-6 italic font-light leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FF3B3B]">{t.author}</div>
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
    { title: "As 48 Leis do Poder", tag: "Domínio Social", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_43_jpnq24" },
    { title: "33 Estratégias de Guerra", tag: "Conflito Estratégico", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_45_josgoe" },
    { title: "As Armas da Persuasão", tag: "Influência Psicológica", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/shopping_c9wrii" },
    { title: "Antifrágil", tag: "Caos & Ordem", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/1_PvIe2185gG0HPfdGIh7PTw_mqhphz" },
    { title: "Engenharia Social", tag: "Extração Humana", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_42_zze2qb" },
    { title: "Bitcoin", tag: "Soberania Monetária", image: "https://m.media-amazon.com/images/I/61287ouYT1L.jpg" },
    { title: "Trabalhe 4 Horas por Semana", tag: "Arquitetura de Liberdade", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/4_HORAS_alegqa" },
    { title: "O Caminho da Servidão", tag: "Estruturas de Controle", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_39_tur4ql" },
    { title: "A Chave Mestra", tag: "Engenharia Mental", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_40_lsrjgd" },
    { title: "Ponerologia", tag: "Padrões Malignos", image: "https://res.cloudinary.com/de5g3z9ud/image/upload/download_41_bho8zl" },
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
                    <Image 
                      src={book.image} 
                      alt={book.title} 
                      fill 
                      className="object-cover opacity-70 group-hover/card:opacity-100 transition-opacity duration-500" 
                      referrerPolicy="no-referrer"
                    />
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
      desc: "A fundação para decifrar as dinâmicas ocultas do poder e da influência. Aprenda a ler nas entrelinhas, moldar decisões e construir uma vantagem absoluta sobre o ambiente.",
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
      title: "Mentalidade & Evolução Estratégica",
      desc: "Mude a arquitetura do seu pensamento sob pressão. Desenvolva uma produtividade implacável, adaptação extrema e a clareza mental de quem nunca reage emocionalmente.",
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

function Pricing() {
  return (
    <section className="py-32 md:py-48 bg-[#0D0F13] relative overflow-hidden">
      {/* Red Cinematic Lighting for Pricing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF0000]/3 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <FadeIn className="text-center mb-24 md:mb-32">
          <h2 className="font-serif text-[2.8rem] md:text-[4.5rem] text-[#F5F3EE] mb-8 leading-tight tracking-tight">
            A escolha que separa <br className="hidden md:block"/>
            <RedText>o comum do extraordinário.</RedText>
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto font-light leading-relaxed italic">
            O valor real está no tempo que você deixa de perder agindo sem estratégia. Selecione sua porta de entrada.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
          
          {/* PLANO 1 */}
          <FadeIn delay={0.2} className="relative z-0 h-full border border-white/5 bg-[#111318]/50 rounded-[2.5rem] p-10 md:p-12 flex flex-col hover:border-white/20 transition-all duration-700 backdrop-blur-xl group">
            <div className="mb-10">
              <h3 className="text-[#9CA3AF] font-bold mb-6 uppercase tracking-[0.3em] text-[12px] group-hover:text-[#F5F3EE] transition-colors">Fragmento do Poder</h3>
              <div className="text-[2.8rem] leading-none font-serif text-[#F5F3EE] mb-6">R$ 2,99</div>
              <p className="text-lg text-[#9CA3AF] font-light leading-relaxed pt-2 pb-6 border-b border-white/5">O primeiro passo. A ativação inicial da sua consciência estratégica.</p>
            </div>
            <div className="flex-1 mb-12">
              <p className="text-[11px] text-[#9CA3AF] uppercase tracking-[0.3em] mb-8 font-bold">Incluso:</p>
              <ul className="space-y-6 text-lg font-light">
                <li className="flex items-start gap-4">
                  <span className="text-[#FF3B3B] font-serif text-xl">/</span>
                  <span className="text-[#D1D5DB] leading-relaxed italic">Acesso à obra fundacional:<br/><span className="text-[#F5F3EE] font-bold block mt-2 not-italic">As 48 Leis do Poder</span></span>
                </li>
              </ul>
            </div>
            <button className="w-full mt-auto py-6 border border-white/10 text-[#F5F3EE] rounded-2xl hover:bg-white/5 hover:border-white/30 transition-all duration-500 uppercase tracking-[0.3em] text-[11px] font-black">
              Iniciar Protocolo
            </button>
          </FadeIn>

          {/* PLANO 3 - THE PREMIUM ONE (ACESSO COMPLETO) */}
          <FadeIn delay={0} className="relative z-20 h-full flex flex-col group">
            <div className="absolute inset-0 bg-[#FF0000]/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative flex-1 border-2 border-[#FF3B3B]/40 bg-gradient-to-b from-[#1B1F27] to-[#0D0F13] rounded-[3rem] p-12 md:p-16 flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.8)] transform lg:scale-110 lg:-translate-y-6 transition-all duration-700 hover:border-[#FF3B3B]/80 overflow-hidden">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF3B3B] text-black px-10 py-3 rounded-full text-[12px] font-black tracking-[0.4em] uppercase whitespace-nowrap shadow-[0_0_30px_rgba(255,59,59,0.5)] z-30 animate-pulse">
                Acesso Vitalício
              </div>

              {/* Red Internal Glow */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#FF3B3B]/10 blur-[80px] rounded-full opacity-50 pointer-events-none" />
              
              <div className="mb-10 mt-6 text-center relative z-10">
                <div className="w-20 h-20 bg-black/40 border border-[#FF3B3B]/20 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                  <Crown className="w-10 h-10 text-[#FF3B3B] stroke-[1.5]" />
                </div>
                <h3 className="text-[#FF3B3B] font-black mb-6 uppercase tracking-[0.4em] text-[13px] drop-shadow-[0_0_10px_rgba(255,59,59,0.3)]">Biblioteca Proibida</h3>
                <div className="mb-8">
                  <div className="text-[1.2rem] text-[#9CA3AF] line-through decoration-[#FF3B3B]/50 opacity-60 mb-2">De R$ 197,00</div>
                  <div className="text-[4.5rem] md:text-[5.5rem] leading-none font-serif text-[#F5F3EE] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">R$ 19,90</div>
                </div>
                <p className="text-lg text-[#D1D5DB] font-light pt-4 pb-10 border-b border-white/10 leading-relaxed italic">O arsenal completo. Cada estratégia, cada lei e cada insight oculto de nossa elite intelectual.</p>
              </div>

              <div className="flex-1 mb-14 relative z-10">
                <p className="text-[12px] text-[#FF3B3B] uppercase tracking-[0.3em] mb-10 text-center font-black">Domínio Total do Acervo:</p>
                <ul className="space-y-8 font-light">
                  {['Poder, Estratégia & Influência Absoluta', 'Mentalidade de Elite & Evolução', 'Filosofia, História & Padrões Ocultos', 'Independência Real & Sistemas de Poder', 'Psicologia Profunda & Comportamento'].map((item, i) => (
                    <li key={i} className="flex items-center gap-5 text-xl text-[#F5F3EE] group/li">
                      <CheckCircle2 className="w-7 h-7 text-[#FF3B3B] shrink-0 stroke-[2.5] group-hover/li:scale-125 transition-transform" />
                      <span className="tracking-tight group-hover/li:text-[#FF3B3B] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-auto py-7 bg-[#FF3B3B] text-black rounded-[2rem] hover:scale-[1.03] active:scale-[0.98] transition-all duration-500 uppercase tracking-[0.4em] text-[14px] font-black shadow-[0_20px_50px_rgba(255,59,59,0.3)] hover:shadow-[0_25px_60px_rgba(255,59,59,0.5)] relative z-10">
                LIBERAR ARSENAL AGORA
              </button>
            </div>
          </FadeIn>

          {/* PLANO 2 */}
          <FadeIn delay={0.4} className="relative z-10 h-full border border-white/5 bg-[#111318]/50 rounded-[2.5rem] p-10 md:p-12 flex flex-col hover:border-white/20 transition-all duration-700 backdrop-blur-xl group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1B1F27] text-[#D1D5DB] border border-white/10 px-8 py-2.5 rounded-full text-[11px] font-black tracking-[0.3em] uppercase whitespace-nowrap shadow-xl">
              Mais Solicitado
            </div>
            <div className="mb-10 md:mt-4">
              <h3 className="text-[#F5F3EE] font-bold mb-6 uppercase tracking-[0.3em] text-[12px]">Foco em Persuasão</h3>
              <div className="text-[2.8rem] leading-none font-serif text-[#F5F3EE] mb-6">R$ 10,90</div>
              <p className="text-lg text-[#9CA3AF] font-light leading-relaxed pt-2 pb-6 border-b border-white/5">O martelo e a bigorna da influência social. Seleção estratégica focada em resultados imediatos.</p>
            </div>
            <div className="flex-1 mb-12">
               <p className="text-[11px] text-[#9CA3AF] uppercase tracking-[0.3em] mb-8 font-bold">Seleção Tática:</p>
               <ul className="space-y-6 font-light">
                  {['As 48 Leis do Poder', 'As Armas da Persuasão', '33 Estratégias de Guerra', 'Engenharia Social', 'Poder e Manipulação'].map((item, i) => (
                    <li key={i} className="flex items-center gap-5 text-lg text-[#D1D5DB]">
                      <ArrowRight className="w-5 h-5 text-[#FF3B3B] shrink-0 stroke-[2.5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
            <button className="w-full mt-auto py-6 border-2 border-[#FF3B3B]/30 text-[#FF3B3B] rounded-2xl hover:bg-[#FF3B3B]/5 hover:border-[#FF3B3B] transition-all duration-500 uppercase tracking-[0.3em] text-[11px] font-black">
              Reivindicar Acesso
            </button>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

function IdentityBlock() {
  return (
    <section className="py-40 md:py-64 bg-[#0D0F13] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05),transparent)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <FadeIn>
          <div className="w-20 h-20 bg-black/40 border border-[#FF3B3B]/20 rounded-[2rem] flex items-center justify-center mx-auto mb-16 shadow-2xl">
            <Target className="w-10 h-10 text-[#FF3B3B] stroke-[1.5]" />
          </div>
          <h2 className="font-serif text-[2.5rem] md:text-[4.5rem] text-[#F5F3EE] mb-14 leading-[1.1] tracking-tight">
            O poder sempre pertence <br className="hidden md:block"/>
            <RedText>aos que entendem mais.</RedText>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-12 text-xl md:text-3xl text-[#9CA3AF] font-light leading-[1.7] max-w-4xl mx-auto">
            <p>
              Este não é um conhecimento concebido para quem aceita a mediocridade, ou para quem prefere o conforto de uma mentira social confortável.
            </p>
            <p className="text-[#F5F3EE] font-bold md:text-4xl italic">
              &ldquo;Compreender os padrões que a grande maioria ignora é o que separa os arquitetos da própria realidade... daqueles que apenas vivem nela.&rdquo;
            </p>
            <div className="pt-12">
               <p className="text-[#9CA3AF] text-lg md:text-xl uppercase tracking-[0.4em] font-bold opacity-60">PARE DE VIVER NO AUTOMÁTICO.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function Guarantee() {
  const items = [
    { icon: <Lock />, title: "Ambiente Criptografado", desc: "Segurança de nível militar. Sua privacidade é nossa prioridade absoluta." },
    { icon: <Zap />, title: "Ativação Imediata", desc: "Acesso total liberado no instante da confirmação do seu protocolo." },
    { icon: <Smartphone />, title: "Experiência Mobile", desc: "Interface otimizada para leitura cinematográfica em qualquer tela." }
  ];

  return (
    <section className="py-32 bg-[#0A0C10] relative">
       <div className="container mx-auto px-6 max-w-6xl">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {items.map((it, i) => (
             <FadeIn key={i} delay={i * 0.1} className="flex flex-col text-center md:text-left items-center md:items-start p-12 border border-white/5 bg-[#111318] rounded-[2rem] hover:border-[#FF3B3B]/20 transition-all duration-500 shadow-xl group">
               <div className="mb-8 w-16 h-16 bg-black border border-white/5 rounded-2xl flex items-center justify-center text-[#FF3B3B] shadow-inner group-hover:scale-110 transition-transform">
                 {React.cloneElement(it.icon as React.ReactElement<any>, { className: "w-7 h-7 stroke-[1.5]" })}
               </div>
               <h4 className="text-[#F5F3EE] font-bold mb-4 text-base tracking-[0.2em] uppercase">{it.title}</h4>
               <p className="text-[#9CA3AF] font-light leading-relaxed text-lg">{it.desc}</p>
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
    <section className="py-48 md:py-64 bg-[#0A0C10] border-t border-white/5 relative overflow-hidden">
      {/* Intense Red Glow for Final CTA */}
      <div className="absolute inset-0 bg-[#FF0000]/2 blur-[150px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FF0000]/10 to-transparent pointer-events-none" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <Crown className="w-[800px] h-[800px] text-red-600" />
      </div>
      
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <FadeIn>
          <h2 className="font-serif text-[2.8rem] md:text-[5.5rem] lg:text-[6.5rem] text-[#F5F3EE] mb-12 leading-[1.05] tracking-tight">
            A maioria continuará <br className="hidden md:block"/>
            <RedText className="italic">vivendo no automático.</RedText>
          </h2>
          <p className="text-xl md:text-3xl text-[#9CA3AF] mb-16 font-light leading-relaxed max-w-4xl mx-auto italic">
            &ldquo;Enquanto alguns continuam reagindo ao mundo sem entender seus padrões… outros aprendem exatamente como ele funciona.&rdquo;
          </p>
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-[#FF3B3B] blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <button className="relative px-16 py-8 bg-[#FF3B3B] text-black rounded-[2.5rem] font-black tracking-[0.5em] uppercase text-sm md:text-base shadow-[0_20px_50px_rgba(255,59,59,0.4)] hover:shadow-[0_30px_80px_rgba(255,59,59,0.6)] hover:-translate-y-2 transition-all duration-700">
              DESBLOQUEAR ACESSO AGORA
            </button>
          </div>
          <div className="mt-12 text-[#9CA3AF] text-[10px] tracking-[0.4em] uppercase font-bold opacity-60">
            Acesso liberado imediatamente após a confirmação.
          </div>
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
    <main className="w-full bg-[#0A0C10] min-h-screen overflow-hidden font-sans text-[#9CA3AF] selection:bg-[#FF3B3B]/30 flex flex-col justify-stretch items-stretch">
      <Hero />
      <PainBlock />
      <CuriosityBlock />
      <SocialProof />
      <BookCarousel />
      <ForWho />
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
