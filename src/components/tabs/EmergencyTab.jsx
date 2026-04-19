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
    desc: 'AI 视觉识别落水人员状态，精准定位',
    icon: '🎯',
    color: '#fb923c',
    borderColor: '#fb923c',
  },
  {
    label: '年均增值收益',
    value: '6-8',
    unit: '万元',
    desc: '政府/保险机构合作补充收益',
    icon: '💰',
    color: '#fdba74',
    borderColor: '#fdba74',
  },
];

export default function EmergencyTab() {
  return (
    <div className="p-4 text-slate-300">
      <h3 className="text-lg font-semibold mb-1" style={{ color: '#f97316' }}>应急救援</h3>
      <p className="text-sm text-slate-400 mb-4">海空应急救援响应网络</p>

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
                  <span className="text-2xl font-bold" style={{ color: m.color }}>{m.value}</span>
                  <span className="text-sm text-slate-300">{m.unit}</span>
                </div>
                <div className="text-xs text-slate-400 mb-0.5">{m.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: social value + commercial revenue blocks */}
        <div className="flex flex-col gap-4 lg:w-3/5">
          {/* Social value block */}
          <div
            className="card-gradient-border rounded-lg p-5 flex items-start gap-3"
            style={{ borderColor: '#f97316' }}
          >
            <span className="text-2xl mt-0.5">🌊</span>
            <div>
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: '#f97316' }}>
                社会价值
              </div>
              <p className="text-base font-bold text-white leading-snug">
                填补近海应急救援空白，守护渔民与海上作业人员生命安全
              </p>
              <p className="text-xs text-slate-400 mt-2">
                全天候值守 · 夜视红外识别 · 抛投救生设备 · 与海事局协同联动
              </p>
            </div>
          </div>

          {/* Commercial supplementary revenue block */}
          <div className="bg-slate-800/40 rounded-lg p-5">
            <div className="text-xs uppercase tracking-widest mb-3 text-slate-400">商业补充收益模型</div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#f97316' }}
                  />
                  <span className="text-sm text-slate-300">政府应急服务采购</span>
                </div>
                <span className="text-sm font-semibold" style={{ color: '#f97316' }}>3-4 万元/年</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#fb923c' }}
                  />
                  <span className="text-sm text-slate-300">保险机构数据合作</span>
                </div>
                <span className="text-sm font-semibold" style={{ color: '#fb923c' }}>2-3 万元/年</span>
              </div>
              <div
                className="mt-1 pt-3 border-t flex items-center justify-between"
                style={{ borderColor: 'rgba(249,115,22,0.3)' }}
              >
                <span className="text-sm font-bold text-white">年均增值收益合计</span>
                <span className="text-lg font-bold" style={{ color: '#f97316' }}>6-8 万元</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              * 应急救援为主营业务的增量收益，不影响核心渔业/物流/巡检营收
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
