import { useState } from 'react';

const METRICS = [
  {
    label: '响应时间',
    value: '≤10',
    unit: '分钟',
    desc: '接警后快速出动，覆盖近海救援区域',
    icon: '🚨',
    color: '#f97316',
    borderColor: '#f97316',
  },
  {
    label: '状态识别准确率',
    value: '≥92',
    unit: '%',
    desc: '支撑千万级政府级应用，AI 视觉精准定位落水人员',
    icon: '🎯',
    color: '#fb923c',
    borderColor: '#fb923c',
  },
  {
    label: '城市级海空应急网年营收',
    value: '2000-3000',
    unit: '万元',
    desc: '从单一救援升级为"常态化值守+灾后定损"的 To G/To B 刚需基建采购',
    icon: '🏛',
    color: '#f97316',
    borderColor: '#f97316',
  },
];

const REVENUE_ITEMS = [
  {
    icon: '🏛',
    label: '政府应急体系常态化保障采购',
    tag: 'To G',
    amount: '1,200 - 1,500',
    unit: '万元/年',
    desc: '海事局、应急管理局的"低空+水面"立体巡护与常态化救援值守（按年支付基建与服务采购费）。',
  },
  {
    icon: '⚙',
    label: '能源企业高危值守',
    tag: 'To B',
    amount: '500 - 1,000',
    unit: '万元/年',
    desc: '为海上钻井平台、远海风电场提供专属应急响应与物资空投保障（按高风险特种作业签署年度框架）。',
  },
  {
    icon: '🛡',
    label: '保险机构灾后定损与防灾数据直连',
    tag: 'To B',
    amount: '300 - 500',
    unit: '万元/年',
    desc: '台风等极端天气后的快速海区定损、网箱受损评估，极大降低险企理赔勘察成本与欺诈风险。',
  },
];

export default function EmergencyTab() {
  const [sortieCount, setSortieCount] = useState(100);
  const revenueWan = +(sortieCount * 0.5).toFixed(1); // 5000元/次 = 0.5万/次
  const sliderLabels = [
    { value: 100, label: '100' },
    { value: 1500, label: '1,500' },
    { value: 3000, label: '3,000' },
    { value: 4500, label: '4,500' },
    { value: 6000, label: '6,000' },
  ];

  return (
    <div className="p-4 text-slate-300">
      <h3 className="text-lg font-semibold mb-1" style={{ color: '#f97316' }}>应急救援</h3>
      <p className="text-sm text-slate-400 mb-4">城市级海空应急基础设施网络</p>

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-4">
        {/* Left: metric cards */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          {METRICS.map((m) => (
            <div key={m.label} className="card-gradient-border rounded-lg p-4 flex items-start gap-4 transition-transform hover:-translate-y-0.5" style={{ borderColor: m.borderColor }}>
              <span className="text-2xl mt-0.5">{m.icon}</span>
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

        {/* Right: revenue model */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="bg-slate-800/40 rounded-lg p-5 flex-1">
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#f97316' }}>全域海空应急网络营收模型</div>
            <div className="flex flex-col gap-4">
              {REVENUE_ITEMS.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-slate-300 font-semibold">{item.label}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'rgba(249,115,22,0.15)', color: '#f97316' }}>{item.tag}</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold" style={{ color: '#f97316' }}>{item.amount}</span>
                      <span className="text-xs text-slate-400">{item.unit}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor: 'rgba(249,115,22,0.3)' }}>
              <span className="text-sm font-bold text-white">年均核心收益合计</span>
              <span className="text-2xl font-bold" style={{ color: '#f97316' }}>2,000 - 3,000 万</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">* 依托现有基建实现能力复用，极低边际成本撬动千万级高毛利 To G/To B 市场。</p>
          </div>
        </div>
      </div>

      {/* Sortie-based revenue slider */}
      <div className="card-gradient-border rounded-xl p-5 mt-6">
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">海空应急响应按需计费推演</div>
        <div className="text-sm text-slate-300 mb-4">年度预计救援与巡护架次</div>
        <div className="mb-2">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            {sliderLabels.map((l) => (<span key={l.value}>{l.label} 次</span>))}
          </div>
          <input type="range" min={100} max={6000} step={100} value={sortieCount}
            onChange={(e) => setSortieCount(Number(e.target.value))} aria-label="年度出警架次" />
          <div className="text-center font-semibold text-sm mt-1">
            <span className="text-tech-blue">{sortieCount.toLocaleString()}</span>
            <span className="text-slate-400"> 架次/年</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-slate-800/60 rounded-lg p-3 text-center card-glow">
            <div className="text-xs text-slate-400 mb-1">单次服务标价</div>
            <div className="text-2xl font-bold text-tech-blue">5,000</div>
            <div className="text-xs text-slate-500">元/次</div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-3 text-center card-glow">
            <div className="text-xs text-slate-400 mb-1">直接业务营收</div>
            <div className="text-2xl font-bold text-tech-blue">{revenueWan.toLocaleString()}</div>
            <div className="text-xs text-slate-500">万元</div>
          </div>
        </div>
      </div>
    </div>
  );
}
