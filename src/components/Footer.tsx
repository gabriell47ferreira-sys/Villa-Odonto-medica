import React from 'react';
import { Logo } from './Logo';
import { clinicData, getWhatsAppLink } from '../data/clinicData';
import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#inicio" className="inline-block focus:outline-none">
              <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
                <Logo size="md" />
              </div>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Odontologia & Saúde Integrada em Caruaru – PE. Cuidamos do seu sorriso com carinho, atenção individualizada e compromisso com o seu bem-estar.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <a
                href={clinicData.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-villa-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors active:scale-95"
                aria-label="Instagram da Clínica Villa Odonto Médica"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors active:scale-95"
                aria-label="WhatsApp da Clínica Villa Odonto Médica"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={clinicData.location.googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors active:scale-95"
                aria-label="Localização no Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-heading font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-villa-400 transition-colors py-1 inline-block">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-villa-400 transition-colors py-1 inline-block">A Clínica</a>
              </li>
              <li>
                <a href="#tratamentos" className="hover:text-villa-400 transition-colors py-1 inline-block">Tratamentos</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-villa-400 transition-colors py-1 inline-block">Avaliações</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-villa-400 transition-colors py-1 inline-block">Localização</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-heading font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              Localização
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200">{clinicData.name}</strong><br />
              {clinicData.address.street}, {clinicData.address.number}<br />
              Bairro {clinicData.address.neighborhood}<br />
              {clinicData.address.city} – {clinicData.address.state}<br />
              CEP: {clinicData.address.cep}
            </p>
            <a
              href={clinicData.location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-villa-400 hover:text-villa-300 font-medium py-1"
            >
              <span>Abrir rotas no mapa</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Column 4: Business Hours */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-heading font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              Atendimento
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {clinicData.businessHours.weekday}<br />
              {clinicData.businessHours.saturday}<br />
              {clinicData.businessHours.sunday}
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-villa-500 hover:bg-villa-600 text-white font-medium text-xs shadow-sm transition-colors active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Ethics Disclaimer */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {clinicData.legalName}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido para presença digital da</span>
            <strong className="text-slate-400">{clinicData.shortName}</strong>
          </p>
        </div>

      </div>
    </footer>
  );
};
