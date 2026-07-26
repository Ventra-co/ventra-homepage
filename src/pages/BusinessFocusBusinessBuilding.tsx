import { 
  Target, Building, Lightbulb, Briefcase, Users, ShieldCheck, 
  Search, Crosshair, Tag, Presentation, Star, Handshake,
  Building2, ArrowRightLeft, Network, Cpu, ScanSearch, Tags, BriefcaseBusiness, BadgeCheck
} from "lucide-react";
import { BusinessBuildingTemplate } from "../components/BusinessBuildingTemplate";
import businessBuildingHeroBg from "../../bf-business-building-hero3.png";
import { SeoMeta } from "../components/seo/SeoMeta";

export function BusinessFocusBuilding() {
  return (
    <BusinessBuildingTemplate
      hero={{
        backgroundImageUrl: businessBuildingHeroBg,
        title: <>
      <SeoMeta
        title="B2B IT 사업화·Go-to-Market 컨설팅 | Ventra"
        description="기술기업의 시장 검증, 포지셔닝, 가격·패키징, 첫 고객과 레퍼런스 확보, 파트너 기반 확장을 실행 가능한 B2B 사업 구조로 연결합니다."
        canonicalPath="/business-focus/business-building"
        schema={JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 2, "name": "Business Building Consulting", "item": "https://ventra.co.kr/business-focus/business-building" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "B2B IT 사업화·Go-to-Market 컨설팅",
      "provider": { "@type": "Organization", "name": "Ventra Inc.", "url": "https://ventra.co.kr" },
      "serviceType": "B2B IT Go-to-Market Consulting",
      "areaServed": "KR",
      "url": "https://ventra.co.kr/business-focus/business-building"
    }
  ])}
      />Business Building for<br className="hidden md:block" />Technology Companies</>,
        subtitle: <span className="block text-slate-100">기술을 사업으로, 제품을 매출로 연결합니다.</span>,
        description: null,
        align: "left",
        overlay: "linear-gradient(to right, rgba(10, 18, 33, 0.92) 0%, rgba(10, 18, 33, 0.88) 45%, rgba(10, 18, 33, 0.5) 65%, rgba(10, 18, 33, 0) 100%)",
        className: "bg-[position:70%_center] md:bg-[position:80%_center] lg:bg-[position:100%_center]"
      }}
      whyThisMatters={{
        label: "WHY THIS MATTERS",
        title: "기술 개발과 사업화는 서로 다른 문제입니다",
        subtitle: (
          <span className="block text-[16px] md:text-[18px] font-normal text-on-surface-variant">
            좋은 기술이 시장의 선택으로 이어지려면 고객 문제, 도입 기준, 가격 수용성, 레퍼런스 전략과 파트너 협업 구조가 실행 가능한 사업화 구조로 정리되어야 합니다.
          </span>
        ),
        cards: [
          {
            icon: <Target className="w-6 h-6 text-primary" />,
            title: "Market Response Gap",
            description: "기술은 준비됐지만, 고객이 실제로 어떤 문제에 비용을 지불할지 명확하지 않을 수 있습니다."
          },
          {
            icon: <Lightbulb className="w-6 h-6 text-primary" />,
            title: "Positioning Clarity",
            description: "기능은 많지만 고객에게 전달할 핵심 가치와 차별 메시지가 흐려지면 시장 반응은 약해질 수 있습니다."
          },
          {
            icon: <Briefcase className="w-6 h-6 text-primary" />,
            title: "Sales Execution Gap",
            description: "미팅, 데모, 제안, 가격, 계약 조건이 연결되지 않으면 검토가 실제 도입으로 전환되기 어렵습니다."
          }
        ],
        bottomText: null
      }}
      ventraApproach={{
        label: "VENTRA APPROACH",
        title: "전략보다 실행 가능한 시장 진입 구조를 정리합니다",
        subtitle: (
          <span className="block text-[16px] md:text-[18px] font-normal text-on-surface-variant">
            Ventra는 보고서로 끝나는 전략 컨설팅이 아니라, 고객 문제, 파트너 기술, 엔터프라이즈 영업 구조를 함께 이해하며 시장 진입 가능성을 현장 기준으로 검토합니다.
          </span>
        ),
        steps: [
          {
            number: "01",
            title: "Understand",
            description: "제품·기술·고객 문제·경쟁 대체재 검토",
            output: "시장 진입 가설 · 고객 문제 정의"
          },
          {
            number: "02",
            title: "Position",
            description: "기술을 고객 가치와 차별 메시지로 재정리",
            output: "포지셔닝 메시지 · 제안 논리"
          },
          {
            number: "03",
            title: "Validate",
            description: "타깃 고객·가격 수용성·도입 가능성 확인",
            output: "검증 기준 · 초기 타깃 리스트"
          },
          {
            number: "04",
            title: "Connect",
            description: "미팅·검증·제안·파트너 협업 흐름 연결",
            output: "접근 시나리오 · 제안 구조"
          },
          {
            number: "05",
            title: "Scale",
            description: "검증된 영업 경험을 반복 가능한 모델로 전환",
            output: "파트너 확장 방향 · 반복 영업 구조"
          }
        ]
      }}
      experienceBased={{
        label: "EXPERIENCE-BASED BUSINESS BUILDING",
        title: "엔터프라이즈 IT 현장에서 축적한 경험으로 시장 진입 가능성을 검토합니다",
        subtitle: (
          <span className="block text-[16px] md:text-[18px] font-normal text-on-surface-variant">
            Ventra의 Business Building은 단순한 영업 대행이 아닙니다. 현장 경험을 바탕으로 기술기업의 시장 진입 가능성과 사업화 우선순위를 검토합니다. 시장 1위 제품의 성장, 신규 솔루션의 초기 시장 진입, 파트너 기반 공동영업 경험을 바탕으로 현실적인 사업화 판단 기준을 제공합니다.
          </span>
        ),
        cards: [
          {
            icon: <Building2 className="w-[26px] h-[26px] text-primary" />,
            title: "Enterprise Sales Context",
            description: "금융, 공공, 제조, 유통 등 엔터프라이즈 고객의 의사결정 구조와 도입 제약을 이해합니다.",
            bottomLabel: ""
          },
          {
            icon: <ArrowRightLeft className="w-[26px] h-[26px] text-primary" />,
            title: "Product-to-Market Translation",
            description: "제품 기능을 고객의 문제, 예산, 운영 효과, 제안 메시지로 전환합니다.",
            bottomLabel: ""
          },
          {
            icon: <Target className="w-[26px] h-[26px] text-primary" />,
            title: "Reference Strategy",
            description: "첫 고객과 첫 레퍼런스를 만들기 위한 타깃, 검증 범위, 접근 순서를 설계합니다.",
            bottomLabel: ""
          },
          {
            icon: <Network className="w-[26px] h-[26px] text-primary" />,
            title: "Partner-Led Growth",
            description: "직접 영업, 공동영업, SI·MSP 협업, 벤더 파트너 구조를 현실적으로 조합합니다.",
            bottomLabel: ""
          }
        ]
      }}
      focusAreas={{
        title: "FOCUS AREAS",
        headline: "시장 진입부터 파트너 확장까지 핵심 사업화 과제를 연결합니다",
        description: "Ventra는 시장성 검증, 포지셔닝, 가격, 영업 실행, 레퍼런스와 파트너 확장을 하나의 사업화 흐름으로 정리합니다.",
        cards: [
          {
            icon: <ScanSearch className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] text-primary" />,
            title: "Market Validation",
            description: "고객 문제, 시장성, 도입 가능성을 검증합니다."
          },
          {
            icon: <Crosshair className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] text-primary" />,
            title: "Positioning",
            description: "제품 기능을 고객 가치와 차별 메시지로 정리합니다."
          },
          {
            icon: <Tags className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] text-primary" />,
            title: "Pricing & Packaging",
            description: "가격 수용성과 제안·계약 구조를 설계합니다."
          },
          {
            icon: <BriefcaseBusiness className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] text-primary" />,
            title: "Sales Enablement",
            description: "미팅, 데모, 제안과 영업자료를 실행 체계로 정리합니다."
          },
          {
            icon: <BadgeCheck className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] text-primary" />,
            title: "Customer / Reference Strategy",
            description: "초기 타깃과 첫 레퍼런스 확보 경로를 설계합니다."
          },
          {
            icon: <Handshake className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] text-primary" />,
            title: "Partner & Channel Development",
            description: "공동영업과 파트너·채널 확장 구조를 정리합니다."
          }
        ]
      }}
      whoWeWorkWith={{
        title: "WHO WE WORK WITH",
        headline: "엔터프라이즈 시장 진입과 사업 확장이 필요한 기술 조직과 협업합니다",
        description: "Ventra는 시장 진입, 신규사업 확대와 파트너 기반 성장이 필요한 기술기업 및 협업 조직을 대상으로 합니다.",
        groups: [
          {
            label: "TECHNOLOGY ORGANIZATIONS",
            title: "기술기업 · 솔루션 조직",
            cards: [
              {
                title: "IT Software Vendors",
                description: "엔터프라이즈 시장 진입과 초기 레퍼런스 확보가 필요한 소프트웨어 벤더"
              },
              {
                title: "IT Startups",
                description: "기술 검증 이후 B2B 시장 진입과 가격 전략이 필요한 IT 스타트업"
              },
              {
                title: "Technology Companies",
                description: "기술 역량을 제품 또는 서비스 사업으로 확장하려는 기술기업"
              },
              {
                title: "New Business Teams",
                description: "신규 솔루션, 파트너와 매출 모델을 검토하는 기업 내 신규사업 조직"
              }
            ]
          },
          {
            label: "COLLABORATION PARTNERS",
            title: "협업 파트너 조직",
            cards: [
              {
                title: "MSP / IT Service Partners",
                description: "고객 프로젝트에 적용할 솔루션과 공동영업 파트너가 필요한 조직"
              },
              {
                title: "Enterprise Vendor Partner Teams",
                description: "신규 사업 포트폴리오와 파트너 기반 사업화를 검토하는 벤더 조직"
              }
            ]
          }
        ]
      }}
      pointOfView={{
        label: "POINT OF VIEW",
        statement: "기술을 시장의 언어로 바꾸고, 첫 고객 경험을 반복 가능한 사업 구조로 확장합니다."
      }}
      contact={{
        label: "CONTACT",
        headline: (
          <>
            첫 고객에서 멈추지 않는,<br className="hidden md:block" />
            반복 가능한 사업 구조를 함께 만듭니다
          </>
        ),
        description: "시장성, 타깃 고객, 제안 논리와 파트너 협업 가능성을 함께 검토합니다.",
        buttonText: "문의하기",
        buttonLink: "mailto:sales@ventra.co.kr?subject=%5BVentra%20%EB%AC%B8%EC%9D%98%5D%20Business%20Building%20Consulting%20%EB%AC%B8%EC%9D%98"
      }}
    />
  );
}
