import { useState } from 'react';

export default function InspectionTab() {
  const [customerCount, setCustomerCount] = useState(1);
  const annualRevenue = customerCount * 1000; // 1000万/客户
  const moatLevel = customerCount >= 10 ? '垄断级定价权' : customerCount >= 5 ? '高定价权锁定' : '强定价权建立中';
  const sliderLabels = [
    { value: 1, label: '1' },
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 15, label: '15' },
    { value: 20, label: '20' },
  ];
  const metrics = [
    { label: '预计年总营收', value: annualRevenue.toLocaleString(), unit: '万元' },
    { label: '覆盖场景/厂区', value: customerCount, unit: '个' },
  ];

  return (
    <div className="p-4 text-slate-300">
      <h3 className="text-lg font-semibold text-tech-blue mb-1">巡检场景</h3>
      <p className="text-sm text-slate-400 mb-2">海空立体协同与高技术壁垒溢价</p>

      {/* Core quote */}
      <div className="rounded-lg p-3 mb-4 border border-[rgba(14,165,233,0.3)] bg-[rgba(14,165,233,0.05)]">
        <p className="text-center text-base font-bold text-white">
          "依靠水域独家优势与军工资质壁垒，掌握 To B 业务<span style={{ color: '#f97316' }}>绝对定价权</span>。"
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-4">
        {/* Left: 3 barrier cards */}
        <div className="flex flex-col gap-4 lg:w-1/2">

          {/* Card 1 */}
          <div className="card-gradient-border rounded-lg p-4 flex items-start gap-4 transition-transform hover:-translate-y-0.5" style={{ borderColor: '#0ea5e9' }}>
            <span className="text-2xl mt-0.5">⚓</span>
            <div className="flex-1">
              <div className="text-lg font-bold text-white">解决"高危+缺载具"行业死穴</div>
              <div className="mt-1">
                <span className="text-sm font-semibold text-tech-blue">风电巡检"无人船+无人机"独家方案</span>
              </div>
              <div className="text-xs text-slate-500 mt-1.5">传统人工乘船出海并攀爬风电杆<span style={{ color: '#f97316' }} className="font-semibold">危险系数极高</span>且费时费力，行业<span style={{ color: '#f97316' }} className="font-semibold">极度缺乏</span>合理的巡检载具。我们利用无人船搭载无人机直达现场，<span className="text-tech-blue font-semibold">"水上独家运载优势，竞品根本飞不到"</span>，构筑极深物理护城河。</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-gradient-border rounded-lg p-4 flex items-start gap-4 transition-transform hover:-translate-y-0.5" style={{ borderColor: '#f97316' }}>
            <span className="text-2xl mt-0.5">🔒</span>
            <div className="flex-1">
              <div className="text-lg font-bold text-white">涉密船厂独家准入垄断</div>
              <div className="mt-1">
                <span className="text-sm font-semibold" style={{ color: '#f97316' }}>极高专业性与内网军工保密门槛</span>
              </div>
              <div className="text-xs text-slate-500 mt-1.5">船厂内部巡检具备极高的专业性与保密涉密要求。<span style={{ color: '#f97316' }} className="font-semibold">"这单子我们能拿，竞品连门都进不去"</span>。依托独家军工背景与资质壁垒，对该类高净值 To B 业务实现<span className="text-tech-blue font-semibold">绝对排他</span>与高溢价。</div>
            </div>
          </div>

        </div>

        {/* Right: revenue highlight */}
        <div className="flex flex-col gap-4 lg:w-1/2">

          {/* Revenue scale highlight */}
          <div className="card-gradient-border rounded-lg p-5 flex-1 flex flex-col justify-center" style={{ borderColor: '#f97316' }}>
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">营收裂变路径</div>
            <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
              <span className="text-sm text-slate-300">外高桥单厂</span>
              <span className="text-xl font-bold" style={{ color: '#f97316' }}>1,200 万/年</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
              <span className="text-sm text-slate-300">远海风电巡检</span>
              <span className="text-xl font-bold text-tech-blue">3,000 万+/年</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-bold text-white">全场景合计</span>
              <span className="text-2xl font-bold" style={{ color: '#22c55e' }}>≥ 1 亿/年</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer count slider */}
      <div className="card-gradient-border rounded-xl p-5 mt-6">
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">To B 核心大客户营收增长推演</div>
        <div className="text-sm text-slate-300 mb-1">每签约 1 个核心大客户 = <span className="text-tech-blue font-bold">1,000 万元</span>年营收</div>
        <div className="text-xs text-slate-500 mb-4">基准参考：外高桥单厂巡检订单</div>
        <div className="mb-2">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            {sliderLabels.map((l) => (<span key={l.value}>{l.label} 个</span>))}
          </div>
          <input type="range" min={1} max={20} step={1} value={customerCount}
            onChange={(e) => setCustomerCount(Number(e.target.value))} aria-label="核心大客户签约数量" />
          <div className="text-center font-semibold text-sm mt-1">
            <span className="text-tech-blue">{customerCount}</span>
            <span className="text-slate-400"> 个核心大客户</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-slate-800/60 rounded-lg p-3 text-center card-glow">
              <div className="text-xs text-slate-400 mb-1">{m.label}</div>
              <div className="text-2xl font-bold text-tech-blue">{m.value}</div>
              <div className="text-xs text-slate-500">{m.unit}</div>
            </div>
          ))}
          <div className="bg-slate-800/60 rounded-lg p-3 text-center card-glow">
            <div className="text-xs text-slate-400 mb-1">盈利护城河评估</div>
            <div className="text-sm font-bold" style={{ color: customerCount >= 10 ? '#22c55e' : customerCount >= 5 ? '#0ea5e9' : '#f97316' }}>{moatLevel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
