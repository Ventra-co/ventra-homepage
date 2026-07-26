import React, { ReactNode } from "react";

export function StepperWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mt-16 lg:mt-[72px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(27,45,83,0.06)] px-5 py-6 lg:p-[48px] w-full max-w-[1280px] mx-auto">
      <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-2">
        {/* Desktop Connector Line */}
        <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-[#CBD5E1] z-0"></div>
        {/* Mobile Connector Line */}
        <div className="block lg:hidden absolute left-[38px] top-[38px] bottom-[38px] w-[1px] bg-[#CBD5E1] z-0"></div>
        
        {children}
      </div>
    </div>
  );
}

export interface StepperItemProps {
  num: string;
  title: ReactNode;
  desc: ReactNode;
}

export const StepperItem: React.FC<StepperItemProps> = ({ num, title, desc }) => {
  return (
    <div className="relative z-10 flex-1 flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group p-4 lg:pt-6 lg:pb-8 lg:px-4 transition-all duration-[180ms] ease-in-out hover:-translate-y-[3px] rounded-[12px] hover:bg-[#F8FAFC]">
      <div className="flex-shrink-0 w-[44px] h-[44px] lg:w-[48px] lg:h-[48px] bg-[#1B2D53] text-[#FFFFFF] font-[700] text-[13px] lg:text-[14px] rounded-full flex items-center justify-center transition-all duration-[180ms] group-hover:ring-2 group-hover:ring-[#D97706] group-hover:ring-offset-2 group-hover:ring-offset-white">
        {num}
      </div>
      <div className="flex-1 ml-5 lg:ml-0 lg:mt-[24px]">
        <h3 className="text-[18px] lg:text-[20px] xl:text-[22px] font-[700] text-[#1B2D53] mb-2 md:mb-3">{title}</h3>
        <p className="text-[15px] lg:text-[16px] text-[#475569] leading-[1.6] lg:leading-[1.7] break-keep">{desc}</p>
      </div>
    </div>
  );
}
