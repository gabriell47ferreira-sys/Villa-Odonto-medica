import React from 'react';
import { clinicData, getWhatsAppLink } from '../data/clinicData';
import { MapPin, Navigation, Clock, MessageCircle } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-villa-600 bg-villa-50 px-3.5 py-1.5 rounded-full border border-villa-100">
            Onde Estamos
          </span>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-villa-navy tracking-tight">
            Estamos esperando por você.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Visite a Clínica Villa Odonto Médica no bairro Kennedy em Caruaru. Fácil localização e acesso prático para cuidar do seu sorriso com todo o conforto.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Address, Contact & Hours Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6">
            
            {/* Address Card */}
            <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-soft">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-villa-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-villa-navy">
                    {clinicData.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                    {clinicData.address.street}, {clinicData.address.number}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Bairro {clinicData.address.neighborhood} — {clinicData.address.city}, {clinicData.address.state}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                    CEP: {clinicData.address.cep}
                  </p>
                  <p className="text-[11px] sm:text-xs text-villa-700 bg-villa-50 px-2.5 py-1 rounded-md inline-block mt-2.5 sm:mt-3 border border-villa-100">
                    {clinicData.address.reference}
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-soft">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-villa-navy text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-villa-navy">
                    Horários de Atendimento
                  </h3>
                  <div className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/60">
                      <span>Segunda a Sexta</span>
                      <strong className="text-slate-900 font-semibold">08:00 às 18:00</strong>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/60">
                      <span>Sábado</span>
                      <strong className="text-slate-900 font-semibold">08:00 às 12:00</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-500 text-xs pt-0.5">
                      <span>Domingo</span>
                      <span className="font-medium">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Como Chegar & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={clinicData.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-villa-500 hover:bg-villa-600 text-white font-semibold text-xs sm:text-sm shadow-soft transition-all duration-300 active:scale-98"
              >
                <Navigation className="w-4 h-4 fill-white/20" />
                <span>Como chegar</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-villa-navy hover:bg-villa-navy-light text-white font-semibold text-xs sm:text-sm shadow-soft transition-all duration-300 active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Entrar em contato</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Maps with responsive min-height */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-soft-xl relative bg-slate-100">
              <iframe
                title="Localização da Clínica Villa Odonto Médica em Caruaru"
                src={clinicData.location.embedMapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Float badge over map */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md py-1.5 px-3 sm:py-2 sm:px-3.5 rounded-xl shadow-md border border-slate-200 flex items-center gap-2 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-800">
                  Villa Odonto Médica — Caruaru – PE
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
