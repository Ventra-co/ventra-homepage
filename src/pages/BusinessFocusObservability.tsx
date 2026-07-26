import { Monitor, Network, Layers, Sparkles, BarChart3, Eye, Brain, AlertTriangle, Activity, Settings } from "lucide-react";
import marketEvolutionImage from "../../observability-market-evolution-v2.png";
import heroImage from "../../bf-observability-hero-v3.png";
import { BusinessFocusTemplate } from "../components/BusinessFocusTemplate";
import { SeoMeta } from "../components/seo/SeoMeta";

export function BusinessFocusObservability() {
  return (
    <BusinessFocusTemplate
      hero={{
        backgroundImageUrl: heroImage,
        title: "Observability의 진화",
        subtitle: "모니터링에서 운영 인텔리전스로",
        description: (
          <>
      <SeoMeta
        title="Observability·APM 운영 최적화 | Ventra"
        description="APM·DPM·인프라 모니터링 데이터를 연결해 운영 가시성을 높이고, 장애 분석과 AI-assisted Operations로 확장하는 현실적인 로드맵을 설계합니다."
        canonicalPath="/business-focus/observability-optimization"
        schema={JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },
        { "@type": "ListItem", "position": 2, "name": "Observability / Optimization", "item": "https://ventra.co.kr/business-focus/observability-optimization" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Observability·APM 운영 최적화 | Ventra",
      "url": "https://ventra.co.kr/business-focus/observability-optimization"
    }
  ])}
      />
            Observability는 더 이상 모니터링 기술에만 머물지 않습니다.<br />
            Ventra는 Legacy Monitoring부터 AI-Native Operations까지의 전환을 함께 설계합니다.
          </>
        )
      }}
      whyThisMatters={{
        label: "WHY THIS MATTERS",
        title: "운영 환경은 빠르게 변화하고 있지만, 운영 현실은 여전히 복잡합니다.",
        subtitle: "",
        cards: [
          {
            icon: <Eye className="w-6 h-6 text-primary" />,
            title: "Operational Visibility",
            description: "운영 데이터는 증가하지만 서비스 관점의 가시성은 여전히 부족합니다. Metrics, Logs, Traces가 분산되면 장애 원인 분석은 더 어려워집니다."
          },
          {
            icon: <Brain className="w-6 h-6 text-primary" />,
            title: "AI Observability Gap",
            description: "AI 서비스는 도입되고 있지만 AI 운영 체계는 아직 준비 단계입니다. GPU, LLM, AgentOps는 새로운 운영 과제로 부상하고 있습니다."
          },
          {
            icon: <AlertTriangle className="w-6 h-6 text-primary" />,
            title: "Technology Transition Risk",
            description: "잘못된 기술 선택은 장기간의 비용과 복잡성을 만들 수 있습니다. Observability 시장은 OpenTelemetry, OpenMetrics, AI 기반 운영 모델 중심으로 재편되고 있습니다."
          }
        ]
      }}
      evolutionMarketView={{
        label: "EVOLUTION / MARKET VIEW",
        title: "Ventra View of the Korean Observability Market",
        subtitle: "",
        imageSrc: marketEvolutionImage,
        imageAlt: "Observability 시장 진화와 Governed Autonomous Operations 구조",
        description: "기업들은 모두 같은 위치에 있지 않습니다. 어떤 조직은 여전히 Legacy Monitoring 단계에 머물러 있으며, 어떤 조직은 OpenTelemetry 기반 통합 Observability를 구축하고 있습니다. 최근에는 GPU, LLM, AgentOps와 같은 AI 워크로드가 증가하면서 Observability는 AI 운영 영역까지 확장되고 있습니다. 중요한 것은 최신 기술을 도입하는 것이 아니라 현재 위치를 정확히 이해하고 적절한 전환 경로를 선택하는 것입니다."
      }}
      focusAreas={{
        label: "FOCUS AREAS",
        title: "Observability Focus Areas",
        subtitle: "",
        cards: [
          {
            icon: <Monitor className="w-6 h-6 text-primary" />,
            title: "APM & Observability",
            description: "애플리케이션 성능과 운영 가시성"
          },
          {
            icon: <Network className="w-6 h-6 text-primary" />,
            title: "OpenTelemetry",
            description: "표준 기반 수집과 데이터 연결"
          },
          {
            icon: <Layers className="w-6 h-6 text-primary" />,
            title: "Full-Stack Visibility",
            description: "Metric · Log · Trace 통합 관점"
          },
          {
            icon: <Sparkles className="w-6 h-6 text-primary" />,
            title: "AI Observability",
            description: "GPU · LLM · AgentOps 운영 가시성"
          },
          {
            icon: <BarChart3 className="w-6 h-6 text-primary" />,
            title: "Operational Intelligence",
            description: "운영 데이터 기반 분석과 판단 체계"
          }
        ]
      }}
      perspective={{
        label: "POINT OF VIEW",
        title: "Ventra Perspective",
        description: "모든 기업이 AIOps를 이야기하고 있지만, 모든 기업이 AIOps를 준비한 것은 아닙니다. 운영 데이터의 표준화, 서비스 가시성 확보, 운영 프로세스 정립 없이 자동화만 먼저 도입하는 것은 복잡성을 줄이기보다 오히려 증가시킬 수 있습니다. Ventra는 Observability를 운영 성숙도를 높이는 과정으로 바라봅니다. 데이터를 연결하고, 운영을 이해하고, 점진적으로 자동화를 확대하는 것. 그것이 금융·공공·제조와 같은 미션 크리티컬 환경에서 가장 현실적이고 지속 가능한 AI 전환 경로라고 생각합니다.",
        quote: "\"Observability를 운영 성숙도를 높이는 과정\""
      }}
      relatedSolutions={{
        label: "RELATED SOLUTIONS",
        title: "Ventra Observability Solutions",
        cards: [
          {
            icon: <Activity className="w-6 h-6 text-primary" />,
            title: "JENNIFER AI Operations",
            description: "기존 APM 데이터를 AI Insight와 AI-assisted Operations로 확장하는 적용 가능성 검토",
            linkTo: "/solutions/jennifer-ai-operations"
          },
          {
            icon: <Settings className="w-6 h-6 text-primary" />,
            title: "SIMMS-ITM",
            description: "유지보수 계약, SLA, 작업, 증빙을 연결하는 운영통제 관점의 확장 Solution",
            linkTo: "/solutions/simms-itm"
          }
        ]
      }}
    />
  );
}
