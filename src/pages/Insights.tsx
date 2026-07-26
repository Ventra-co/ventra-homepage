import React from "react";
import { SeoMeta } from "../components/seo/SeoMeta";

export function Insights() {
  return (
    <div className="w-full flex flex-col bg-surface-container-lowest">
      <SeoMeta
        title="Insights | Ventra"
        description="Ventra Insights — 준비 중입니다."
        canonicalPath="/insights"
        robots="noindex, nofollow"
      />
      {/* SECTION 1 | HERO */}
      <section 
        className="w-full min-h-[500px] md:min-h-[600px] flex items-center relative overflow-hidden bg-[#1B2D53] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827] to-[#1B2D53]/80"></div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 py-16 md:py-24">
          <div className="max-w-[850px] text-left">
            <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-[700] leading-[1.1] tracking-tight text-white drop-shadow-sm mb-6 break-keep">
              IT 실무형 인사이트 공간
            </h1>
            <p className="text-[15px] md:text-[16px] text-white/80 leading-[1.6] break-keep mb-10">
              Ventra Insights는 고객이 다음 검토 방향을 구체화할 수 있도록 시장과 기술의 변화, 현장 경험에 기반한 의사결정 기준, 실행 과정에서 확인해야 할 핵심 내용을 지속적으로 축적하는 실무 콘텐츠 공간입니다.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span className="px-4 py-2 rounded-[999px] border border-white/20 bg-white/5 text-white/90 text-[13px] md:text-[14px] font-[500]">Market View</span>
              <span className="px-4 py-2 rounded-[999px] border border-white/20 bg-white/5 text-white/90 text-[13px] md:text-[14px] font-[500]">Decision Criteria</span>
              <span className="px-4 py-2 rounded-[999px] border border-white/20 bg-white/5 text-white/90 text-[13px] md:text-[14px] font-[500]">Execution Notes</span>
              <span className="px-4 py-2 rounded-[999px] border border-white/20 bg-white/5 text-white/90 text-[13px] md:text-[14px] font-[500]">Practical IT Decisions</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 | INSIGHTS STRUCTURE */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-3 md:mb-4">INSIGHTS STRUCTURE</p>
            <h2 className="text-[28px] md:text-[36px] font-[700] text-primary tracking-tight break-keep">
              3가지 관점으로 IT 전환 이슈를 정리합니다
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-[12px] flex flex-col shadow-sm">
              <div className="text-[12px] md:text-[13px] font-[600] text-accent tracking-wider uppercase mb-4">Market Map</div>
              <h3 className="text-[18px] md:text-[20px] font-[700] text-primary mb-4 break-keep">시장이 어떻게 바뀌고 있는가?</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                AI, Observability, API / Integration, Security Automation 등 주요 기술 시장의 변화와 Enterprise 고객이 주목해야 할 흐름을 정리합니다.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-[12px] flex flex-col shadow-sm">
              <div className="text-[12px] md:text-[13px] font-[600] text-accent tracking-wider uppercase mb-4">Decision Matrix</div>
              <h3 className="text-[18px] md:text-[20px] font-[700] text-primary mb-4 break-keep">무엇을 우선 선택해야 하는가?</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                기술을 도입하기 전에 비교해야 할 기준, 선택 시 고려할 제약, 고객 환경별 우선순위를 정리합니다.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-[12px] flex flex-col shadow-sm">
              <div className="text-[12px] md:text-[13px] font-[600] text-accent tracking-wider uppercase mb-4">Execution Playbook</div>
              <h3 className="text-[18px] md:text-[20px] font-[700] text-primary mb-4 break-keep">어떻게 실행 준비를 할 것인가?</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                PoC 범위 정의, 내부 보고 논리, 적용 우선순위, 파트너 협업 구조 등 실제 실행 준비에 필요한 체크포인트를 정리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 | INSIGHT BOARD */}
      <section className="py-16 md:py-20 lg:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-3 md:mb-4">INSIGHT BOARD</p>
              <h2 className="text-[28px] md:text-[36px] font-[700] text-primary tracking-tight mb-2 break-keep">Ventra Insight Board</h2>
              <p className="text-[16px] text-on-surface-variant break-keep">IT 전환 판단에 필요한 프롬프트와 실무 인사이트를 공유합니다</p>
            </div>
            <div className="text-[14px] font-[500] text-on-surface-variant/70 whitespace-nowrap mb-[2px]">
              0 insights
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 pb-4 border-b border-[#E2E8F0]">
            <span className="px-4 py-2 rounded-[999px] border border-[#E2E8F0] bg-[#F1F5F9] text-[#94A3B8] text-[13px] md:text-[14px] font-[500] cursor-not-allowed select-none" aria-disabled="true">전체</span>
            <span className="px-4 py-2 rounded-[999px] border border-[#E2E8F0] bg-[#F1F5F9] text-[#94A3B8] text-[13px] md:text-[14px] font-[500] cursor-not-allowed select-none" aria-disabled="true">Market Map</span>
            <span className="px-4 py-2 rounded-[999px] border border-[#E2E8F0] bg-[#F1F5F9] text-[#94A3B8] text-[13px] md:text-[14px] font-[500] cursor-not-allowed select-none" aria-disabled="true">Decision Matrix</span>
            <span className="px-4 py-2 rounded-[999px] border border-[#E2E8F0] bg-[#F1F5F9] text-[#94A3B8] text-[13px] md:text-[14px] font-[500] cursor-not-allowed select-none" aria-disabled="true">Execution Playbook</span>
          </div>

          <div className="py-20 text-center flex flex-col items-center bg-[#F8FAFC] rounded-[12px] border border-[#E2E8F0] border-dashed">
            <div className="w-16 h-16 bg-white rounded-[999px] flex items-center justify-center mb-6 shadow-sm border border-[#E2E8F0]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="text-[20px] md:text-[24px] font-[700] text-primary mb-3 break-keep">인사이트 콘텐츠를 준비하고 있습니다</h3>
            <p className="text-[15px] md:text-[16px] text-on-surface-variant max-w-[500px] leading-[1.6] break-keep px-4">
              IT 전환 판단에 필요한 프롬프트, 기술 선택 기준, 실행 체크포인트를 단계적으로 추가할 예정입니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 | VENTRA PERSPECTIVE */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 text-center">
          <div className="max-w-[800px] mx-auto">
            <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-3 md:mb-4">VENTRA PERSPECTIVE</p>
            <h2 className="text-[28px] md:text-[36px] font-[700] text-primary tracking-tight mb-8 break-keep">
              Insights for Practical IT Decisions
            </h2>
            <p className="text-[18px] md:text-[22px] text-on-surface-variant leading-[1.75] break-keep">
              Ventra Insights는 정답을 제시하기보다, 고객이 스스로 판단할 수 있는 시장 관점과 검토 구조를 제공합니다. 시장 변화, 기술 선택, 실행 준비를 연결해 고객의 다음 검토 방향을 함께 정리합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
