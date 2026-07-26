import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface WhyThisMattersCard {
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

export interface FocusAreaCard {
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

export interface RelatedSolutionCard {
  icon: ReactNode;
  title: string;
  description: ReactNode;
  linkTo: string;
}

export interface BusinessFocusTemplateProps {
  hero: {
    backgroundImageUrl: string;
    label?: ReactNode;
    title: ReactNode;
    subtitle: ReactNode;
    description: ReactNode;
    align?: "left" | "center";
    overlay?: string;
    backgroundPosition?: string;
    className?: string;
  };
  whyThisMatters: {
    label?: string;
    title: string;
    subtitle: ReactNode;
    cards: WhyThisMattersCard[];
  };
  evolutionMarketView: {
    label?: string;
    title: string;
    subtitle: ReactNode;
    imageSrc: string;
    imageAlt: string;
    description: ReactNode;
  };
  focusAreas: {
    label?: string;
    title: string;
    subtitle: ReactNode;
    cards: FocusAreaCard[];
  };
  perspective: {
    label?: string;
    title: string;
    description: ReactNode;
    quote: ReactNode;
  };
  relatedSolutions: {
    label?: string;
    title: string;
    cards: RelatedSolutionCard[];
  };
}

export function BusinessFocusTemplate({
  hero,
  whyThisMatters,
  evolutionMarketView,
  focusAreas,
  perspective,
  relatedSolutions,
}: BusinessFocusTemplateProps) {
  // Determine grid classes based on the number of cards
  const whyMattersGridCols = whyThisMatters.cards.length === 4 
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const isCenter = hero.align === "center";
  const heroBackground = hero.overlay 
    ? `${hero.overlay}, url('${hero.backgroundImageUrl}')`
    : (isCenter
      ? `radial-gradient(circle at center, rgba(10, 18, 33, 0.85) 0%, rgba(10, 18, 33, 0.4) 100%), url('${hero.backgroundImageUrl}')`
      : `linear-gradient(to right, rgba(10, 18, 33, 0.8), rgba(10, 18, 33, 0.2)), url('${hero.backgroundImageUrl}')`);

  return (
    <div className="flex-grow w-full flex flex-col items-center">
      {/* Section 1: Hero */}
      <section 
        className={`relative w-full min-h-[600px] flex items-center overflow-hidden bg-primary ${isCenter ? "justify-center" : ""} ${hero.className || ""}`}
        style={{ 
          backgroundImage: heroBackground, 
          backgroundSize: "cover", 
          ...(hero.backgroundPosition ? { backgroundPosition: hero.backgroundPosition } : (!hero.className ? { backgroundPosition: "center" } : {}))
        }}
      >
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32 relative z-10">
          <div className={`flex flex-col text-white ${isCenter ? "max-w-[1000px] mx-auto text-center items-center" : "max-w-[760px] lg:max-w-[840px]"}`}>
            {hero.label && (
              <p className="text-[13px] md:text-[14px] font-[600] uppercase tracking-[0.12em] text-[#D97706] mb-[16px] md:mb-[20px]">
                {hero.label}
              </p>
            )}
            <h1 className="font-bold tracking-tight text-white drop-shadow-sm mb-[24px] md:mb-[28px] break-keep text-[36px] sm:text-[42px] md:text-[52px] lg:text-[56px] xl:text-[60px] leading-[1.15] md:leading-[1.12]">
              {hero.title}
            </h1>
            <div className="font-[600] text-white/95 drop-shadow-sm mb-[24px] md:mb-[28px] break-keep text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.4]">
              {hero.subtitle}
            </div>
            
            <div className={`font-[400] text-white/90 drop-shadow-sm break-keep text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] md:leading-[1.7] ${isCenter ? "line-clamp-3 md:line-clamp-none" : "max-w-[760px]"}`}>
              {hero.description}
            </div>
          </div>
        </div>
      </section>
      {/* Section 2: Why This Matters */}
      <section className="w-full bg-background-surface flex justify-center py-section-gap-mobile md:py-section-gap-desktop">
        <div className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col gap-12 md:gap-16">
          <div className="text-left flex flex-col gap-4 w-full">
            {whyThisMatters.label && (
              <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-1">
                {whyThisMatters.label}
              </p>
            )}
            <h2 className="text-[28px] md:text-[36px] font-[700] tracking-tight text-primary w-full max-w-none break-keep text-balance">{whyThisMatters.title}</h2>
            {whyThisMatters.subtitle && <div className="text-[18px] md:text-[20px] font-[600] leading-[1.4] text-on-surface-variant max-w-3xl">{whyThisMatters.subtitle}</div>}
          </div>

          <div className={`grid ${whyMattersGridCols} gap-8 md:gap-10 lg:gap-12`}>
            {whyThisMatters.cards.map((card, idx) => (
              <div key={idx} className="flex flex-col text-left border-t border-primary/20 pt-6">
                <div className="flex items-center justify-between mb-4 md:mb-5">
                  <span className="text-[14px] md:text-[15px] font-[600] text-[#D97706] tracking-[0.1em]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center opacity-80 text-primary">
                    {card.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:gap-4">
                  <h3 className="text-[20px] md:text-[22px] font-[700] text-primary">{card.title}</h3>
                  <div className="text-[15px] md:text-[16px] font-[400] leading-[1.65] text-on-surface-variant break-keep">
                    {card.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 3: Market View */}
      <section className="w-full bg-white flex justify-center py-section-gap-mobile md:py-section-gap-desktop">
        <div className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col gap-10 md:gap-12">
          
          <div className="flex flex-col gap-4 w-full text-left max-w-3xl">
            {evolutionMarketView.label && (
              <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-1">
                {evolutionMarketView.label}
              </p>
            )}
            <h2 className="text-[28px] md:text-[36px] font-[700] tracking-tight text-primary break-keep text-balance">
              {evolutionMarketView.title}
            </h2>
            {evolutionMarketView.subtitle && (
              <div className="text-[18px] md:text-[20px] font-[600] leading-[1.4] text-on-surface-variant max-w-2xl">
                {evolutionMarketView.subtitle}
              </div>
            )}
          </div>
          
          <div className="w-full flex flex-col">
            <figure className="w-full m-0 bg-slate-50 border border-[#E2E8F0] rounded-[12px] shadow-sm flex flex-col overflow-hidden">
              {evolutionMarketView.imageSrc && (
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full flex flex-col items-center">
                  <img 
                    alt={evolutionMarketView.imageAlt} 
                    className="w-full h-auto object-contain" 
                    src={evolutionMarketView.imageSrc} 
                    loading="lazy" 
                    decoding="async" 
                  />
                  
                  <div className="mt-4 md:mt-6 w-full flex justify-end">
                    <a 
                      href={evolutionMarketView.imageSrc} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={evolutionMarketView.imageAlt}
                      className="inline-flex items-center text-[13px] md:text-[14px] font-[500] text-primary/70 hover:text-primary transition-colors"
                    >
                      원본 크게 보기 ↗
                    </a>
                  </div>
                </div>
              )}
              
              <figcaption className="w-full bg-white border-t border-[#E2E8F0] p-5 sm:p-6 md:p-8 lg:p-10 text-left flex flex-col md:flex-row gap-3 md:gap-8 lg:gap-12">
                <div className="md:w-[140px] shrink-0 pt-1">
                  <span className="text-[12px] md:text-[13px] font-[700] tracking-[0.1em] text-[#D97706] uppercase">
                    TRANSITION PRINCIPLE
                  </span>
                </div>
                <div className="w-full max-w-[960px]">
                  <div className="text-[15px] md:text-[16px] lg:text-[17px] font-[400] leading-[1.75] text-on-surface-variant break-keep text-pretty">
                    {evolutionMarketView.description}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* Section 4: Focus Areas */}
      <section className="w-full bg-background-surface flex flex-col items-center py-14 md:py-20 lg:py-24 gap-10 md:gap-14 lg:gap-16">
        {/* Header Rail */}
        <div className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col text-left mx-auto">

          
          <div className="flex flex-col gap-4 text-left w-full max-w-3xl">
            {focusAreas.label && (
              <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-1">
                {focusAreas.label}
              </p>
            )}
            <h2 className="text-[28px] md:text-[36px] font-[700] tracking-tight text-primary break-keep text-balance">
              {focusAreas.title}
            </h2>
            {focusAreas.subtitle && (
              <div className="text-[18px] md:text-[20px] font-[600] leading-[1.4] text-on-surface-variant break-keep text-pretty max-w-2xl">
                {focusAreas.subtitle}
              </div>
            )}
          </div>

          
        </div>
        {/* Wide Content Rail */}
        <div className="w-full max-w-[1440px] px-margin-mobile md:px-margin-desktop mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 ${focusAreas.cards.length === 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-5'} w-full border-t border-b border-[#E2E8F0] bg-[#E2E8F0] gap-[1px]`}>
            {focusAreas.cards.map((card, idx) => {
              const isFifthItem = idx === 4 && focusAreas.cards.length === 5;
              return (
                <div 
                  key={idx} 
                  className={`bg-white p-6 sm:p-8 lg:p-10 flex flex-col text-left h-full ${isFifthItem ? 'md:col-span-2 xl:col-span-1' : ''}`}
                >
                  <div className="flex flex-col gap-5 md:gap-6 mb-10 md:mb-14">
                    <span className="text-[13px] md:text-[14px] font-[700] text-[#D97706] tracking-[0.15em] uppercase">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center justify-start opacity-90">
                      {card.icon}
                    </div>
                  </div>
                  
                  <div className={`flex flex-col gap-3 md:gap-4 ${isFifthItem ? 'md:max-w-[60%] lg:max-w-[50%] xl:max-w-none' : ''}`}>
                    <h3 className="text-[18px] md:text-[20px] font-[700] text-primary break-keep">
                      {card.title}
                    </h3>
                    <div className="text-[15px] md:text-[16px] font-[400] leading-[1.65] text-on-surface-variant break-keep text-pretty">
                      {card.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      {/* Section 5: Perspective */}
      <section className="w-full bg-white flex justify-center py-16 md:py-20 lg:py-24 border-t border-[#E2E8F0]">
        <div className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-10 md:gap-14 lg:gap-20">
            {/* Left Column */}
            <div className="w-full lg:w-[35%] flex flex-col gap-3 md:gap-4 shrink-0">
              {perspective.label && (
                <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706]">
                  {perspective.label}
                </p>
              )}
              {perspective.title && (
                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-[700] tracking-tight text-primary break-keep text-balance">
                  {perspective.title}
                </h2>
              )}
            </div>
            
            {/* Right Column */}
            <div className="w-full lg:w-[65%] flex flex-col gap-10 md:gap-12 max-w-[820px]">
              {perspective.description && (
                <div className="text-[16px] md:text-[17px] font-[400] leading-[1.8] text-on-surface-variant break-keep text-pretty">
                  {perspective.description}
                </div>
              )}
              {perspective.quote && (
                <blockquote className="w-full bg-primary text-white p-6 sm:p-8 md:p-10 lg:p-12 relative flex flex-col rounded-sm">
                  <div className="w-10 md:w-12 h-1 md:h-[5px] bg-[#D97706] mb-6 md:mb-8"></div>
                  <div className="text-[18px] md:text-[22px] lg:text-[26px] font-[600] leading-[1.5] break-keep text-balance">
                    {perspective.quote}
                  </div>
                </blockquote>
              )}
            </div>
          </div>
          
        </div>
      </section>
      {/* Section 6: Related Solutions */}
      <section className="w-full bg-background-surface flex flex-col items-center py-16 md:py-20 lg:py-24 gap-10 lg:gap-12">
        {/* Header Rail */}
        <div className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col gap-3 md:gap-4 mx-auto">
          {relatedSolutions.label && (
            <div className="flex flex-col gap-3">
              <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706]">
                {relatedSolutions.label}
              </p>
              <div className="w-10 h-[3px] bg-accent"></div>
            </div>
          )}
          {relatedSolutions.title && (
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-[700] tracking-tight text-primary break-keep text-balance mt-2">
              {relatedSolutions.title}
            </h2>
          )}
        </div>
        
        {/* Wide Content Rail */}
        <div className="w-full max-w-[1440px] px-margin-mobile md:px-margin-desktop mx-auto">
          {relatedSolutions.cards.length === 1 ? (
            // 1 item Layout
            <Link 
              to={relatedSolutions.cards[0].linkTo} 
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10 p-6 lg:p-8 hover:bg-black/[0.03] transition-colors rounded-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full border-y border-border-subtle"
            >
              <div className="flex items-center gap-5 lg:w-[35%] shrink-0">
                <div className="flex items-center justify-center text-accent [&_svg]:!text-accent shrink-0">
                  {relatedSolutions.cards[0].icon}
                </div>
                <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-[700] text-primary group-hover:text-accent transition-colors break-keep">
                  {relatedSolutions.cards[0].title}
                </h3>
              </div>
              
              <div className="text-[16px] md:text-[17px] font-[400] leading-[1.65] text-on-surface-variant break-keep lg:w-[45%]">
                {relatedSolutions.cards[0].description}
              </div>
              
              <div className="flex items-center gap-2 text-[15px] font-[600] text-accent lg:w-[15%] lg:justify-end mt-2 lg:mt-0 whitespace-nowrap">
                자세히 보기
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ) : (
            // 2 items Layout
            <div className="flex flex-col lg:flex-row border-y border-border-subtle">
              {relatedSolutions.cards.map((card, idx) => (
                <Link 
                  key={idx} 
                  to={card.linkTo} 
                  className={`group flex flex-col gap-5 p-6 lg:p-10 hover:bg-black/[0.03] transition-colors rounded-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full lg:w-1/2 ${idx === 0 ? 'border-b lg:border-b-0 lg:border-r border-border-subtle' : ''}`}
                >
                  <div className="flex items-center gap-5">
                    <div className="flex items-center justify-center text-accent [&_svg]:!text-accent shrink-0">
                      {card.icon}
                    </div>
                    <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-[700] text-primary group-hover:text-accent transition-colors break-keep">
                      {card.title}
                    </h3>
                  </div>
                  
                  <div className="text-[16px] md:text-[17px] font-[400] leading-[1.65] text-on-surface-variant break-keep flex-grow">
                    {card.description}
                  </div>
                  
                  <div className="mt-4 sm:mt-auto pt-4 sm:pt-6 flex items-center justify-end gap-2 text-[15px] font-[600] text-accent">
                    자세히 보기
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
