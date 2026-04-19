import { useState } from 'react';
import EChart from './EChart';
import { COST_COMPARE } from '../constants/businessData';
import { calcCapital } from '../utils/capitalModel';

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

const SLIDER_MIN = 5000;
const SLIDER_MAX = 50000;
const SLIDER_LABELS = [
  { value: 5000,  label: '5000万' },
  { value: 10000, label: '1亿' },
  { value: 20000, label: '2亿' },
  { value: 30000, label: '3亿' },
  { value: 50000, label: '5亿' },
];

function CapitalModule({ sliderValue, onSliderChange }) {
  const result = calcCapital(sliderValue);
  const displayCapital =
    sliderValue >= 10000
      ? `${(sliderValue / 10000).toFixed(sliderValue % 10000 === 0 ? 0 : 1)} 亿`
      : `${sliderValue / 1000} 千万`;
  const metrics = [
    { label: '预计建设机巢数', value: result.nests, unit: '个' },
    { label: '覆盖网箱总数',   value: result.cages, unit: '个' },
    { label: '预计年总营收',   value: result.revenue, unit: '万元' },
  ];
  return (
    <div className="card-gradient-border rounded-xl p-5 mt-6">
      <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">5亿资本金推演模型</div>
      <div className="text-sm text-slate-300 mb-4">拖动滑块，查看不同投资规模下的预期收益</div>
      <div className="mb-2">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          {SLIDER_LABELS.map((l) => (<span key={l.value}>{l.label}</span>))}
        </div>
        <input type="range" min={SLIDER_MIN} max={SLIDER_MAX} step={1000} value={sliderValue}
          onChange={(e) => onSliderChange(Number(e.target.value))} aria-label="资本金规模滑块" />
        <div className="text-center text-tech-blue font-semibold text-sm mt-1">当前投入：{displayCapital}</div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-slate-800/60 rounded-lg p-3 text-center card-glow">
            <div className="text-xs text-slate-400 mb-1">{m.label}</div>
            <div className="text-2xl font-bold text-tech-blue">{m.value.toLocaleString()}</div>
            <div className="text-xs text-slate-500">{m.unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BusinessImpactSection() {
  const [sliderValue, setSliderValue] = useState(5000);
  return (
    <div className="mt-6 pt-4 border-t border-slate-700/40">
      <h2 className="text-base font-semibold text-slate-300 mb-3">
        客户为什么买单？—— 养殖户降本增效对比（10万斤规模）
      </h2>
      <div className="bg-slate-800/40 rounded-lg p-4">
        <EChart option={barOption} style={{ height: '280px' }} />
      </div>
      <CapitalModule sliderValue={sliderValue} onSliderChange={setSliderValue} />
    </div>
  );
}
