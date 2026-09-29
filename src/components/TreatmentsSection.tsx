import React from 'react';
import { confirmedTreatments, getWhatsAppLink } from '../data/clinicData';
import { Stethoscope, Sparkles, ShieldCheck, HeartPulse, Users, Smile, MessageCircle, Check } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Users,
  Smile,
};

export const TreatmentsSection: React.FC = () => {
  return (
    <section id="tratamentos" className="py-14 sm:py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-villa-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
            Saúde & Prevenção
          </span>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-villa-navy tracking-tight">
            Cuidados odontológicos para diferentes necessidades.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Conheça as principais áreas de atendimento odontológico oferecidas pela Clínica Villa Odonto Médica. Cada procedimento é planejado para o seu conforto e segurança.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {confirmedTreatments.map((treatment) => {
            const Icon = iconMap[treatment.iconName] || Stethoscope;
            const inquiryMessage = `Olá! Gostaria de consultar informações e disponibilidade sobre o atendimento de ${treatment.title} na Clínica Villa Odonto Médica.`;
            
            return (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-soft-xl hover:border-villa-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill and Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-villa-700 bg-villa-50 px-2.5 py-1 rounded-full border border-villa-100">
                      {treatment.category}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-villa-500/10 text-villa-600 flex items-center justify-center group-hover:bg-villa-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-villa-navy mb-2.5 sm:mb-3 group-hover:text-villa-600 transition-colors">
                    {treatment.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-5">
                    {treatment.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6 pt-3 sm:pt-4 border-t border-slate-100">
                    {treatment.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Consultation Action Button */}
                <a
                  href={getWhatsAppLink(inquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 hover:bg-villa-500 text-slate-700 hover:text-white border border-slate-200 hover:border-transparent text-xs font-semibold transition-all duration-200 group/btn active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-villa-500 group-hover/btn:text-white transition-colors flex-shrink-0" />
                  <span>Consultar disponibilidade no WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Notice for transparency */}
        <div className="mt-10 sm:mt-12 text-center text-xs text-slate-500 px-2">
          <p>
            * Para consultar horários disponíveis, valores e orientações prévias de cada procedimento, entre em contato diretamente com nossa equipe pelo WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
