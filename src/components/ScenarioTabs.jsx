import { useState, useEffect, useRef } from 'react';
import FisheryTab from './tabs/FisheryTab';
import LogisticsTab from './tabs/LogisticsTab';
import InspectionTab from './tabs/InspectionTab';
import EmergencyTab from './tabs/EmergencyTab';
import WaterQualityTab from './tabs/WaterQualityTab';

const TABS = [
  { label: '渔业场景',     Component: FisheryTab },
  { label: '物流场景',     Component: LogisticsTab },
  { label: '巡检场景',     Component: InspectionTab },
  { label: '应急救援',     Component: EmergencyTab },
  { label: '旅游观光', Component: WaterQualityTab },
];

export default function ScenarioTabs({ activeTab, onTabChange }) {
  // Support both controlled (props) and uncontrolled (internal state) usage
  const [internalTab, setInternalTab] = useState(0);
  const isControlled = activeTab !== undefined && onTabChange !== undefined;
  const currentTab = isControlled ? activeTab : internalTab;

  const [visibleTab, setVisibleTab] = useState(currentTab);
  const [animating, setAnimating] = useState(false);
  const pendingTab = useRef(null);

  const handleTabClick = (index) => {
    if (index === currentTab || animating) return;
    if (isControlled) {
      onTabChange(index);
    } else {
      setInternalTab(index);
    }
  };

  // Animate out → swap content → animate in whenever currentTab changes
  useEffect(() => {
    if (currentTab === visibleTab) return;

    pendingTab.current = currentTab;
    setAnimating(true);

    const timer = setTimeout(() => {
      setVisibleTab(pendingTab.current);
      setAnimating(false);
    }, 150); // half of 300ms total (fade-out then fade-in)

    return () => clearTimeout(timer);
  }, [currentTab]); // eslint-disable-line react-hooks/exhaustive-deps

  const { Component } = TABS[visibleTab];

  return (
    <div className="bg-[#0d1526] rounded-xl border border-[rgba(14,165,233,0.2)]">
      {/* Tab bar */}
      <div className="flex border-b border-[rgba(14,165,233,0.15)] rounded-t-xl overflow-hidden">
        {TABS.map((tab, index) => {
          const isActive = index === currentTab;
          return (
            <button
              key={tab.label}
              onClick={() => handleTabClick(index)}
              data-testid={`tab-btn-${index}`}
              className={[
                'flex-1 py-3 px-2 text-sm font-medium transition-all duration-200 relative',
                isActive
                  ? 'text-[#0ea5e9] bg-[rgba(14,165,233,0.08)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[rgba(255,255,255,0.03)]',
              ].join(' ')}
            >
              {tab.label}
              {/* Active underline indicator */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0ea5e9] rounded-t" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab content with fade + slide transition */}
      <div
        data-testid={`tab-panel-${visibleTab}`}
        className={[
          'tab-content min-h-[260px]',
          animating ? 'tab-enter' : 'tab-active',
        ].join(' ')}
      >
        <Component />
      </div>
    </div>
  );
}
