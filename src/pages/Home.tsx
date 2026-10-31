import { Link } from "react-router-dom";
import homeHeroVisual from "../../home__s1-hero-visual.png";

import logoDISCO from "../../about__s6-partner-logos-DISCO.png";
import logoGoldenearth from "../../about__s6-partner-logos-Goldenearth.png";
import logoJENNIFERSOFT from "../../about__s6-partner-logos-JENNIFERSOFT.png";
import logoKoreacert from "../../about__s6-partner-logos-Koreacert.png";
import logoRockplace from "../../about__s6-partner-logos-Rockplace.png";
import logoSimmssoft from "../../about__s6-partner-logos-simmssoft.png";
import logoSPitha from "../../about__s6-partner-logos-SPitha.png";
import logoUniversalRealtime from "../../about__s6-partner-logos-UniversalRealtime.png";
import logoIBM from "../../about__s6-partner-logos-IBM.png";
import logoCUDO from "../../about__s6-partner-logos-CUDO.png";
import { SeoMeta } from "../components/seo/SeoMeta";

import { Helmet } from "react-helmet-async";
export function Home() {
  
const partners = [
  { name: 'IBM', src: logoIBM, size: 'scale-90' },
  { name: 'CUDO', src: logoCUDO, size: 'scale-100' },
  { name: 'DISCO', src: logoDISCO, size: 'scale-110' },
  { name: 'Goldenearth', src: logoGoldenearth, size: 'scale-90' },
  { name: 'JENNIFERSOFT', src: logoJENNIFERSOFT, size: 'scale-100' },
  { name: 'Koreacert', src: logoKoreacert, size: 'scale-100' },
  { name: 'Rockplace', src: logoRockplace, size: 'scale-110' },
  { name: 'simmssoft', src: logoSimmssoft, size: 'scale-100' },
  { name: 'SPitha', src: logoSPitha, size: 'scale-100' },
  { name: 'UniversalRealtime', src: logoUniversalRealtime, size: 'scale-100' },
];

  const origin = "https://ventra.co.kr";
  const schemaOrg = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ventra Inc.",
    "alternateName": "주식회사 벤트라",
    "url": "https://ventra.co.kr",
    "logo": "https://ventra.co.kr/ventra-logo-color-master.png",
    "email": "sales@ventra.co.kr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "디지털로9길 47, 804호",
      "addressLocality": "금천구",
      "addressRegion": "서울특별시",
      "addressCountry": "KR"
    },
    "sameAs": []
  });
  const schemaWebSite = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ventra",
    "url": "https://ventra.co.kr"
  });
  const schemaWebPage = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Enterprise IT 전환과 AI-ready 기반 설계 | Ventra",
    "url": "https://ventra.co.kr/",
    "description": "Ventra는 레거시·망분리·규제가 공존하는 기업 환경에서 Observability, API Integration, Security Automation, IT 운영을 연결해 AI-ready 전환 기반을 설계합니다."
  });
  const schemaString = `[${schemaOrg},${schemaWebSite},${schemaWebPage}]`;
  return (
    <>
      {/* Section 1: Hero */}
      <section 
        className="relative w-full h-[520px] md:h-[580px] lg:h-[680px] flex flex-col justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${homeHeroVisual})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 60%'
        }}
      >
        <div className="absolute inset-0 z-0">
      <SeoMeta
        title="Enterprise IT 전환과 AI-ready 기반 설계 | Ventra"
        description="Ventra는 레거시·망분리·규제가 공존하는 기업 환경에서 Observability, API Integration, Security Automation, IT 운영을 연결해 AI-ready 전환 기반을 설계합니다."
        canonicalPath="/"
        schema={schemaString}
      />
          {/* Deep Navy Overlay */}
          <div className="absolute inset-0 bg-[#0A1128]/40"></div>
          {/* Darker behind text */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,17,40,0.75)_0%,rgba(10,17,40,0)_55%)]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-[960px] mx-auto px-[20px] md:px-[64px] lg:px-[80px] flex flex-col items-center text-center pb-[4%] md:pb-[6%]">
          <div className="text-white/90 font-[600] text-[13px] md:text-[15px] lg:text-[16px] uppercase tracking-widest mb-[24px] md:mb-[28px]">
            ENTERPRISE TECHNOLOGY PARTNER
          </div>
          
          <h1 className="text-[38px] sm:text-[48px] md:text-[60px] lg:text-[68px] xl:text-[72px] font-[700] leading-[1.08] md:leading-[1.1] tracking-tight text-white drop-shadow-sm mb-[28px] md:mb-[32px]">
            Transform your IT,<br />Venture Beyond
          </h1>
          
          <p className="text-[15px] sm:text-[17px] md:text-[18px] lg:text-[19px] font-[500] leading-[1.6] text-white/95 max-w-[780px] drop-shadow-sm break-keep">
            레거시 환경에서 AI-ready 운영 기반까지, 기업 IT 전환을 함께 설계합니다.
          </p>
        </div>
      </section>

      {/* Section 3: Transformation Roadmap */}
      <section id="solutions-roadmap" className="w-full bg-[#F8FAFC] py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] lg:px-[80px]">
          <div className="text-center mb-12 md:mb-[56px]">
            <p className="text-[12px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-3 md:mb-4">TRANSFORMATION ROADMAP</p>
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-[800] mb-4 md:mb-6 text-[#1B2D53] tracking-tight">
              AI-ready Transformation Roadmap
            </h2>
            <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#475569] max-w-[800px] mx-auto font-[500] break-keep">
              성공적인 AI 도입을 위한 단계별 로드맵을 통해 기업의 디지털 경쟁력을 강화하세요.
            </p>
          </div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-6 lg:gap-8 max-w-[960px] mx-auto z-0">
            {/* Connecting line for desktop (behind cards) */}
            <div className="hidden md:block absolute top-[60px] lg:top-[64px] left-[16.66%] right-[16.66%] h-[2px] bg-[#CBD5E1] -z-10"></div>
            {/* Connecting line for mobile (behind cards) */}
            <div className="block md:hidden absolute left-1/2 -translate-x-1/2 top-[56px] bottom-[56px] w-[2px] bg-[#CBD5E1] -z-10"></div>

            <div className="relative flex-1 flex flex-col items-center text-center p-[24px] md:p-[28px] lg:p-[32px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] shadow-sm">
              {/* Desktop internal line */}
              <div className="hidden md:block absolute right-0 top-[60px] lg:top-[64px] w-1/2 h-[2px] bg-[#CBD5E1] z-0"></div>
              {/* Mobile internal line */}
              <div className="block md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%-56px)] bg-[#CBD5E1] z-0"></div>
              
              <div className="w-[64px] h-[64px] bg-[#FFFFFF] border-[2px] border-[#1B2D53] rounded-full flex items-center justify-center mb-5 md:mb-6 relative z-10 mx-auto">
                <span className="material-symbols-outlined text-[#1B2D53] text-[32px]">analytics</span>
              </div>
              <div className="relative z-10 bg-[#FFFFFF] w-full py-2">
                <div className="text-[#1B2D53] font-[700] text-[13px] md:text-[14px] mb-2 tracking-[0.08em] uppercase">Step 01</div>
                <h3 className="font-[800] text-[18px] md:text-[20px] mb-3 text-[#1B2D53] tracking-tight">Legacy Environment</h3>
                <p className="text-[#475569] text-[15px] md:text-[16px] leading-[1.6] break-keep">기존 레거시 인프라의 현황을 분석하고 현대화를 위한 최적의 전략을 수립합니다.</p>
              </div>
            </div>

            <div className="relative flex-1 flex flex-col items-center text-center p-[24px] md:p-[28px] lg:p-[32px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] shadow-sm">
              {/* Desktop internal line */}
              <div className="hidden md:block absolute left-0 top-[60px] lg:top-[64px] w-full h-[2px] bg-[#CBD5E1] z-0"></div>
              {/* Mobile internal line */}
              <div className="block md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-[#CBD5E1] z-0"></div>
              
              <div className="w-[64px] h-[64px] bg-[#FFFFFF] border-[2px] border-[#1B2D53] rounded-full flex items-center justify-center mb-5 md:mb-6 relative z-10 mx-auto">
                <span className="material-symbols-outlined text-[#1B2D53] text-[32px]">auto_awesome</span>
              </div>
              <div className="relative z-10 bg-[#FFFFFF] w-full py-2">
                <div className="text-[#1B2D53] font-[700] text-[13px] md:text-[14px] mb-2 tracking-[0.08em] uppercase">Step 02</div>
                <h3 className="font-[800] text-[18px] md:text-[20px] mb-3 text-[#1B2D53] tracking-tight">AI-ready Foundation</h3>
                <p className="text-[#475569] text-[15px] md:text-[16px] leading-[1.6] break-keep">데이터 통합 및 클라우드 네이티브 환경 구축을 통해 AI 활용을 위한 기반을 마련합니다.</p>
              </div>
            </div>

            <div className="relative flex-1 flex flex-col items-center text-center p-[24px] md:p-[28px] lg:p-[32px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] shadow-sm">
              {/* Desktop internal line */}
              <div className="hidden md:block absolute left-0 top-[60px] lg:top-[64px] w-1/2 h-[2px] bg-[#CBD5E1] z-0"></div>
              {/* Mobile internal line */}
              <div className="block md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[56px] bg-[#CBD5E1] z-0"></div>
              
              <div className="w-[64px] h-[64px] bg-[#FFFFFF] border-[2px] border-[#D97706] rounded-full flex items-center justify-center mb-5 md:mb-6 relative z-10 mx-auto">
                <span className="material-symbols-outlined text-[#D97706] text-[32px]">rocket_launch</span>
              </div>
              <div className="relative z-10 bg-[#FFFFFF] w-full py-2">
                <div className="text-[#D97706] font-[700] text-[13px] md:text-[14px] mb-2 tracking-[0.08em] uppercase">Step 03</div>
                <h3 className="font-[800] text-[18px] md:text-[20px] mb-3 text-[#1B2D53] tracking-tight">AI-native Operations</h3>
                <p className="text-[#475569] text-[15px] md:text-[16px] leading-[1.6] break-keep">지능형 자동화와 실시간 분석을 통해 비즈니스 운영의 효율성을 극대화합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Business Focus */}
      <section id="business-focus" className="w-full bg-[#FFFFFF] py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] lg:px-[80px]">
          <div className="text-center mb-12 md:mb-[56px]">
            <p className="text-[13px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-3 md:mb-4">BUSINESS FOCUS</p>
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-[800] mb-4 md:mb-6 text-[#1B2D53] tracking-tight">
              Business Focus
            </h2>
            <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#475569] max-w-[800px] mx-auto font-[500] break-keep">
              기업의 비즈니스 과제 해결을 위한 맞춤형 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <Link to="/business-focus/observability-optimization" className="group relative flex flex-col p-[28px] lg:p-[32px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#D97706] transition-all duration-200 ease-in-out h-full min-h-[180px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706]">
              <div className="absolute top-[28px] right-[28px] lg:top-[32px] lg:right-[32px] text-[#94A3B8] group-hover:text-[#D97706] transition-colors duration-200">
                <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
              </div>
              <div className="w-[44px] h-[44px] flex items-center justify-center rounded-lg bg-[#FFFFFF] border border-[#E2E8F0] mb-5 text-[#1B2D53]">
                <span className="material-symbols-outlined text-[24px]">monitoring</span>
              </div>
              <div className="flex flex-col flex-grow">
                <h4 className="font-[600] text-[20px] md:text-[22px] mb-2 md:mb-3 text-[#1B2D53] tracking-tight">Observability / Optimization</h4>
                <p className="text-[#475569] text-[15px] md:text-[16px] leading-[1.6] break-keep">시스템 전반의 가시성을 확보하고 성능을 최적화하여 안정적인 서비스를 보장합니다.</p>
              </div>
            </Link>

            <Link to="/business-focus/api-integration" className="group relative flex flex-col p-[28px] lg:p-[32px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#D97706] transition-all duration-200 ease-in-out h-full min-h-[180px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706]">
              <div className="absolute top-[28px] right-[28px] lg:top-[32px] lg:right-[32px] text-[#94A3B8] group-hover:text-[#D97706] transition-colors duration-200">
                <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
              </div>
              <div className="w-[44px] h-[44px] flex items-center justify-center rounded-lg bg-[#FFFFFF] border border-[#E2E8F0] mb-5 text-[#1B2D53]">
                <span className="material-symbols-outlined text-[24px]">api</span>
              </div>
              <div className="flex flex-col flex-grow">
                <h4 className="font-[600] text-[20px] md:text-[22px] mb-2 md:mb-3 text-[#1B2D53] tracking-tight">API / Integration</h4>
                <p className="text-[#475569] text-[15px] md:text-[16px] leading-[1.6] break-keep">다양한 플랫폼과 서비스를 유연하게 연결하여 데이터 흐름을 원활하게 합니다.</p>
              </div>
            </Link>

            <Link to="/business-focus/security-automation" className="group relative flex flex-col p-[28px] lg:p-[32px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#D97706] transition-all duration-200 ease-in-out h-full min-h-[180px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706]">
              <div className="absolute top-[28px] right-[28px] lg:top-[32px] lg:right-[32px] text-[#94A3B8] group-hover:text-[#D97706] transition-colors duration-200">
                <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
              </div>
              <div className="w-[44px] h-[44px] flex items-center justify-center rounded-lg bg-[#FFFFFF] border border-[#E2E8F0] mb-5 text-[#1B2D53]">
                <span className="material-symbols-outlined text-[24px]">security</span>
              </div>
              <div className="flex flex-col flex-grow">
                <h4 className="font-[600] text-[20px] md:text-[22px] mb-2 md:mb-3 text-[#1B2D53] tracking-tight">Security / Automation</h4>
                <p className="text-[#475569] text-[15px] md:text-[16px] leading-[1.6] break-keep">강력한 보안 체계와 자동화된 대응 프로세스로 비즈니스 자산을 보호합니다.</p>
              </div>
            </Link>

            <Link to="/business-focus/business-building" className="group relative flex flex-col p-[28px] lg:p-[32px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#D97706] transition-all duration-200 ease-in-out h-full min-h-[180px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706]">
              <div className="absolute top-[28px] right-[28px] lg:top-[32px] lg:right-[32px] text-[#94A3B8] group-hover:text-[#D97706] transition-colors duration-200">
                <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
              </div>
              <div className="w-[44px] h-[44px] flex items-center justify-center rounded-lg bg-[#FFFFFF] border border-[#E2E8F0] mb-5 text-[#1B2D53]">
                <span className="material-symbols-outlined text-[24px]">business_center</span>
              </div>
              <div className="flex flex-col flex-grow">
                <h4 className="font-[600] text-[20px] md:text-[22px] mb-2 md:mb-3 text-[#1B2D53] tracking-tight">Business Building Consulting</h4>
                <p className="text-[#475569] text-[15px] md:text-[16px] leading-[1.6] break-keep">새로운 비즈니스 기회 창출을 위한 전략적 컨설팅과 실행 방안을 제시합니다.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Why Ventra */}
      <section id="why-ventra" className="w-full relative bg-[#152340] py-[64px] md:py-[96px] lg:py-[112px]">
        <div className="relative z-10 max-w-[1280px] mx-auto px-[20px] md:px-[64px] lg:px-[80px]">
          {/* Section Header */}
          <header className="text-center mb-12 md:mb-16">
            <p className="text-[13px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-3 md:mb-4">WHY VENTRA</p>
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-[700] text-[#FFFFFF] leading-[1.2] mb-4 md:mb-6 tracking-tight">
              기술과 시장을 연결하는 실행 파트너
            </h2>
            <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#94A3B8] leading-[1.6] max-w-[760px] mx-auto break-keep">
              고객 환경에 맞는 파트너 기술을 선별하고, 적용 가능성 검토부터 제안, 구축·실행 협업까지 연결합니다.
            </p>
          </header>

          {/* Pillar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {/* Pillar 1: TECH FIT */}
            <article className="flex flex-col bg-[#FFFFFF]/[0.06] border border-[#FFFFFF]/[0.15] rounded-[12px] p-[28px] lg:p-[32px] h-full">
              <div className="mb-5 md:mb-6 flex items-center">
                <span className="material-symbols-outlined text-[#D97706] text-[32px] md:text-[36px]" aria-hidden="true">fact_check</span>
              </div>
              <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#FFFFFF] mb-3 uppercase tracking-tight">
                TECH FIT
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#94A3B8] leading-[1.6] break-keep">
                고객 환경과 기술 적용 가능성 검토
              </p>
            </article>

            {/* Pillar 2: ECOSYSTEM */}
            <article className="flex flex-col bg-[#FFFFFF]/[0.06] border border-[#FFFFFF]/[0.15] rounded-[12px] p-[28px] lg:p-[32px] h-full">
              <div className="mb-5 md:mb-6 flex items-center">
                <span className="material-symbols-outlined text-[#D97706] text-[32px] md:text-[36px]" aria-hidden="true">hub</span>
              </div>
              <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#FFFFFF] mb-3 uppercase tracking-tight">
                ECOSYSTEM
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#94A3B8] leading-[1.6] break-keep">
                검증된 기술 파트너 네트워크
              </p>
            </article>

            {/* Pillar 3: EXECUTE */}
            <article className="flex flex-col bg-[#FFFFFF]/[0.06] border border-[#FFFFFF]/[0.15] rounded-[12px] p-[28px] lg:p-[32px] h-full">
              <div className="mb-5 md:mb-6 flex items-center">
                <span className="material-symbols-outlined text-[#D97706] text-[32px] md:text-[36px]" aria-hidden="true">route</span>
              </div>
              <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#FFFFFF] mb-3 uppercase tracking-tight">
                EXECUTE
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#94A3B8] leading-[1.6] break-keep">
                PoC에서 실행 협업까지 연결
              </p>
            </article>

            {/* Pillar 4: AI-READY */}
            <article className="flex flex-col bg-[#FFFFFF]/[0.06] border border-[#FFFFFF]/[0.15] rounded-[12px] p-[28px] lg:p-[32px] h-full">
              <div className="mb-5 md:mb-6 flex items-center">
                <span className="material-symbols-outlined text-[#D97706] text-[32px] md:text-[36px]" aria-hidden="true">memory</span>
              </div>
              <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#FFFFFF] mb-3 uppercase tracking-tight">
                AI-READY
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#94A3B8] leading-[1.6] break-keep">
                운영·데이터·보안 기반 정비
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 2: Partner Band (Moved after Section 5) */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-10 md:py-16 overflow-hidden relative">
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
              display: flex;
              width: max-content;
            }
            .pause-on-hover:hover .animate-marquee {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-marquee {
                animation: none;
              }
            }
            .fade-mask {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          `}
        </style>

        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] lg:px-[80px] mb-8 md:mb-12 relative z-10">
          <h2 className="text-center font-bold text-[22px] md:text-[26px] text-[#0F172A]">
            Trusted Technology Partners
          </h2>
        </div>

        <div className="relative w-full max-w-[1600px] mx-auto fade-mask pause-on-hover">
          <div className="animate-marquee gap-[20px] md:gap-[32px] flex items-center px-[10px] md:px-[16px]">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="w-[140px] h-[70px] md:w-[200px] md:h-[100px] bg-[#FFFFFF] rounded-[8px] md:rounded-[12px] shadow-sm border border-[#E2E8F0] flex items-center justify-center flex-shrink-0 p-4 md:p-6"
              >
                <img 
                  src={partner.src} 
                  alt={`${partner.name} logo`} 
                  className={`max-w-full max-h-full object-contain ${partner.size}`} 
                  loading="lazy"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Contact CTA */}
      <section className="w-full relative border-t border-[#E2E8F0] py-[56px] md:py-[88px] lg:py-[96px] bg-[#FFFFFF] overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#EFF6FF]/60 via-[#FFFFFF] to-[#FFFFFF] -z-10 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] lg:px-[80px] text-center flex flex-col items-center">
          <p className="text-[13px] md:text-[14px] font-[600] uppercase tracking-[0.08em] md:tracking-[0.12em] text-[#D97706] mb-3 md:mb-4">CONTACT US</p>
          <div className="w-[36px] h-[2px] bg-[#D97706] mb-6 md:mb-8" aria-hidden="true"></div>
          <h2 className="text-[28px] md:text-[36px] lg:text-[38px] font-[800] text-[#1B2D53] tracking-tight mb-4 md:mb-5 break-keep px-2">
            IT 혁신을 시작할 준비가 되셨나요?
          </h2>
          <p className="text-[#475569] text-[15px] md:text-[17px] lg:text-[18px] max-w-[720px] mx-auto leading-[1.6] mb-8 md:mb-10 break-keep px-2">
            Ventra의 전문가들이 귀사의 비즈니스 성장을 위한 최적의 기술 솔루션을 제안해 드립니다.
          </p>
          <a 
            className="inline-flex items-center justify-center bg-[#1B2D53] text-[#FFFFFF] border border-[#1B2D53] px-10 h-[52px] rounded-[6px] font-[600] text-[16px] hover:bg-[#D97706] hover:border-[#D97706] focus:ring-2 focus:ring-offset-2 focus:ring-[#D97706] focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md" 
            href="mailto:sales@ventra.co.kr"
          >
            문의하기
          </a>
        </div>
      </section>
    </>
  );
}
