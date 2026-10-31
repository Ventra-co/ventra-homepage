import React from "react";
import { 
  Building2, 
  Sparkles, 
  Users, 
  Handshake, 
  Monitor,
  Shield,
  Briefcase,
  Network,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

import discoLogo from "../../about__s6-partner-logos-DISCO.png";
import goldenearthLogo from "../../about__s6-partner-logos-Goldenearth.png";
import jenniferLogo from "../../about__s6-partner-logos-JENNIFERSOFT.png";
import koreacertLogo from "../../about__s6-partner-logos-Koreacert.png";
import rockplaceLogo from "../../about__s6-partner-logos-Rockplace.png";
import simmssoftLogo from "../../about__s6-partner-logos-simmssoft.png";
import spithaLogo from "../../about__s6-partner-logos-SPitha.png";
import universalRealtimeLogo from "../../about__s6-partner-logos-UniversalRealtime.png";
import aboutHeroBg from "../../about__s1-hero-bgv2.png";
import experienceVisual from "../../about__s4-experience-visual-v2.png";
import { SeoMeta } from "../components/seo/SeoMeta";

export function About() {
  return (
    <div className="w-full flex flex-col bg-surface-container-lowest">
      <SeoMeta
        title="Ventra 소개 | Enterprise Technology Partner"
        description="Ventra는 국내 B2B Enterprise IT 현장 경험과 검증된 파트너 생태계를 바탕으로 고객의 기술 전환과 파트너 사업화를 실행 가능한 구조로 연결합니다."
        canonicalPath="/about"
        schema={JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ventra.co.kr/about" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Ventra 소개 | Enterprise Technology Partner",
      "url": "https://ventra.co.kr/about"
    }
  ])}
      />
      {/* SECTION 1 | HERO */}
      <section 
        className="w-full min-h-[500px] md:min-h-[600px] flex items-center relative overflow-hidden bg-[#1B2D53] bg-cover bg-no-repeat bg-[position:80%_center] md:bg-[position:90%_center] lg:bg-[position:100%_center]"
        style={{ 
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10, 18, 33, 0.90) 0%,
              rgba(10, 18, 33, 0.76) 35%,
              rgba(10, 18, 33, 0.40) 58%,
              rgba(10, 18, 33, 0.12) 82%,
              rgba(10, 18, 33, 0.06) 100%
            ),
            url(${aboutHeroBg})
          `
        }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20 md:py-32">
          <div className="max-w-[760px] text-left">
            <h1 className="text-[42px] md:text-[60px] lg:text-[68px] font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm mb-8 break-keep">
              Enterprise IT의 현실에서,<br />
              AI-ready 전환의 기반까지
            </h1>
            <p className="text-[18px] md:text-[22px] text-white/90 leading-[1.6] break-keep mb-8">
              레거시·망분리·규제·보안이 공존하는 고객 환경을 이해하고, AI-ready 기반으로 이어지는 실행 가능한 전환 구조를 함께 만듭니다.
            </p>

          </div>
        </div>
      </section>

      {/* SECTION 2 | WHY VENTRA EXISTS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="text-center max-w-[900px] mx-auto mb-16 md:mb-20">
            <p className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-accent uppercase mb-3 leading-[1.4]">WHY VENTRA EXISTS</p>
            <h2 className="text-[32px] md:text-[40px] font-[700] text-primary tracking-tight mb-6 break-keep">
              AI 전환은 기술 도입보다 기반 준비에서 시작됩니다
            </h2>
            <p className="text-[18px] md:text-[20px] text-on-surface-variant leading-[1.6] break-keep">
              많은 기업이 AI 도입을 검토하고 있지만, 실제 전환은 새로운 도구를 추가하는 것만으로 이루어지지 않습니다. 운영 복잡성, 데이터 단절, 보안 규제, 온프레미스·망분리 환경, 운영 조직의 변화로 인한 운영 지식 이탈이 여전히 핵심 제약으로 남아 있습니다. Ventra는 고객이 이미 보유한 시스템과 운영 현실에서 출발합니다. 현재의 Enterprise IT 환경을 기준으로, AI 전환이 가능한 운영·데이터·보안 기반을 단계적으로 정리합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-[18px] font-[700] text-primary mb-3">Regulated Hybrid IT</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                금융·공공·제조 환경은 온프레미스, 망분리, 클라우드, 규제 요구가 함께 작동하는 복합 IT 환경입니다
              </p>
            </div>
            
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-[18px] font-[700] text-primary mb-3">AI Readiness Gap</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                AI 도입을 위해서는 데이터 품질, 운영 안정성, 보안 기준, 실행 구조가 먼저 정리되어야 합니다.
              </p>
            </div>
            
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-[18px] font-[700] text-primary mb-3">Operational Knowledge Gap</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                3Tier·WAS·DB·연계 구조를 이해하는 운영 지식은 운영 조직의 변화와 함께 점점 희소해지고 있습니다.
              </p>
            </div>
            
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-[18px] font-[700] text-primary mb-3">Execution Partner Need</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                기술 선택만으로 전환은 완성되지 않습니다. 적용 가능성 검토부터 파트너 협업과 실행 구조까지 연결할 역량이 필요합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 | HOW VENTRA WORKS */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
            <p className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-accent uppercase mb-3 leading-[1.4]">HOW VENTRA WORKS</p>
            <h2 className="text-[32px] md:text-[40px] font-[700] text-primary tracking-tight mb-6 break-keep">
              기술보다 지속 가능한 운영 구조를 먼저 설계합니다
            </h2>
            <p className="text-[18px] md:text-[20px] text-on-surface-variant leading-[1.6] break-keep">
              Ventra는 제품의 기능을 나열하는 데서 시작하지 않습니다. 고객의 현재 환경과 제약을 먼저 이해하고, 필요한 기술과 파트너 역량을 조합해 실제 운영 가능한 전환 구조로 연결합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full relative overflow-hidden group cursor-default">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#CBD5E1] opacity-50 group-hover:bg-accent transition-colors"></div>
              <div className="text-accent font-bold text-sm mb-4 tracking-wider uppercase">01</div>
              <h3 className="text-[20px] font-[700] text-primary mb-3">Experience First</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                고객의 산업, 운영 방식, 규제, 조직 제약을 먼저 이해합니다.
              </p>
            </div>
            
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full relative overflow-hidden group cursor-default">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#CBD5E1] opacity-50 group-hover:bg-accent transition-colors"></div>
              <div className="text-accent font-bold text-sm mb-4 tracking-wider uppercase">02</div>
              <h3 className="text-[20px] font-[700] text-primary mb-3">Architecture Thinking</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                개별 제품이 아니라 운영·데이터·연결·보안을 아우르는 구조와 연결 방식을 설계합니다.
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full relative overflow-hidden group cursor-default">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#CBD5E1] opacity-50 group-hover:bg-accent transition-colors"></div>
              <div className="text-accent font-bold text-sm mb-4 tracking-wider uppercase">03</div>
              <h3 className="text-[20px] font-[700] text-primary mb-3">Partner Ecosystem</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                검증된 기술 파트너와 고객 환경에 맞는 실행 조합을 구성합니다.
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full relative overflow-hidden group cursor-default">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#CBD5E1] opacity-50 group-hover:bg-accent transition-colors"></div>
              <div className="text-accent font-bold text-sm mb-4 tracking-wider uppercase">04</div>
              <h3 className="text-[20px] font-[700] text-primary mb-3">Execution Focused</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mt-auto">
                검토에서 끝나지 않고, 제안·적용·협업 과정까지 실행 가능한 흐름으로 연결합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 | EXPERIENCE & EXPERTISE */}
      <section className="py-20 md:py-28 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Left Column (Text Area) */}
            <div className="w-full lg:w-[44%] text-left">
              <p className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-accent uppercase mb-3 leading-[1.4]">EXPERIENCE & EXPERTISE</p>
              <h2 className="text-[32px] md:text-[40px] font-[700] text-primary tracking-tight mb-6 break-keep">
                Enterprise Field Experience
              </h2>
              <p className="text-[18px] md:text-[20px] text-on-surface-variant leading-[1.75] break-keep max-w-[600px]">
                엔터프라이즈 IT 전환은 기술만으로 완성되지 않습니다. 고객의 운영 환경과 기존 시스템, 규제·보안 요구, 조직의 제약과 의사결정 구조를 함께 이해해야 합니다. <br /><br />
                Ventra는 국내 B2B 엔터프라이즈 IT 현장에서 축적한 경험을 바탕으로, 고객의 기술 전환 과제와 기술 파트너의 사업화 과제를 실행 가능한 구조로 구체화합니다.
              </p>
            </div>
            {/* Right Column (Visual Area) */}
            <div className="w-full lg:w-[56%] mt-8 lg:mt-0 rounded-[12px] overflow-hidden border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <img 
                src={experienceVisual} 
                alt="엔터프라이즈 IT 환경을 현실적인 실행 방향으로 연결하는 현장 경험" 
                className="w-full h-full aspect-[4/3] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 | BUSINESS FOCUS ALIGNMENT */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
            <p className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-accent uppercase mb-3 leading-[1.4]">BUSINESS FOCUS ALIGNMENT</p>
            <h2 className="text-[32px] md:text-[40px] font-[700] text-primary tracking-tight mb-6 break-keep">
              Ventra의 전문성은 4개 Business Focus로 연결됩니다
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 group">
              <Link to="/business-focus/observability-optimization" className="flex-1 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-[8px] -m-2 p-2">
                <div className="w-12 h-12 bg-[#F1F5F9] rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-[#E2E8F0] transition-colors">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-[700] text-primary mb-4 break-keep">Observability / Optimization</h3>
                <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep flex-1">
                  APM, DPM, 운영 가시성, AI Operations 전환을 위한 데이터 기반 운영 최적화 관점
                </p>
              </Link>
              <div className="mt-auto flex flex-col gap-1 w-full border-t border-[#E2E8F0] pt-4">
                <Link to="/solutions/jennifer-ai-operations" className="flex items-center justify-between w-full min-h-[44px] py-2 text-[14px] font-[600] text-accent hover:bg-orange-50/50 rounded-md px-2 -mx-2 transition-colors group/link focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                  <span>JENNIFER AI Operations</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
                <div className="h-[1px] bg-gray-100 w-full" />
                <Link to="/solutions/simms-itm" className="flex items-center justify-between w-full min-h-[44px] py-2 text-[14px] font-[600] text-accent hover:bg-orange-50/50 rounded-md px-2 -mx-2 transition-colors group/link focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                  <span>SIMMS-ITM</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            <Link to="/business-focus/api-integration" className="bg-white border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
              <div className="w-12 h-12 bg-[#F1F5F9] rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-[#E2E8F0] transition-colors">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-[700] text-primary mb-4 break-keep">API / Integration</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mb-8 flex-1">
                레거시, API, EAI, Messaging, CDC, Event Streaming이 병존하는 Enterprise 연결 구조 관점
              </p>
              <div className="text-[14px] font-[600] text-accent flex items-center gap-2 mt-auto">
                Felice Kafka Operations Platform
              </div>
            </Link>

            <Link to="/business-focus/security-automation" className="bg-white border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
              <div className="w-12 h-12 bg-[#F1F5F9] rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-[#E2E8F0] transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-[700] text-primary mb-4 break-keep">Security / Automation</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mb-8 flex-1">
                인증서, Machine Identity, Digital Trust, 보안 운영 통제를 자동화하는 관점
              </p>
              <div className="text-[14px] font-[600] text-accent flex items-center gap-2 mt-auto">
                UCLM Certificate Lifecycle Automation
              </div>
            </Link>

            <Link to="/business-focus/business-building" className="bg-white border border-[#E2E8F0] p-8 rounded-[16px] flex flex-col h-full hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
              <div className="w-12 h-12 bg-[#F1F5F9] rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-[#E2E8F0] transition-colors">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-[700] text-primary mb-4 break-keep">Business Building Consulting</h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.6] break-keep mb-8 flex-1">
                기술기업과 파트너의 시장성 검증, 초기 고객 발굴, 제안 전략, 공동영업 구조 지원
              </p>
              <div className="text-[14px] font-[600] text-accent flex items-center gap-2 mt-auto">
                Business Building Consulting
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 | PARTNER ECOSYSTEM */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
            <p className="text-[12px] md:text-[13px] font-[600] tracking-[0.08em] text-accent uppercase mb-3 leading-[1.4]">PARTNER ECOSYSTEM</p>
            <h2 className="text-[32px] md:text-[40px] font-[700] text-primary tracking-tight mb-6 break-keep">
              검증된 기술 파트너와 함께 실행 가능한 전환 구조를 만듭니다
            </h2>
            <p className="text-[18px] md:text-[20px] text-on-surface-variant leading-[1.6] break-keep">
              Ventra는 고객 과제에 맞춰 기술 조합과 실행 우선순위를 설계하고, 검증된 파트너의 전문 역량을 연결합니다. 제품 소개에 머무르지 않고 고객 환경에 적용할 수 있는 전환 구조와 협업 체계를 만듭니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-8 h-[120px] md:h-[140px] flex items-center justify-center">
              <img src={goldenearthLogo} alt="골든어스" className="w-[72%] md:w-[76%] h-auto max-h-full object-contain" />
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-8 h-[120px] md:h-[140px] flex items-center justify-center">
              <img src={discoLogo} alt="디아이에스코" className="w-[90%] md:w-[95%] h-auto max-h-full object-contain" />
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-8 h-[120px] md:h-[140px] flex items-center justify-center">
              <img src={rockplaceLogo} alt="락플레이스" className="w-[78%] md:w-[84%] h-auto max-h-full object-contain" />
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-8 h-[120px] md:h-[140px] flex items-center justify-center">
              <img src={spithaLogo} alt="스피타" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-8 h-[120px] md:h-[140px] flex items-center justify-center">
              <img src={simmssoftLogo} alt="심스소프트" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-8 h-[120px] md:h-[140px] flex items-center justify-center">
              <img src={universalRealtimeLogo} alt="유니버셜리얼타임" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-8 h-[120px] md:h-[140px] flex items-center justify-center">
              <img src={jenniferLogo} alt="제니퍼소프트" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-8 h-[120px] md:h-[140px] flex items-center justify-center">
              <img src={koreacertLogo} alt="한국기업보안" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
