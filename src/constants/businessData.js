// Business constants for 低空+水域无人化智能体系商业大屏

export const KPI_DATA = [
  {
    label: '初期总投入',
    value: 152,
    unit: '万元',
    subtitle: '轻资产高杠杆，不含软硬件研发费',
    color: '#0ea5e9',
    isToggle: false,
  },
  {
    label: '年均运维成本',
    value: 20.6,
    unit: '万元',
    subtitle: '极致成本管控',
    color: '#06b6d4',
    isToggle: false,
  },
  {
    label: '目标回报周期',
    value: null,
    unit: '',
    subtitle: '可切换3年/5年视图',
    color: '#8b5cf6',
    isToggle: true,
    roiValues: {
      '3年': { value: 3.7, unit: '年', note: '激进增长假设下' },
      '5年': { value: 4.8, unit: '年', note: '稳健经营假设下' },
    },
  },
  {
    label: '单点位年盈利预期',
    value: 41.6,
    unit: '万元',
    subtitle: '服务费33.6万 + 附加收益8万',
    color: '#f97316',
    isToggle: false,
  },
];

export const OPS_STATUS = [
  { label: '已开通航线', value: 12, unit: '条' },
  { label: '机巢/起降点', value: 8, unit: '个' },
  { label: '单次运输能力', value: '300-500', unit: 'kg/次' },
  { label: '日均总运力', value: '4.8', unit: '吨/日' },
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
