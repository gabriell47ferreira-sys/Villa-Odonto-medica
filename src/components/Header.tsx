import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { clinicData, getWhatsAppLink } from '../data/clinicData';
import { MessageCircle, Menu, X, MapPin, Clock } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'A Clínica', href: '#sobre' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      {/* Top micro bar for authority & location on desktop */}
      <div className="bg-villa-navy text-slate-200 text-xs py-2 px-4 border-b border-villa-navy-light/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-villa-300 flex-shrink-0" />
              <span>Bairro Kennedy, Caruaru – PE</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-villa-300 flex-shrink-0" />
              <span>Seg. a Sex.: 08h às 18h | Sáb.: 08h às 12h</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={clinicData.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              <span>Instagram:</span>
              <strong className="text-villa-300 font-medium">{clinicData.instagram.handle}</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-soft border-b border-slate-100 py-3 sm:py-3.5'
            : 'bg-white/95 border-b border-slate-100/80 py-3.5 sm:py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with responsive sizing */}
            <a
              href="#inicio"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-villa-500 rounded-lg group"
              aria-label="Clínica Villa Odonto Médica - Página Inicial"
            >
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[15px] font-medium text-slate-600 hover:text-villa-600 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-villa-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* WhatsApp CTA Action Button (Desktop & Tablet) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-villa-500 hover:bg-villa-600 text-white font-medium text-sm shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-villa-500 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>

            {/* Mobile Header Buttons (WhatsApp quick button + Hamburger) */}
            <div className="flex lg:hidden items-center gap-1.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors active:scale-95"
                aria-label="Abrir conversa no WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-600/10" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-700 hover:text-villa-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-villa-500 active:scale-95"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Backdrop Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop darkened overlay */}
            <div
              className="lg:hidden fixed inset-0 top-[65px] bg-slate-900/60 backdrop-blur-sm z-40 animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Content */}
            <div className="lg:hidden fixed inset-x-0 top-[65px] z-50 bg-white border-b border-slate-200 shadow-2xl py-6 px-6 max-h-[calc(100vh-65px)] overflow-y-auto animate-in slide-in-from-top-4 duration-300">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-slate-800 hover:text-villa-600 hover:bg-villa-50/80 px-4 py-3 rounded-xl transition-all active:scale-98"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile Drawer Action Area */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full min-h-[48px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-villa-500 hover:bg-villa-600 text-white font-bold text-sm shadow-md transition-all active:scale-98"
                  >
                    <MessageCircle className="w-5 h-5 fill-white/20" />
                    <span>Agendar pelo WhatsApp</span>
                  </a>

                  <a
                    href={clinicData.instagram.reelsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                  >
                    <svg className="w-4 h-4 fill-pink-600 flex-shrink-0" viewBox="0 0 24 24">
  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
</svg>
                    <span>Acompanhe nossos Reels (@villaodontomedica)</span>
                  </a>

                  <div className="text-center pt-2 text-xs text-slate-500 space-y-1">
                    <p className="font-medium text-slate-700">Rua Marieta Líra de Azevedo, 50</p>
                    <p>Bairro Kennedy • Caruaru – PE</p>
                    <p className="text-[11px] text-slate-400">Seg. a Sex.: 08h às 18h | Sáb.: 08h às 12h</p>
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
};
