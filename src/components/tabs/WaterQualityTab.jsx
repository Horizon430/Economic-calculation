import { useState } from 'react';

export default function WaterQualityTab() {
  const [sortieCount, setSortieCount] = useState(540);
  // 每架次载客5人(3-6人取中), 票价500元/人 → 每架次营收2500元 = 0.25万
  const passengers = sortieCount * 10;
  const revenueWan = +(sortieCount * 10 * 500 / 10000).toFixed(1); // 万元
  const sliderLabels = [
    { value: 540, label: '540' },
    { value: 2000, label: '2,000' },
    { value: 4000, label: '4,000' },
    { value: 6000, label: '6,000' },
    { value: 8000, label: '8,000' },
  ];

  return (
    <div className="p-4 text-slate-300">
      <h3 className="text-lg font-semibold text-tech-blue mb-1">旅游观光</h3>
      <p className="text-sm text-slate-400 mb-2">稀缺空域资产的规模化载人变现</p>

      {/* Core quote */}
      <div className="rounded-lg p-3 mb-4 border border-[rgba(14,165,233,0.3)] bg-[rgba(14,165,233,0.05)]">
        <p className="text-center text-base font-bold text-white">
          "立足 <span style={{ color: '#f97316' }}>11 年独家空域管辖权</span>，解决海岛低空载人交通<span className="text-tech-blue">'供不应求'</span>的资源死结。"
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-4">
        {/* Left: 3 cards */}
        <div className="flex flex-col gap-4 lg:w-1/2">

          {/* Card 1 */}
          <div className="card-gradient-border rounded-lg p-4 flex items-start gap-4 transition-transform hover:-translate-y-0.5" style={{ borderColor: '#f97316' }}>
            <span className="text-2xl mt-0.5">🛩</span>
            <div className="flex-1">
              <div className="text-lg font-bold text-white">年服务上限仅 ~<span style={{ color: '#f97316' }}>5,400</span> 人</div>
              <div className="mt-1">
                <span className="text-sm font-semibold" style={{ color: '#f97316' }}>单机载客 10 人</span>
              </div>
              <div className="text-xs text-slate-500 mt-1.5">受限于飞行员小时数（180h/年/机），当前运力远无法覆盖舟山海岛旅游的爆发式需求，处于<span style={{ color: '#f97316' }} className="font-semibold">严重供不应求</span>状态。</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-gradient-border rounded-lg p-4 flex items-start gap-4 transition-transform hover:-translate-y-0.5" style={{ borderColor: '#8b5cf6' }}>
            <span className="text-2xl mt-0.5">📜</span>
            <div className="flex-1">
              <div className="text-lg font-bold text-white">11 年空域管辖管制权</div>
              <div className="mt-1">
                <span className="text-sm font-semibold" style={{ color: '#8b5cf6' }}>独家特许经营</span>
              </div>
              <div className="text-xs text-slate-500 mt-1.5">掌握核心空域定价与分配主导权。在资源极度紧缺的市场中，拥有长效期的行政准入意味着<span style={{ color: '#8b5cf6' }} className="font-semibold">绝对的竞争壁垒</span>。</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-gradient-border rounded-lg p-4 flex items-start gap-4 transition-transform hover:-translate-y-0.5" style={{ borderColor: '#22c55e' }}>
            <span className="text-2xl mt-0.5">🚁</span>
            <div className="flex-1">
              <div className="text-lg font-bold text-white">票务年营收 <span style={{ color: '#22c55e' }}>270 万元</span>起</div>
              <div className="mt-1">
                <span className="text-sm font-semibold" style={{ color: '#22c55e' }}>单价 500 元/人</span>
              </div>
              <div className="text-xs text-slate-500 mt-1.5">基于当前极低周转率实现的保底营收。未来通过补充智能化载人载具（eVTOL）解决飞行员小时数限制，营收规模将呈现<span style={{ color: '#22c55e' }} className="font-semibold">指数级增长</span>。</div>
            </div>
          </div>
        </div>

        {/* Right: market data */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="card-gradient-border rounded-lg p-5" style={{ borderColor: '#f97316' }}>
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">运力现状与市场机会</div>
            <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
              <span className="text-sm text-slate-300">现有机队</span>
              <span className="text-xl font-bold text-slate-400">3 架</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
              <span className="text-sm text-slate-300">年总飞时上限</span>
              <span className="text-xl font-bold" style={{ color: '#f97316' }}>540 小时</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
              <span className="text-sm text-slate-300">单机年飞时</span>
              <span className="text-xl font-bold text-slate-400">180 小时</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-bold text-white">独家特许经营期</span>
              <span className="text-2xl font-bold" style={{ color: '#8b5cf6' }}>11 年</span>
            </div>
          </div>

          <div className="bg-slate-800/40 rounded-lg p-5 flex-1 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">核心竞争壁垒</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#8b5cf6' }} />
                <span className="text-sm text-slate-300">空域管辖权 — <span style={{ color: '#8b5cf6' }} className="font-semibold">行政垄断</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#f97316' }} />
                <span className="text-sm text-slate-300">运力稀缺 — <span style={{ color: '#f97316' }} className="font-semibold">供不应求</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#22c55e' }} />
                <span className="text-sm text-slate-300">载具升级 — <span style={{ color: '#22c55e' }} className="font-semibold">eVTOL 指数增长</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sortie-based revenue slider */}
      <div className="card-gradient-border rounded-xl p-5 mt-6">
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">载人航线规模化变现推演</div>
        <div className="text-sm text-slate-300 mb-4">每架次载客 10 人 × 票价 500 元/人 = <span className="text-tech-blue font-semibold">5,000 元/架次</span></div>
        <div className="mb-2">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            {sliderLabels.map((l) => (<span key={l.value}>{l.label} 架次</span>))}
          </div>
          <input type="range" min={540} max={8000} step={10} value={sortieCount}
            onChange={(e) => setSortieCount(Number(e.target.value))} aria-label="年度总架次数" />
          <div className="text-center font-semibold text-sm mt-1">
            <span className="text-tech-blue">{sortieCount.toLocaleString()}</span>
            <span className="text-slate-400"> 架次/年</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-slate-800/60 rounded-lg p-3 text-center card-glow">
            <div className="text-xs text-slate-400 mb-1">年输送旅客</div>
            <div className="text-2xl font-bold text-tech-blue">{passengers.toLocaleString()}</div>
            <div className="text-xs text-slate-500">人次</div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-3 text-center card-glow">
            <div className="text-xs text-slate-400 mb-1">预计年总营收</div>
            <div className="text-2xl font-bold text-tech-blue">{revenueWan.toLocaleString()}</div>
            <div className="text-xs text-slate-500">万元</div>
          </div>
        </div>
      </div>
    </div>
  );
}
