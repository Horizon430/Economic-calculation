# Design Document: 低空+水域无人化智能体系商业大屏

## Overview

本大屏是一个单页面 React 应用，面向投资人展示"低空+水域"无人化智能化体系的商业价值。页面采用深色科技风格，通过数据可视化证明盈利能力，重点突出 B 端议价权和 C 端复购率。

技术栈：
- **框架**: React 18（标准组件化工程，基于 Vite 构建）
- **构建工具**: Vite（ES Modules、HMR、生产打包）
- **依赖管理**: npm / yarn（package.json 管理所有依赖）
- **样式**: Tailwind CSS（PostCSS 插件集成）
- **图表**: ECharts 5（npm 安装，按需引入）
- **动画**: CSS transitions + 自定义 `useCountUp` hook
- **测试**: Vitest + React Testing Library + fast-check（PBT）

## Architecture

```
lowsky-water-dashboard/
├── index.html                  # Vite 入口 HTML（仅挂载 #root）
├── vite.config.js              # Vite 配置
├── tailwind.config.js          # Tailwind 主题扩展（tech-blue 等色值）
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                # ReactDOM.createRoot 挂载入口
    ├── App.jsx                 # 根组件，持有全局状态
    ├── index.css               # 全局样式（glow、scrollbar、tab-content 等）
    ├── constants/
    │   └── businessData.js     # 所有业务常量（KPI_DATA、OPS_STATUS 等）
    ├── hooks/
    │   └── useCountUp.js       # CountUp 动画 hook
    ├── components/
    │   ├── Header.jsx          # 顶部标题 + 实时时间 + 运营现状
    │   ├── KPISection.jsx      # 4 个核心财务指标卡片区
    │   ├── KPICard.jsx         # 单个 KPI 卡片（含 Toggle）
    │   ├── ScenarioTabs.jsx    # 五大场景 Tab 导航框架
    │   ├── EChart.jsx          # ECharts 通用封装组件
    │   ├── BottomSection.jsx   # B2C 对比图 + 资本推演模块
    │   └── tabs/
    │       ├── FisheryTab.jsx      # Tab 1 渔业场景
    │       ├── LogisticsTab.jsx    # Tab 2 物流场景
    │       ├── InspectionTab.jsx   # Tab 3 巡检场景
    │       ├── EmergencyTab.jsx    # Tab 4 应急救援
    │       └── WaterQualityTab.jsx # Tab 5 水质水文监测
    └── __tests__/
        ├── useCountUp.test.js
        ├── KPICard.test.jsx
        ├── ScenarioTabs.test.jsx
        └── capitalModel.test.js
```

## Components and Interfaces

所有组件通过标准 ES Module `import/export` 机制相互引用，不再依赖全局作用域。

### App (`src/App.jsx`)
根组件，持有全局状态：
- `activeTab`: number (0-4)，当前激活的场景 Tab
- `roiToggle`: '3年' | '5年'，回报周期切换
- `capitalSlider`: number (5000-50000，单位万元)，资本推演滑块值

```jsx
import Header from './components/Header';
import KPISection from './components/KPISection';
import ScenarioTabs from './components/ScenarioTabs';
import BottomSection from './components/BottomSection';
```

### Header (`src/components/Header.jsx`)
- 显示项目名称："低空+水域无人化智能体系商业大屏"
- 显示实时时间（`useCurrentTime` 内部 hook）
- 显示运营现状 4 个小指标（数据来自 `businessData.js`）

### KPISection / KPICard (`src/components/KPISection.jsx`, `KPICard.jsx`)
- `KPISection` 负责布局，从 `businessData.js` 读取 `KPI_DATA`，将 `roiToggle` / `onToggleRoi` 透传给子卡片
- `KPICard` 使用 `useCountUp` hook 驱动数字动画；ROI 卡片内嵌 Toggle 按钮

```jsx
// KPICard.jsx
import useCountUp from '../hooks/useCountUp';
import { KPI_DATA } from '../constants/businessData';
```

### ScenarioTabs (`src/components/ScenarioTabs.jsx`)
- Tab 切换使用 CSS `opacity` + `transform: translateY` 实现淡入淡出（300ms）
- 每个 Tab 内容为 `src/components/tabs/` 下的独立子组件，按需 import

### EChart (`src/components/EChart.jsx`)
独立公用组件，封装 ECharts 实例的生命周期管理：

```jsx
import * as echarts from 'echarts';
import { useRef, useEffect } from 'react';

export default function EChart({ option, style }) {
  const ref = useRef();
  useEffect(() => {
    const chart = echarts.init(ref.current, 'dark');
    chart.setOption(option);
    return () => chart.dispose();
  }, [option]);
  return <div ref={ref} style={style} />;
}
```

Tab 切换后调用 `chart.resize()` 确保图表正确渲染。

### BottomSection (`src/components/BottomSection.jsx`)
- 左侧：B2C 对比柱状图（`EChart` 组件，grouped bar）
- 右侧：绿色高亮节约金额块 + 资本推演滑块模块
- 推演计算逻辑从 `businessData.js` 的 `CAPITAL_STEPS` 插值计算

## Data Models

所有业务常量统一抽离至 `src/constants/businessData.js`，实现数据与视图逻辑的分离。各组件通过具名 import 按需引用，不再硬编码在组件文件内。

```javascript
// src/constants/businessData.js

export const KPI_DATA = [
  { label: '初期总投入', value: 152, unit: '万元', subtitle: '轻资产高杠杆，不含软硬件研发费', color: '#0ea5e9' },
  { label: '年均运维成本', value: 20.6, unit: '万元', subtitle: '极致成本管控', color: '#06b6d4' },
  { label: '目标回报周期', value: null, unit: '', subtitle: '可切换3年/5年视图', color: '#8b5cf6', isToggle: true },
  { label: '单点位年盈利预期', value: 41.6, unit: '万元', subtitle: '服务费33.6万 + 附加收益8万', color: '#f97316' },
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
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Property 1: KPI CountUp 终值一致性
*For any* KPI card with a numeric target value, after the CountUp animation completes, the displayed number SHALL equal the hardcoded target value.
**Validates: Requirements 2.6**

Property 2: Tab 内容互斥性
*For any* tab index i, when tab i is active, all other tab content panels SHALL have opacity 0 or be unmounted, and only tab i content SHALL be visible.
**Validates: Requirements 3.2, 3.3**

Property 3: 资本推演单调性
*For any* two slider values v1 < v2, the computed values for 机巢数、网箱数、年营收 at v2 SHALL all be greater than or equal to those at v1.
**Validates: Requirements 12.3**

Property 4: 对比图数据正确性
*For any* cost category, the traditional mode bar value SHALL be greater than the smart mode bar value in the comparison chart.
**Validates: Requirements 9.2**

Property 5: ROI Toggle 状态一致性
*For any* toggle state ('3年' or '5年'), the KPI card SHALL display exactly that value and no other.
**Validates: Requirements 2.4**

## Error Handling

- ECharts 初始化失败时，容器显示 "图表加载中..." 占位文字
- 滑块值超出范围时，clamp 到 [5000, 50000] 区间
- 所有数据为静态常量，无网络请求，无异步错误场景

## Testing Strategy

### 工具链

| 工具 | 用途 |
|------|------|
| **Vitest** | 单元测试 & 属性测试运行器（替代 Jest，与 Vite 原生集成，零配置） |
| **React Testing Library** | 组件级渲染测试，模拟用户交互（点击 Toggle、切换 Tab 等） |
| **fast-check** | JavaScript 属性测试（PBT）库，生成随机输入验证普适性质 |
| **jsdom** | Vitest 的 DOM 环境（`environment: 'jsdom'`） |

### Unit Tests

使用 Vitest + React Testing Library 验证：
- `useCountUp` hook：动画结束后数值等于目标值（`src/__tests__/useCountUp.test.js`）
- `KPICard` 组件：Toggle 切换后显示值与 `roiToggle` 状态一致（`src/__tests__/KPICard.test.jsx`）
- `ScenarioTabs` 组件：激活 Tab 高亮，其余 Tab 内容不可见（`src/__tests__/ScenarioTabs.test.jsx`）
- 资本推演计算函数：边界值与单调性（`src/__tests__/capitalModel.test.js`）

### Property-Based Tests

使用 fast-check 验证（每个属性测试运行最少 100 次迭代）：

- **Property 3**：对任意 v1 < v2 的滑块值，推演结果单调递增
- **Property 4**：对任意成本类别索引，`COST_COMPARE.traditional[i] > COST_COMPARE.smart[i]`

Tag 格式（每个属性测试文件顶部注释）：
```
// Feature: lowsky-water-dashboard, Property N: <property_text>
```

### Visual / Integration

- 运行 `vite preview` 在主流浏览器（Chrome/Edge）验证渲染
- 验证 ECharts 图表在 Tab 切换后正确重绘（`chart.resize()` 触发）
- 验证 CountUp 动画在页面加载时正确触发
