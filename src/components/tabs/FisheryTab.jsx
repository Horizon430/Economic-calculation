import { useState } from 'react';
import EChart from '../EChart';
import { COST_COMPARE } from '../../constants/businessData';

const METRICS = [
  {
    label: '病害减损',
    value: '10%-15%',
    desc: '',
    icon: '↓',
    iconColor: '#22c55e',
    color: '#22c55e',
    borderColor: '#22c55e',
    subtitle: true,
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
    label: '节省人工',
    value: '节省4个人工',
    desc: '直击"用工荒"痛点，解决海岛渔业劳动力断层危机',
    icon: '👤',
    iconColor: '#22c55e',
    color: '#22c55e',
    borderColor: '#22c55e',
    detail: true,
  },
];

const barOption = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter: (params) =>
      params.map((p) => `${p.seriesName}: ${p.value} 万元`).join('<br/>'),
  },
  legend: {
    data: ['传统模式', '智能化模式'],
    top: 0,
    textStyle: { color: '#94a3b8', fontSize: 12 },
  },
  grid: { left: '3%', right: '4%', bottom: '3%', top: '40px', containLabel: true },
  xAxis: {
    type: 'category',
    data: COST_COMPARE.categories,
    axisLabel: { color: '#94a3b8', fontSize: 12 },
    axisLine: { lineStyle: { color: 'rgba(148,163,184,0.3)' } },
  },
  yAxis: {
    type: 'value',
    name: '万元/年',
    nameTextStyle: { color: '#64748b', fontSize: 11 },
    axisLabel: { color: '#94a3b8', fontSize: 11 },
    splitLine: { lineStyle: { color: 'rgba(148,163,184,0.1)' } },
  },
  series: [
    {
      name: '传统模式',
      type: 'bar',
      barGap: '10%',
      data: COST_COMPARE.traditional,
      itemStyle: { color: '#64748b', borderRadius: [3, 3, 0, 0] },
      emphasis: { itemStyle: { color: '#94a3b8' } },
    },
    {
      name: '智能化模式',
      type: 'bar',
      data: COST_COMPARE.smart,
      itemStyle: { color: '#0ea5e9', borderRadius: [3, 3, 0, 0] },
      emphasis: { itemStyle: { color: '#38bdf8' } },
    },
  ],
};

const FISH_SLIDER_LABELS = [
  { value: 1,  label: '1万吨' },
  { value: 4,  label: '4万吨' },
  { value: 7,  label: '7万吨' },
  { value: 10, label: '10万吨' },
  { value: 13, label: '13万吨' },
];

export default function FisheryTab() {
  const [sliderValue, setSliderValue] = useState(1);

  const cages = Math.round(sliderValue * 6000);
  const nests = Math.round(sliderValue * 400);
  const savings = Math.round(sliderValue * 8000);
  const fishMetrics = [
    { label: '覆盖网箱总数', value: cages, unit: '个' },
    { label: '预计建设机巢数', value: nests, unit: '个' },
    { label: '预计每年节省成本', value: savings, unit: '万元' },
  ];

  return (
    <div className="p-4 text-slate-300">
      <h3 className="text-lg font-semibold text-tech-blue mb-1">渔业场景</h3>
      <p className="text-sm text-slate-400 mb-4">短途运输强需求与高复购率驱动模型</p>

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-4">
        <div className="flex flex-col gap-4 lg:w-1/2">
          {METRICS.map((m) => (
            <div key={m.label} className="card-gradient-border rounded-lg p-4 flex items-start gap-4 transition-transform hover:-translate-y-0.5" style={{ borderColor: m.borderColor }}>
              <span className="text-2xl font-bold mt-0.5" style={{ color: m.iconColor }}>{m.icon}</span>
              <div className="flex-1">
                <div className="text-2xl font-bold" style={{ color: m.color }}>{m.value}</div>
                <div className="text-xs text-slate-400 mb-0.5">{m.label}</div>
                {m.subtitle ? (
                  <div className="mt-1 space-y-1">
                    <div className="text-xs"><span className="text-cyan-400 font-semibold">浙江大学联合研发</span><span className="text-slate-400">"AI 鱼群健康监护模型"</span></div>
                    <div className="text-xs text-slate-500">技术壁垒：多波束声呐 + 视觉 AI 算法融合</div>
                    <div className="text-xs text-slate-500">商业价值：精准预判应激状态，显著提升成品鱼存活率与年产能</div>
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 mt-0.5">{m.desc}</div>
                )}
                {m.detail && (
                  <div className="mt-2 pt-2 border-t border-slate-700/50 space-y-1">
                    <div className="text-xs text-slate-400">传统模式：<span className="text-slate-300">5人值守投喂</span></div>
                    <div className="text-xs text-slate-400">智能化模式：<span className="text-tech-blue font-semibold">1人统管30个网箱</span></div>
                    <div className="text-xs text-slate-400">节约成本：<span className="font-bold" style={{ color: '#22c55e' }}>30.2万/年</span> <span className="text-slate-500">(7.8万/人/年 × 4)</span></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="card-gradient-border rounded-lg p-6 flex flex-col items-center justify-center text-center" style={{ borderColor: '#22c55e' }}>
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">客户年度净节约</div>
            <div className="text-4xl font-bold" style={{ color: '#22c55e' }}>
              28.8 万元<span className="text-xl font-normal text-slate-300">/年</span>
            </div>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">扣除我们收取的 33.6 万服务费后，客户仍有巨额节余</p>
          </div>
          <div className="bg-slate-800/40 rounded-lg p-4 flex-1 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">成本节约明细</div>
            {COST_COMPARE.categories.map((cat, i) => {
              const saved = COST_COMPARE.traditional[i] - COST_COMPARE.smart[i];
              return (
                <div key={cat} className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0">
                  <span className="text-sm text-slate-300">{cat}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 line-through">{COST_COMPARE.traditional[i]} 万</span>
                    <span className="text-sm font-semibold text-tech-blue">{COST_COMPARE.smart[i]} 万</span>
                    <span className="text-xs font-bold" style={{ color: '#22c55e' }}>↓ {saved.toFixed(2).replace(/\.?0+$/, '')} 万</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fishery-specific: bar chart + fish scale slider */}
      <div className="mt-6 pt-4 border-t border-slate-700/40">
        <h2 className="text-base font-semibold text-slate-300 mb-3">客户为什么买单？—— 养殖户降本增效对比（10万斤规模）</h2>
        <div className="bg-slate-800/40 rounded-lg p-4">
          <EChart option={barOption} style={{ height: '280px' }} />
        </div>
        <div className="card-gradient-border rounded-xl p-5 mt-6">
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">大黄鱼规模推演模型</div>
          <div className="text-sm text-slate-300 mb-4">每5万千克大黄鱼覆盖30个网箱，需要建设2个机巢，预计节省成本40万元</div>
          <div className="mb-2">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              {FISH_SLIDER_LABELS.map((l) => (<span key={l.value}>{l.label}</span>))}
            </div>
            <input type="range" min={1} max={13} step={1} value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))} aria-label="大黄鱼规模滑块" />
            <div className="text-center text-tech-blue font-semibold text-sm mt-1">{sliderValue} 万吨大黄鱼</div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {fishMetrics.map((m) => (
              <div key={m.label} className="bg-slate-800/60 rounded-lg p-3 text-center card-glow">
                <div className="text-xs text-slate-400 mb-1">{m.label}</div>
                <div className="text-2xl font-bold text-tech-blue">{m.value.toLocaleString()}</div>
                <div className="text-xs text-slate-500">{m.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
