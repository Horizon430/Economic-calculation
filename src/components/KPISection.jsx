import { KPI_DATA } from '../constants/businessData';
import KPICard from './KPICard';

/**
 * 海空一体化底层能力与商业壁垒 — 4 列等宽卡片区
 */
export default function KPISection() {
  return (
    <div>
      <p className="text-xs text-slate-500 tracking-widest uppercase mb-3">
        海空一体化底层能力与商业壁垒
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_DATA.map((item) => (
          <KPICard key={item.title} data={item} />
        ))}
      </div>
    </div>
  );
}
