import { ShieldAlert, Fingerprint, Box, BrainCircuit, ShieldCheck, Cpu, FileBadge, Lock, Shield } from "lucide-react";
import { BusinessFocusTemplate } from "../components/BusinessFocusTemplate";
import securityHeroImage from "../../bf-security-automation__s1-hero-bg.png";
import securityEvolutionImage from "../../bf-security-evolution-3stage-final-v5.png";
import { SeoMeta } from "../components/seo/SeoMeta";

export function BusinessFocusSecurity() {
  return (
    <BusinessFocusTemplate
      hero={{
        backgroundImageUrl: securityHeroImage,
        title: <span className="block text-balance">Security Automation의 진화</span>,
        subtitle: <span className="block text-white/90">보호를 넘어, 신뢰와 통제를 자동화합니다</span>,
        description: (
          <div className="text-pretty break-keep text-white/80">
      <SeoMeta
        title="Security Automation·Digital Trust | Ventra"
        description="인증서, Identity, Machine Identity, Software Supply Chain, AI Governance를 연결해 국내 엔터프라이즈 환경에 맞는 보안 운영 자동화 로드맵을 제시합니다."
        canonicalPath="/business-focus/security-automation"
        schema={JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 2, "name": "Security / Automation", "item": "https://ventra.co.kr/business-focus/security-automation" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Security Automation·Digital Trust | Ventra",
      "url": "https://ventra.co.kr/business-focus/security-automation"
    }
  ])}
      />
            하이브리드 인프라와 AI 시대, 보안은 시스템 보호를 넘어 Digital Trust와 운영 통제로 확장되고 있습니다.<br className="hidden md:block" />
            Ventra는 신뢰 대상과 보안 운영을 연결해 현실적인 자동화 전환을 설계합니다.
          </div>
        ),
        align: "left",
        overlay: "linear-gradient(90deg, rgba(6, 18, 38, 0.94) 0%, rgba(6, 18, 38, 0.84) 38%, rgba(6, 18, 38, 0.46) 68%, rgba(6, 18, 38, 0.22) 100%)",
        className: "bg-[position:55%_center] md:bg-[position:70%_center] lg:bg-[position:center_center] !min-h-[480px] md:!min-h-[560px] lg:!min-h-[640px] font-['Pretendard','Noto_Sans_KR','NanumSquare',sans-serif] " +
                   "[&_p]:!text-white md:[&_p]:!text-slate-100 [&_p]:!tracking-[0.06em] md:[&_p]:!tracking-[0.1em] " +
                   "[&_h1]:!text-[clamp(36px,9vw,42px)] md:[&_h1]:!text-[46px] lg:[&_h1]:!text-[clamp(48px,4.5vw,60px)] " +
                   "[&_h1]:!leading-[1.1] md:[&_h1]:!leading-[1.15] [&_h1]:!tracking-[-0.02em] [&_h1]:!mb-[16px] md:[&_h1]:!mb-[20px] " +
                   "[&_h1+div]:!text-[18px] md:[&_h1+div]:!text-[20px] lg:[&_h1+div]:!text-[24px] " +
                   "[&_h1+div]:!font-[500] [&_h1+div]:!leading-[1.5] [&_h1+div]:!mb-[16px] md:[&_h1+div]:!mb-[20px] " +
                   "[&_h1+div+div]:!text-[16px] md:[&_h1+div+div]:!text-[17px] lg:[&_h1+div+div]:!text-[18px] " +
                   "[&_h1+div+div]:!leading-[1.65] md:[&_h1+div+div]:!leading-[1.7] [&_h1+div+div]:!max-w-[680px]"
      }}
      whyThisMatters={{
        label: "WHY THIS MATTERS",
        title: "Enterprise 보안 환경은 더욱 복잡해지고 있으며, 통제해야 할 대상과 운영 부담도 함께 증가하고 있습니다.",
        subtitle: "",
        cards: [
          {
            icon: <ShieldAlert className="w-6 h-6 text-primary" />,
            title: "Hybrid Security Complexity",
            description: "레거시, 온프레미스, 클라우드, SaaS가 공존하면서 보안 정책과 통제 기준은 여러 환경에 분산되고 있습니다."
          },
          {
            icon: <Fingerprint className="w-6 h-6 text-primary" />,
            title: "Digital Trust Expansion",
            description: "사용자뿐 아니라 시스템, API, 인증서, Secrets, Machine Identity, AI Agent까지 신뢰해야 할 대상이 확대되고 있습니다."
          },
          {
            icon: <Box className="w-6 h-6 text-primary" />,
            title: "Software Supply Chain Risk",
            description: "오픈소스, 패키지, CI/CD, 외부 컴포넌트 사용이 증가하면서 소프트웨어 구성요소와 공급망 리스크 관리가 중요해지고 있습니다."
          },
          {
            icon: <BrainCircuit className="w-6 h-6 text-primary" />,
            title: "AI Governance Readiness",
            description: "AI 활용은 확대되고 있지만 AI 서비스, 데이터 접근, Agent 권한, 감사 기준을 통제할 보안 거버넌스는 아직 준비 단계에 있습니다."
          }
        ]
      }}
      evolutionMarketView={{
        label: "EVOLUTION / MARKET VIEW",
        title: "Ventra View of Enterprise Hybrid Security",
        subtitle: "",
        imageSrc: securityEvolutionImage,
        imageAlt: "현재 보안 통제에서 선택적 자동화 확장과 통합 운영·거버넌스로 전환하는 3단계 Security Evolution",
        description: "Enterprise 보안은 새로운 기술을 계속 추가하는 방식이 아니라, 기존 운영 기반을 정리하고 신뢰 대상과 통제 기준을 확장하며 자동화 가능한 영역을 단계적으로 연결하는 방향으로 진화하고 있습니다. Ventra는 현재 운영 환경을 유지하면서 인증서, Identity, Machine Identity, Software Supply Chain, AI Governance를 수용할 수 있는 단계적인 Hybrid Security Roadmap을 중요하게 생각합니다."
      }}
      focusAreas={{
        label: "FOCUS AREAS",
        title: "Security / Automation Focus Areas",
        subtitle: "",
        cards: [
          {
            icon: <ShieldCheck className="w-6 h-6 text-primary" />,
            title: "Identity & Digital Trust",
            description: "Human · Machine · API · AI Agent Identity와 Certificate · Secrets 기반 신뢰 체계"
          },
          {
            icon: <Cpu className="w-6 h-6 text-primary" />,
            title: "Security Automation",
            description: "인증서, 권한, 승인, 감사 등 반복 보안 운영과 통제 업무 자동화"
          },
          {
            icon: <FileBadge className="w-6 h-6 text-primary" />,
            title: "Software Supply Chain",
            description: "SBOM · SCA · Software Trust & Compliance"
          },
          {
            icon: <Lock className="w-6 h-6 text-primary" />,
            title: "AI Governance",
            description: "AI 활용, Agent 권한, 데이터 접근을 위한 보안 기준과 통제 체계"
          }
        ]
      }}
      perspective={{
        label: "POINT OF VIEW",
        title: "Ventra Perspective",
        description: (
          <div className="flex flex-col gap-4">
            <p>Security는 더 이상 위협을 탐지하고 대응하는 기술만의 문제가 아닙니다. 하이브리드 인프라와 AI 확산으로 보안은 인증서, Identity, Machine Identity, Software Supply Chain, AI Agent까지 연결되는 운영 통제의 문제로 확장되고 있습니다.</p>
            <p>Ventra는 새로운 보안 솔루션을 계속 추가하는 것보다, 현재 운영 기준을 정리하고 반복적인 통제 업무를 자동화하며 감사 가능한 구조로 연결하는 것이 중요하다고 봅니다. 고객의 기존 보안 환경을 유지하면서 Digital Trust, Security Automation, Software Supply Chain, AI Governance로 확장 가능한 현실적인 Security / Automation 전환 방향을 제시합니다.</p>
          </div>
        ),
        quote: "\"현재 운영 기준을 정리하고 반복적인 통제 업무를 자동화하며 감사 가능한 구조로 연결\""
      }}
      relatedSolutions={{
        label: "RELATED SOLUTIONS",
        title: "Ventra Security & Automation Solutions",
        cards: [
          {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: "UCLM Certificate Lifecycle Automation",
            description: "인증서 검색, 발급, 배포, 모니터링, 감사 이력을 자동화하는 Digital Trust 적용 영역",
            linkTo: "/solutions/uclm"
          }
        ]
      }}
    />
  );
}
