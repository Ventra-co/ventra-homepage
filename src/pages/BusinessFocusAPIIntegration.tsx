import { Layers, Network, Brain, Link, Building, Activity, Database, LayoutTemplate, Settings } from "lucide-react";
import { BusinessFocusTemplate } from "../components/BusinessFocusTemplate";
import apiIntegrationHero from "../../bf-api-integration-hero-v2.png";
import apiIntegrationEvolutionImage from "../../bf-api-integration__s3-pipeline-evolution-v7.png";
import { SeoMeta } from "../components/seo/SeoMeta";

export function BusinessFocusAPIIntegration() {
  return (
    <BusinessFocusTemplate
      hero={{
        backgroundImageUrl: apiIntegrationHero,
        title: <span className="block text-balance">레거시와 AI를 잇는 연결 구조를 설계합니다</span>,
        subtitle: <span className="block text-slate-100">애플리케이션 통합에서 AI-ready 데이터 흐름까지</span>,
        description: (
          <div className="text-pretty break-keep text-slate-200">
      <SeoMeta
        title="API Integration·이벤트 데이터 연계 | Ventra"
        description="EAI·API·Messaging·CDC·Event Streaming이 공존하는 환경에서 레거시와 AI를 잇는 Data & Service Flow와 AI-ready 통합 구조를 설계합니다."
        canonicalPath="/business-focus/api-integration"
        schema={JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 2, "name": "API / Integration", "item": "https://ventra.co.kr/business-focus/api-integration" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "API Integration·이벤트 데이터 연계 | Ventra",
      "url": "https://ventra.co.kr/business-focus/api-integration"
    }
  ])}
      />
            레거시 시스템부터 API, Messaging, CDC, Event Streaming까지<br className="hidden md:block" />
            복잡한 통합 환경을 연결합니다.
          </div>
        ),
        align: "left",
        overlay: "linear-gradient(to right, rgba(10, 18, 33, 0.92) 0%, rgba(10, 18, 33, 0.88) 45%, rgba(10, 18, 33, 0.5) 65%, rgba(10, 18, 33, 0) 100%)",
        className: "bg-[position:70%_center] md:bg-[position:80%_center] lg:bg-[position:100%_center]" 
      }}
      whyThisMatters={{
        label: "WHY THIS MATTERS",
        title: "기업의 연결 환경은 더욱 복잡해지고 있습니다.",
        subtitle: "",
        cards: [
          {
            icon: <Layers className="w-6 h-6 text-primary" />,
            title: "Hybrid Integration Complexity",
            description: "레거시 시스템과 클라우드 서비스가 공존하면서 데이터와 서비스는 여러 환경에 분산되어 있습니다."
          },
          {
            icon: <Network className="w-6 h-6 text-primary" />,
            title: "Fragmented Data & Service Flow",
            description: "업무 데이터와 서비스는 존재하지만 시스템과 조직을 넘어 하나의 실행 흐름으로 연결되기 어렵습니다."
          },
          {
            icon: <Brain className="w-6 h-6 text-primary" />,
            title: "AI Readiness Gap",
            description: "AI 도입에 대한 관심은 높아지고 있지만, AI가 활용할 수 있는 데이터 흐름과 실행 구조는 아직 충분히 준비되지 않은 경우가 많습니다."
          }
        ]
      }}
      evolutionMarketView={{
        label: "EVOLUTION / MARKET VIEW",
        title: "Ventra View of Enterprise Hybrid Integration",
        subtitle: "",
        imageSrc: apiIntegrationEvolutionImage,
        imageAlt: "Legacy 환경에서 Hybrid Pipeline을 거쳐 Private AI와 AI-Native 운영 구조로 확장되는 Pipeline Evolution",
        description: "기업의 통합 방식은 단순 시스템 연계 중심에서 API, Messaging, CDC, Event Streaming, Data Pipeline이 병존하는 Hybrid Integration 구조로 확장되고 있습니다. AI 시대에는 데이터를 연결하는 것을 넘어 의미(Context), 처리 흐름(Pipeline), 실행(Execution)을 연결하는 구조가 중요해지고 있습니다. Ventra는 기존 환경을 유지하면서도 미래 기술을 수용할 수 있는 유연한 Data & Service Flow를 중요하게 생각합니다."
      }}
      focusAreas={{
        label: "FOCUS AREAS",
        title: "API / Integration Focus Areas",
        subtitle: "",
        cards: [
          {
            icon: <Link className="w-6 h-6 text-primary" />,
            title: "API Connectivity",
            description: "서비스와 애플리케이션 연결"
          },
          {
            icon: <Building className="w-6 h-6 text-primary" />,
            title: "Enterprise Integration",
            description: "레거시와 현대 플랫폼의 통합"
          },
          {
            icon: <Activity className="w-6 h-6 text-primary" />,
            title: "Messaging & Event Streaming",
            description: "메시징과 실시간 이벤트 흐름"
          },
          {
            icon: <Database className="w-6 h-6 text-primary" />,
            title: "Data Pipeline",
            description: "데이터 수집·연계·전달·활용 구조"
          },
          {
            icon: <LayoutTemplate className="w-6 h-6 text-primary" />,
            title: "Integration Architecture",
            description: "확장 가능한 Hybrid 통합 구조 관점"
          }
        ]
      }}
      perspective={{
        label: "POINT OF VIEW",
        title: "Ventra Perspective",
        description: (
          <div className="flex flex-col gap-4">
            <p>모든 기업이 API를 도입하고 있지만, 모든 기업이 연결성을 확보한 것은 아닙니다. API Gateway를 구축했다고 해서 데이터가 연결되는 것은 아니며, Kafka를 도입했다고 해서 실시간 기업이 되는 것도 아닙니다. Enterprise 환경의 과제는 새로운 기술을 도입하는 것이 아니라, 기존 시스템과 새로운 서비스를 함께 운영할 수 있는 구조를 만드는 것입니다.</p>
            <p>Ventra는 Integration을 단순한 시스템 연계가 아닌 Data &amp; Service Flow 관점에서 바라봅니다. 레거시 시스템, SaaS, Cloud, AI 서비스가 공존하는 환경에서 데이터와 서비스가 지속적으로 연결되고 확장될 수 있는 구조. 그것이 변화하는 기술 환경 속에서도 안정적으로 확장될 수 있는 Enterprise Integration의 핵심이라고 생각합니다.</p>
          </div>
        ),
        quote: "\"Integration을 단순한 시스템 연계가 아닌 Data & Service Flow 관점에서\""
      }}
      relatedSolutions={{
        label: "RELATED SOLUTIONS",
        title: "Ventra API & Integration Solutions",
        cards: [
          {
            icon: <Settings className="w-6 h-6 text-primary" />,
            title: "Felice Kafka Operations Platform",
            description: "Kafka가 필요한 영역의 운영 가시성, 표준화, 거버넌스를 Felice 기반으로 확장합니다.",
            linkTo: "/solutions/felice-kafka-operations"
          }
        ]
      }}
    />
  );
}
