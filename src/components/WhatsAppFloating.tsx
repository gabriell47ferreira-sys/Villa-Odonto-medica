import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/clinicData';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end flex-col gap-2">
      {/* Friendly Tooltip */}
      {!tooltipDismissed && (
        <div className="relative bg-white text-slate-800 text-[11px] sm:text-xs py-2 px-3 sm:px-3.5 rounded-2xl shadow-soft-xl border border-slate-200/90 max-w-[190px] sm:max-w-[210px] animate-in fade-in slide-in-from-bottom-2 duration-300 flex items-center justify-between gap-1.5">
          <span>Olá! Precisa de atendimento ou tem dúvidas? <strong>Fale conosco!</strong></span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-full flex-shrink-0"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Little arrow at bottom-right */}
          <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-b border-r border-slate-200/90 rotate-45" />
        </div>
      )}

      {/* Floating Button with Touch Area */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a Clínica Villa Odonto Médica pelo WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
        </span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20" />
      </a>
    </div>
  );
};
