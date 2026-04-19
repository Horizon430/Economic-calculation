import useCountUp from '../hooks/useCountUp';

function MetricRow({ m }) {
  const animated = useCountUp(m.value);

  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-xs text-slate-400 shrink-0">{m.label}</span>
      {m.tag ? (
        <span
          className="text-sm font-semibold font-mono"
          style={{ color: m.tagColor || '#94a3b8' }}
        >
          {m.tag}
        </span>
      ) : (
        <span className="text-sm font-bold font-mono text-slate-100">
          {m.value !== null && m.value !== undefined ? Math.round(animated) : '—'}
          {m.unit && <span className="text-xs text-slate-400 ml-0.5">{m.unit}</span>}
        </span>
      )}
    </div>
  );
}

/**
 * Single capability card for the 海空一体化 section.
 */
export default function KPICard({ data }) {
  const { title, subtitle, color, icon, metrics } = data;

  return (
    <div
      className="card-glow rounded-xl p-5 border border-[rgba(14,165,233,0.15)] transition-transform duration-200 hover:-translate-y-0.5"
      style={{ background: 'var(--bg-card)' }}
    >
      {/* Accent bar */}
      <div className="h-0.5 w-10 rounded mb-3" style={{ background: color }} />

      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">{icon}</span>
        <span className="text-base font-semibold" style={{ color }}>{title}</span>
      </div>

      <p className="text-xs text-slate-500 mb-4 leading-relaxed">{subtitle}</p>

      <div className="flex flex-col gap-2">
        {metrics.map((m) => (
          <MetricRow key={m.label} m={m} />
        ))}
      </div>
    </div>
  );
}
