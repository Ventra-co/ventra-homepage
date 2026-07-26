import React, { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export interface CTAProps {
  href: string;
  text: string;
}

export function CTA({ href, text }: CTAProps) {
  return (
    <a 
      href={href}
      className="inline-flex items-center justify-center gap-3 bg-[#FFFFFF] text-[#1B2D53] px-8 py-4 rounded-[999px] font-[700] text-[16px] hover:bg-[#F8FAFC] hover:shadow-[0_2px_10px_rgba(255,255,255,0.1)] group transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D97706] focus:ring-offset-[#122A47]"
    >
      {text} <ArrowRight className="w-5 h-5 text-[#D97706] transition-transform duration-200 group-hover:translate-x-[3px]" />
    </a>
  );
}
