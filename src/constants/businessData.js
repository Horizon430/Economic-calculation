// Business constants for 低空+水域无人化智能体系商业大屏

export const KPI_DATA = [
  {
    title: '空域',
    subtitle: '载人载物高效协同，构建低空路网资产',
    color: '#0ea5e9',
    icon: '🛩',
    metrics: [
      { label: '有人机规划航线', value: 12, unit: '条' },
      { label: '无人机常态航线', value: 35, unit: '条' },
    ],
  },
  {
    title: '水空',
    subtitle: '高载荷无缝接驳，击穿传统物流成本底线',
    color: '#06b6d4',
    icon: '🚢',
    metrics: [
      { label: '水面协同航路', value: 18, unit: '条' },
      { label: '吨公里综合成本', value: null, unit: '', tag: '大幅下降 ▼', tagColor: '#22c55e' },
    ],
  },
  {
    title: '低空智能立体管控',
    subtitle: '以算力驱动运力，全域空地海一体化协作',
    color: '#8b5cf6',
    icon: '🧠',
    metrics: [
      { label: '核心能力', value: null, unit: '', tag: '先规划·后运营' },
      { label: '航线冲突率', value: 0, unit: '%' },
    ],
  },
  {
    title: '智能管控空域',
    subtitle: '软硬一体闭环，降本增效，实现商业价值',
    color: '#f97316',
    icon: '📡',
    metrics: [
      { label: '商业转化', value: null, unit: '', tag: '赋能高频复购' },
      { label: '综合降本率', value: 45, unit: '%' },
    ],
  },
];

export const OPS_STATUS = [
  { label: '已开通航线', value: 12, unit: '条' },
  { label: '已开通航路', value: 12, unit: '条' },
  { label: '空域管控面积', value: '22,200', unit: '平方公里' },
  { label: '智能终端数量', value: '30', unit: '个' },
];

export const COST_COMPARE = {
  categories: ['人工成本', '饲料浪费', '燃油损耗'],
  traditional: [38, 9.6, 40],
  smart: [7.8, 4.5, 9.23],
};

// 资本推演：每5000万建设约3个机巢，每机巢覆盖200个网箱，每机巢年营收约120万
export const CAPITAL_STEPS = [
  { capital: 5000,  nests: 3,  cages: 600,  revenue: 360  },
  { capital: 10000, nests: 6,  cages: 1200, revenue: 720  },
  { capital: 20000, nests: 13, cages: 2600, revenue: 1560 },
  { capital: 30000, nests: 20, cages: 4000, revenue: 2400 },
  { capital: 50000, nests: 33, cages: 6600, revenue: 3960 },
];
