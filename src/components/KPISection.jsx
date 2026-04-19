import { KPI_DATA } from '../constants/businessData';
import KPICard from './KPICard';

/**
 * Horizontal row of 4 KPI metric cards.
 * Passes roiToggle / onToggleRoi down to the toggle card.
 */
export default function KPISection({ roiToggle, onToggleRoi }) {
  return (
    <div className="flex gap-4 w-full">
      {KPI_DATA.map((item) => (
        <KPICard
          key={item.label}
          data={item}
          roiToggle={roiToggle}
          onToggleRoi={onToggleRoi}
        />
      ))}
    </div>
  );
}
