import { useEffect, useRef } from 'react';

const METRICS = [
  {
    label: '数据传输延迟',
    value: '≤50',
    unit: 'ms',
    desc: '低延迟实时数据链路，毫秒级响应',
    icon: '📡',
    color: '#0ea5e9',
    borderColor: '#0ea5e9',
  },
  {
    label: '故障预警率',
    value: '≥98.5',
    unit: '%',
    desc: '高精度 AI 预警，提前发现设备隐患',
    icon: '🛡',
    color: '#06b6d4',
    borderColor: '#06b6d4',
  },
  {
    label: '声呐探测深度',
    value: '120',
    unit: '米',
    desc: '水下立体感知，全深度覆盖',
    icon: '🔊',
    color: '#8b5cf6',
    borderColor: '#8b5cf6',
  },
];


/* Radar scan animation component (9.2) */
function RadarScan() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 220, height: 220 }}>
      {/* Concentric circles */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-cyan-500/30"
          style={{ width: i * 50, height: i * 50 }}
        />
      ))}

      {/* Cross-hair lines */}
      <div className="absolute w-full h-px bg-cyan-500/20" />
      <div className="absolute h-full w-px bg-cyan-500/20" />

      {/* Rotating sweep */}
      <div
        className="absolute rounded-full overflow-hidden"
        style={{ width: 200, height: 200 }}
      >
        <div className="radar-sweep" />
      </div>

      {/* Center dot */}
      <div className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />

      {/* Node labels */}
      <span
        className="absolute text-xs font-semibold text-cyan-300 bg-slate-900/80 px-2 py-0.5 rounded"
        style={{ top: 28, left: '50%', transform: 'translateX(-50%)' }}
      >
        无人机
      </span>
      <span
        className="absolute text-xs font-semibold text-sky-300 bg-slate-900/80 px-2 py-0.5 rounded"
        style={{ bottom: 28, left: '50%', transform: 'translateX(-50%)' }}
      >
        无人船
      </span>
      <span
        className="absolute text-xs text-slate-400 bg-slate-900/80 px-1.5 py-0.5 rounded"
        style={{ right: 4, top: '50%', transform: 'translateY(-50%)' }}
      >
        协同
      </span>
    </div>
  );
}

export default function InspectionTab() {
  return (
    <div className="p-4 text-slate-300">
      <h3 className="text-lg font-semibold text-tech-blue mb-1">巡检场景</h3>
      <p className="text-sm text-slate-400 mb-4">海空立体协同与高技术壁垒溢价</p>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left: metric cards (9.1) */}
        <div className="flex flex-col gap-4 lg:w-2/5">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="card-gradient-border rounded-lg p-4 flex items-center gap-4 transition-transform hover:-translate-y-0.5"
              style={{ borderColor: m.borderColor }}
            >
              <span className="text-2xl">{m.icon}</span>
              <div className="flex-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold" style={{ color: m.color }}>{m.value}</span>
                  <span className="text-sm text-slate-300">{m.unit}</span>
                </div>
                <div className="text-xs text-slate-400 mb-0.5">{m.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: radar scan UI (9.2) + pricing power block (9.3) */}
        <div className="flex flex-col gap-4 lg:w-3/5">
          {/* Geek radar UI */}
          <div className="bg-slate-800/40 rounded-lg p-4 flex flex-col items-center">
            <p className="text-xs text-slate-400 mb-3 self-start">
              海空立体协同态势感知 — 无人船 + 无人机
            </p>
            <RadarScan />
            <div className="flex gap-3 mt-3">
              <span className="text-xs px-3 py-1 rounded-full border border-cyan-500/50 text-cyan-300 bg-cyan-500/10">
                🛸 无人机巡检
              </span>
              <span className="text-xs px-3 py-1 rounded-full border border-sky-500/50 text-sky-300 bg-sky-500/10">
                🚢 无人船声呐
              </span>
            </div>
          </div>

          {/* Pricing power highlight block (9.3) */}
          <div className="card-gradient-border rounded-lg p-5 flex items-start gap-3">
            <span className="text-2xl mt-0.5">🔒</span>
            <div>
              <div className="text-xs text-slate-400 mb-1 uppercase tracking-widest">核心竞争壁垒</div>
              <p className="text-base font-bold text-white leading-snug">
                利用极高技术壁垒与环境适应性，掌握 To B 业务绝对定价权
              </p>
              <p className="text-xs text-slate-400 mt-2">
                海空协同专利技术 · 极端环境适应 · 客户强依赖 · 高切换成本
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
