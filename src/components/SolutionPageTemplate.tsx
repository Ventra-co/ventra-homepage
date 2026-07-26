import React, { ReactNode } from "react";

export interface SolutionHeroProps {
  bgClassName?: string;
  overlayClassName?: string;
  bgImage: string;
  eyebrow?: ReactNode;
  partnerLine?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
}

export interface SolutionPageTemplateProps {
  hero: SolutionHeroProps;
  children?: ReactNode;
}

export function SolutionPageTemplate({ hero, children }: SolutionPageTemplateProps) {
  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section 
        className={`w-full min-h-[500px] md:min-h-[600px] flex items-center bg-cover relative ${hero.bgClassName || 'bg-center'}`}
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      >
        <div className={`absolute inset-0 ${hero.overlayClassName || 'bg-gradient-to-r from-[#1B2D53]/90 md:from-[#1B2D53]/80 to-transparent'}`}></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20 md:py-32">
          <div className="max-w-[850px] text-left">
            {hero.eyebrow && (
              <div className="text-[14px] md:text-[16px] font-[600] tracking-[0.08em] text-accent uppercase mb-3">
                {hero.eyebrow}
              </div>
            )}
            {hero.partnerLine && (
              <div className="text-[16px] md:text-[18px] font-[600] text-white/90 mb-6">
                {hero.partnerLine}
              </div>
            )}
            <h1 className="text-[42px] md:text-[60px] lg:text-[68px] font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm mb-8 break-keep">
              {hero.title}
            </h1>
            {hero.subtitle && (
              <div className="text-[18px] md:text-[22px] font-medium text-white/95 leading-[1.4] drop-shadow-sm break-keep">
                {hero.subtitle}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      {children}
    </div>
  );
}

export interface SolutionSectionProps {
  bgClass?: string;
  label?: ReactNode;
  title?: ReactNode;
  children: ReactNode;
  darkTitle?: boolean; // If true, title is white (for dark backgrounds)
  pyClass?: string;
}

export function SolutionSection({ 
  bgClass = "bg-white", 
  label, 
  title, 
  children,
  darkTitle = false,
  pyClass = "py-20 md:py-24"
}: SolutionSectionProps) {
  return (
    <section className={`w-full ${pyClass} ${bgClass}`}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {(label || title) && (
          <div className="mb-10 md:mb-12">
            {label && (
              <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-3 md:mb-4">
                {label}
              </p>
            )}
            {title && (
              <h2 className={`text-[28px] md:text-[36px] font-[700] tracking-tight ${darkTitle ? 'text-white' : 'text-primary'}`}>
                {title}
              </h2>
            )}
          </div>
        )}
        <div className={darkTitle ? "text-white/[0.78]" : ""}>
          {children}
        </div>
      </div>
    </section>
  );
}
