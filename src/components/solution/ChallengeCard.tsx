import React, { ReactNode } from "react";

export interface ChallengeCardProps {
  icon: ReactNode;
  title: ReactNode;
  desc: ReactNode;
  className?: string;
  variant?: "default" | "simmsChallenge";
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ 
  icon, 
  title, 
  desc, 
  className = "",
  variant = "default"
}) => {
  const isSimms = variant === "simmsChallenge";

  if (isSimms) {
    return (
      <div className={`bg-white border border-[#E2E8F0] border-t-[3px] border-t-[#0D9488] p-6 lg:p-8 rounded-[12px] shadow-[0_2px_8px_rgba(27,45,83,0.03)] hover:shadow-[0_4px_16px_rgba(27,45,83,0.06)] hover:border-[#CBD5E1] transition-all duration-[200ms] ease-in-out hover:-translate-y-[2px] motion-reduce:transform-none motion-reduce:transition-none flex flex-col gap-4 lg:gap-5 cursor-default ${className}`}>
        <div className="w-[52px] h-[52px] bg-[#F0FDF4] text-[#1B2D53] rounded-[12px] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#CCFBF1]">
          {icon}
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <h3 className="text-[19px] md:text-[21px] font-[700] text-[#1B2D53] text-left break-keep">
            {title}
          </h3>
          <p className="text-[15px] md:text-[16px] text-[#475569] leading-[1.75] break-keep text-left">
            {desc}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-[#E2E8F0] p-6 md:p-8 rounded-[12px] shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all duration-[180ms] ease-in-out hover:-translate-y-1 flex flex-col gap-4 ${className}`}>
      <div className="w-[52px] h-[52px] bg-[#F1F5F9] text-[#1B2D53] rounded-[12px] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <h3 className="text-[20px] font-[700] text-primary text-left">{title}</h3>
      <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep text-left">{desc}</p>
    </div>
  );
}
