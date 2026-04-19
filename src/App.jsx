import { useState } from 'react';
import Header from './components/Header';
import KPISection from './components/KPISection';
import ScenarioTabs from './components/ScenarioTabs';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-200 p-4 max-w-screen-2xl mx-auto">
      <Header />
      <div className="mt-4">
        <KPISection />
      </div>
      <div className="mt-4">
        <ScenarioTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}
