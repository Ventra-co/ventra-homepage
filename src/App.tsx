import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SiteLayout } from "./components/layout/SiteLayout";
import { INSIGHTS_ENABLED } from "./config/features";
import { Home } from "./pages/Home";
import { BusinessFocusObservability } from "./pages/BusinessFocusObservability";
import { BusinessFocusAPIIntegration } from "./pages/BusinessFocusAPIIntegration";
import { BusinessFocusSecurity } from "./pages/BusinessFocusSecurity";
import { BusinessFocusBuilding } from "./pages/BusinessFocusBusinessBuilding";
import { About } from "./pages/About";
import { Insights } from "./pages/Insights";
import { SolutionsUCLM } from "./pages/SolutionsUCLM";
import { SolutionsJennifer } from "./pages/SolutionsJennifer";
import { SolutionsFelice } from "./pages/SolutionsFelice";
import { SolutionsSimms } from "./pages/SolutionsSimms";

export default function App() {
  return (
    <HelmetProvider>
      {/* 아래 Router 태그에 basename 속성을 추가했습니다. */}
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path="business-focus">
              <Route path="observability-optimization" element={<BusinessFocusObservability />} />
              <Route path="api-integration" element={<BusinessFocusAPIIntegration />} />
              <Route path="security-automation" element={<BusinessFocusSecurity />} />
              <Route path="business-building" element={<BusinessFocusBuilding />} />
            </Route>
            <Route path="solutions">
              <Route path="jennifer-ai-operations" element={<SolutionsJennifer />} />
              <Route path="uclm" element={<SolutionsUCLM />} />
              <Route path="felice-kafka-operations" element={<SolutionsFelice />} />
              <Route path="simms-itm" element={<SolutionsSimms />} />
            </Route>
            <Route 
              path="insights" 
              element={INSIGHTS_ENABLED ? <Insights /> : <Navigate to="/" replace />} 
            />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
