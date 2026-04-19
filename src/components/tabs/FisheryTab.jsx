import EChart from '../EChart';

const METRICS = [
  {
    label: '病害损失降低',
    value: '10%-15%',
    desc: '精准投喂减少病害发生率',
    icon: '↓',
    iconColor: '#22c55e',
    color: '#22c55e',
    borderColor: '#22c55e',
  },
  {
    label: '饲料浪费率',
    value: '3%-5%',
    desc: '对比传统模式 8-12%，大幅降低浪费',
    icon: '🌾',
    iconColor: '#06b6d4',
    color: '#06b6d4',
    borderColor: '#06b6d4',
  },
  {
    label: '投喂均匀度误差',
    value: '≤8%',
    desc: '精准定量投喂，均匀覆盖全网箱',
    icon: '🎯',
    iconColor: '#0ea5e9',
    color: '#0ea5e9',
    borderColor: '#0ea5e9',
  },
];

const ringOption = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {d}%',
  },
  graphic: [
    {
      type: 'text',
      left: 'center',
      top: 'center',
      style: {
        text: '复购率\n>85%',
        textAlign: 'center',
        fill: '#f0f9ff',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22,
      },
    },
  ],
  series: [
    {
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['50%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        formatter: '{b}\n{d}%',
        color: '#cbd5e1',
        fontSize: 12,
      },
      labelLine: { lineStyle: { color: '#475569' } },
      data: [
        {
          name: '节约成本',
          value: 60,
          itemStyle: { color: '#0ea5e9' },
        },
        {
          name: '降低病害风险',
          value: 40,
          itemStyle: { color: '#22c55e' },
        },
      ],
    },
  ],
};

export default function FisheryTab() {
  return (
    <div className="p-4 text-slate-300">
      <h3 className="text-lg font-semibold text-tech-blue mb-1">渔业场景</h3>
      <p className="text-sm text-slate-400 mb-4">短途运输强需求与高复购率驱动模型</p>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left: metric cards */}
        <div className="flex flex-col gap-4 lg:w-2/5">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="card-gradient-border rounded-lg p-4 flex items-center gap-4 transition-transform hover:-translate-y-0.5"
              style={{ borderColor: m.borderColor }}
            >
              <span className="text-2xl font-bold" style={{ color: m.iconColor }}>{m.icon}</span>
              <div className="flex-1">
                <div className="text-2xl font-bold" style={{ color: m.color }}>{m.value}</div>
                <div className="text-xs text-slate-400 mb-0.5">{m.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: ring chart */}
        <div className="bg-slate-800/40 rounded-lg p-3 lg:w-3/5 flex flex-col">
          <p className="text-xs text-slate-400 text-center mb-2">复购率驱动因素分析</p>
          <EChart option={ringOption} style={{ height: '260px', flex: 1 }} />
        </div>
      </div>
    </div>
  );
}
