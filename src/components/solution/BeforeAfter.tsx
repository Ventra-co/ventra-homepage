import React, { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function BeforeAfterWrapper({ 
  children, 
  hideConnector = false,
  variant = "default"
}: { 
  children: ReactNode; 
  hideConnector?: boolean;
  variant?: "default" | "feliceDataFlow";
}) {
  const isFelice = variant === "feliceDataFlow";

  return (
    <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
      {/* Background connector line for felice */}
      {isFelice && (
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#3182CE]/30 to-[#00B5D8]/30 z-0 pointer-events-none" aria-hidden="true" />
      )}

      {children}
      
      {!hideConnector && !isFelice && (
        <>
          {/* Desktop Connector Default */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-full items-center justify-center z-10 shadow-[0_2px_8px_rgba(27,45,83,0.04)]">
            <ArrowRight className="w-5 h-5 text-[#D97706]" aria-hidden="true" />
          </div>

          {/* Mobile Connector Default */}
          <div className="flex lg:hidden justify-center -my-3 relative z-10">
             <div className="w-[40px] h-[40px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(27,45,83,0.04)]">
                <ArrowRight className="w-5 h-5 text-[#D97706] rotate-90" aria-hidden="true" />
             </div>
          </div>
        </>
      )}

      {isFelice && (
        <>
           {/* Desktop Connector Felice */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-[#FFFFFF] border border-[#3182CE]/20 rounded-full items-center justify-center z-10 shadow-[0_4px_12px_rgba(49,130,206,0.12)] transition-colors duration-200">
            <ArrowRight className="w-5 h-5 text-[#3182CE]" aria-hidden="true" />
          </div>

          {/* Mobile Connector Felice */}
          <div className="flex lg:hidden justify-center -my-3 relative z-10">
             <div className="w-[36px] h-[36px] bg-[#FFFFFF] border border-[#3182CE]/20 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(49,130,206,0.12)]">
                <ArrowRight className="w-5 h-5 text-[#3182CE] rotate-90" aria-hidden="true" />
             </div>
          </div>
        </>
      )}
    </div>
  );
}

export interface BeforeAfterCardProps {
  type: "before" | "after";
  icon: ReactNode;
  title: ReactNode;
  desc: ReactNode;
  variant?: "default" | "feliceDataFlow";
}

export function BeforeAfterCard({ type, icon, title, desc, variant = "default" }: BeforeAfterCardProps) {
  const isBefore = type === "before";
  const isFelice = variant === "feliceDataFlow";
  
  const baseCardClasses = "flex-1 flex flex-col items-start text-left rounded-[12px] p-7 md:p-9 lg:p-[40px] relative z-10 transition-shadow duration-200";
  
  let cardClasses = "";
  let labelClasses = "text-[12px] md:text-[13px] font-[600] tracking-[0.08em] mb-4 md:mb-5";
  let iconContainerClasses = "w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center shrink-0";
  let titleClasses = "text-[22px] md:text-[24px] font-[700] leading-[1.3] break-keep";
  let descClasses = "text-[16px] md:text-[17px] leading-[1.7] break-keep";

  if (isFelice) {
    if (isBefore) {
      cardClasses = "bg-[#F1F5F9] border border-[#E2E8F0]";
      labelClasses += " text-[#64748B]";
      iconContainerClasses += " bg-[#E2E8F0] text-[#64748B]";
      titleClasses += " text-[#475569]";
      descClasses += " text-[#64748B]";
    } else {
      cardClasses = "bg-[#FFFFFF] border border-[#CBD5E1] border-t-[3px] border-t-[#1B2D53] shadow-[0_8px_24px_rgba(0,181,216,0.06)] hover:shadow-[0_8px_32px_rgba(0,181,216,0.1)]";
      labelClasses += " text-[#D97706]";
      iconContainerClasses += " bg-[#1B2D53] text-[#FFFFFF]";
      titleClasses += " text-[#1B2D53]";
      descClasses += " text-[#334155]";
    }
  } else {
    if (isBefore) {
      cardClasses = "bg-[#F8FAFC] border border-[#E2E8F0]";
      labelClasses += " text-[#64748B]";
      iconContainerClasses += " bg-[#E2E8F0] text-[#64748B]";
      titleClasses += " text-[#334155]";
      descClasses += " text-[#475569]";
    } else {
      cardClasses = "bg-[#FFFFFF] border border-[#1B2D53]/25 border-t-[3px] border-t-[#1B2D53] shadow-[0_8px_24px_rgba(27,45,83,0.08)]";
      labelClasses += " text-[#D97706]";
      iconContainerClasses += " bg-[#1B2D53] text-[#FFFFFF]";
      titleClasses += " text-[#1B2D53]";
      descClasses += " text-[#334155]";
    }
  }

  return (
    <div className={`${baseCardClasses} ${cardClasses}`}>
      <div className={labelClasses}>
        {isBefore ? "BEFORE" : "AFTER"}
      </div>
      <div className="flex items-center gap-4 mb-4 md:mb-5">
        <div className={iconContainerClasses}>
          {icon}
        </div>
        <h3 className={titleClasses}>
          {title}
        </h3>
      </div>
      <p className={descClasses}>
        {desc}
      </p>
    </div>
  );
}
