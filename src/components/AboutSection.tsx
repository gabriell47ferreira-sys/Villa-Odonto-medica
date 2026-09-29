import React from 'react';
import { clinicData } from '../data/clinicData';
import { Heart, ShieldCheck, Sparkles, Users, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Priorizamos a escuta atenta e o acolhimento, respeitando o ritmo e as particularidades de cada paciente.',
      color: 'text-rose-500',
      bgColor: 'bg-rose-50',
    },
    {
      icon: Users,
      title: 'Cuidado Individualizado',
      description: 'Cada planejamento é construído de forma transparente e personalizada, com foco no bem-estar contínuo.',
      color: 'text-villa-600',
      bgColor: 'bg-villa-50',
    },
    {
      icon: Sparkles,
      title: 'Ambiente Acolhedor & Higiênico',
      description: 'Espaço planejado com rigorosos padrões de biossegurança, limpeza e conforto para toda a família.',
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: ShieldCheck,
      title: 'Compromisso com a Saúde Bucal',
      description: 'Foco na preservação natural, na orientação preventiva e na integridade do seu sorriso a longo prazo.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <section id="sobre" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-villa-600 bg-villa-50 px-3.5 py-1.5 rounded-full border border-villa-100">
            Apresentação da Clínica
          </span>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-villa-navy tracking-tight">
            Um espaço pensado para cuidar do seu sorriso.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Localizada no bairro Kennedy em Caruaru, a <strong className="text-slate-800 font-semibold">{clinicData.name}</strong> une acolhimento, dedicação e atenção especial para transformar a sua experiência odontológica em um momento de tranquilidade.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-100 shadow-soft hover:shadow-soft-xl hover:border-villa-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${pillar.bgColor} flex items-center justify-center ${pillar.color} mb-4 sm:mb-5 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-villa-navy mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights Banner with Real Information */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-villa-sand/60 border border-villa-sand-dark/50 p-6 sm:p-10 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-villa-navy">
                Nosso propósito é proporcionar tranquilidade em cada atendimento
              </h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Acreditamos que a saúde bucal está diretamente conectada à saúde geral e à qualidade de vida. Atuamos com ética, respeito e foco no bem-estar, atendendo moradores de Caruaru e região com dedicação em cada detalhe.
              </p>
              
              <ul className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-villa-600 flex-shrink-0" />
                  <span>Protocolos modernos de biossegurança</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-villa-600 flex-shrink-0" />
                  <span>Ambiente climatizado e confortável</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-villa-600 flex-shrink-0" />
                  <span>Localização de fácil acesso no Kennedy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-villa-600 flex-shrink-0" />
                  <span>Atendimento com foco no seu bem-estar</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center w-full">
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-soft border border-slate-100 text-center w-full max-w-sm">
                <span className="text-2xl sm:text-3xl font-extrabold text-villa-500 font-heading block">
                  Caruaru – PE
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">
                  Bairro Kennedy
                </span>
                <p className="text-xs text-slate-600 mt-2">
                  Rua Marieta Líra de Azevedo, 50
                </p>
                <a
                  href="#localizacao"
                  className="mt-4 block w-full py-2.5 px-4 rounded-xl bg-villa-navy text-white text-xs font-semibold hover:bg-villa-navy-light transition-colors active:scale-95"
                >
                  Ver no Mapa
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
