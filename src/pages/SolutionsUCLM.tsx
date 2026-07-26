import React from "react";
import { SolutionPageTemplate, SolutionSection } from "../components/SolutionPageTemplate";
import { 
  ChallengeCard, 
  StepperWrapper, 
  StepperItem, 
  BeforeAfterWrapper, 
  BeforeAfterCard, 
  CTA 
} from "../components/solution";
import uclmHeroBg from "../../solution-uclm-s1-hero-bg-v2.png";
import { SeoMeta } from "../components/seo/SeoMeta";
import {
  Timer, Search, Settings, Network, ShieldCheck, 
  Unlink, Check, ArrowRight, Landmark, Server, Cpu,
  Share2, Database, FileText, Scan, FileCheck, UploadCloud, Activity, ArrowDown, ChevronRight, ChevronDown, } from "lucide-react";

export function SolutionsUCLM() {
  return (
    <SolutionPageTemplate
      hero={{
        bgImage: uclmHeroBg,
        partnerLine: "한국기업보안 UCLM 기반 인증서 자동화",
        title: (
          <span className="block text-balance">
            47일 인증서 시대를 준비하는 운영 자동화
          </span>
        ),
        subtitle: (
          <span className="block text-pretty">
            인증서 검색·발급·배포·모니터링·감사 이력을 하나의 운영 흐름으로 연결합니다.
          </span>
        )
      }}
    >
      <SolutionSection bgClass="bg-[#F8FAFC]">
        <div className="w-full flex flex-col text-left mb-12 md:mb-14">
      <SeoMeta
        title="UCLM 인증서 수명주기 자동화 | Ventra"
        description="한국기업보안 UCLM 기반으로 SSL/TLS 인증서 검색, 발급, 배포, 갱신, 모니터링과 감사 이력을 연결해 인증서 운영 리스크를 줄입니다."
        canonicalPath="/solutions/uclm"
        schema={JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 3, "name": "UCLM 인증서 수명주기 자동화", "item": "https://ventra.co.kr/solutions/uclm" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "UCLM 인증서 수명주기 자동화 | Ventra",
      "url": "https://ventra.co.kr/solutions/uclm",
      "about": {
        "@type": "SoftwareApplication",
        "name": "UCLM",
        "applicationCategory": "Certificate Lifecycle Management",
        "provider": { "@type": "Organization", "name": "한국기업보안" }
      }
    }
  ])}
      />
          <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-3 md:mb-4">
            THE CHALLENGE
          </p>
          <h2 className="text-[28px] md:text-[36px] font-[700] tracking-tight text-[#1B2D53] mb-4 md:mb-5 text-balance break-keep">
            인증서 운영 리스크는 어디에서 발생합니까?
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#475569] leading-[1.65] max-w-[720px] lg:max-w-[700px] xl:max-w-[800px] break-keep text-pretty xl:text-balance">
            TLS 유효기간 단축과 인프라 분산으로 인증서 운영은 서비스 안정성과 보안 통제의 핵심 과제가 되고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
          {[
            { title: "짧아지는 갱신 주기", desc: "인증서 갱신 주기가 짧아질수록 수작업 갱신은 반복 업무와 장애 리스크를 키웁니다.", icon: <Timer /> },
            { title: "보이지 않는 인증서 현황", desc: "서버, 도메인, 네트워크 장비, 클라우드에 분산된 인증서는 위치와 상태를 파악하기 어렵습니다.", icon: <Search /> },
            { title: "발급 단계에서 멈추는 자동화", desc: "인증서 자동화는 설치만으로 끝나지 않습니다. CA 발급, 승인, 검증 단계가 남아 있으면 여전히 담당자 개입이 필요합니다.", icon: <Settings /> },
            { title: "폐쇄망·국산 인프라 적용 제약", desc: "금융·공공·제조 환경에서는 망분리, 국산 Web/WAS, 이중화 장비 등 실제 운영 환경에 맞는 검증이 필요합니다.", icon: <Network /> },
            { title: "감사와 신뢰 통제 요구 확대", desc: "인증서 운영은 만료 관리뿐 아니라 권한, 승인, 감사 로그, Machine Identity 신뢰 관리 영역으로 확장되고 있습니다.", icon: <ShieldCheck /> }
          ].map((c, idx) => {
            let colClass = "";
            if (idx === 0) colClass = "col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-1";
            else if (idx === 1) colClass = "col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-3";
            else if (idx === 2) colClass = "col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-5";
            else if (idx === 3) colClass = "col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-2";
            else if (idx === 4) colClass = "col-span-1 md:col-start-2 md:col-span-2 lg:col-span-2 lg:col-start-4";

            return (
              <article key={idx} className={`bg-white border border-[#E2E8F0] p-[24px] md:p-[32px] rounded-[12px] shadow-sm flex flex-col items-start ${colClass}`}>
                <div className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] bg-[#F1F5F9] rounded-[10px] flex items-center justify-center shrink-0 mb-5 md:mb-6">
                  {React.cloneElement(c.icon, { className: "w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-[#1B2D53]" })}
                </div>
                
                <div className="flex flex-col gap-3 md:gap-3.5 w-full">
                  <div className="flex flex-col gap-1.5 md:gap-2 w-full text-left">
                    <span className="text-[13px] md:text-[14px] font-[700] text-[#D97706] tracking-[0.05em] block">
                      0{idx + 1}
                    </span>
                    <h3 className="text-[19px] md:text-[21px] lg:text-[22px] font-[600] text-[#1B2D53] leading-[1.35] break-keep text-balance md:max-w-[12em] lg:max-w-none">
                      {c.title}
                    </h3>
                  </div>
                  
                  <p className="text-[15px] md:text-[16px] text-[#475569] leading-[1.65] break-keep text-pretty text-left md:max-w-[21em] lg:max-w-none">
                    {c.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </SolutionSection>

      <SolutionSection
        bgClass="bg-slate-50"
        pyClass="py-[64px] md:py-[88px] lg:py-[112px] xl:py-[120px]"
      >
        <div className="w-full flex flex-col text-left">
          {/* Header */}
          <div className="flex flex-col mb-12 md:mb-14">
            <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-[12px]">
              VENTRA APPROACH
            </p>
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-[700] leading-[1.25] text-[#1B2D53] max-w-[1100px] break-keep text-balance mb-[20px] lg:mb-[24px]">
              UCLM 기반으로 인증서 관리 전 과정을 연결합니다
            </h2>
            <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#475569] leading-[1.6] lg:leading-[1.7] max-w-[960px] xl:max-w-none break-keep text-pretty">
              인증서 자동화는 서버 설치만으로 끝나지 않습니다. 인증기관, CA 정책, 발급·승인, 배포, 모니터링, 감사 이력을 하나의 운영 체계로 연결해야 합니다.
            </p>
          </div>

          {/* Custom Stepper */}
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] shadow-[0_2px_8px_rgba(27,45,83,0.04)] px-[24px] py-[32px] md:px-[32px] md:py-[40px] lg:p-[48px] xl:p-[56px] w-full">
            <div className="relative flex flex-col lg:flex-row gap-[32px] lg:gap-0">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-[#CBD5E1] z-0"></div>
              {/* Mobile Connecting Line */}
              

              {[
                { num: "01", title: "Discover", desc: "분산된 인증서와 설치 위치를 확인합니다." },
                { num: "02", title: "Assess", desc: "만료 관리, CA 구조, 수작업 범위, 운영 리스크를 점검합니다." },
                { num: "03", title: "Validate", desc: "망분리, 국내 인프라, Agent / Agentless 적용 가능성을 검토합니다." },
                { num: "04", title: "Automate", desc: "검색, 발급, 배포, 모니터링 흐름을 자동화하고 인증기관 대응 체계까지 연결합니다." },
                { num: "05", title: "Govern", desc: "권한·승인·감사 이력을 관리하고 보안 통제 체계로 확장합니다." }
              ].map((step, idx) => (
                <div key={step.num} className="relative z-10 flex-1 flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center px-0 lg:px-4 xl:px-6">
                  {/* Mobile Connecting Line (per item) */}
                  {idx < 4 && (
                    <div className="block lg:hidden absolute left-[23px] md:left-[23px] top-[48px] bottom-[-32px] w-[1px] bg-[#CBD5E1] z-[-1]"></div>
                  )}
                  {/* Circle */}
                  <div className="flex-shrink-0 w-[48px] h-[48px] bg-[#1B2D53] text-[#FFFFFF] font-[700] text-[14px] rounded-full flex items-center justify-center relative">
                    {/* Hide line inside the circle by setting a background or it's just z-10 over the z-0 line */}
                    {step.num}
                  </div>
                  {/* Content */}
                  <div className="flex-1 ml-5 lg:ml-0 lg:mt-[24px]">
                    <h3 className="text-[18px] lg:text-[19px] xl:text-[20px] font-[600] text-[#1B2D53] mb-2">{step.title}</h3>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#475569] leading-[1.6] break-keep text-pretty">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        bgClass="bg-[#FFFFFF]"
        pyClass="py-[64px] md:py-[88px] lg:py-[112px]"
        label="BEFORE / AFTER"
        title={
          <span className="block text-[28px] md:text-[34px] lg:text-[40px] font-[700] leading-[1.25] text-[#1B2D53] break-keep text-balance">
            수동 인증서 관리에서 자동화 운영 체계로
          </span>
        }
      >
        <div className="flex flex-col gap-[32px] lg:gap-[40px] w-full max-w-[1280px] mx-auto">
          {/* Comparison Cards Grid */}
          <div className="flex flex-col md:flex-row items-stretch w-full gap-0">
            {/* Before Card */}
            <div className="flex-1 flex flex-col items-start bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] p-[24px] md:p-[32px] lg:p-[40px] shadow-sm">
              <span className="text-[12px] md:text-[13px] font-[700] tracking-[0.08em] text-[#64748B] mb-[20px] md:mb-[24px]">
                BEFORE
              </span>
              <div className="flex flex-col gap-[12px] md:gap-[16px] w-full">
                <h3 className="text-[20px] md:text-[22px] font-[700] text-[#334155] leading-[1.3] break-keep text-balance">
                  수동 인증서 관리
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#475569] leading-[1.65] break-keep text-pretty w-full xl:pr-[12px]">
                  인증서는 흩어져 있고, 발급·설치·검증은 담당자 경험과 수작업에 의존합니다. 장애나 CA 이슈가 발생한 뒤에야 누락과 만료 리스크가 확인되는 경우가 많습니다.
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex flex-col md:flex-row items-center justify-center shrink-0 w-full md:w-[60px] lg:w-[80px] py-[16px] md:py-0" aria-hidden="true">
              {/* Desktop/Tablet Connector (Right Arrow) */}
              <div className="hidden md:flex items-center w-full justify-center">
                <div className="h-[1px] bg-[#CBD5E1] w-full max-w-[24px] lg:max-w-[40px]"></div>
                <ArrowRight className="w-[16px] h-[16px] -ml-[2px] text-[#CBD5E1]" strokeWidth={2} />
              </div>
              {/* Mobile Connector (Down Arrow) */}
              <div className="flex md:hidden flex-col items-center justify-center h-[28px] md:h-[36px]">
                <div className="w-[1px] bg-[#CBD5E1] h-full max-h-[20px] md:max-h-[24px]"></div>
                <ArrowDown className="w-[16px] h-[16px] -mt-[2px] text-[#CBD5E1]" strokeWidth={2} />
              </div>
            </div>

            {/* After Card */}
            <div className="flex-1 flex flex-col items-start bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] p-[24px] md:p-[32px] lg:p-[40px] shadow-sm">
              <span className="text-[12px] md:text-[13px] font-[700] tracking-[0.08em] text-[#D97706] mb-[20px] md:mb-[24px]">
                AFTER
              </span>
              <div className="flex flex-col gap-[12px] md:gap-[16px] w-full">
                <h3 className="text-[20px] md:text-[22px] font-[700] text-[#1B2D53] leading-[1.3] break-keep text-balance">
                  자동화 운영 체계
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#334155] leading-[1.65] break-keep text-pretty w-full xl:pr-[12px]">
                  UCLM 기반으로 인증서 현황, 발급, 배포, 모니터링, 감사 이력을 하나의 운영 흐름으로 연결합니다. 인증기관 대응 체계와 권한·승인·감사 로그를 함께 관리해 보안 통제 체계로 확장합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Key Changes Flow Map */}
          <div className="w-full flex flex-col gap-[16px] md:gap-[20px]">
            <div className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-[#D97706]">
              KEY CHANGES
            </div>
            
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] px-[20px] py-[24px] md:px-[32px] md:py-[28px] lg:px-[40px] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-[8px] md:gap-[12px] lg:gap-[24px]">
              {[
                "현황 가시화",
                "발급·갱신 자동화",
                "배포 누락 방지",
                "CA 대응 체계",
                "감사 증적 확보"
              ].map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="text-[15px] md:text-[16px] font-[600] text-[#1B2D53] break-keep flex-1 flex items-center justify-start md:justify-center text-left md:text-center w-full md:w-auto">
                    {step}
                  </div>
                  {idx < 4 && (
                    <div className="hidden md:flex items-center text-[#94A3B8] shrink-0" aria-hidden="true">
                      <ChevronRight className="w-[16px] h-[16px] text-[#CBD5E1]" strokeWidth={2} />
                    </div>
                  )}
                  {idx < 4 && (
                    <div className="flex md:hidden items-center text-[#94A3B8] h-[24px] pl-[4px] shrink-0" aria-hidden="true">
                      <ChevronDown className="w-[16px] h-[16px] text-[#CBD5E1]" strokeWidth={2} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        bgClass="bg-[#122A47]"
        label="SOLUTION OVERVIEW"
        darkTitle={true}
        title={
          <span className="block text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px] font-[700] leading-[1.15] md:leading-[1.25] text-white break-keep text-balance">
            한국기업보안 UCLM
          </span>
        }
      >
        <div className="flex flex-col relative z-10 w-full max-w-[1280px] mx-auto -mt-2 md:-mt-4">
          {/* Body Copy */}
          <div className="max-w-[920px] lg:max-w-[1040px]">
            <p className="text-[15px] md:text-[17px] lg:text-[18px] text-[#E2E8F0] leading-[1.7] break-keep text-pretty">
              Ventra는 한국기업보안 UCLM 기반으로 인증서 검색, 발급, 배포, 모니터링, 감사 이력을 하나의 운영 흐름으로 연결합니다. 고객의 CA 구조, 인프라 환경, 망분리 제약을 고려해 인증기관까지 포함한 인증서 관리 생태계와 적용 가능한 자동화 구조를 함께 정리합니다.
            </p>
          </div>

          {/* Enterprise Fit -> UCLM 핵심 장점 */}
          <div className="mt-[28px] md:mt-[32px] lg:mt-[36px] flex flex-col items-center">
            <h3 className="text-[17px] md:text-[18px] lg:text-[20px] font-[700] text-[#FFFFFF] leading-[1.4] mb-[12px] md:mb-[16px] text-center break-keep">
              UCLM 핵심 장점
            </h3>
            <div className="flex flex-wrap justify-center gap-[10px] md:gap-[12px]">
              {[
                { label: "Multi CA", icon: <Share2 className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#D97706]" aria-hidden="true" /> },
                { label: "Agent / Agentless", icon: <Cpu className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#D97706]" aria-hidden="true" /> },
                { label: "On-Premise", icon: <Database className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#D97706]" aria-hidden="true" /> },
                { label: "Audit Log", icon: <FileText className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#D97706]" aria-hidden="true" /> },
                { label: "Local-Fit", icon: <Settings className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#D97706]" aria-hidden="true" /> }
              ].map((chip) => (
                <div key={chip.label} className="bg-white/[0.06] border border-white/[0.16] px-[16px] py-[10px] md:px-[20px] md:py-[12px] rounded-full flex items-center justify-center gap-[8px] cursor-default shrink-0 transition-none">
                  {chip.icon}
                  <span className="text-[14px] md:text-[15px] text-[#FFFFFF] font-[600] whitespace-nowrap break-keep leading-[1] mt-[1px]">{chip.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lifecycle Flow */}
          <div className="mt-[32px] md:mt-[36px] lg:mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[16px] lg:gap-[20px] xl:gap-[24px]">
            {[
              { title: "Discovery", desc: "분산된 인증서와 설치 위치를 탐지합니다.", icon: <Scan className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] text-[#FFFFFF]" aria-hidden="true" /> },
              { title: "Issuance", desc: "CA 발급·승인 프로세스를 포함해 인증서 발급과 갱신 업무를 자동화합니다.", icon: <FileCheck className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] text-[#FFFFFF]" aria-hidden="true" /> },
              { title: "Deployment", desc: "대상 서버에 인증서를 배포하고 적용 과정을 관리합니다.", icon: <UploadCloud className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] text-[#FFFFFF]" aria-hidden="true" /> },
              { title: "Monitoring", desc: "만료 일정, 서버 상태, 자동화 스케줄을 지속적으로 확인합니다.", icon: <Activity className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] text-[#FFFFFF]" aria-hidden="true" /> },
              { title: "Governance", desc: "권한, 승인, 감사 로그 기반으로 운영 이력을 관리합니다.", icon: <ShieldCheck className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] text-[#FFFFFF]" aria-hidden="true" /> }
            ].map((f) => (
              <div key={f.title} className="h-full bg-white/[0.06] border border-white/[0.16] p-[24px] md:p-[28px] lg:p-[32px] rounded-[12px] flex flex-col items-start transition-colors duration-200">
                <div className="w-[48px] h-[48px] md:w-[50px] md:h-[50px] lg:w-[52px] lg:h-[52px] bg-white/[0.08] border border-white/[0.14] rounded-[10px] md:rounded-[12px] flex items-center justify-center shrink-0 mb-[16px] lg:mb-[20px]">
                  {f.icon}
                </div>
                <div className="flex flex-col w-full h-full">
                  <h4 className="text-[20px] md:text-[21px] lg:text-[22px] font-[600] lg:font-[700] text-[#FFFFFF] leading-[1.3] mb-[8px] lg:mb-[12px] break-keep">{f.title}</h4>
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#CBD5E1] leading-[1.65] break-keep">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-[40px] md:mt-[44px] lg:mt-[48px] mb-[64px] md:mb-[72px] lg:mb-[88px] w-full flex justify-center">
            <CTA 
              href="mailto:sales@ventra.co.kr?subject=[Ventra 자료 요청] UCLM Certificate Lifecycle Automation 소개자료"
              text="자료 요청"
            />
          </div>
          
          {/* Background Decoration (Subtle Ring/Pattern) */}
          <div className="absolute top-0 right-0 bottom-0 left-1/2 pointer-events-none opacity-[0.02] z-0 overflow-hidden" aria-hidden="true">
             <div className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[1px] border-white hidden md:block"></div>
             <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[1px] border-white hidden md:block"></div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        bgClass="bg-[#F8FAFC]"
        label="APPLIED CASES"
        title={
          <span className="block text-[28px] md:text-[32px] lg:text-[38px] xl:text-[40px] font-[700] leading-[1.2] md:leading-[1.3] text-[#1B2D53]">
            Enterprise 적용 사례
          </span>
        }
      >
        <div className="w-full max-w-[1280px] mx-auto mt-[40px] md:mt-[52px] lg:mt-[60px]">
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] lg:rounded-[16px] shadow-[0_1px_3px_rgba(27,45,83,0.06)] overflow-hidden flex flex-col lg:flex-row">
            {[
              { 
                title: "금융·보험", 
                desc: "고객 접점 서비스, 대외계, 인터넷뱅킹, 보험 채널 등 인증서 만료 장애 영향이 큰 영역에 적합합니다.", 
                icon: <Landmark className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] text-[#1B2D53]" aria-hidden="true" />, 
                watermark: <Landmark className="w-full h-full text-[#1B2D53]" aria-hidden="true" /> 
              },
              { 
                title: "하이브리드 인프라", 
                desc: "온프레미스, 클라우드, 다양한 인증서와 운영방식이 혼재된 환경에서 운영 가시성과 관리 편의성을 확보합니다.", 
                icon: <Server className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] text-[#1B2D53]" aria-hidden="true" />, 
                watermark: <Server className="w-full h-full text-[#1B2D53]" aria-hidden="true" /> 
              },
              { 
                title: "폐쇄망·제조 설비", 
                desc: "폐쇄망, 제조 설비, 국내 특화 Web/WAS 환경에서도 보안 제약을 넘어서 안전한 운영 자동화를 지원합니다.", 
                icon: <Cpu className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] text-[#1B2D53]" aria-hidden="true" />, 
                watermark: <Cpu className="w-full h-full text-[#1B2D53]" aria-hidden="true" /> 
              }
            ].map((c, idx, arr) => (
              <React.Fragment key={c.title}>
                <article className="relative flex-1 flex flex-col p-[24px] md:p-[32px] lg:p-[36px] xl:p-[40px] lg:min-h-[230px] xl:min-h-[250px] transition-colors duration-200 ease-out hover:bg-[#F8FAFC]">
                  <div className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] bg-[#F1F5F9] border border-[#E2E8F0] rounded-[10px] lg:rounded-[12px] flex items-center justify-center shrink-0 mb-[24px] relative z-10">
                    {c.icon}
                  </div>
                  <div className="w-[28px] lg:w-[32px] h-[2px] bg-[#D97706] mb-[14px] lg:mb-[16px] relative z-10" aria-hidden="true" />
                  <div className="flex flex-col gap-[14px] lg:gap-[16px] relative z-10 w-full text-left">
                    <h3 className="text-[19px] md:text-[21px] xl:text-[23px] font-[600] xl:font-[700] text-[#1B2D53] leading-[1.3]">{c.title}</h3>
                    <p className="text-[15px] xl:text-[16px] text-[#475569] leading-[1.7] break-keep">{c.desc}</p>
                  </div>
                  {/* Watermark */}
                  <div className="hidden md:block absolute top-[24px] right-[24px] w-[96px] h-[96px] xl:w-[120px] xl:h-[120px] opacity-[0.04] pointer-events-none z-0" aria-hidden="true">
                     {c.watermark}
                  </div>
                </article>
                
                {/* Divider */}
                {idx !== arr.length - 1 && (
                  <>
                    {/* Desktop Divider */}
                    <div className="hidden lg:block w-[1px] bg-[#E2E8F0] my-[32px] shrink-0" aria-hidden="true" />
                    {/* Mobile/Tablet Divider */}
                    <div className="block lg:hidden h-[1px] bg-[#E2E8F0] mx-[24px] md:mx-[32px] shrink-0" aria-hidden="true" />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </SolutionSection>
    </SolutionPageTemplate>
  );
}
