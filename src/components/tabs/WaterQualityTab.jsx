import { useState, useEffect, useRef, useCallback } from 'react';
import EChart from '../EChart';

const METRICS = [
  {
    label: '数据采集频率',
    value: '1次/10分钟',
    unit: '',
    desc: '全天候持续采集，每日144次高密度数据',
    icon: '⏱️',
    color: '#06b6d4',
    borderColor: '#06b6d4',
  },
  {
    label: '监测维度',
    value: '4项',
    unit: '',
    desc: '水温 · 盐度 · 溶解氧 · 流速流向',
    icon: '🌊',
    color: '#0ea5e9',
    borderColor: '#0ea5e9',
  },
];

// Generate 24-hour baseline data points (one per hour)
function generateBaseData() {
  const temps = [];
  const salinities = [];
  const labels = [];
  for (let h = 0; h < 24; h++) {
    labels.push(`${String(h).padStart(2, '0')}:00`);
    // Water temp: 18-26°C with a smooth daily cycle
    temps.push(+(18 + 4 * Math.sin((h - 6) * Math.PI / 12) + (Math.random() * 2 - 1)).toFixed(2));
    // Salinity: 28-35‰ with slight variation
    salinities.push(+(31 + 2 * Math.cos((h - 3) * Math.PI / 12) + (Math.random() * 1 - 0.5)).toFixed(2));
  }
  return { labels, temps, salinities };
}

export default function WaterQualityTab() {
  const [chartData, setChartData] = useState(() => generateBaseData());
  const tickRef = useRef(0);

  // Every 3 seconds, append a new data point simulating real-time updates
  const appendDataPoint = useCallback(() => {
    tickRef.current += 1;
    const tick = tickRef.current;
    const hour = tick % 24;
    const minuteLabel = `${String(hour).padStart(2, '0')}:${String((tick % 4) * 15).padStart(2, '0')}`;
    const newTemp = +(18 + 4 * Math.sin((hour - 6) * Math.PI / 12) + (Math.random() * 2 - 1)).toFixed(2);
    const newSal = +(31 + 2 * Math.cos((hour - 3) * Math.PI / 12) + (Math.random() * 1 - 0.5)).toFixed(2);

    setChartData(prev => {
      const maxPoints = 30;
      const labels = [...prev.labels, minuteLabel].slice(-maxPoints);
      const temps = [...prev.temps, newTemp].slice(-maxPoints);
      const salinities = [...prev.salinities, newSal].slice(-maxPoints);
      return { labels, temps, salinities };
    });
  }, []);

  useEffect(() => {
    const id = setInterval(appendDataPoint, 3000);
    return () => clearInterval(id);
  }, [appendDataPoint]);

  const chartOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      formatter: (params) =>
        params.map(p => `${p.seriesName}: ${p.value}${p.seriesName === '水温' ? '°C' : '‰'}`).join('<br/>'),
    },
    legend: {
      data: ['水温', '盐度'],
      textStyle: { color: '#94a3b8' },
      top: 4,
    },
    grid: { left: '3%', right: '6%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: chartData.labels,
      axisLabel: { color: '#64748b', fontSize: 10, interval: 'auto' },
      axisLine: { lineStyle: { color: '#334155' } },
    },
    yAxis: [
      {
        type: 'value',
        name: '水温 (°C)',
        min: 16,
        max: 28,
        nameTextStyle: { color: '#06b6d4', fontSize: 10 },
        axisLabel: { color: '#64748b', fontSize: 10 },
        splitLine: { lineStyle: { color: '#1e293b' } },
      },
      {
        type: 'value',
        name: '盐度 (‰)',
        min: 26,
        max: 37,
        nameTextStyle: { color: '#0ea5e9', fontSize: 10 },
        axisLabel: { color: '#64748b', fontSize: 10 },
        splitLine: { show: false },
      },
    ],
    series: [
      {
        name: '水温',
        type: 'line',
        yAxisIndex: 0,
        data: chartData.temps,
        smooth: true,
        symbol: 'none',
        lineStyle: { color: '#06b6d4', width: 2 },
        areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(6,182,212,0.3)' }, { offset: 1, color: 'rgba(6,182,212,0)' }] } },
      },
      {
        name: '盐度',
        type: 'line',
        yAxisIndex: 1,
        data: chartData.salinities,
        smooth: true,
        symbol: 'none',
        lineStyle: { color: '#0ea5e9', width: 2 },
        areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(14,165,233,0.2)' }, { offset: 1, color: 'rgba(14,165,233,0)' }] } },
      },
    ],
  };

  return (
    <div className="p-4 text-slate-300">
      <h3 className="text-lg font-semibold mb-1" style={{ color: '#06b6d4' }}>水质水文监测</h3>
      <p className="text-sm text-slate-400 mb-4">全时域水环境数据资产化</p>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left: metric cards */}
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
                  <span className="text-xl font-bold" style={{ color: m.color }}>{m.value}</span>
                  {m.unit && <span className="text-sm text-slate-300">{m.unit}</span>}
                </div>
                <div className="text-xs text-slate-400 mb-0.5">{m.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{m.desc}</div>
              </div>
            </div>
          ))}

          {/* Live indicator */}
          <div className="bg-slate-800/40 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400 font-semibold uppercase tracking-widest">实时监测中</span>
            </div>
            <p className="text-xs text-slate-500">数据每3秒自动更新，模拟传感器实时上报</p>
          </div>
        </div>

        {/* Right: dynamic line chart */}
        <div className="lg:w-3/5">
          <div className="bg-slate-800/30 rounded-lg p-3">
            <div className="text-xs text-slate-400 mb-2 uppercase tracking-widest">24小时水温 & 盐度动态监测</div>
            <EChart option={chartOption} style={{ height: '280px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
