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
import feliceHeroBg from "../../solution-felice-s1-hero-bg-v2.png";
import { SeoMeta } from "../components/seo/SeoMeta";
import {
  Clock, Database, FolderSync, Shield, 
  Network, Eye, Layers, ShieldCheck, 
  Laptop, Server, Unlink, Activity, CheckCircle2, ArrowRight, ArrowDown, ChevronRight, ChevronDown, Users, FileText
} from "lucide-react";

export function SolutionsFelice() {
  return (
    <SolutionPageTemplate
      hero={{
        bgImage: feliceHeroBg,
        bgClassName: "bg-[position:30%_center] md:bg-[position:45%_center] lg:bg-center",
        overlayClassName: "bg-gradient-to-r from-[#1B2D53]/95 md:from-[#1B2D53]/90 via-[#1B2D53]/60 to-transparent md:via-transparent",
        partnerLine: "Felice 기반 Kafka 운영관리",
        title: (
          <>
            AI 시대, 데이터는<br />
            필요한 순간에 흐르고 있습니까?
          </>
        ),
        subtitle: "데이터의 흐름이 곧 비즈니스 속도입니다. Ventra는 실시간 데이터 파이프라인(Kafka)을 설계하고, Felice로 그 운영을 표준화합니다."
      }}
    >
      {/* SECTION 2 | THE CHALLENGE */}
      <SolutionSection
        bgClass="bg-[#F8FAFC]"
        label="THE CHALLENGE"
        title="엔터프라이즈 데이터 흐름, 어디서 비즈니스 속도를 늦추고 있습니까?"
      >
        <div className="flex flex-col gap-12">
      <SeoMeta
        title="Felice Kafka 운영관리·모니터링 | Ventra"
        description="Felice는 Kafka 클러스터와 토픽·컨슈머 운영 가시성, 표준화, 권한과 거버넌스를 연결해 엔터프라이즈 이벤트 스트리밍 운영을 체계화합니다."
        canonicalPath="/solutions/felice-kafka-operations"
        schema={JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 3, "name": "Felice Kafka Operations Platform", "item": "https://ventra.co.kr/solutions/felice-kafka-operations" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Felice Kafka 운영관리·모니터링 | Ventra",
      "url": "https://ventra.co.kr/solutions/felice-kafka-operations",
      "about": {
        "@type": "SoftwareApplication",
        "name": "Felice",
        "applicationCategory": "Kafka Operations Platform",
        "provider": { "@type": "Organization", "name": "SPITHA" }
      }
    }
  ])}
      />
          <div className="text-[18px] md:text-[20px] text-on-surface-variant leading-[1.6] max-w-[1000px] break-keep">
            AI와 실시간 분석의 중요성이 커지고 있지만, 현장의 데이터 환경은 목적별로 분절되어 복잡도만 높아지고 있습니다.<br />
            핵심은 필요한 데이터가 적시에 흐르고, 완벽하게 통제되는 '표준화된 이벤트 스트리밍 구조'가 필요합니다.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <ChallengeCard 
              icon={<Clock className="w-6 h-6 text-[#3182CE]" />}
              title="실시간 데이터 처리 지연"
              desc="이상거래 탐지, 고객 추천 등 타이밍이 중요한 비즈니스에서 기존의 배치(Batch) 중심 데이터 흐름은 명확한 한계를 드러냅니다."
            />
            <ChallengeCard 
              icon={<FolderSync className="w-6 h-6 text-[#3182CE]" />}
              title="파편화된 데이터 사일로"
              desc="다양한 연계 기술이 개별 프로젝트 단위로 흩어져 있어, 전사적인 데이터 흐름과 병목 구간을 한눈에 파악하기 어렵습니다."
            />
            <ChallengeCard 
              icon={<Unlink className="w-6 h-6 text-[#3182CE]" />}
              title="레거시와 신규 환경의 단절"
              desc="기존 핵심 코어 시스템을 안정적으로 유지하면서, AI 및 데이터 레이크 등 새로운 환경을 유연하게 수용할 통합 연계 기준이 필요합니다."
            />
            <ChallengeCard 
              icon={<Shield className="w-6 h-6 text-[#3182CE]" />}
              title="불투명한 운영 리스크"
              desc="운영 관리 및 변경 이력이 표준화되지 않으면 장애 및 감사 대응이 지연되며, 특정 실무자의 경험에 과도하게 의존하게 됩니다."
            />
          </div>
        </div>
      </SolutionSection>

      {/* SECTION 3 | VENTRA APPROACH */}
      <SolutionSection
        bgClass="bg-[#FFFFFF]"
        label="VENTRA APPROACH"
        title="필요한 데이터 흐름을 구분하고, Kafka 운영을 표준화합니다"
      >
        <div className="flex flex-col gap-6 max-w-[1050px]">
          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-[600] text-[#1B2D53] break-keep">
            모든 데이터 흐름에 Kafka가 필요한 것은 아닙니다.
          </h3>
          <p className="text-[17px] md:text-[18px] text-[#475569] leading-[1.65] break-keep">
            Ventra는 고객의 업무 과제와 기존 시스템을 기준으로 Batch, API, Messaging, CDC, Event Streaming의 역할을 먼저 구분합니다. Kafka가 필요한 영역은 Felice 기반으로 토픽, 컨슈머, 권한, 변경 이력을 표준화하고, Kafka 전문 기술지원과 함께 운영 가능한 체계로 정리합니다.
          </p>
        </div>

        <StepperWrapper>
          <StepperItem 
            num="01"
            title="흐름 구분"
            desc="Batch · API · Messaging · CDC · Event Streaming의 역할을 목적별로 구분합니다."
          />
          <StepperItem 
            num="02"
            title="Kafka 영역 식별"
            desc="Kafka가 필요한 업무 흐름, 실시간성, 운영 조건, 표준화 필요 범위를 확인합니다."
          />
          <StepperItem 
            num="03"
            title="운영 표준화"
            desc="Kafka가 필요한 영역은 Felice 기반으로 토픽, 컨슈머, 권한, 이력 관리를 표준화합니다."
          />
          <StepperItem 
            num="04"
            title="전문 지원"
            desc="Ventra는 고객 과제와 파트너 기술을 연결하고, Kafka/Felice 전문 기술로 실행을 지원합니다."
          />
        </StepperWrapper>
      </SolutionSection>

      {/* SECTION 4 | BEFORE / AFTER */}
      <SolutionSection
        bgClass="bg-[#F8FAFC]"
        label="BEFORE / AFTER"
        title={
          <span className="block max-w-[800px] break-keep">
            블랙박스 같던 복잡한 Kafka 운영, Felice로 투명하고 편리하게
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
                  블랙박스화된 수작업 운영
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#475569] leading-[1.65] break-keep text-pretty w-full xl:pr-[12px]">
                  수작업 한계: 휴먼 에러 / 운영 속인화<br />
                  가시성 부재: 모니터링 블랙박스 / 장애 대응 지연<br />
                  보안 리스크: 권한 통제 실패 / 거버넌스 부재
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex flex-col md:flex-row items-center justify-center shrink-0 w-full md:w-[60px] md:w-[60px] lg:w-[80px] py-[16px] md:py-0" aria-hidden="true">
              {/* Desktop/Tablet Connector (Right Arrow) */}
              <div className="hidden md:flex items-center w-full justify-center">
                <div className="h-[2px] bg-[#2563EB] w-full max-w-[24px] lg:max-w-[40px]"></div>
                <ArrowRight className="w-[18px] h-[18px] -ml-[2px] text-[#2563EB]" strokeWidth={2.5} />
              </div>
              {/* Mobile Connector (Down Arrow) */}
              <div className="flex md:hidden flex-col items-center justify-center h-[28px] md:h-[36px]">
                <div className="w-[2px] bg-[#2563EB] h-full max-h-[20px] md:max-h-[24px]"></div>
                <ArrowDown className="w-[18px] h-[18px] -mt-[2px] text-[#2563EB]" strokeWidth={2.5} />
              </div>
            </div>

            {/* After Card */}
            <div className="flex-1 flex flex-col items-start bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] p-[24px] md:p-[32px] lg:p-[40px] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#2563EB]"></div>
              <span className="text-[12px] md:text-[13px] font-[700] tracking-[0.08em] text-[#2563EB] mb-[20px] md:mb-[24px]">
                AFTER
              </span>
              <div className="flex flex-col gap-[12px] md:gap-[16px] w-full">
                <h3 className="text-[20px] md:text-[22px] font-[700] text-[#1B2D53] leading-[1.3] break-keep text-balance">
                  Web-UI 기반의 통합 거버넌스
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#334155] leading-[1.65] break-keep text-pretty w-full xl:pr-[12px]">
                  운영 자동화: 직관적 Web-UI / 표준화된 운영<br />
                  완벽한 가시성: 통합 대시보드 / 즉각적 원인 추적<br />
                  안전한 거버넌스: RBAC 권한 제어 / 감사 이력 관리
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
                "분산 연계",
                "실시간 적용 영역 식별",
                "Kafka 기반 이벤트 흐름",
                "Felice 운영 가시화",
                "표준화·자동화·권한 관리"
              ].map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="text-[15px] md:text-[16px] font-[600] text-[#1B2D53] break-keep flex-1 flex items-center justify-start md:justify-center text-left md:text-center w-full md:w-auto">
                    {step}
                  </div>
                  {idx < 4 && (
                    <div className="hidden md:flex items-center shrink-0" aria-hidden="true">
                      <ChevronRight className="w-[16px] h-[16px] text-[#2563EB]" strokeWidth={2} />
                    </div>
                  )}
                  {idx < 4 && (
                    <div className="flex md:hidden items-center justify-start shrink-0 h-[24px] pl-[4px]" aria-hidden="true">
                      <ChevronDown className="w-[16px] h-[16px] text-[#2563EB]" strokeWidth={2} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
</SolutionSection>

      {/* SECTION 5 | SOLUTION OVERVIEW */}
      <SolutionSection
        bgClass="bg-[#122A47] relative overflow-hidden"
        label="SOLUTION OVERVIEW"
        darkTitle={true}
        title={
          <span className="block text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px] font-[700] leading-[1.15] md:leading-[1.25] text-white break-keep">
            Felice — Kafka 운영을 단순하게 만듭니다
          </span>
        }
      >
        {/* Subtle Radial Gradient for Felice */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3182CE]/15 via-transparent to-transparent opacity-60"></div>
        
        <div className="flex flex-col relative z-10 w-full max-w-[1280px] mx-auto mt-4">
          <div className="max-w-[1050px] lg:max-w-[1150px] mb-12 lg:mb-16">
            <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#E2E8F0] leading-[1.7] break-keep">
              Kafka는 강력하지만 운영은 복잡합니다. Felice는 Kafka 클러스터, 토픽, 컨슈머, 권한, 감사 이력을 하나의 기준으로 관리하는 Enterprise Kafka 운영관리 플랫폼입니다.
            </p>
          </div>

          {/* Feature Grid (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-14">
            <div className="flex flex-col items-start bg-white/[0.04] border border-white/[0.12] border-t-[3px] border-t-[#3182CE] rounded-[16px] p-7 md:p-8 lg:p-9 hover:bg-white/[0.06] hover:border-white/[0.16] hover:shadow-[0_8px_24px_rgba(49,130,206,0.1)] hover:-translate-y-[2px] transition-all duration-200 ease-out">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#3182CE]/15 flex items-center justify-center text-[#63B3ED]">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-[#63B3ED] uppercase">Visibility</div>
              </div>
              <h4 className="text-[20px] md:text-[22px] font-[700] text-white mb-3 break-keep">직관적 통합 가시성</h4>
              <p className="text-[15px] md:text-[16px] text-[#CBD5E1] leading-[1.65] md:leading-[1.7] break-keep">
                Cluster, Broker, Topic, Consumer Lag 등 파편화된 Kafka의 상태와 데이터 흐름을 대시보드에서 한눈에 파악합니다.
              </p>
            </div>
            
            <div className="flex flex-col items-start bg-white/[0.04] border border-white/[0.12] border-t-[3px] border-t-[#3182CE] rounded-[16px] p-7 md:p-8 lg:p-9 hover:bg-white/[0.06] hover:border-white/[0.16] hover:shadow-[0_8px_24px_rgba(49,130,206,0.1)] hover:-translate-y-[2px] transition-all duration-200 ease-out">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#3182CE]/15 flex items-center justify-center text-[#63B3ED]">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-[#63B3ED] uppercase">Standardization</div>
              </div>
              <h4 className="text-[20px] md:text-[22px] font-[700] text-white mb-3 break-keep">운영 기준 표준화</h4>
              <p className="text-[15px] md:text-[16px] text-[#CBD5E1] leading-[1.65] md:leading-[1.7] break-keep">
                개인에 의존하던 토픽 설정, 메타데이터 관리, 변경 절차를 엔터프라이즈 환경에 맞게 단일 기준으로 통일합니다.
              </p>
            </div>

            <div className="flex flex-col items-start bg-white/[0.04] border border-white/[0.12] border-t-[3px] border-t-[#3182CE] rounded-[16px] p-7 md:p-8 lg:p-9 hover:bg-white/[0.06] hover:border-white/[0.16] hover:shadow-[0_8px_24px_rgba(49,130,206,0.1)] hover:-translate-y-[2px] transition-all duration-200 ease-out">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#3182CE]/15 flex items-center justify-center text-[#63B3ED]">
                  <Laptop className="w-5 h-5" />
                </div>
                <div className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-[#63B3ED] uppercase">Automation</div>
              </div>
              <h4 className="text-[20px] md:text-[22px] font-[700] text-white mb-3 break-keep">운영 통제 자동화</h4>
              <p className="text-[15px] md:text-[16px] text-[#CBD5E1] leading-[1.65] md:leading-[1.7] break-keep">
                휴먼 에러를 유발하는 복잡한 CLI 수작업을 클릭 기반의 Web-UI로 전환하여 스케일링과 장애 대응을 단순화합니다.
              </p>
            </div>

            <div className="flex flex-col items-start bg-white/[0.04] border border-white/[0.12] border-t-[3px] border-t-[#3182CE] rounded-[16px] p-7 md:p-8 lg:p-9 hover:bg-white/[0.06] hover:border-white/[0.16] hover:shadow-[0_8px_24px_rgba(49,130,206,0.1)] hover:-translate-y-[2px] transition-all duration-200 ease-out">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#3182CE]/15 flex items-center justify-center text-[#63B3ED]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-[#63B3ED] uppercase">Governance</div>
              </div>
              <h4 className="text-[20px] md:text-[22px] font-[700] text-white mb-3 break-keep">안전한 보안·거버넌스</h4>
              <p className="text-[15px] md:text-[16px] text-[#CBD5E1] leading-[1.65] md:leading-[1.7] break-keep">
                세밀한 역할 기반 권한 제어(RBAC)와 투명한 감사 이력(Audit Log) 관리를 통해 통제 가능한 운영 환경을 완성합니다.
              </p>
            </div>
          </div>

          {/* CTA Horizontal Block */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between bg-white/[0.06] border border-white/[0.12] rounded-[16px] p-6 md:p-8 gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 lg:gap-6 w-full lg:w-auto">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-[18px] md:text-[20px] font-[700] text-white mb-1.5 break-keep">Felice Kafka 운영관리 자료</h4>
                <p className="text-[14px] md:text-[15px] text-[#CBD5E1] break-keep">
                  Felice의 주요 기능과 Kafka 운영 표준화 방안을 확인할 수 있는 소개자료를 요청하실 수 있습니다.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-auto shrink-0 flex justify-start lg:justify-end">
              <CTA 
                href="mailto:sales@ventra.co.kr?subject=[Ventra 자료 요청] Felice Kafka Operations Platform 소개자료"
                text="자료 요청"
              />
            </div>
          </div>
        </div>
      </SolutionSection>

      {/* SECTION 6 | USE CASES */}
      <SolutionSection
        bgClass="bg-[#FFFFFF]"
        label="USE CASES"
        title="Felice 고객 사례"
      >
        <div className="flex flex-col mt-4 md:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-start bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-6 lg:p-8">
               <div className="w-12 h-12 rounded-[12px] bg-white border border-[#CBD5E1] flex items-center justify-center text-[#3182CE] mb-6 shadow-sm">
                 <Server className="w-6 h-6" />
               </div>
               <h4 className="text-[18px] lg:text-[20px] font-[700] text-[#1B2D53] mb-3 leading-[1.3] break-keep">
                 Enterprise Core Kafka 운영 표준화
               </h4>
               <p className="text-[15px] text-[#475569] leading-[1.65] break-keep">
                 핵심 업무에 적용된 Kafka의 모니터링, 권한, 운영 기준을 중앙에서 관리합니다.
               </p>
            </div>

            <div className="flex flex-col items-start bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-6 lg:p-8">
               <div className="w-12 h-12 rounded-[12px] bg-white border border-[#CBD5E1] flex items-center justify-center text-[#3182CE] mb-6 shadow-sm">
                 <Activity className="w-6 h-6" />
               </div>
               <h4 className="text-[18px] lg:text-[20px] font-[700] text-[#1B2D53] mb-3 leading-[1.3] break-keep">
                 실시간 디지털 메시지 관리
               </h4>
               <p className="text-[15px] text-[#475569] leading-[1.65] break-keep">
                 고객 행동, 결제, 캠페인 이벤트를 안정적으로 처리하고 메시지 흐름을 가시화합니다.
               </p>
            </div>

            <div className="flex flex-col items-start bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-6 lg:p-8">
               <div className="w-12 h-12 rounded-[12px] bg-white border border-[#CBD5E1] flex items-center justify-center text-[#3182CE] mb-6 shadow-sm">
                 <Database className="w-6 h-6" />
               </div>
               <h4 className="text-[18px] lg:text-[20px] font-[700] text-[#1B2D53] mb-3 leading-[1.3] break-keep">
                 CDC · Data Lake 연계 표준화
               </h4>
               <p className="text-[15px] text-[#475569] leading-[1.65] break-keep">
                 Core 데이터와 변경 데이터를 분석 플랫폼으로 전달하는 표준 연계 구조를 마련합니다.
               </p>
            </div>
          </div>
        </div>
      </SolutionSection>
    </SolutionPageTemplate>
  );
}
