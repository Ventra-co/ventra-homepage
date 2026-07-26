import React from "react";
import { SolutionPageTemplate, SolutionSection } from "../components/SolutionPageTemplate";
import { 
  ChallengeCard, 
   
   
  BeforeAfterWrapper, 
  BeforeAfterCard, 
  CTA 
} from "../components/solution";
import simmsHeroBg from "../../solution-simms-itm-s1-hero-bg-v2.png";
import { SeoMeta } from "../components/seo/SeoMeta";
import {
  Network, Layers, Unlink, CheckCircle2, ArrowRight, ArrowDown, ChevronRight, ChevronDown, Users, FileText, Building2, Landmark, Factory, BarChart3, CloudCog, BadgeCheck, Database, FileCheck
} from "lucide-react";

export function SolutionsSimms() {
  return (
    <SolutionPageTemplate
      hero={{
        bgImage: simmsHeroBg,
        bgClassName: "bg-[position:68%_center]",
        partnerLine: "IT유지보수 운영관리 플랫폼",
        title: (
          <>
            설명할 수 없는 유지보수는,<br />
            관리되고 있는 것이 아닙니다.
          </>
        ),
        subtitle: "누가, 어떤 계약 조건 아래, 무슨 작업을 수행했고, 그 결과가 SLA에 어떤 영향을 미쳤는지 — 유지보수 운영의 모든 흐름을 하나의 체인으로 연결합니다.",
      }}
    >
      <SolutionSection
        bgClass="bg-[#F8FAFC]"
        label="THE CHALLENGE"
        title="운영 책임은 커졌지만, 운영 기준은 흩어져 있습니다"
      >
        <div className="flex flex-col gap-12 relative">
      <SeoMeta
        title="SIMMS-ITM IT 통합유지관리·자산관리 | Ventra"
        description="SIMMS-ITM으로 IT 자산, 계약, 예방점검, 장애, 작업, 서비스 요청과 SLA를 연결해 공공·금융·제조의 통합유지관리 업무를 표준화합니다."
        canonicalPath="/solutions/simms-itm"
        schema={JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 3, "name": "SIMMS-ITM", "item": "https://ventra.co.kr/solutions/simms-itm" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SIMMS-ITM IT 통합유지관리·자산관리 | Ventra",
      "url": "https://ventra.co.kr/solutions/simms-itm",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SIMMS-ITM",
        "applicationCategory": "IT Service Management / Asset Management",
        "provider": { "@type": "Organization", "name": "심스소프트" }
      }
    }
  ])}
      />
          <p className="text-[18px] md:text-[20px] text-on-surface-variant leading-[1.6] max-w-[1060px] text-pretty break-keep relative z-10">
            국내 유지보수 운영은 장애·점검을 넘어 계약, SLA, 업체 품질, 감사 증빙, 재계약 근거까지 설명해야 하는 업무로 확장되고 있습니다. 하지만 자산·계약·업체·점검·장애·작업 데이터는 여러 시스템과 담당자, 업체 보고서에 흩어져 있습니다.
          </p>

          <div className="relative">
            {/* 매우 약한 Teal Radial Gradient 배경 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0D9488]/[0.04] to-transparent pointer-events-none rounded-full blur-[60px]" aria-hidden="true" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              <ChallengeCard 
                variant="simmsChallenge"
                icon={<Database className="w-6 h-6" />}
                title={
                  <span className="break-keep text-balance block w-full">
                    기준정보의 현행화 한계
                  </span>
                }
                desc={
                  <span className="break-keep text-pretty [line-break:strict] block w-full">
                    CMDB가 있어도 장비 교체, 긴급 작업, 외주 조치가 반복되면 유지보수 자산·계약·조직의 기준정보는 빠르게 흔들리고, 이후 모든 판단의 출발점이 불확실해집니다.
                  </span>
                }
              />
              <ChallengeCard 
                variant="simmsChallenge"
                icon={<Users className="w-6 h-6" />}
                title="운영 지식의 분산과 이탈"
                desc="업무 이력과 조치 노하우가 담당자 기억, 엑셀, 메일, 그룹웨어, 업체별 보고서에 흩어져 있어 인수인계 시 단절이 발생하고, 같은 장애에 같은 시행착오가 반복됩니다."
              />
              <ChallengeCard 
                variant="simmsChallenge"
                icon={<Unlink className="w-6 h-6" />}
                title="계약 조건과 현장 작업의 단절"
                desc="실제 수행된 작업이 계약 범위 안인지, 반복 요청인지, 추가 비용 대상인지를 현장에서 바로 판단할 수 없어, 정산과 분쟁이 사후에 발생합니다."
              />
              <ChallengeCard 
                variant="simmsChallenge"
                icon={<Network className="w-6 h-6" />}
                title="업체 간 책임 범위의 불명확"
                desc="운영업체, 수행업체, 장비별 벤더가 많아질수록 장애 발생 시 누구의 계약 범위이고 누가 먼저 대응해야 하는지 확인하는 데 시간이 소모됩니다."
              />
              <ChallengeCard 
                variant="simmsChallenge"
                icon={<FileCheck className="w-6 h-6" />}
                title="보고·감사 증빙의 이중 부담"
                desc="점검, 장애, 작업 이력이 시스템에 쌓여 있어도 월말 보고서와 감사 증빙은 별도 양식으로 다시 만들어야 하며, 운영 활동과 보고 활동이 분리되어 있습니다."
              />
              <ChallengeCard 
                variant="simmsChallenge"
                icon={<BarChart3 className="w-6 h-6" />}
                title="성과 데이터와 재계약 근거의 단절"
                desc="SLA 달성률, 장애 빈도, 점검 이행률 데이터가 축적되어도 업체 평가, 비용 절감 근거, 재계약 협상 자료로 바로 전환되지 않아 별도의 가공 작업이 필요합니다."
              />
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        bgClass="bg-[#FFFFFF]"
        label="VENTRA APPROACH"
        title="Ventra는 제품 도입이 아니라 운영관리 시나리오를 먼저 정리합니다"
      >
        <div className="flex flex-col">
          <div className="text-[18px] md:text-[20px] text-on-surface-variant leading-[1.6] max-w-[1000px] break-keep mb-8 lg:mb-12">
            Ventra는 SIAM 원칙을 국내 유지보수 현장에 맞게 구현한 SIMMS-ITM을 활용합니다. 제품 설치에 앞서 자산·계약·업체·작업·SLA·증빙 데이터를 연결하고 표준화할 운영 기준을 정의합니다.
          </div>
          
          <div className="w-full max-w-[1280px] mx-auto relative">
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] p-6 md:p-8 lg:p-10 w-full relative">
              <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-6">
                {[
                  { num: "01", title: "Diagnose", desc: "엑셀·메일·그룹웨어·ITSM에 흩어진 현황과 계약·SLA·보고서 항목을 파악합니다." },
                  { num: "02", title: "Map", desc: "자산·계약·업체·담당자·유지보수 범위·EOS·SLA를 하나의 기준정보로 연결합니다." },
                  { num: "03", title: "Standardize", desc: "예방점검·장애·작업·서비스요청·전산실 출입·보고·결재 절차를 표준화합니다." },
                  { num: "04", title: "Evidence", desc: "점검·장애·작업 보고와 SLA 통계·업체평가가 운영 과정에서 생성되도록 기준을 정리합니다." },
                  { num: "05", title: "Expand", desc: "계약 리스크·범위 외 작업·재계약 근거·공급사 성과 분석으로 운영 데이터를 확장합니다." },
                ].map((step, idx) => (
                  <div key={idx} className="relative z-10 flex-1 flex flex-row lg:flex-col items-start text-left gap-5 lg:gap-6">
                    {/* Desktop Connector Line */}
                    {idx < 4 && (
                      <div className="hidden lg:block absolute top-[24px] left-[50%] w-full h-[1px] bg-[#E2E8F0] -z-10"></div>
                    )}
                    {/* Mobile/Tablet Connector Line */}
                    {idx < 4 && (
                      <div className="block lg:hidden absolute top-[44px] md:top-[48px] bottom-[-32px] left-[21px] md:left-[23px] w-[1px] bg-[#E2E8F0] -z-10"></div>
                    )}
                    
                    {/* Number Circle */}
                    <div className="flex-shrink-0 w-[44px] h-[44px] md:w-[48px] md:h-[48px] bg-[#1B2D53] text-[#FFFFFF] font-[700] text-[13px] md:text-[14px] rounded-full flex items-center justify-center ring-[8px] ring-[#FFFFFF]">
                      {step.num}
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex flex-col flex-1 pt-2 md:pt-3 lg:pt-0">
                      <h3 className="text-[18px] md:text-[20px] font-[700] text-[#1B2D53] mb-2 md:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[15px] md:text-[16px] text-[#475569] leading-[1.65] break-keep text-pretty w-full lg:max-w-none md:pr-8 lg:pr-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        bgClass="bg-[#F8FAFC]"
        label="BEFORE / AFTER"
        title="분산 관리에서 IT유지보수 통합운영관리 구조로"
      >
        <div className="flex flex-col gap-12 lg:gap-14 max-w-[1280px] mx-auto w-full">
          {/* Before/After Cards */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0 relative">
            {/* BEFORE Card */}
            <div className="flex-1 flex flex-col items-start text-left rounded-[12px] p-7 md:p-9 lg:p-[40px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] mb-4 md:mb-5 text-[#64748B]">
                BEFORE
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-5">
                <div className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center shrink-0 bg-[#E2E8F0] text-[#64748B]">
                  <Unlink className="w-6 h-6" />
                </div>
                <h3 className="text-[22px] md:text-[24px] font-[700] leading-[1.3] break-keep text-[#334155]">
                  개인 중심의 분산 관리
                </h3>
              </div>
              <p className="text-[16px] md:text-[17px] leading-[1.7] break-keep text-[#475569]">
                유지보수 이력은 엑셀, 메일, 그룹웨어, 업체별 보고서에 흩어져 있습니다. 계약 범위, 작업 승인, SLA, 장애 이력, 감사 증빙은 필요할 때마다 다시 확인하고 재작성해야 합니다. 담당자나 외주 인력이 바뀌면 운영 지식과 책임 범위를 다시 추적해야 합니다.
              </p>
            </div>

            {/* Connector */}
            <div className="flex-shrink-0 flex items-center justify-center lg:w-[80px] py-2 lg:py-0">
              <div className="hidden lg:flex w-[40px] h-[40px] bg-[#FFFFFF] border border-[#0D9488]/20 rounded-full items-center justify-center shadow-[0_4px_12px_rgba(13,148,136,0.12)]">
                <ArrowRight className="w-5 h-5 text-[#0D9488]" />
              </div>
              <div className="flex lg:hidden w-[36px] h-[36px] bg-[#FFFFFF] border border-[#0D9488]/20 rounded-full items-center justify-center shadow-[0_4px_12px_rgba(13,148,136,0.12)]">
                <ArrowDown className="w-5 h-5 text-[#0D9488]" />
              </div>
            </div>

            {/* AFTER Card */}
            <div className="flex-1 flex flex-col items-start text-left rounded-[12px] p-7 md:p-9 lg:p-[40px] bg-[#FFFFFF] border border-[#1B2D53]/25 border-t-[3px] border-t-[#1B2D53] shadow-[0_8px_24px_rgba(27,45,83,0.08)]">
              <div className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] mb-4 md:mb-5 text-[#D97706]">
                AFTER
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-5">
                <div className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center shrink-0 bg-[#1B2D53] text-[#FFFFFF]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-[22px] md:text-[24px] font-[700] leading-[1.3] break-keep text-[#1B2D53]">
                  IT유지보수 통합운영관리
                </h3>
              </div>
              <p className="text-[16px] md:text-[17px] leading-[1.7] break-keep text-[#334155]">
                SIMMS-ITM은 자산, 계약, 업체, 점검, 장애, 작업, 서비스요청, SLA 데이터를 하나의 운영 기준으로 연결합니다. 월간보고, 감사 증빙, 업체 평가, 재계약 근거가 운영 이력 기반으로 정리됩니다. 운영 책임과 증빙을 개인 경험이 아니라 데이터 기준으로 설명할 수 있습니다.
              </p>
            </div>
          </div>
          
          <div className="w-full">
            <div className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-[#D97706] mb-4 md:mb-5">
              KEY CHANGES
            </div>
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] p-6 md:p-7 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
              {[
                "기억·엑셀 의존",
                "기준정보 통합",
                "프로세스 표준화",
                "증빙 자동 생성",
                "업체 성과·재계약 근거 확보"
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 flex items-center justify-center text-center px-2 text-[15px] md:text-[16px] font-[600] break-keep text-[#1B2D53]">
                    {step}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex-shrink-0 flex items-center justify-center py-2 lg:py-0 lg:px-2">
                      <ChevronRight className="hidden lg:block w-5 h-5 text-[#0D9488]" />
                      <ChevronDown className="block lg:hidden w-5 h-5 text-[#0D9488]" />
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
          <span className="block text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px] font-[700] leading-[1.15] md:leading-[1.25] text-white break-keep">
            국내 유지보수 환경에 특화된 설치형 운영관리 플랫폼
          </span>
        }
      >
        <div className="flex flex-col relative z-10 w-full max-w-[1280px] mx-auto mt-4">
          <div className="max-w-[1050px] lg:max-w-[1150px] mb-12 lg:mb-16">
            <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#CBD5E1] leading-[1.7] break-keep">
              SIMMS-ITM는 국내 공공·금융·중견기업의 유지보수 계약·업체·SLA·작업·증빙을 통합 관리하는 운영관리 플랫폼입니다. CMDB만으로 설명되지 않는 계약 범위·업체 책임·SLA·작업 승인·감사 증빙을 하나의 운영 기준으로 연결합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-16">
            {[
              {
                label: "Asset & Contract",
                title: "유지보수 자산·계약 기준정보",
                desc: "자산, 계약, 업체, 담당자, EOS, SLA 기준을 유지보수 운영에 필요한 기준정보로 정리합니다."
              },
              {
                label: "Multi-Vendor",
                title: "다중 공급사 계약 통제",
                desc: "운영업체, 수행업체, 장비별 벤더, 담당자, 계약 범위를 하나의 체계로 연결합니다."
              },
              {
                label: "Standard Process",
                title: "점검·장애·작업 표준화",
                desc: "예방점검, 장애, 작업, 서비스요청, 결재, 결과보고를 표준 프로세스로 관리합니다."
              },
              {
                label: "SLA & Performance",
                title: "SLA·업체 성과관리",
                desc: "가동률, 장애처리율, 일정준수율, 적기처리율 기반으로 유지보수 품질과 업체 성과를 관리합니다."
              },
              {
                label: "Compliance Evidence",
                title: "보고·감사 증빙 자동화",
                desc: "점검보고서, 장애보고서, 작업보고서, 서비스요청 통계, SLA 보고서를 운영 이력 기반으로 산출합니다."
              },
              {
                label: "On-Premise",
                title: "On-Prem / 망분리 적용성",
                desc: "Linux / Windows 서버 기반 설치형 구조로 국내 공공·금융·제조의 망분리·폐쇄망 환경 적용을 검토할 수 있습니다."
              }
            ].map((card, idx) => (
              <div key={idx} className="flex flex-col items-start bg-[#1E293B]/40 border border-[#334155]/60 border-t-[3px] border-t-[#0D9488] rounded-[12px] p-7 md:p-8">
                <div className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-[#0D9488] mb-4 uppercase">
                  {card.label}
                </div>
                <div className="w-full mb-3 min-h-[56px] flex items-start">
                  <h4 className="text-[18px] md:text-[20px] font-[700] text-[#F8FAFC] leading-[1.4] break-keep">
                    {card.title}
                  </h4>
                </div>
                <p className="text-[15px] md:text-[16px] text-[#CBD5E1] leading-[1.65] break-keep">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Badges / Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-[#1E293B]/40 border border-[#334155]/60 rounded-[12px] p-5 md:p-6 lg:p-8 mb-8 lg:mb-12">
            {[
              "GS인증 1등급",
              "나라장터 디지털서비스몰 등록",
              "공공/금융/제조 등 160여 업체 적용",
              "국내 설치형 패키지"
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#0F172A]/50 border border-[#334155]">
                  <BadgeCheck className="w-4 h-4 text-[#94A3B8]" />
                </div>
                <span className="text-[#E2E8F0] font-[500] text-[14px] md:text-[15px] break-keep leading-[1.4]">
                  {badge}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#1E293B]/40 border border-[#334155]/60 rounded-[12px] p-6 md:p-8 lg:p-10 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 lg:gap-6 flex-1">
              <div className="w-12 h-12 rounded-full bg-[#0F172A]/50 border border-[#334155] flex items-center justify-center text-[#94A3B8] shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-left flex-1">
                <h4 className="text-[18px] md:text-[20px] font-[700] text-[#F8FAFC] mb-2 break-keep">
                  SIMMS-ITM 자료 요청
                </h4>
                <p className="text-[14px] md:text-[15px] text-[#CBD5E1] leading-[1.6] break-keep">
                  SIMMS-ITM의 상세 기능과 유지보수 표준화 방안을 확인할 수 있는 소개자료를 요청하실 수 있습니다.
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto shrink-0 flex justify-start md:justify-end mt-4 md:mt-0">
              <a 
                href="mailto:sales@ventra.co.kr?subject=[Ventra 자료 요청] SIMMS-ITM 소개자료"
                className="inline-flex items-center justify-center gap-[10px] md:gap-[12px] bg-[#FFFFFF] text-[#1B2D53] w-auto h-[44px] md:h-[48px] px-[20px] md:px-[24px] rounded-[999px] font-[600] text-[15px] md:text-[16px] hover:bg-[#F8FAFC] hover:shadow-[0_2px_10px_rgba(255,255,255,0.1)] group transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D97706] focus:ring-offset-[#122A47]"
              >
                자료 요청
                <ArrowRight className="w-5 h-5 text-[#D97706] transition-transform duration-200 group-hover:translate-x-[3px]" />
              </a>
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        bgClass="bg-[#FFFFFF]"
        label="APPLIED USE CASES"
        title="SIMMS-ITM 적용 사례"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          <div className="flex flex-col items-start bg-[#F8FAFC] border border-[#E2E8F0] p-6 md:p-7 lg:p-8 rounded-[16px]">
            <div className="shrink-0 w-12 h-12 bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm rounded-full flex items-center justify-center text-[#1B2D53] mb-5 md:mb-6">
              <CloudCog className="w-6 h-6" />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#1B2D53] mb-3">MSP / ITO</h3>
            <p className="text-[15px] md:text-[16px] text-[#475569] leading-[1.65] break-keep text-left w-full">
              무상 작업과 범위 외 요청을 식별하고, 반복 장애·작업 이력과 SLA 데이터를 재계약 협상 근거로 정리합니다.
            </p>
          </div>
          
          <div className="flex flex-col items-start bg-[#F8FAFC] border border-[#E2E8F0] p-6 md:p-7 lg:p-8 rounded-[16px]">
            <div className="shrink-0 w-12 h-12 bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm rounded-full flex items-center justify-center text-[#1B2D53] mb-5 md:mb-6">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#1B2D53] mb-3">공공기관 / 지자체</h3>
            <p className="text-[15px] md:text-[16px] text-[#475569] leading-[1.65] break-keep text-left w-full">
              장애, 점검, 작업, 보고 증빙을 하나의 체계로 정리해 감사 대응과 조달 기반 유지보수 운영 부담을 줄입니다.
            </p>
          </div>

          <div className="flex flex-col items-start bg-[#F8FAFC] border border-[#E2E8F0] p-6 md:p-7 lg:p-8 rounded-[16px]">
            <div className="shrink-0 w-12 h-12 bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm rounded-full flex items-center justify-center text-[#1B2D53] mb-5 md:mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#1B2D53] mb-3">2금융 / 금융 계열사</h3>
            <p className="text-[15px] md:text-[16px] text-[#475569] leading-[1.65] break-keep text-left w-full">
              외주업체 SLA, 장애 이력, 작업 승인, ITGC 대응 자료를 운영 데이터로 축적합니다.
            </p>
          </div>

          <div className="flex flex-col items-start bg-[#F8FAFC] border border-[#E2E8F0] p-6 md:p-7 lg:p-8 rounded-[16px]">
            <div className="shrink-0 w-12 h-12 bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm rounded-full flex items-center justify-center text-[#1B2D53] mb-5 md:mb-6">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#1B2D53] mb-3">중견 제조 / 유통 / 서비스</h3>
            <p className="text-[15px] md:text-[16px] text-[#475569] leading-[1.65] break-keep text-left w-full">
              여러 협력사와 현장 작업을 자산, 계약, 점검 기준으로 통합 관리하고 운영 연속성을 확보합니다.
            </p>
          </div>
        </div>
      </SolutionSection>
    </SolutionPageTemplate>
  );
}
