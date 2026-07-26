import { Link } from "react-router-dom";
import { INSIGHTS_ENABLED } from "../../config/features";
import ventraLogoWhite from "../../../ventra-logo-white-master.png";

export function Footer({ onOpenContact }: { onOpenContact?: () => void }) {
  return (
    <footer className="w-full bg-footer-dark text-white font-sans">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] lg:px-[80px] pt-[56px] pb-[28px]">
        
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center">
          
          {/* 1. Brand (Mobile: order-1, Desktop: order-1) */}
          <div className="w-full md:w-[32%] order-1 flex flex-col items-start md:self-start">
            <Link to="/">
              <img 
                alt="VENTRA Logo" 
                className="w-[140px] md:w-[160px] lg:w-[180px] h-auto object-contain" 
                src={ventraLogoWhite} 
              />
            </Link>
            <p className="mt-[16px] text-[14px] text-[#94A3B8] font-normal tracking-wide">
              Transform your IT, Venture Beyond.
            </p>
          </div>

          {/* 2. Contact (Mobile: order-2, Desktop: order-4) */}
          <div className="w-full md:w-auto order-2 md:order-4 flex flex-col md:flex-row items-start md:items-center gap-y-4 gap-x-[36px] lg:gap-x-[40px] text-[14px] font-normal leading-[1.5] text-[#94A3B8] mt-[32px] md:mt-0">
            <a className="flex items-center gap-[10px] hover:text-white transition-colors min-h-[44px] md:min-h-0" href="mailto:sales@ventra.co.kr?subject=%5BVentra%20%EB%AC%B8%EC%9D%98%5D%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%AC%B8%EC%9D%98">
              <span className="material-symbols-outlined text-[20px] md:text-[22px]">mail</span>
              sales@ventra.co.kr
            </a>
            <div className="flex items-start md:items-center gap-[10px] min-h-[44px] md:min-h-0">
              <span className="material-symbols-outlined text-[20px] md:text-[22px] shrink-0 mt-[11px] md:mt-0">location_on</span>
              <span className="break-keep mt-[11px] md:mt-0">804, Hanshin IT Tower II, 47 Digital-ro 9-gil, Geumcheon-gu, Seoul, Republic of Korea</span>
            </div>
          </div>

          {/* 3. Menu (Mobile: order-3, Desktop: order-2) */}
          <div className="w-full md:w-[68%] order-3 md:order-2 flex md:justify-end mt-[48px] md:mt-0 md:self-start">
            <div className="flex flex-col md:flex-row gap-y-[40px] gap-x-[28px] lg:gap-x-[48px] text-[14px] font-semibold tracking-[0.04em] text-[#94A3B8] w-full md:w-auto">
              
              <div className="flex flex-col gap-0 md:gap-[16px]">
                <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer uppercase" to="/">Home</Link>
                <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer uppercase" to="/about">About</Link>
                {INSIGHTS_ENABLED && (
                  <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer uppercase" to="/insights">Insights</Link>
                )}
                <button onClick={onOpenContact} className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer uppercase text-left">Contact</button>
              </div>
              
              <div className="flex flex-col gap-[4px] md:gap-[20px]">
                <span className="uppercase text-white cursor-default">Business Focus</span>
                <div className="flex flex-col gap-0 md:gap-[16px]">
                  <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer text-[13px] font-normal normal-case tracking-normal" to="/business-focus/observability-optimization">Observability / Optimization</Link>
                  <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer text-[13px] font-normal normal-case tracking-normal" to="/business-focus/security-automation">Security / Automation</Link>
                  <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer text-[13px] font-normal normal-case tracking-normal" to="/business-focus/api-integration">API / Integration</Link>
                  <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer text-[13px] font-normal normal-case tracking-normal" to="/business-focus/business-building">Business Building Consulting</Link>
                </div>
              </div>

              <div className="flex flex-col gap-[4px] md:gap-[20px]">
                <span className="uppercase text-white cursor-default">Solutions</span>
                <div className="flex flex-col gap-0 md:gap-[16px]">
                  <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer text-[13px] font-normal normal-case tracking-normal" to="/solutions/uclm">UCLM</Link>
                  <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer text-[13px] font-normal normal-case tracking-normal" to="/solutions/jennifer-ai-operations">JENNIFER AI Operations</Link>
                  <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer text-[13px] font-normal normal-case tracking-normal" to="/solutions/felice-kafka-operations">Felice</Link>
                  <Link className="min-h-[44px] flex items-center md:min-h-0 md:inline-flex hover:text-white transition-colors cursor-pointer text-[13px] font-normal normal-case tracking-normal" to="/solutions/simms-itm">SIMMS-ITM</Link>
                </div>
              </div>

            </div>
          </div>

          {/* 4. Divider (Mobile: order-4, Desktop: order-3) */}
          <div className="w-full h-[1px] bg-[#94A3B8] opacity-20 order-4 md:order-3 my-[32px] md:mt-[40px] md:mb-[28px]"></div>
          
          {/* 5. Copyright (Mobile: order-5, Desktop: order-5) */}
          <div className="w-full md:w-auto order-5 md:order-5 text-[13px] font-medium text-[#64748B]">
            © VENTRA Inc. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
