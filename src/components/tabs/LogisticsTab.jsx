import { useState } from 'react';
import EChart from '../EChart';

const compareBarOption = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter: (params) =>
      params.map((p) => `${p.seriesName}: ${p.value} 元`).join('<br/>'),
  },
  legend: {
    data: ['传统船运', '低空智能方案'],
    top: 0,
    textStyle: { color: '#94a3b8', fontSize: 12 },
  },
  grid: { left: '3%', right: '4%', bottom: '3%', top: '40px', containLabel: true },
  yAxis: {
    type: 'category',
    data: ['单次运输费用'],
    axisLabel: { color: '#94a3b8', fontSize: 12 },
    axisLine: { lineStyle: { color: 'rgba(148,163,184,0.3)' } },
  },
  xAxis: {
    type: 'value',
    name: '元',
    nameTextStyle: { color: '#64748b', fontSize: 11 },
    axisLabel: { color: '#94a3b8', fontSize: 11 },
    splitLine: { lineStyle: { color: 'rgba(148,163,184,0.1)' } },
  },
  series: [
    {
      name: '传统船运',
      type: 'bar',
      data: [5500],
      barWidth: 28,
      itemStyle: { color: '#64748b', borderRadius: [0, 4, 4, 0] },
      emphasis: { itemStyle: { color: '#94a3b8' } },
    },
    {
      name: '低空智能方案',
      type: 'bar',
      data: [1000],
      barWidth: 28,
      itemStyle: { color: '#0ea5e9', borderRadius: [0, 4, 4, 0] },
      emphasis: { itemStyle: { color: '#38bdf8' } },
    },
  ],
};

export default function LogisticsTab() {
  const [sliderValue, setSliderValue] = useState(100000);
  // 100,000kg时：客户节省450万，年营收100万，线性等比
  const scale = sliderValue / 100000;
  const customerSavings = Math.round(scale * 450);
  const annualRevenue = Math.round(scale * 100);
  const sliderLabels = [
    { value: 100000,  label: '10万公斤' },
    { value: 300000,  label: '30万公斤' },
    { value: 500000,  label: '50万公斤' },
    { value: 700000,  label: '70万公斤' },
    { value: 1000000, label: '100万公斤' },
  ];
  const logisticsMetrics = [
    { label: '预计为客户节省', value: customerSavings, unit: '万元' },
    { label: '预计年总营收', value: annualRevenue, unit: '万元' },
  ];

  return (
    <div className="p-4 text-slate-300">
      <h3 className="text-lg font-semibold text-tech-blue mb-1">跨海岛高频短途物流网络</h3>
      <p className="text-sm text-slate-400 mb-2">攻克传统船舶物流"环境污染、时效极低、成本昂贵"的三大痛点</p>

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-4">
        {/* Left: 3 business cards */}
        <div className="flex flex-col gap-4 lg:w-1/2">

          {/* Card 1: Pain point */}
          <div className="card-gradient-border rounded-lg p-4 flex items-start gap-4 transition-transform hover:-translate-y-0.5" style={{ borderColor: '#f97316' }}>
            <span className="text-2xl mt-0.5">🎯</span>
            <div className="flex-1">
              <div className="text-lg font-bold text-white">打破"大船拉小货"死局</div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-bold" style={{ color: '#f97316' }}>5000-6000</span>
                <span className="text-sm text-slate-300">元/趟</span>
              </div>
              <div className="text-xs text-slate-500 mt-1.5">传统燃油船单次出航成本极高，300-500kg 的小批量海鲜运输面临严重亏损，市场需求长期被压抑。</div>
            </div>
          </div>

          {/* Card 2: Unit economics */}
          <div className="card-gradient-border rounded-lg p-4 flex items-start gap-4 transition-transform hover:-translate-y-0.5" style={{ borderColor: '#22c55e' }}>
            <span className="text-2xl mt-0.5">💰</span>
            <div className="flex-1">
              <div className="text-lg font-bold text-white">客户省 <span style={{ color: '#22c55e' }}>4500</span>，我们赚 <span style={{ color: '#f97316' }}>800</span></div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-sm text-slate-400">单次定价</span>
                <span className="text-2xl font-bold text-tech-blue">1000</span>
                <span className="text-sm text-slate-300">元</span>
                <span className="text-xs text-slate-500 ml-1">(电费仅需 100 余元)</span>
              </div>
              <div className="text-xs text-slate-500 mt-1.5">为客户省下近 5000 元差价锁定<span className="text-tech-blue font-semibold">超高复购率</span>；极低能源成本赋予我们<span style={{ color: '#f97316' }} className="font-semibold">绝对定价权</span>与暴利空间。</div>
            </div>
          </div>

          {/* Traditional shipping block */}
          <div className="card-gradient-border rounded-lg p-5 flex-1" style={{ borderColor: '#64748b' }}>
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">传统船运方案</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-400">5,500</span>
              <span className="text-sm text-slate-500">元/趟</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">全部为客户承担（油费 + 人工 + 码头费）</div>
          </div>
        </div>

        {/* Right: transport cost comparison */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="bg-slate-800/40 rounded-lg p-4">
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">单次运输经济模型对比</div>
            <EChart option={compareBarOption} style={{ height: '160px' }} />
          </div>

          <div className="card-gradient-border rounded-lg p-5 flex-1" style={{ borderColor: '#0ea5e9' }}>
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">低空智能方案</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-tech-blue">1,000</span>
              <span className="text-sm text-slate-300">元/趟</span>
            </div>
            <div className="flex gap-4 mt-2 text-xs">
              <span className="text-slate-500">电费成本 <span className="text-slate-300 font-semibold">~150 元</span></span>
              <span className="text-slate-500">纯毛利 <span style={{ color: '#22c55e' }} className="font-bold">~850 元</span></span>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-700/50 flex items-center justify-between">
              <span className="text-xs text-slate-400">客户每单净省</span>
              <span className="text-xl font-bold" style={{ color: '#22c55e' }}>↓ 4,500 元</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logistics scale slider */}
      <div className="card-gradient-border rounded-xl p-5 mt-6">
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">物流规模推演模型</div>
        <div className="text-sm text-slate-300 mb-4">拖动滑块，查看不同运输次数下的预期收益</div>
        <div className="mb-2">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            {sliderLabels.map((l) => (<span key={l.value}>{l.label}</span>))}
          </div>
          <input type="range" min={100000} max={1000000} step={10000} value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))} aria-label="物流规模滑块" />
          <div className="text-center text-tech-blue font-semibold text-sm mt-1">{(sliderValue / 10000).toLocaleString()} 万公斤</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {logisticsMetrics.map((m) => (
            <div key={m.label} className="bg-slate-800/60 rounded-lg p-3 text-center card-glow">
              <div className="text-xs text-slate-400 mb-1">{m.label}</div>
              <div className="text-2xl font-bold text-tech-blue">{m.value.toLocaleString()}</div>
              <div className="text-xs text-slate-500">{m.unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
