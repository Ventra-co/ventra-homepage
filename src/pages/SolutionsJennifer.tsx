import React from "react";
import jenniferHeroImage from "../../solution-jennifer__s1-hero-bg.png";
import { SolutionPageTemplate, SolutionSection } from "../components/SolutionPageTemplate";
import { 
  ChallengeCard, 
 
 
  BeforeAfterWrapper, 
  BeforeAfterCard, 
  CTA 
} from "../components/solution";
import { SeoMeta } from "../components/seo/SeoMeta";
import {
  Users, Database, CloudOff, Brain, AlertCircle, Unlink, Network, Map, FileSearch, CheckCircle2,
  Target, Tag, Bell, History, FileText
, MessageSquareText, Layers, Activity, Sparkles, LayoutDashboard} from "lucide-react";

export function SolutionsJennifer() {
  return (
    <SolutionPageTemplate
      hero={{
        bgImage: jenniferHeroImage,
        partnerLine: "JENNIFER AI 기반 AI-assisted Operations",
        title: (
          <>
            JENNIFER 데이터를<br />
            AI Insights와 원인 분석으로
          </>
        ),
        subtitle: "JENNIFER AI는 기존 APM 데이터를 AI-assisted Operations로 확장하기 위한 현실적인 첫 번째 적용 단계입니다."
      }}
    >
      {/* SECTION 2 | THE CHALLENGE */}
      <SolutionSection
        bgClass="bg-[#F8FAFC]"
        label="THE CHALLENGE"
        title="AI Operations는 도구보다 운영 구조에서 먼저 막힙니다."
      >
        <div className="flex flex-col gap-12">
      <SeoMeta
        title="JENNIFER AI 기반 APM 운영 분석 | Ventra"
        description="기존 JENNIFER APM의 트랜잭션·에러·스택트레이스 데이터를 AI Insight와 RCA Assist로 확장해 성능 문제와 원인 후보를 더 빠르게 파악합니다."
        canonicalPath="/solutions/jennifer-ai-operations"
        schema={JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 3, "name": "JENNIFER AI Operations", "item": "https://ventra.co.kr/solutions/jennifer-ai-operations" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "JENNIFER AI 기반 APM 운영 분석 | Ventra",
      "url": "https://ventra.co.kr/solutions/jennifer-ai-operations",
      "about": {
        "@type": "SoftwareApplication",
        "name": "JENNIFER AI Operations",
        "applicationCategory": "APM / AI Operations",
        "provider": { "@type": "Organization", "name": "제니퍼소프트" }
      }
    }
  ])}
      />
          <div className="text-[18px] md:text-[20px] text-on-surface-variant leading-[1.6] max-w-4xl break-keep">
            대부분의 기업은 이미 APM, 로그, 인프라 모니터링, ITSM 도구를 보유하고 있습니다.<br />
            하지만 AI Operations로 확장하려면 먼저 데이터 기준, 장애 이력, 서비스 맵, 운영 책임 구조가 정리되어야 합니다.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ChallengeCard 
              icon={<Users className="w-6 h-6" />}
              title="통합 관측 오너십 부재"
              desc="팀별 도구는 있지만, 전체 장애 흐름을 연결하는 책임 구조는 명확하지 않습니다."
            />
            <ChallengeCard 
              icon={<Database className="w-6 h-6" />}
              title="AI가 읽기 어려운 데이터"
              desc="트랜잭션, 로그, 장애 이력이 쌓여 있어도 명명 규칙과 조치 내역이 표준화되어 있지 않습니다."
            />
            <ChallengeCard 
              icon={<CloudOff className="w-6 h-6" />}
              title="온프레·클라우드 경계 단절"
              desc="핵심 업무와 신규 채널이 분리되면서 장애 원인과 영향 범위 파악이 지연됩니다."
            />
            <ChallengeCard 
              icon={<Brain className="w-6 h-6" />}
              title="개인에게 묶인 운영 지식"
              desc="운영자의 경험과 조치 노하우가 공식 자산으로 정리되지 않아 반복 장애 대응이 늦어집니다."
            />
          </div>
        </div>
      </SolutionSection>

      {/* SECTION 3 | VENTRA APPROACH */}
      <SolutionSection
        bgClass="bg-slate-50"
        label="VENTRA APPROACH"
        title={
          <span className="block text-[28px] md:text-[34px] lg:text-[40px] font-[700] leading-[1.25] text-[#1B2D53] max-w-[1100px] break-keep text-balance">
            JENNIFER AI 기능을 실제 운영 인사이트로 연결합니다.
          </span>
        }
      >
        <div className="flex flex-col text-left">
          <div className="-mt-3 md:-mt-4 text-[16px] md:text-[17px] lg:text-[18px] text-[#334155] leading-[1.65] lg:leading-[1.7] max-w-[1020px] break-keep text-balance [line-break:strict]">
            JENNIFER AI는 기존 APM 데이터를 기반으로 성능 분석, 트랜잭션 인사이트, 에러 분석, RCA 보조를 지원합니다. Ventra는 고객이 보유한 JENNIFER 데이터를 기준으로 AI 기능을 어떤 운영 시나리오에 적용할 수 있는지 함께 검토합니다.
          </div>
          
          <div className="mt-10 lg:mt-12 bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(27,45,83,0.06)] px-7 py-8 md:p-10 lg:py-[60px] lg:px-[56px] w-full max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
              {[
                {
                  num: "01",
                  title: "데이터 확인",
                  desc: "트랜잭션, 에러, 이벤트, 장애 이력이 JENNIFER AI 분석에 활용 가능한 상태인지 확인합니다."
                },
                {
                  num: "02",
                  title: "운영 맥락 연결",
                  desc: "핵심 업무, 주요 URL, 이벤트 룰, 장애 이력 등 AI 분석과 연결할 운영 맥락을 살펴봅니다."
                },
                {
                  num: "03",
                  title: "AI 기능 적용 검토",
                  desc: "자연어 분석, 트랜잭션 인사이트, 에러 인사이트, RCA 보조 등 JENNIFER AI 기능의 적용 가능 범위를 검토합니다."
                }
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-start text-left w-full h-full">
                  {/* Connecting lines */}
                  {idx < 2 && (
                    <>
                      <div className="hidden lg:block absolute top-[24px] left-[24px] w-[calc(100%+32px)] h-[1px] bg-[#CBD5E1] z-0"></div>
                      <div className="block lg:hidden absolute top-[24px] left-[24px] h-[calc(100%+40px)] w-[1px] bg-[#CBD5E1] z-0"></div>
                    </>
                  )}
                  
                  {/* Circle and Text */}
                  <div className="flex flex-row lg:flex-col items-start gap-5 lg:gap-0 relative z-10 w-full h-full">
                    <div className="flex-shrink-0 w-[48px] h-[48px] bg-[#1B2D53] text-[#FFFFFF] font-[700] text-[14px] md:text-[15px] rounded-full flex items-center justify-center">
                      {step.num}
                    </div>
                    <div className="flex flex-col mt-1 lg:mt-6 flex-1 w-full">
                      <h3 className="text-[18px] lg:text-[20px] font-[700] text-[#1B2D53] mb-2 md:mb-3 break-keep text-balance">
                        {step.title}
                      </h3>
                      <p className="text-[15px] lg:text-[16px] text-[#475569] leading-[1.65] break-keep text-pretty [line-break:strict]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SolutionSection>

      {/* SECTION 4 | AI OPS DATA REFINEMENT */}
      <SolutionSection
        bgClass="bg-[#F8FAFC]"
        label="AI OPS DATA REFINEMENT"
        
        title={
          <span className="block text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px] font-[700] leading-[1.15] md:leading-[1.25] text-[#1B2D53] break-keep">
            AI Ops 전환을 위한 운영 데이터 정제 항목
          </span>
        }
      >
        
        
        <div className="flex flex-col relative z-10 w-full max-w-[1280px] mx-auto -mt-2 md:-mt-4">
          <div className="max-w-[1050px] lg:max-w-[1150px] mb-10 md:mb-14">
            <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#475569] leading-[1.7] break-keep">
              JENNIFER AI는 기존 APM 데이터로 성능·트랜잭션·에러 분석과 장애 원인 추정을 보조합니다. 아래 6개 항목은 AI Insight와 RCA Assist 품질을 높이기 위해 우선 정리할 APM 기반 운영 데이터입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {[
              { title: "핵심 업무·URL 정리", desc: "AI가 집중해야 할 주요 업무, URL, 거래 흐름을 구분합니다.", icon: <Target className="w-5 h-5 md:w-6 md:h-6" /> },
              { title: "식별자·명명 체계 정리", desc: "서비스명, 인스턴스명, URL, 에러 유형과 트랜잭션 식별 기준을 일관되게 정리합니다.", icon: <Tag className="w-5 h-5 md:w-6 md:h-6" /> },
              { title: "데이터 축적", desc: "응답 지연, 에러 발생, 스택트레이스 데이터를 지속적으로 축적합니다.", icon: <Database className="w-5 h-5 md:w-6 md:h-6" /> },
              { title: "이벤트·알람 기준 정리", desc: "중복 알람과 의미 없는 이벤트를 줄이고, 의미 있는 이벤트 기준을 정리합니다.", icon: <Bell className="w-5 h-5 md:w-6 md:h-6" /> },
              { title: "서비스 관계·토폴로지", desc: "서비스 간 호출 관계, MSA/K8s 구조, 외부 호출 구간을 정리합니다.", icon: <Network className="w-5 h-5 md:w-6 md:h-6" /> },
              { title: "장애 이력·조치 내역 정리", desc: "장애 원인, 영향 범위, 조치 내역, 재발 방지 내용을 운영 지식으로 남깁니다.", icon: <History className="w-5 h-5 md:w-6 md:h-6" /> }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col items-start text-left bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(27,45,83,0.06)] p-6 lg:px-7 lg:py-8 h-full transition-all duration-300 ease-in-out hover:bg-slate-50 hover:border-[#CBD5E1] motion-reduce:transition-none motion-safe:hover:-translate-y-[2px]"
              >
                <div className="flex items-center gap-3 md:gap-4 w-full mb-3 lg:mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-[44px] md:h-[44px] rounded-[10px] bg-[#F0F4F8] flex items-center justify-center text-[#1B2D53] group-hover:text-[#0284C7] group-hover:bg-[#E2E8F0] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-[17px] md:text-[18px] lg:text-[20px] font-[700] text-[#1B2D53] leading-[1.3] break-keep">{item.title}</h4>
                </div>
                <p className="text-[15px] lg:text-[16px] text-[#475569] group-hover:text-[#334155] leading-[1.65] break-keep transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
          
          
        </div>
      </SolutionSection>

      {/* SECTION 5 | JENNIFER AI CAPABILITIES */}
      <SolutionSection
        bgClass="bg-[#122A47] relative overflow-hidden jennifer-ai-capabilities" darkTitle={true}
        label="JENNIFER AI CAPABILITIES"
        title={
          <span className="block text-[28px] md:text-[34px] lg:text-[40px] font-[700] leading-[1.25] text-white break-keep">
            운영 데이터를 더 빠르게 이해하는 JENNIFER AI
          </span>
        }
      >
        <style>{`
          .jennifer-ai-capabilities__container {
            display: flex;
            flex-direction: column;
          }
          .jennifer-ai-capabilities__desc {
            font-size: 16px;
            line-height: 1.7;
            color: #CBD5E1;
            max-width: 1050px;
            word-break: keep-all;
            overflow-wrap: break-word;
            line-break: strict;
            margin-top: -24px;
            margin-bottom: 32px;
          }
          .jennifer-ai-capabilities__grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }
          .jennifer-ai-capabilities__card {
            background-color: #1A2E4B;
            border: 1px solid #2A4365;
            border-radius: 12px;
            padding: 32px;
            box-shadow: 0 1px 3px rgba(27,45,83,0.06);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            border-top: 3px solid #3182CE;
          }
          .jennifer-ai-capabilities__icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background-color: #1E3454;
            color: #90CDF4;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
          }
          .jennifer-ai-capabilities__title {
            font-size: 20px;
            font-weight: 600;
            color: #FFFFFF;
            margin-bottom: 12px;
            word-break: keep-all;
            overflow-wrap: break-word;
            line-break: strict;
          }
          .jennifer-ai-capabilities__text {
            font-size: 15px;
            line-height: 1.65;
            color: #CBD5E1;
            word-break: keep-all;
            overflow-wrap: break-word;
            line-break: strict;
          }
          @media (min-width: 768px) {
            .jennifer-ai-capabilities__desc {
              font-size: 17px;
              margin-bottom: 40px;
            }
          }
          @media (min-width: 1024px) {
            .jennifer-ai-capabilities__desc {
              font-size: 18px;
              max-width: 1150px;
              margin-bottom: 56px;
            }
          }
          }
          @media (max-width: 1199px) {
            .jennifer-ai-capabilities__grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
          @media (max-width: 767px) {
            .jennifer-ai-capabilities__grid {
              grid-template-columns: repeat(1, minmax(0, 1fr));
              gap: 16px;
            }
            .jennifer-ai-capabilities__card {
              padding: 24px;
            }
            .jennifer-ai-capabilities__desc {
              margin-top: -16px;
              margin-bottom: 24px;
              font-size: 15px;
            }
          }
        `}</style>
        <div className="jennifer-ai-capabilities__container">
          <p className="jennifer-ai-capabilities__desc">
            JENNIFER AI는 축적된 APM 데이터를 자연어로 조회하고, 스택트레이스·트랜잭션·에러와 대시보드 상태를 분석해 성능 문제의 원인과 확인 지점을 더 빠르게 파악할 수 있도록 지원합니다.
          </p>
          <div className="jennifer-ai-capabilities__grid">
            <div className="jennifer-ai-capabilities__card">
              <div className="jennifer-ai-capabilities__icon">
                <MessageSquareText className="w-6 h-6" />
              </div>
              <h3 className="jennifer-ai-capabilities__title">자연어 인사이트 챗</h3>
              <p className="jennifer-ai-capabilities__text">
                자연어 질문의 의도를 파악하고 JENNIFER Open API로 필요한 성능 데이터를 조회·분석해 핵심 결과를 제공합니다.
              </p>
            </div>
            
            <div className="jennifer-ai-capabilities__card">
              <div className="jennifer-ai-capabilities__icon">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="jennifer-ai-capabilities__title">스택트레이스·SFR 분석</h3>
              <p className="jennifer-ai-capabilities__text">
                복잡한 호출 스택과 누적 SFR 데이터를 분석해 병목 지점과 지연 메서드를 빠르게 확인하도록 지원합니다.
              </p>
            </div>

            <div className="jennifer-ai-capabilities__card">
              <div className="jennifer-ai-capabilities__icon">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="jennifer-ai-capabilities__title">트랜잭션·에러 인사이트</h3>
              <p className="jennifer-ai-capabilities__text">
                트랜잭션 오류와 예외 정보를 해석해 원인 후보, 영향 맥락과 확인·조치 방향을 제시합니다.
              </p>
            </div>

            <div className="jennifer-ai-capabilities__card">
              <div className="jennifer-ai-capabilities__icon">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="jennifer-ai-capabilities__title">대시보드·차트 인사이트</h3>
              <p className="jennifer-ai-capabilities__text">
                현재 대시보드와 차트 상태를 AI가 요약하고 주요 변화와 확인이 필요한 지점을 운영 관점에서 설명합니다.
              </p>
            </div>
          </div>
        
<div className="mt-10 md:mt-12 w-full bg-[#1E3454] border border-[#2A4365] jennifer-ai-capabilities__cta rounded-[16px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 md:gap-5">
              <div className="w-[48px] h-[48px] rounded-[12px] bg-[#0F172A]/50 border border-[#334155] flex items-center justify-center flex-shrink-0 text-[#90CDF4]">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="text-[12px] md:text-[13px] font-[600] tracking-[0.05em] text-[#D97706] mb-1">
                  JENNIFER AI 자료
                </div>
                <h4 className="text-[17px] md:text-[19px] font-[700] text-[#F8FAFC] mb-2 leading-[1.3] break-keep">
                  JENNIFER 신기능 및 LLM 적용 소개자료
                </h4>
                <p className="text-[14px] md:text-[15px] text-[#CBD5E1] leading-[1.5] break-keep">
                  JENNIFER AI의 주요 기능과 LLM 적용 내용을 확인할 수 있는 소개자료를 요청하실 수 있습니다.
                </p>
              </div>
            </div>
            <a 
              href="mailto:sales@ventra.co.kr?subject=[Ventra 자료 요청] JENNIFER AI Operations 소개자료"
              className="w-full md:w-auto inline-flex items-center justify-center flex-shrink-0 bg-[#FFFFFF] text-[#1B2D53] font-[600] text-[15px] px-6 py-3.5 rounded-[8px] transition-colors hover:bg-[#F8FAFC]"
            >
              자료 요청
            </a>
          
        </div>
          </div>
      </SolutionSection>

      {/* SECTION 6 | JENNIFER AI ROADMAP */}
      <SolutionSection
        bgClass="bg-[#F8FAFC]"
        label="JENNIFER AI ROADMAP"
        title={
          <span className="block text-[28px] md:text-[32px] lg:text-[38px] xl:text-[40px] font-[700] leading-[1.2] md:leading-[1.3] text-[#1B2D53]">
            JENNIFER 기반 AIOps 성숙도 모델
          </span>
        }
      >
        <div className="w-full max-w-[1280px] mx-auto mt-4 md:mt-6 lg:mt-8">
          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-[600] text-[#475569] leading-[1.4] mb-3">
            APM 데이터에서 AI-assisted Operations로 확장하는 단계적 여정
          </h3>
          <p className="text-[15px] md:text-[16px] text-[#64748B] leading-[1.6] mb-10 md:mb-12 break-keep max-w-[900px] text-pretty">
            고객의 운영 데이터 정제와 준비 과정을 기반으로, JENNIFER AI를 활용해 단계적으로 도달할 수 있는 AIOps 운영 범위를 제시합니다.
          </p>

          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(27,45,83,0.06)] p-6 md:p-8 lg:p-12 mb-12">
            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 md:gap-5 mb-8 md:mb-10 text-[12px] md:text-[13px] font-[500] text-[#64748B]">
              <div className="font-[600] text-[#475569] mr-1 md:mr-2">JENNIFER AI 활용 도달 범위</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#1B2D53]"></div>
                <span>주요 도달 영역</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: "conic-gradient(#1B2D53 30%, #E2E8F0 30%)" }}></div>
                <span>전환 영역</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#F8FAFC] border border-[#CBD5E1]"></div>
                <span>확장 영역</span>
              </div>
            </div>

            <div className="relative">
              {/* Timeline Line Base */}
              <div className="hidden lg:block absolute top-[28px] left-[8.33%] right-[8.33%] h-[2px] bg-[#E2E8F0] z-0"></div>
              <div className="block lg:hidden absolute left-[28px] top-[24px] bottom-[24px] w-[2px] bg-[#E2E8F0] z-0"></div>

              {/* Timeline Line Active (01 to 03) */}
              <div className="hidden lg:block absolute top-[28px] left-[8.33%] w-[33.33%] h-[2px] bg-[#1B2D53] z-0"></div>
              <div className="block lg:hidden absolute left-[28px] top-[24px] h-[33.33%] w-[2px] bg-[#1B2D53] z-0"></div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative z-10">
                {[
                  { num: "01", title: "APM Data", desc: "축적 데이터를 분석 출발점으로 활용", state: "active" },
                  { num: "02", title: "AI Insight", desc: "자연어 운영 분석, 인사이트 활용", state: "active" },
                  { num: "03", title: "RCA Assist", desc: "원인 후보 및 지연 구간 분석 보조", state: "active" },
                  { num: "04", title: "Knowledge Base", desc: "장애 패턴 및 조치 경험 운영 지식 축적", state: "partial" },
                  { num: "05", title: "Unified Observability", desc: "로그, 메트릭, ITSM 등과 연결", state: "neutral" },
                  { num: "06", title: "AI-assisted Operations", desc: "원인 분석, 조치 추천, 승인 기반 보조", state: "neutral" }
                ].map((stage, idx) => (
                  <div key={idx} className="flex-1 flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center relative">
                    {stage.state === 'partial' && (
                      <div className="absolute top-[-10px] lg:top-[-36px] left-[72px] lg:left-1/2 lg:-translate-x-1/2 text-[11px] font-[600] tracking-wide text-[#FFFFFF] bg-[#1B2D53] px-2 py-0.5 rounded-[4px] whitespace-nowrap z-20">
                        전환 영역
                      </div>
                    )}
                    <div 
                      className={`flex-shrink-0 w-[56px] h-[56px] border-[3px] border-[#FFFFFF] font-[700] text-[16px] rounded-full flex items-center justify-center shadow-sm z-10 relative ${
                        stage.state === 'active' ? 'bg-[#1B2D53] text-[#FFFFFF]' :
                        stage.state === 'neutral' ? 'bg-[#F8FAFC] text-[#1B2D53] border-[#E2E8F0]' : ''
                      }`}
                      style={stage.state === 'partial' ? {
                        background: "conic-gradient(#1B2D53 30%, #E2E8F0 30%)"
                      } : {}}
                    >
                      {stage.state === 'partial' ? (
                        <div className="w-[44px] h-[44px] bg-[#FFFFFF] rounded-full flex items-center justify-center text-[#1B2D53]">
                          {stage.num}
                        </div>
                      ) : (
                        stage.num
                      )}
                    </div>
                    <div className="flex-1 ml-6 lg:ml-0 lg:mt-6">
                      <h4 className={`text-[16px] md:text-[17px] lg:text-[18px] font-[700] mb-2 leading-[1.3] break-keep ${stage.state !== 'neutral' ? 'text-[#1B2D53]' : 'text-[#475569]'}`}>{stage.title}</h4>
                      <p className="text-[14px] text-[#64748B] leading-[1.6] break-keep">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SolutionSection>
    </SolutionPageTemplate>
  );
}
