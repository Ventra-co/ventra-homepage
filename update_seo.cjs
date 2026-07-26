const fs = require('fs');
const path = require('path');

// 1. App.tsx: Wrap with HelmetProvider
const appPath = path.join(__dirname, 'src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf-8');
if (!appContent.includes('HelmetProvider')) {
  appContent = appContent.replace(
    'import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";',
    'import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";\nimport { HelmetProvider } from "react-helmet-async";'
  );
  appContent = appContent.replace('<Router>', '<HelmetProvider>\n      <Router>');
  appContent = appContent.replace('</Router>', '</Router>\n    </HelmetProvider>');
  fs.writeFileSync(appPath, appContent);
  console.log('Updated App.tsx');
}

// Helper to inject SEO component
function injectSeo(filePath, seoProps, extraImports = '', extraLogic = '') {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf-8');
  if (content.includes('SeoMeta')) return;

  // Insert import
  const importStatement = `import { SeoMeta } from "../components/seo/SeoMeta";\n${extraImports}`;
  const lastImportIndex = content.lastIndexOf('import ');
  if (lastImportIndex !== -1) {
    const endOfLastImport = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, endOfLastImport + 1) + importStatement + content.slice(endOfLastImport + 1);
  } else {
    content = importStatement + content;
  }

  // Insert inside component return
  const returnIndex = content.indexOf('return (');
  if (returnIndex !== -1) {
    // Insert extra logic before return if any
    if (extraLogic) {
      content = content.slice(0, returnIndex) + extraLogic + '\n  ' + content.slice(returnIndex);
    }
    
    // Insert SeoMeta right after the outermost div or wrapper inside return (
    const updatedReturnIndex = content.indexOf('return (');
    const firstDivIndex = content.indexOf('<div', updatedReturnIndex);
    const endOfFirstDiv = content.indexOf('>', firstDivIndex);
    
    // We construct the SeoMeta string
    let seoString = `<SeoMeta\n        title="${seoProps.title}"\n        description="${seoProps.description}"\n        canonicalPath="${seoProps.canonicalPath}"`;
    if (seoProps.robots) {
      seoString += `\n        robots="${seoProps.robots}"`;
    }
    if (seoProps.schema) {
      seoString += `\n        schema={${seoProps.schema}}`;
    }
    seoString += `\n      />`;

    content = content.slice(0, endOfFirstDiv + 1) + '\n      ' + seoString + content.slice(endOfFirstDiv + 1);
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${filePath}`);
  }
}

// Configs
injectSeo('src/pages/Home.tsx', {
  title: 'Enterprise IT 전환과 AI-ready 기반 설계 | Ventra',
  description: 'Ventra는 레거시·망분리·규제가 공존하는 기업 환경에서 Observability, API Integration, Security Automation, IT 운영을 연결해 AI-ready 전환 기반을 설계합니다.',
  canonicalPath: '/',
  schema: 'schemaString'
}, 'import ventraLogoColor from "../../ventra-logo-color-master.png";\nimport { Helmet } from "react-helmet-async";', 
`const origin = "https://ventra.co.kr";
  const schemaOrg = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ventra Inc.",
    "alternateName": "주식회사 벤트라",
    "url": "https://ventra.co.kr",
    "logo": \`\${origin}\${ventraLogoColor}\`,
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
  const schemaString = \`[\${schemaOrg},\${schemaWebSite},\${schemaWebPage}]\`;`
);

injectSeo('src/pages/BusinessFocusObservability.tsx', {
  title: 'Observability·APM 운영 최적화 | Ventra',
  description: 'APM·DPM·인프라 모니터링 데이터를 연결해 운영 가시성을 높이고, 장애 분석과 AI-assisted Operations로 확장하는 현실적인 로드맵을 설계합니다.',
  canonicalPath: '/business-focus/observability-optimization',
  schema: 'JSON.stringify([\n    {\n      "@context": "https://schema.org",\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 2, "name": "Observability / Optimization", "item": "https://ventra.co.kr/business-focus/observability-optimization" }\n      ]\n    },\n    {\n      "@context": "https://schema.org",\n      "@type": "WebPage",\n      "name": "Observability·APM 운영 최적화 | Ventra",\n      "url": "https://ventra.co.kr/business-focus/observability-optimization"\n    }\n  ])'
});

injectSeo('src/pages/BusinessFocusSecurity.tsx', {
  title: 'Security Automation·Digital Trust | Ventra',
  description: '인증서, Identity, Machine Identity, Software Supply Chain, AI Governance를 연결해 국내 엔터프라이즈 환경에 맞는 보안 운영 자동화 로드맵을 제시합니다.',
  canonicalPath: '/business-focus/security-automation',
  schema: 'JSON.stringify([\n    {\n      "@context": "https://schema.org",\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 2, "name": "Security / Automation", "item": "https://ventra.co.kr/business-focus/security-automation" }\n      ]\n    },\n    {\n      "@context": "https://schema.org",\n      "@type": "WebPage",\n      "name": "Security Automation·Digital Trust | Ventra",\n      "url": "https://ventra.co.kr/business-focus/security-automation"\n    }\n  ])'
});

injectSeo('src/pages/BusinessFocusAPIIntegration.tsx', {
  title: 'API Integration·이벤트 데이터 연계 | Ventra',
  description: 'EAI·API·Messaging·CDC·Event Streaming이 공존하는 환경에서 레거시와 AI를 잇는 Data & Service Flow와 AI-ready 통합 구조를 설계합니다.',
  canonicalPath: '/business-focus/api-integration',
  schema: 'JSON.stringify([\n    {\n      "@context": "https://schema.org",\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 2, "name": "API / Integration", "item": "https://ventra.co.kr/business-focus/api-integration" }\n      ]\n    },\n    {\n      "@context": "https://schema.org",\n      "@type": "WebPage",\n      "name": "API Integration·이벤트 데이터 연계 | Ventra",\n      "url": "https://ventra.co.kr/business-focus/api-integration"\n    }\n  ])'
});

injectSeo('src/pages/BusinessFocusBusinessBuilding.tsx', {
  title: 'B2B IT 사업화·Go-to-Market 컨설팅 | Ventra',
  description: '기술기업의 시장 검증, 포지셔닝, 가격·패키징, 첫 고객과 레퍼런스 확보, 파트너 기반 확장을 실행 가능한 B2B 사업 구조로 연결합니다.',
  canonicalPath: '/business-focus/business-building',
  schema: 'JSON.stringify([\n    {\n      "@context": "https://schema.org",\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 2, "name": "Business Building Consulting", "item": "https://ventra.co.kr/business-focus/business-building" }\n      ]\n    },\n    {\n      "@context": "https://schema.org",\n      "@type": "Service",\n      "name": "B2B IT 사업화·Go-to-Market 컨설팅",\n      "provider": { "@type": "Organization", "name": "Ventra Inc.", "url": "https://ventra.co.kr" },\n      "serviceType": "B2B IT Go-to-Market Consulting",\n      "areaServed": "KR",\n      "url": "https://ventra.co.kr/business-focus/business-building"\n    }\n  ])'
});

injectSeo('src/pages/SolutionsUCLM.tsx', {
  title: 'UCLM 인증서 수명주기 자동화 | Ventra',
  description: '한국기업보안 UCLM 기반으로 SSL/TLS 인증서 검색, 발급, 배포, 갱신, 모니터링과 감사 이력을 연결해 인증서 운영 리스크를 줄입니다.',
  canonicalPath: '/solutions/uclm',
  schema: 'JSON.stringify([\n    {\n      "@context": "https://schema.org",\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 3, "name": "UCLM 인증서 수명주기 자동화", "item": "https://ventra.co.kr/solutions/uclm" }\n      ]\n    },\n    {\n      "@context": "https://schema.org",\n      "@type": "WebPage",\n      "name": "UCLM 인증서 수명주기 자동화 | Ventra",\n      "url": "https://ventra.co.kr/solutions/uclm",\n      "about": {\n        "@type": "SoftwareApplication",\n        "name": "UCLM",\n        "applicationCategory": "Certificate Lifecycle Management",\n        "provider": { "@type": "Organization", "name": "한국기업보안" }\n      }\n    }\n  ])'
});

injectSeo('src/pages/SolutionsJennifer.tsx', {
  title: 'JENNIFER AI 기반 APM 운영 분석 | Ventra',
  description: '기존 JENNIFER APM의 트랜잭션·에러·스택트레이스 데이터를 AI Insight와 RCA Assist로 확장해 성능 문제와 원인 후보를 더 빠르게 파악합니다.',
  canonicalPath: '/solutions/jennifer-ai-operations',
  schema: 'JSON.stringify([\n    {\n      "@context": "https://schema.org",\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 3, "name": "JENNIFER AI Operations", "item": "https://ventra.co.kr/solutions/jennifer-ai-operations" }\n      ]\n    },\n    {\n      "@context": "https://schema.org",\n      "@type": "WebPage",\n      "name": "JENNIFER AI 기반 APM 운영 분석 | Ventra",\n      "url": "https://ventra.co.kr/solutions/jennifer-ai-operations",\n      "about": {\n        "@type": "SoftwareApplication",\n        "name": "JENNIFER AI Operations",\n        "applicationCategory": "APM / AI Operations",\n        "provider": { "@type": "Organization", "name": "제니퍼소프트" }\n      }\n    }\n  ])'
});

injectSeo('src/pages/SolutionsFelice.tsx', {
  title: 'Felice Kafka 운영관리·모니터링 | Ventra',
  description: 'Felice는 Kafka 클러스터와 토픽·컨슈머 운영 가시성, 표준화, 권한과 거버넌스를 연결해 엔터프라이즈 이벤트 스트리밍 운영을 체계화합니다.',
  canonicalPath: '/solutions/felice-kafka-operations',
  schema: 'JSON.stringify([\n    {\n      "@context": "https://schema.org",\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 3, "name": "Felice Kafka Operations Platform", "item": "https://ventra.co.kr/solutions/felice-kafka-operations" }\n      ]\n    },\n    {\n      "@context": "https://schema.org",\n      "@type": "WebPage",\n      "name": "Felice Kafka 운영관리·모니터링 | Ventra",\n      "url": "https://ventra.co.kr/solutions/felice-kafka-operations",\n      "about": {\n        "@type": "SoftwareApplication",\n        "name": "Felice",\n        "applicationCategory": "Kafka Operations Platform",\n        "provider": { "@type": "Organization", "name": "SPITHA" }\n      }\n    }\n  ])'
});

injectSeo('src/pages/SolutionsSimms.tsx', {
  title: 'SIMMS-ITM IT 통합유지관리·자산관리 | Ventra',
  description: 'SIMMS-ITM으로 IT 자산, 계약, 예방점검, 장애, 작업, 서비스 요청과 SLA를 연결해 공공·금융·제조의 통합유지관리 업무를 표준화합니다.',
  canonicalPath: '/solutions/simms-itm',
  schema: 'JSON.stringify([\n    {\n      "@context": "https://schema.org",\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 3, "name": "SIMMS-ITM", "item": "https://ventra.co.kr/solutions/simms-itm" }\n      ]\n    },\n    {\n      "@context": "https://schema.org",\n      "@type": "WebPage",\n      "name": "SIMMS-ITM IT 통합유지관리·자산관리 | Ventra",\n      "url": "https://ventra.co.kr/solutions/simms-itm",\n      "about": {\n        "@type": "SoftwareApplication",\n        "name": "SIMMS-ITM",\n        "applicationCategory": "IT Service Management / Asset Management",\n        "provider": { "@type": "Organization", "name": "심스소프트" }\n      }\n    }\n  ])'
});

injectSeo('src/pages/About.tsx', {
  title: 'Ventra 소개 | Enterprise Technology Partner',
  description: 'Ventra는 국내 B2B Enterprise IT 현장 경험과 검증된 파트너 생태계를 바탕으로 고객의 기술 전환과 파트너 사업화를 실행 가능한 구조로 연결합니다.',
  canonicalPath: '/about',
  schema: 'JSON.stringify([\n    {\n      "@context": "https://schema.org",\n      "@type": "BreadcrumbList",\n      "itemListElement": [\n        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ventra.co.kr/" },\n        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ventra.co.kr/about" }\n      ]\n    },\n    {\n      "@context": "https://schema.org",\n      "@type": "AboutPage",\n      "name": "Ventra 소개 | Enterprise Technology Partner",\n      "url": "https://ventra.co.kr/about"\n    }\n  ])'
});

injectSeo('src/pages/Insights.tsx', {
  title: 'Insights | Ventra',
  description: 'Ventra Insights — 준비 중입니다.',
  canonicalPath: '/insights',
  robots: 'noindex, nofollow'
});
