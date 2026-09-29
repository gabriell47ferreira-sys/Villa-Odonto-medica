import React from 'react';
import originalLogo from '../assets/logo-original.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'original';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showSubtitle = true,
}) => {
  // Option 1: Use original uploaded image with clean container
  if (variant === 'original') {
    const heightClass = size === 'sm' ? 'h-9' : size === 'lg' ? 'h-14' : size === 'xl' ? 'h-20' : 'h-11';
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={originalLogo}
          alt="Clínica Villa Odonto Médica"
          className={`${heightClass} w-auto object-contain drop-shadow-sm`}
        />
      </div>
    );
  }

  // Cross icon sizes
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : size === 'xl' ? 60 : 40;

  // Icon only
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
        >
          <defs>
            <linearGradient id="crossGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#009FE3" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="crossInner" x1="30" y1="20" x2="70" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00B4D8" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
            <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#009FE3" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Medical Cross Outer Contour with Rounded Ribbon Shape matching Clinic Logo */}
          <path
            d="M38 12C38 8.68629 40.6863 6 44 6H56C59.3137 6 62 8.68629 62 12V38H88C91.3137 38 94 40.6863 94 44V56C94 59.3137 91.3137 62 88 62H62V88C62 91.3137 59.3137 94 56 94H44C40.6863 94 38 91.3137 38 88V62H12C8.68629 62 6 59.3137 6 56V44C6 40.6863 8.68629 38 12 38H38V12Z"
            fill="white"
            stroke="url(#crossGrad)"
            strokeWidth="8"
            strokeLinejoin="round"
            filter="url(#glow)"
          />
          {/* Inner dynamic ribbon contour */}
          <path
            d="M50 16V84M16 50H84"
            stroke="url(#crossInner)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  // Full brand rendering: Vector cross + authentic typography
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Medical Cross Emblem */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoCrossGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="45%" stopColor="#009FE3" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="ribbonGrad" x1="25" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00B4D8" />
              <stop offset="100%" stopColor="#0F2B48" />
            </linearGradient>
          </defs>
          {/* Cross Shape */}
          <rect x="36" y="8" width="28" height="84" rx="8" fill="url(#logoCrossGrad)" />
          <rect x="8" y="36" width="84" height="28" rx="8" fill="url(#logoCrossGrad)" />
          {/* Subtle center detail */}
          <rect x="42" y="42" width="16" height="16" rx="4" fill="white" opacity="0.9" />
          <path d="M46 50H54M50 46V54" stroke="#009FE3" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Typography strictly matching Villa Odonto Médica */}
      <div className="flex flex-col leading-none justify-center">
        <span
          className={`font-sans tracking-[0.28em] text-villa-navy font-light uppercase ${
            size === 'sm' ? 'text-[11px]' : size === 'lg' ? 'text-[16px]' : size === 'xl' ? 'text-[20px]' : 'text-[13px]'
          }`}
        >
          VILLA
        </span>
        <span
          className={`font-heading font-extrabold tracking-tight text-villa-500 uppercase ${
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : size === 'xl' ? 'text-3xl' : 'text-lg'
          }`}
        >
          ODONTO MÉDICA
        </span>
        {showSubtitle && (
          <span
            className={`tracking-[0.16em] text-slate-500 uppercase font-medium mt-0.5 ${
              size === 'sm' ? 'text-[8px]' : 'text-[9px]'
            }`}
          >
            Odontologia & Saúde Integrada
          </span>
        )}
      </div>
    </div>
  );
};
