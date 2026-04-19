import { useState } from 'react';
import Header from './components/Header';
import KPISection from './components/KPISection';
import ScenarioTabs from './components/ScenarioTabs';
import BottomSection from './components/BottomSection';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [roiToggle, setRoiToggle] = useState('3年');
  const [capitalSlider, setCapitalSlider] = useState(5000);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-200 p-4 max-w-screen-2xl mx-auto">
      <Header />
      <div className="mt-4">
        <KPISection roiToggle={roiToggle} onToggleRoi={setRoiToggle} />
      </div>
      <div className="mt-4">
        <ScenarioTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <BottomSection capitalSlider={capitalSlider} onCapitalChange={setCapitalSlider} />
    </div>
  );
}
