import React from 'react';
import { getWhatsAppLink } from '../data/clinicData';
import { MessageCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const BookingCtaSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-villa-navy via-villa-navy to-villa-900 text-white relative overflow-hidden">
      {/* Decorative background glow circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-villa-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-400/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-villa-300" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-200">
            Atendimento Personalizado
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Vamos cuidar do seu sorriso?
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Entre em contato com nossa equipe para tirar dúvidas e consultar os horários disponíveis. Estamos prontos para atender você com dedicação e carinho em Caruaru.
        </p>

        {/* Main WhatsApp CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-villa-500 hover:bg-villa-400 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-glow transition-all duration-300 transform active:scale-98 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-villa-400"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white/20" />
            <span>Agendar pelo WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-villa-300 flex-shrink-0" />
            <span>Atendimento individual e humanizado</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-villa-300 flex-shrink-0" />
            <span>Agendamento prático e sem burocracia</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-villa-300 flex-shrink-0" />
            <span>Estrutura acolhedora em Caruaru</span>
          </div>
        </div>

      </div>
    </section>
  );
};
