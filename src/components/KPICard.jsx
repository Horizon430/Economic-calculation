import useCountUp from '../hooks/useCountUp';

/**
 * Single KPI metric card.
 * For the toggle card (isToggle: true), renders a 3年/5年 switch instead of a CountUp number.
 */
export default function KPICard({ data, roiToggle, onToggleRoi }) {
  const { label, value, unit, subtitle, color, isToggle } = data;
  const animated = useCountUp(isToggle ? null : value);

  // Format number: if it has decimals keep 1 decimal place, otherwise integer
  const formatValue = (v) => {
    if (v === null || v === undefined) return '';
    return Number.isInteger(value) ? Math.round(v) : v.toFixed(1);
  };

  return (
    <div
      className="card-glow flex-1 min-w-0 rounded-xl p-5 border border-[rgba(14,165,233,0.2)]"
      style={{ background: 'var(--bg-card)' }}
    >
      {/* Accent top bar */}
      <div className="h-0.5 w-12 rounded mb-3" style={{ background: color }} />

      <p className="text-sm text-slate-400 mb-2">{label}</p>

      {isToggle ? (
        /* ROI Toggle */
        <div>
          <div className="flex items-center gap-2 my-2">
            {['3年', '5年'].map((opt) => (
              <button
                key={opt}
                onClick={() => onToggleRoi(opt)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  roiToggle === opt
                    ? { background: color, color: '#fff', boxShadow: `0 0 10px ${color}66` }
                    : { background: 'rgba(255,255,255,0.06)', color: '#94a3b8' }
                }
              >
                {opt}
              </button>
            ))}
          </div>
          {data.roiValues && (
            <div className="flex items-end gap-1 mt-1">
              <span className="text-3xl font-bold tabular-nums" style={{ color }}>
                {data.roiValues[roiToggle]?.value}
              </span>
              <span className="text-base text-slate-300 mb-0.5">{data.roiValues[roiToggle]?.unit}</span>
            </div>
          )}
          {data.roiValues && (
            <p className="text-xs mt-1" style={{ color: `${color}99` }}>
              {data.roiValues[roiToggle]?.note}
            </p>
          )}
        </div>
      ) : (
        /* CountUp number */
        <div className="flex items-end gap-1 my-1">
          <span className="text-3xl font-bold tabular-nums" style={{ color }}>
            {formatValue(animated)}
          </span>
          <span className="text-base text-slate-300 mb-0.5">{unit}</span>
        </div>
      )}

      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{subtitle}</p>
    </div>
  );
}
