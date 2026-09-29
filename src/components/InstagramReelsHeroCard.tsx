import React, { useState } from 'react';
import { Play, ExternalLink, Grid, Clapperboard, Bookmark, Eye, CheckCircle2, Heart } from 'lucide-react';
import avatarImg from '../assets/instagram-avatar.png';
import reel1Img from '../assets/instagram-reel-1.png';
import reel2Img from '../assets/instagram-reel-2.png';
import reel3Img from '../assets/instagram-reel-3.png';

export const InstagramReelsHeroCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reels' | 'feed'>('reels');
  const reelsUrl = 'https://www.instagram.com/villaodontomedica/reels/';

  const reels = [
    {
      id: 'reel-1',
      title: 'Quando você foi no dentista?',
      views: '5.443',
      img: reel1Img,
      badge: 'Dica Clínica',
    },
    {
      id: 'reel-2',
      title: 'Horários de Atendimentos',
      views: '788',
      img: reel2Img,
      badge: 'Atendimento',
    },
    {
      id: 'reel-3',
      title: '3 locais que você esquece...',
      views: '24 mil',
      img: reel3Img,
      badge: 'Saúde Bucal',
    },
  ];

  return (
    <div className="relative mx-auto max-w-md lg:max-w-none w-full">
      {/* Decorative ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-villa-500/20 rounded-3xl blur-xl opacity-75 -z-10" />

      {/* Main Container imitating Instagram App / Reels Tab */}
      <div className="bg-slate-950 text-white rounded-3xl shadow-soft-xl border border-slate-800/90 overflow-hidden flex flex-col transition-all duration-300 hover:border-slate-700">
        
        {/* Top Header: Instagram Profile Card Bar */}
        <div className="p-3.5 sm:p-5 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center justify-between gap-2.5 sm:gap-3">
            
            {/* Profile Avatar + Story Ring */}
            <a
              href={reelsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 sm:gap-3 group/profile focus:outline-none min-w-0"
            >
              <div className="relative flex-shrink-0">
                {/* Instagram Gradient Story Border */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-md">
                  <img
                    src={avatarImg}
                    alt="Perfil Villa Odonto Médica no Instagram"
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                {/* Active small pulsing indicator */}
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950" />
              </div>

              {/* Username + Category */}
              <div className="flex flex-col text-left min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="font-bold text-xs sm:text-sm text-slate-100 group-hover/profile:text-sky-400 transition-colors truncate">
                    villaodontomedica
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 fill-sky-400/20 flex-shrink-0" />
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                  Villa Odonto Médica 🦷🩺
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 truncate">
                  3.242 seguidores • 76 publicações
                </span>
              </div>
            </a>

            {/* Follow on Instagram Button */}
            <a
              href="https://www.instagram.com/villaodontomedica/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white font-semibold text-xs shadow-sm hover:opacity-90 transition-opacity active:scale-95 min-h-[32px]"
            >
              <span>Seguir</span>
            </a>
          </div>
        </div>

        {/* Tab Navigation: Grid vs Reels (Reels Active with indicator) */}
        <div className="flex items-center justify-around border-b border-slate-800/80 bg-slate-900/40 text-xs text-slate-400">
          <button
            type="button"
            onClick={() => setActiveTab('feed')}
            className={`py-2.5 sm:py-3 px-3 sm:px-4 flex items-center gap-1.5 font-medium transition-colors ${
              activeTab === 'feed'
                ? 'text-white border-b-2 border-white'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Grid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-[11px] sm:text-xs">Publicações</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('reels')}
            className={`py-2.5 sm:py-3 px-3 sm:px-4 flex items-center gap-1.5 font-semibold transition-colors relative ${
              activeTab === 'reels'
                ? 'text-sky-400 border-b-2 border-sky-400'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Clapperboard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-[11px] sm:text-xs">Aba Reels</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse ml-0.5" />
          </button>

          <a
            href={reelsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 sm:py-3 px-3 sm:px-4 flex items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
            title="Abrir no Instagram"
            aria-label="Abrir no Instagram"
          >
            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>

        {/* Reels Content Grid (Showing real reels from official profile) */}
        <div className="p-3 sm:p-4 bg-slate-950">
          <div className="flex items-center justify-between mb-2.5 sm:mb-3 px-1">
            <span className="text-[11px] sm:text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Clapperboard className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
              <span>Reels em destaque (@villaodontomedica)</span>
            </span>
            <a
              href={reelsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-[11px] text-sky-400 hover:text-sky-300 flex items-center gap-1"
            >
              <span>Ver todos</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* 3 Reels Grid with Mobile Touch Friendliness */}
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
            {reels.map((reel) => (
              <a
                key={reel.id}
                href={reelsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden aspect-[9/16] bg-slate-900 border border-slate-800 hover:border-sky-400/80 transition-all duration-300 flex flex-col justify-end text-left shadow-md hover:shadow-glow focus:outline-none active:scale-95"
              >
                {/* Background Reel Poster Image */}
                <img
                  src={reel.img}
                  alt={reel.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/95 transition-all" />

                {/* Play Button Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-950 ml-0.5" />
                  </div>
                </div>

                {/* Top Reel Category Badge */}
                <div className="absolute top-1.5 left-1.5 right-1.5 flex justify-between items-start pointer-events-none">
                  <span className="text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/65 backdrop-blur-md text-slate-200 border border-white/10 truncate max-w-full">
                    {reel.badge}
                  </span>
                </div>

                {/* Bottom Stats: Views and Reel Title */}
                <div className="relative p-1.5 sm:p-2 z-10">
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-white drop-shadow">
                    <Eye className="w-3 h-3 text-white flex-shrink-0" />
                    <span>{reel.views}</span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-slate-200 line-clamp-1 mt-0.5 group-hover:text-sky-300 transition-colors leading-tight">
                    {reel.title}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Action Footer Bar */}
          <div className="mt-3 pt-2.5 sm:pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 min-w-0">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] truncate">Conteúdo oficial de Caruaru</span>
            </div>

            <a
              href={reelsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] sm:text-xs font-medium transition-colors active:scale-95 min-h-[32px]"
            >
              <span>Assistir no Instagram</span>
              <ExternalLink className="w-3 h-3 text-slate-400 flex-shrink-0" />
            </a>
          </div>
        </div>

      </div>

      {/* Floating Badge below the card */}
      <div className="mt-2.5 sm:mt-3 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 px-1 gap-1 text-center sm:text-left">
        <span className="flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 flex-shrink-0" />
          <span>Siga <strong>@villaodontomedica</strong> no Instagram</span>
        </span>
        <a
          href={reelsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-villa-600 hover:underline font-medium text-[11px] sm:text-xs"
        >
          Ver reels e dia a dia da clínica →
        </a>
      </div>
    </div>
  );
};
