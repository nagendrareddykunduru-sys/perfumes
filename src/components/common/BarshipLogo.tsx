import React from 'react';
import { Link } from 'react-router-dom';

interface BarshipLogoProps {
  variant?: 'light' | 'dark' | 'gold';
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BarshipLogo: React.FC<BarshipLogoProps> = ({
  variant = 'light',
  className = '',
  showSubtitle = false,
  size = 'md'
}) => {
  const isDark = variant === 'dark';
  
  const sizeClasses = {
    sm: {
      svg: 'w-7 h-7',
      brand: 'text-xl tracking-[0.22em]',
      script: 'text-base -mt-1',
      sub: 'text-[9px]'
    },
    md: {
      svg: 'w-9 h-9',
      brand: 'text-2xl tracking-[0.25em]',
      script: 'text-lg -mt-1.5',
      sub: 'text-[10px]'
    },
    lg: {
      svg: 'w-12 h-12',
      brand: 'text-3xl tracking-[0.28em]',
      script: 'text-2xl -mt-2',
      sub: 'text-xs'
    },
    xl: {
      svg: 'w-16 h-16',
      brand: 'text-4xl md:text-5xl tracking-[0.3em]',
      script: 'text-3xl md:text-4xl -mt-2.5',
      sub: 'text-xs md:text-sm'
    }
  }[size];

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group transition-transform duration-300 ${className}`}>
      {/* Crown Icon matching the BARSHIP business card */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg 
          viewBox="0 0 100 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClasses.svg} drop-shadow-sm`}
        >
          <defs>
            <linearGradient id="barshipGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFBA52" />
              <stop offset="35%" stopColor="#C59B27" />
              <stop offset="70%" stopColor="#F6E7B0" />
              <stop offset="100%" stopColor="#AA7B1C" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#B8860B" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Crown Base Rim */}
          <path 
            d="M10 65 Q 50 72 90 65 L 88 59 Q 50 66 12 59 Z" 
            fill="url(#barshipGoldGrad)" 
          />

          {/* 5 Crown Points with Finials */}
          {/* Main Crown Body */}
          <path 
            d="M 12 57 
               C 10 42, 14 30, 20 28
               C 24 38, 30 45, 36 40
               C 42 26, 46 16, 50 12
               C 54 16, 58 26, 64 40
               C 70 45, 76 38, 80 28
               C 86 30, 90 42, 88 57
               Q 50 64 12 57 Z" 
            stroke="url(#barshipGoldGrad)" 
            strokeWidth="3.5" 
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />

          {/* 5 Finials (Crown Jewels on peaks) */}
          {/* Center Peak */}
          <circle cx="50" cy="11" r="3.2" fill="url(#barshipGoldGrad)" filter="url(#goldGlow)" />
          {/* Inner Left Peak */}
          <circle cx="20" cy="27" r="2.8" fill="url(#barshipGoldGrad)" />
          {/* Inner Right Peak */}
          <circle cx="80" cy="27" r="2.8" fill="url(#barshipGoldGrad)" />
          {/* Mid Points */}
          <circle cx="36" cy="39" r="2" fill="url(#barshipGoldGrad)" />
          <circle cx="64" cy="39" r="2" fill="url(#barshipGoldGrad)" />

          {/* 5 Accent Stars / Diamonds on the band (just like on the card) */}
          <polygon points="26,53 28,51 30,53 28,55" fill="url(#barshipGoldGrad)" />
          <polygon points="38,54 40,52 42,54 40,56" fill="url(#barshipGoldGrad)" />
          <polygon points="50,55 52,53 54,55 52,57" fill="url(#barshipGoldGrad)" />
          <polygon points="62,54 64,52 66,54 64,56" fill="url(#barshipGoldGrad)" />
          <polygon points="74,53 76,51 78,53 76,55" fill="url(#barshipGoldGrad)" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span 
          className={`font-cinzel font-bold leading-none ${sizeClasses.brand} ${
            isDark 
              ? 'text-white group-hover:text-amber-300 transition-colors' 
              : variant === 'gold' 
              ? 'gold-gradient-text' 
              : 'text-zinc-950 group-hover:text-amber-800 transition-colors'
          }`}
        >
          BARSHIP
        </span>
        <span 
          className={`font-script font-medium italic ${sizeClasses.script} text-[#C59B27]`}
        >
          Fragrances
        </span>
        {showSubtitle && (
          <span className={`tracking-widest uppercase text-zinc-400 font-sans mt-0.5 ${sizeClasses.sub}`}>
            Baron Perfumes • Hyderabad
          </span>
        )}
      </div>
    </Link>
  );
};
