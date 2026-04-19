import EChart from '../EChart';

const METRICS = [
  { label: '无人机载重', value: '80', unit: 'kg', desc: '单次最大载重能力', color: '#0ea5e9', icon: '✈️' },
  { label: '极限抗风', value: '6级', unit: '/ IP68', desc: '大风环境稳定作业，全防水防尘', color: '#06b6d4', icon: '🌊' },
  { label: '补能效率', value: '≤20', unit: '分钟', desc: '单次充电时间，快速周转', color: '#8b5cf6', icon: '⚡' },
];

const radarOption = {
  backgroundColor: 'transparent',
  tooltip: { trigger: 'item' },
  legend: {
    data: ['传统船舶', '无人机'],
    bottom: 0,
    textStyle: { color: '#94a3b8' },
  },
  radar: {
    indicator: [
      { name: '时效性', max: 100 },
      { name: '受天气影响度', max: 100 },
      { name: '单次成本', max: 100 },
      { name: '周转率', max: 100 },
    ],
    shape: 'polygon',
    splitNumber: 4,
    axisName: { color: '#94a3b8', fontSize: 12 },
    splitLine: { lineStyle: { color: 'rgba(148,163,184,0.2)' } },
    splitArea: { areaStyle: { color: ['rgba(14,165,233,0.03)', 'rgba(14,165,233,0.06)'] } },
    axisLine: { lineStyle: { color: 'rgba(148,163,184,0.3)' } },
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          name: '传统船舶',
          value: [35, 30, 40, 35],
          lineStyle: { color: '#64748b', width: 2 },
          areaStyle: { color: 'rgba(100,116,139,0.2)' },
          itemStyle: { color: '#64748b' },
        },
        {
          name: '无人机',
          value: [90, 75, 80, 88],
          lineStyle: { color: '#0ea5e9', width: 2 },
          areaStyle: { color: 'rgba(14,165,233,0.25)' },
          itemStyle: { color: '#0ea5e9' },
        },
      ],
    },
  ],
};

export default function LogisticsTab() {
  return (
    <div className="p-4 text-slate-300">
      <h3 className="text-lg font-semibold text-tech-blue mb-1">物流场景</h3>
      <p className="text-sm text-slate-400 mb-4">跨海岛高频短途物流网络</p>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-3 lg:w-2/5">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="card-gradient-border rounded-lg p-4 flex items-center gap-4 transition-transform hover:-translate-y-0.5"
              style={{ borderColor: m.color }}
            >
              <span className="text-2xl">{m.icon}</span>
              <div className="flex-1">
                <div className="text-xs text-slate-400 mb-0.5">{m.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold" style={{ color: m.color }}>
                    {m.value}
                  </span>
                  <span className="text-sm text-slate-300">{m.unit}</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-3/5 rounded-lg bg-slate-800/40 p-3">
          <p className="text-xs text-slate-400 mb-2 text-center">传统船舶 vs 无人机 — 四维对比</p>
          <EChart option={radarOption} style={{ height: '260px' }} />
        </div>
      </div>
    </div>
  );
}
