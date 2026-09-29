import React from 'react';
import { getWhatsAppLink } from '../data/clinicData';
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { InstagramReelsHeroCard } from './InstagramReelsHeroCard';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-radial-subtle pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-28">
      {/* Decorative ambient blurred elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-villa-200/40 via-villa-100/30 to-amber-100/20 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-villa-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-villa-200 shadow-sm mb-5 sm:mb-6">
              <span className="flex h-2 w-2 rounded-full bg-villa-500 animate-pulse flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-villa-navy">
                Odontologia & Saúde Integrada em Caruaru
              </span>
            </div>

            {/* Main Headline with mobile-adapted sizing */}
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-villa-navy leading-[1.2] sm:leading-[1.15] tracking-tight">
              Seu sorriso merece{' '}
              <span className="text-cyan-gradient">cuidado, atenção</span> e{' '}
              <span className="text-villa-navy">confiança.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Na <strong className="text-villa-navy font-semibold">Clínica Villa Odonto Médica</strong>, cada sorriso merece atenção especial. Conheça nossa clínica e entre em contato para saber mais sobre nossos atendimentos.
            </p>

            {/* CTAs Buttons with full-width on mobile */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-villa-500 hover:bg-villa-600 text-white font-semibold text-sm sm:text-base shadow-soft hover:shadow-glow transition-all duration-300 transform active:scale-98 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-villa-500"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 flex-shrink-0" />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href="#sobre"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-villa-sand text-villa-navy border border-slate-200 font-semibold text-sm sm:text-base shadow-sm hover:border-villa-300 transition-all duration-300 active:scale-98"
              >
                <span>Conheça a clínica</span>
                <ArrowRight className="w-4 h-4 text-villa-500 flex-shrink-0" />
              </a>
            </div>

            {/* Badges / Micro Indicators */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-villa-50 flex items-center justify-center text-villa-600 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[11px] sm:text-xs">
                  <strong className="block text-slate-900 font-semibold">Atendimento</strong>
                  <span className="text-slate-500">Humanizado e ético</span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-[11px] sm:text-xs">
                  <strong className="block text-slate-900 font-semibold">Bairro Kennedy</strong>
                  <span className="text-slate-500">Caruaru – PE</span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-[11px] sm:text-xs">
                  <strong className="block text-slate-900 font-semibold">Biossegurança</strong>
                  <span className="text-slate-500">Cuidado individual</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Instagram Reels Tab Card */}
          <div className="lg:col-span-5 relative w-full">
            <InstagramReelsHeroCard />
          </div>

        </div>
      </div>
    </section>
  );
};
