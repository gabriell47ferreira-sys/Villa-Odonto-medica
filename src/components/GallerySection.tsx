import React from 'react';
import { Sparkles, Shield, HeartHandshake } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      title: 'Consultório Moderno',
      caption: 'Equipamentos modernos e ambiente planejado para o seu conforto.',
    },
    {
      url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      title: 'Biossegurança Rigorosa',
      caption: 'Esterilização e higiene seguindo os mais altos protocolos de saúde.',
    },
    {
      url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
      title: 'Ambiente Acolhedor',
      caption: 'Estrutura pensada para fazer você se sentir seguro e bem recebido.',
    },
    {
      url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      title: 'Atendimento Humanizado',
      caption: 'Atenção cuidadosa às necessidades de cada paciente.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-villa-600 bg-villa-50 px-3.5 py-1.5 rounded-full border border-villa-100">
            Nossa Estrutura
          </span>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-villa-navy tracking-tight">
            Conheça o espaço da Villa Odonto Médica.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Um ambiente limpo, tranquilo e preparado com carinho para cuidar da saúde bucal da sua família com total tranquilidade.
          </p>
        </div>

        {/* Gallery Grid (2 cols on mobile for balanced layout, 4 on desktop) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 shadow-soft hover:shadow-soft-xl transition-all duration-300 border border-slate-100"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Bottom Card Content */}
              <div className="p-3 sm:p-4 bg-white border-t border-slate-100">
                <h4 className="font-heading font-bold text-xs sm:text-sm text-villa-navy truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Banner */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 py-5 px-6 rounded-2xl bg-slate-50 border border-slate-200/70 text-slate-700 text-xs text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-villa-500 flex-shrink-0" />
            <span className="font-semibold">Instalações Climatizadas</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span className="font-semibold">Biossegurança e Esterilização em Autoclave</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-rose-500 flex-shrink-0" />
            <span className="font-semibold">Recepção Acolhedora em Caruaru</span>
          </div>
        </div>

      </div>
    </section>
  );
};
