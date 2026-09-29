import React from 'react';
import { clinicData, clinicProfessionals } from '../data/clinicData';
import { UserCheck } from 'lucide-react';

export const TeamSection: React.FC = () => {
  // Regra de conformidade do briefing: Se não houver informações públicas confirmadas,
  // ocultar a seção na versão pública até que os dados sejam fornecidos.
  if (!clinicData.showProfessionals) {
    return null;
  }

  return (
    <section id="profissionais" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-villa-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
            Corpo Clínico
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-extrabold text-villa-navy tracking-tight">
            Profissionais dedicados ao cuidado do seu sorriso.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Nossa equipe é formada por profissionais comprometidos com a saúde bucal, ética e atenção individual a cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {clinicProfessionals.map((prof) => (
            <div
              key={prof.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft hover:shadow-soft-xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-villa-50 text-villa-600 flex items-center justify-center mb-4">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-lg text-villa-navy">
                {prof.name}
              </h3>
              <p className="text-sm font-semibold text-villa-600 mt-0.5">
                {prof.role}
              </p>
              <span className="inline-block text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded mt-2">
                {prof.cro}
              </span>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {prof.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
