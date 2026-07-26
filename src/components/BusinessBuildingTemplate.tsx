import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquareText } from "lucide-react";

export interface BusinessBuildingTemplateProps {
  hero: {
    backgroundImageUrl: string;
    title: ReactNode;
    subtitle: ReactNode;
    description: ReactNode;
    align?: "left" | "center";
    overlay?: string;
    className?: string;
    label?: string;
    backgroundPosition?: string;
  };
  whyThisMatters: {
    label?: string;
    title: string;
    subtitle: ReactNode;
    cards: { icon: ReactNode; title: string; description: ReactNode }[];
    bottomText: ReactNode;
  };
  ventraApproach: {
    label?: string;
    title: string;
    subtitle: ReactNode;
    steps: { number: string; title: string; description: ReactNode; output: ReactNode }[];
  };
  experienceBased: {
    label?: string;
    title: string;
    subtitle: ReactNode;
    cards: { title: string; description: ReactNode; imagePlaceholder?: string; icon?: ReactNode; bottomLabel?: string }[];
  };
  focusAreas: {
    label?: string;
    title: string;
    headline: ReactNode;
    description: ReactNode;
    cards: { icon: ReactNode; title: string; description: ReactNode }[];
  };
    whoWeWorkWith: {
    label?: string;
    title: string;
    headline: ReactNode;
    description: ReactNode;
    groups: {
      label: string;
      title: string;
      cards: {
        title: string;
        description: ReactNode;
        icon?: ReactNode;
      }[];
    }[];
  };
  pointOfView: {
    label: string;
    statement: string;
  };
  contact: {
    label?: string;
    headline: ReactNode;
    description: ReactNode;
    buttonText: string;
    buttonLink: string;
  };
}

export function BusinessBuildingTemplate({
  hero,
  whyThisMatters,
  ventraApproach,
  experienceBased,
  focusAreas,
  whoWeWorkWith,
  pointOfView,
  contact
}: BusinessBuildingTemplateProps) {
  const isCenter = hero.align === "center";
  const heroBackground = hero.overlay 
    ? `${hero.overlay}, url('${hero.backgroundImageUrl}')`
    : isCenter
      ? `radial-gradient(circle at center, rgba(10, 18, 33, 0.85) 0%, rgba(10, 18, 33, 0.4) 100%), url('${hero.backgroundImageUrl}')`
      : `linear-gradient(to right, rgba(10, 18, 33, 0.8), rgba(10, 18, 33, 0.2)), url('${hero.backgroundImageUrl}')`;

  return (
    <div className="flex-grow w-full flex flex-col items-center">
      {/* Section 1: Hero */}
      <section 
        className={`relative w-full min-h-[600px] flex items-center overflow-hidden bg-primary ${isCenter ? "justify-center" : ""}`}
        style={{ 
          backgroundImage: heroBackground, 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-32 relative z-10">
          <div className={`flex flex-col text-white ${isCenter ? "max-w-[1000px] mx-auto text-center items-center" : "max-w-[700px]"}`}>
            <h1 className={`font-bold leading-[1.12] tracking-tight text-white drop-shadow-sm mb-5 md:mb-6 break-keep ${isCenter ? "text-[36px] sm:text-[42px] md:text-[56px] lg:text-[60px]" : "text-[36px] md:text-[48px] lg:text-[58px]"}`}>
              {hero.title}
            </h1>
            <div className={`font-[500] text-white/95 drop-shadow-sm leading-[1.3] mb-0 break-keep ${isCenter ? "text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px]" : "text-[18px] md:text-[22px] lg:text-[24px]"}`}>
              {hero.subtitle}
            </div>
            {hero.description && (
              <div className={`mt-8 font-medium text-white/95 leading-[1.7] drop-shadow-sm break-keep ${isCenter ? "text-[15px] sm:text-[17px] md:text-[18px] lg:text-[19px] line-clamp-3 md:line-clamp-none" : "text-[16px] md:text-[18px] leading-[1.5]"}`}>
                {hero.description}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: Why This Matters */}
      <section className="w-full bg-background-surface flex justify-center py-16 md:py-24">
        <div className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-3 md:gap-4 text-left w-full">
            {whyThisMatters.label && (
              <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-1">
                {whyThisMatters.label}
              </p>
            )}
            <h2 className="text-[28px] md:text-[36px] font-[700] tracking-tight text-primary">{whyThisMatters.title}</h2>
            <div className="text-[16px] md:text-[18px] font-[500] leading-[1.6] text-on-surface-variant break-keep max-w-[1000px]">{whyThisMatters.subtitle}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {whyThisMatters.cards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-[12px] p-[24px] md:p-[28px] border border-border-subtle shadow-sm flex flex-col h-full text-left border-t-[3px] border-t-primary hover:border-primary/30 hover:bg-slate-50 transition-colors duration-200">
                <div className="w-10 h-10 md:w-11 md:h-11 bg-primary/5 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  {React.isValidElement(card.icon) 
                    ? React.cloneElement(card.icon as React.ReactElement<any>, { className: "w-5 h-5 md:w-6 md:h-6 text-primary" }) 
                    : card.icon}
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3 className="text-[18px] md:text-[20px] font-[700] text-primary">{card.title}</h3>
                  <div className="text-[14px] md:text-[15px] font-[400] leading-[1.6] text-on-surface-variant break-keep">
                    {card.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {whyThisMatters.bottomText && (
            <div className="mt-2 md:mt-4 max-w-4xl mx-auto text-[15px] md:text-[17px] font-[500] leading-[1.6] text-on-surface-variant bg-primary/5 p-5 md:p-6 rounded-[12px] border border-primary/10">
              {whyThisMatters.bottomText}
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Ventra Approach (Stepper) */}
      <section className="w-full bg-white flex justify-center py-16 md:py-24">
        <div className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col gap-4 text-left w-full max-w-[1100px]">
            {ventraApproach.label && (
              <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-1">
                {ventraApproach.label}
              </p>
            )}
            <h2 className="text-[28px] md:text-[36px] font-[700] tracking-tight text-primary">{ventraApproach.title}</h2>
            <div className="text-[16px] md:text-[18px] font-[500] leading-[1.6] text-on-surface-variant break-keep">{ventraApproach.subtitle}</div>
          </div>
          
          <div className="relative flex flex-col md:flex-row gap-5 md:gap-4 w-full items-stretch mt-4 md:mt-6">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[23px] left-[10%] right-[10%] h-[2px] bg-border-subtle z-0">
              <div className="absolute right-[-4px] top-[-3px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-border-subtle" />
            </div>

            {/* Vertical Line for Mobile */}
            <div className="block md:hidden absolute left-[31px] top-[40px] bottom-[40px] w-[2px] bg-border-subtle z-0">
              <div className="absolute bottom-[-4px] left-[-3px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-border-subtle" />
            </div>

            {ventraApproach.steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex-1 flex flex-row md:flex-col items-stretch md:items-center text-left md:text-center group">
                {/* Mobile Stepper Wrapper */}
                <div className="flex-shrink-0 w-16 h-full flex flex-col items-center md:h-auto md:w-auto md:block md:mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-[700] text-[16px] md:text-[18px] shadow-sm border-4 border-white">
                    {step.number}
                  </div>
                </div>
                
                {/* Card Container */}
                <div className="w-full flex-1 ml-4 md:ml-0 bg-white rounded-[12px] border border-border-subtle shadow-sm flex flex-col h-full overflow-hidden hover:border-primary/20 hover:bg-slate-50 transition-colors duration-200">
                  {/* Content Area */}
                  <div className="p-5 md:p-[24px] flex flex-col gap-3 flex-1">
                    <h3 className="text-[17px] md:text-[19px] font-[700] text-primary">{step.title}</h3>
                    <div className="text-[13px] md:text-[14px] font-[400] leading-[1.6] text-on-surface-variant break-keep text-left">
                      {step.description}
                    </div>
                  </div>
                  
                  {/* Output Area */}
                  <div className="mt-auto px-5 md:px-[24px] py-3 md:py-4 bg-[#f8fafc] border-t border-border-subtle relative text-left flex items-center min-h-[64px] md:min-h-[72px]">
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-accent" />
                    <div className="text-[13px] md:text-[13.5px] font-[600] text-primary leading-[1.4] break-keep w-full">
                      {step.output}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Experience-Based Business Building */}
      <section className="w-full bg-background-surface flex justify-center py-16 md:py-24">
        <div className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col gap-4 text-left w-full max-w-[1000px]">
            {experienceBased.label && (
              <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-1">
                {experienceBased.label}
              </p>
            )}
            <h2 className="text-[28px] md:text-[36px] font-[700] tracking-tight text-primary">{experienceBased.title}</h2>
            <div className="text-[16px] md:text-[18px] font-[500] leading-[1.6] text-on-surface-variant break-keep">{experienceBased.subtitle}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-full">
            {experienceBased.cards.map((card, idx) => (
              <div 
                key={idx} 
                className="relative bg-white rounded-[12px] p-6 md:p-[28px] border border-border-subtle flex flex-col h-full overflow-hidden hover:border-primary/20 hover:bg-slate-50 transition-colors duration-200"
              >
                {/* Top border highlight */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
                
                {card.imagePlaceholder ? (
                  <div className="w-full aspect-video bg-gray-100 rounded-[8px] border border-gray-200 flex items-center justify-center text-gray-400 text-sm overflow-hidden shrink-0 mb-5">
                    <img src={card.imagePlaceholder} alt="" className="w-full h-full object-cover" />
                  </div>
                ) : card.icon ? (
                  <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] bg-slate-100 rounded-[10px] flex items-center justify-center text-primary mb-5 shrink-0">
                    {React.isValidElement(card.icon)
                      ? React.cloneElement(card.icon as React.ReactElement<any>, { className: "w-5 h-5 md:w-6 md:h-6 text-primary" })
                      : card.icon}
                  </div>
                ) : null}
                
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[17px] md:text-[19px] font-[700] text-primary leading-[1.3]">{card.title}</h3>
                  <div className="text-[14px] md:text-[15px] font-[400] leading-[1.6] text-on-surface-variant break-keep">
                    {card.description}
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Section 5: Focus Areas */}
      <section className="relative w-full bg-white flex justify-center py-16 md:py-24">
        <div className="relative z-10 w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col gap-10 md:gap-14">
          
          {/* Title Area */}
          <div className="flex flex-col gap-4 text-left w-full max-w-[1000px]">
            <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-1">
              {focusAreas.title}
            </p>
            <h2 className="text-[28px] md:text-[36px] font-[700] tracking-tight text-primary">
              {focusAreas.headline}
            </h2>
            <div className="text-[16px] md:text-[18px] font-[500] leading-[1.6] text-on-surface-variant break-keep">
              {focusAreas.description}
            </div>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
            {focusAreas.cards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-border-subtle rounded-[12px] p-[24px] md:p-[28px] flex flex-col text-left w-full h-full shadow-sm"
              >
                {/* Icon */}
                {card.icon && (
                  <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] bg-primary/5 rounded-[10px] flex items-center justify-center shrink-0 mb-5">
                    {React.isValidElement(card.icon)
                      ? React.cloneElement(card.icon as React.ReactElement<any>, { className: "w-5 h-5 md:w-6 md:h-6 text-primary" })
                      : card.icon}
                  </div>
                )}
                
                {/* Content */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[17px] md:text-[19px] font-[700] text-primary leading-[1.3]">
                    {card.title}
                  </h3>
                  <div className="text-[14px] md:text-[15px] font-[400] leading-[1.6] text-on-surface-variant break-keep">
                    {card.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Who We Work With */}
      <section className="w-full bg-slate-50 flex justify-center py-16 md:py-24">
        <div className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col gap-10 md:gap-14">
          
          {/* Section Introduction */}
          <div className="flex flex-col gap-4 text-left w-full max-w-[1000px]">
            {whoWeWorkWith.label && (
              <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-1">
                {whoWeWorkWith.label}
              </p>
            )}
            {!whoWeWorkWith.label && (
               <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-1">
                 {whoWeWorkWith.title}
               </p>
            )}
            <h2 className="text-[28px] md:text-[36px] font-[700] tracking-tight text-primary break-keep">
              {whoWeWorkWith.headline}
            </h2>
            <div className="text-[16px] md:text-[18px] font-[500] leading-[1.6] text-on-surface-variant break-keep">
              {whoWeWorkWith.description}
            </div>
          </div>
          
          {/* Groups */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 w-full">
            
            {/* GROUP A */}
            <div className="lg:col-span-8 flex flex-col h-full">
              {whoWeWorkWith.groups && whoWeWorkWith.groups[0] && (
                <div className="bg-slate-100/50 border border-slate-200/60 rounded-[16px] p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-6 md:mb-8 text-left">
                    <div className="inline-flex items-center text-[11px] md:text-[12px] font-[700] uppercase tracking-[0.1em] text-accent mb-2">
                      {whoWeWorkWith.groups[0].label}
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-[700] text-primary">
                      {whoWeWorkWith.groups[0].title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 flex-1">
                    {whoWeWorkWith.groups[0].cards.map((card, idx) => (
                      <div key={idx} className="bg-white border border-slate-200/60 rounded-[12px] p-[20px] md:p-[24px] flex flex-col text-left h-full">
                        <h4 className="text-[16px] md:text-[18px] font-[700] text-primary mb-2">
                          {card.title}
                        </h4>
                        <div className="text-[14px] md:text-[15px] font-[400] leading-[1.6] text-on-surface-variant break-keep">
                          {card.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* GROUP B */}
            <div className="lg:col-span-4 flex flex-col h-full">
              {whoWeWorkWith.groups && whoWeWorkWith.groups[1] && (
                <div className="bg-slate-100/50 border border-slate-200/60 rounded-[16px] p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-6 md:mb-8 text-left">
                    <div className="inline-flex items-center text-[11px] md:text-[12px] font-[700] uppercase tracking-[0.1em] text-accent mb-2">
                      {whoWeWorkWith.groups[1].label}
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-[700] text-primary">
                      {whoWeWorkWith.groups[1].title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5 flex-1">
                    {whoWeWorkWith.groups[1].cards.map((card, idx) => (
                      <div key={idx} className="bg-white border border-slate-200/60 rounded-[12px] p-[20px] md:p-[24px] flex flex-col text-left h-full">
                        <h4 className="text-[16px] md:text-[18px] font-[700] text-primary mb-2">
                          {card.title}
                        </h4>
                        <div className="text-[14px] md:text-[15px] font-[400] leading-[1.6] text-on-surface-variant break-keep">
                          {card.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
          
        </div>
      </section>

      {/* Section 7: Contact CTA */}
      <section className="relative w-full bg-background-surface flex justify-center py-16 md:py-24 overflow-hidden border-t border-slate-200/50">
        <div className="relative z-10 w-full max-w-[900px] px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center">
          
          {contact.label && (
            <div className="flex items-center justify-center gap-2 mb-4 md:mb-5">
              <span className="text-[12px] md:text-[14px] font-[600] tracking-[0.12em] text-[#D97706] uppercase">
                {contact.label}
              </span>
            </div>
          )}
          
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-[700] tracking-tight text-primary leading-[1.3] md:leading-[1.4] break-keep mb-4 md:mb-5">
            {contact.headline}
          </h2>
          
          <div className="text-[16px] md:text-[18px] font-[400] leading-[1.6] text-on-surface-variant break-keep mb-8 md:mb-10">
            {contact.description}
          </div>
          
          <a 
            href={contact.buttonLink}
            className="h-[48px] md:h-[52px] px-[32px] md:px-[40px] bg-primary text-white font-[600] text-[15px] md:text-[16px] rounded-full hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group"
          >
            {contact.buttonText}
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          
        </div>
      </section>
    </div>
  );
}
