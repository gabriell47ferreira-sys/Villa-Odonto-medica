import React from 'react';
import { clinicData } from '../data/clinicData';
import { Star, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-14 sm:py-20 bg-villa-sand/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-villa-700 bg-white px-3.5 py-1.5 rounded-full border border-villa-sand-dark/60">
            Transparência & Confiança
          </span>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-villa-navy tracking-tight">
            A experiência de quem conhece a clínica.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Priorizamos um relacionamento honesto, transparente e acolhedor com cada paciente. Conheça nossa presença verificada no Google Maps e compartilhe sua experiência conosco.
          </p>
        </div>

        {/* Central Google Card with Verified Business Profile */}
        <div className="mt-10 sm:mt-14 max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft-xl text-center relative overflow-hidden">
            
            {/* Top Google Colors Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-red-500 to-amber-500" />

            {/* Google Logo / Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-villa-navy">
              Perfil Verificado no Google Maps
            </h3>

            {/* Stars row */}
            <div className="flex items-center justify-center gap-1.5 my-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Acompanhe a localização, informações públicas e a avaliação da <strong>Clínica Villa Odonto Médica</strong> diretamente no Google.
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-500">
              <span className="flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-villa-600 flex-shrink-0" />
                Rua Marieta Líra de Azevedo, 50 — Caruaru – PE
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                Presença Oficial no Google
              </span>
            </div>

            {/* Google Maps Action Button with mobile full width */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={clinicData.googleReviews.placeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-villa-navy hover:bg-villa-navy-light text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 active:scale-98"
              >
                <span>Ver avaliações no Google</span>
                <ExternalLink className="w-4 h-4 text-slate-300" />
              </a>

              <a
                href="#localizacao"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-98"
              >
                <MapPin className="w-4 h-4 text-villa-600" />
                <span>Ver localização da clínica</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
