# Implementation Plan: 低空+水域无人化智能体系商业大屏

## Overview

基于 Vite + React 18 + Tailwind CSS 的标准化前端工程实现。采用 npm 依赖管理，组件按文件拆分至 `src/components/`，业务常量统一抽离至 `src/constants/businessData.js`，自定义 Hook 位于 `src/hooks/`，测试使用 Vitest + React Testing Library + fast-check。

## Tasks

- [x] 1. 初始化 Vite 工程与全局样式
  - 使用 `npm create vite@latest` 创建 React 项目，安装依赖：`tailwindcss`、`echarts`、`fast-check`、`vitest`、`@testing-library/react`、`@testing-library/jest-dom`
  - 配置 `tailwind.config.js`，扩展色值：`tech-blue: #0ea5e9`、`data-cyan: #06b6d4`、`alert-orange: #f97316`
  - 在 `src/index.css` 中定义全局 CSS 变量、自定义滚动条、`card-glow` hover 动效、`card-gradient-border`、`.tab-content` 过渡类
  - 配置 `vite.config.js` 中 Vitest 的 `environment: 'jsdom'`
  - _Requirements: 1.1, 1.2_

- [x] 2. 抽离业务常量与创建根组件
  - 创建 `src/constants/businessData.js`，以具名 export 导出：`KPI_DATA`、`OPS_STATUS`、`COST_COMPARE`、`CAPITAL_STEPS`
  - 创建 `src/App.jsx`，持有全局状态：`activeTab`、`roiToggle`、`capitalSlider`
  - 创建 `src/main.jsx`，使用 `ReactDOM.createRoot` 挂载 `<App />`
  - _Requirements: 1.2_

- [x] 3. 实现顶部 Header 与运营现状看板
  - [x] 3.1 实现 `src/components/Header.jsx`
    - 显示项目标题"低空+水域无人化智能体系商业大屏"
    - 右上角显示实时时间（`useCurrentTime` 内部 hook，每秒更新）
    - _Requirements: 1.3_
  - [x] 3.2 实现运营现状 4 个小指标卡片
    - 数据从 `businessData.js` 的 `OPS_STATUS` import：已开通航线12条、机巢/起降点8个、单次运输能力300-500kg/次、日均总运力4.8吨/日
    - _Requirements: 11.1, 11.2, 11.3_

- [x] 4. 实现 KPI 核心财务指标卡片区
  - [x] 4.1 实现 `src/hooks/useCountUp.js`
    - 接收 `target: number` 和 `duration: number`（默认2000ms）
    - 使用 `requestAnimationFrame` + ease-out cubic 从0动画到目标值
    - _Requirements: 2.6_
  - [ ]* 4.2 为 CountUp Hook 编写属性测试（`src/__tests__/useCountUp.test.js`）
    - **Property 1: KPI CountUp 终值一致性**
    - **Validates: Requirements 2.6**
  - [x] 4.3 实现 `src/components/KPICard.jsx` 与 `src/components/KPISection.jsx`
    - `KPICard` 使用 `useCountUp` hook，数据从 `KPI_DATA` import
    - 第3张卡片（回报周期）内嵌 Toggle 按钮，切换 `roiToggle` 状态（3年/5年）
    - Hover 时触发 `card-glow` box-shadow 效果
    - `KPISection` 负责4卡片水平布局，透传 `roiToggle` / `onToggleRoi`
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.7_
  - [ ]* 4.4 为 ROI Toggle 编写单元测试（`src/__tests__/KPICard.test.jsx`）
    - 使用 React Testing Library 验证 Toggle 切换后显示值与状态一致
    - **Property 5: ROI Toggle 状态一致性**
    - **Validates: Requirements 2.4**

- [x] 5. 实现五大场景 Tab 导航框架
  - [x] 5.1 实现 `src/components/ScenarioTabs.jsx`
    - 5 个 Tab 按钮，激活态高亮（底部蓝色下划线 + 背景色）
    - Tab 内容区使用 CSS `opacity` + `transform: translateY` 实现淡入淡出（300ms）
    - 默认激活 Tab 0（渔业场景），各 Tab 内容为 `src/components/tabs/` 下的独立组件
    - _Requirements: 3.1, 3.2, 3.3, 3.4_
  - [ ]* 5.2 为 Tab 切换编写属性测试（`src/__tests__/ScenarioTabs.test.jsx`）
    - 使用 React Testing Library 验证激活 Tab 可见，其余 Tab opacity 为 0
    - **Property 2: Tab 内容互斥性**
    - **Validates: Requirements 3.2, 3.3**

- [x] 6. 实现通用 ECharts 封装组件
  - 实现 `src/components/EChart.jsx`，接收 `option` 和 `style` props
  - 使用 `import * as echarts from 'echarts'`，`useRef` + `useEffect` 管理实例生命周期
  - 使用 ECharts 内置 `dark` 主题，Tab 切换后调用 `chart.resize()`
  - _Requirements: 4.5, 5.3, 8.3_

- [x] 7. 实现 Tab 1 - 渔业场景（`src/components/tabs/FisheryTab.jsx`）
  - [x] 7.1 实现渔业场景 3 个指标卡片
    - 病害损失降低10%-15%（绿色下降箭头）、饲料浪费率3%-5%（对比传统8-12%）、投喂均匀度误差≤8%
    - _Requirements: 4.1, 4.2, 4.3, 4.4_
  - [x] 7.2 实现高复购率环形进度图
    - 使用 `<EChart />` 组件，饼图/环形图展示复购率驱动因素（节约成本60%、降低病害风险40%）
    - 图表中心显示"复购率 >85%"
    - _Requirements: 4.5_

- [x] 8. 实现 Tab 2 - 物流场景（`src/components/tabs/LogisticsTab.jsx`）
  - [x] 8.1 实现物流场景 3 个指标卡片
    - 无人机载重80kg、极限抗风6级/IP68、补能效率≤20分钟
    - _Requirements: 5.1, 5.2_
  - [x] 8.2 实现雷达对比图
    - 使用 `<EChart />` 组件，雷达图4个维度：时效性、受天气影响度、单次成本、周转率
    - 两条线：传统船舶 vs 无人机，无人机在时效性和周转率维度明显优于传统
    - _Requirements: 5.3, 5.4_

- [x] 9. 实现 Tab 3 - 巡检场景（`src/components/tabs/InspectionTab.jsx`）
  - [x] 9.1 实现巡检场景 3 个指标卡片
    - 数据传输延迟≤50ms、故障预警率≥98.5%、声呐探测深度120米
    - _Requirements: 6.1, 6.2_
  - [x] 9.2 实现态势感知极客风 UI
    - 使用同心圆/扫描动画 CSS 模拟雷达扫描效果，显示"无人船 + 无人机"协同标签
    - _Requirements: 6.3_
  - [x] 9.3 实现定价权文案高亮块
    - 醒目文字块："利用极高技术壁垒与环境适应性，掌握 To B 业务绝对定价权"
    - 使用渐变边框 + 科技蓝背景（`card-gradient-border` 类）
    - _Requirements: 6.4_

- [x] 10. 实现 Tab 4 - 应急救援（`src/components/tabs/EmergencyTab.jsx`）
  - 实现应急救援 3 个指标卡片：响应时间≤10分钟、状态识别准确率≥92%、年均增值收益6-8万元
  - 使用警示橙 `#f97316` 作为主色调
  - 添加社会价值说明文字块 + 商业补充收益说明
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 11. 实现 Tab 5 - 水质水文监测（`src/components/tabs/WaterQualityTab.jsx`）
  - [x] 11.1 实现水质监测 2 个指标卡片
    - 数据采集频率1次/10分钟、监测维度（水温/盐度/溶解氧/流速流向）
    - _Requirements: 8.1, 8.2_
  - [x] 11.2 实现动态折线图
    - 使用 `<EChart />` 组件，折线图模拟24小时水温（18-26°C）和盐度（28-35‰）数据
    - 使用 `setInterval` 每3秒追加新数据点，模拟实时更新
    - _Requirements: 8.3, 8.4_

- [x] 12. Checkpoint - 确保所有 Tab 内容正确渲染
  - 运行 `npx vitest run`，确保所有测试通过，向用户确认是否有问题。

- [x] 13. 实现底部 B2C 成本对比图表（`src/components/BottomSection.jsx`）
  - [x] 13.1 实现对比柱状图
    - 使用 `<EChart />` 组件，分组柱状图3个类别：人工成本、饲料浪费、燃油损耗
    - 传统模式（灰色）vs 智能化模式（科技蓝），数据从 `COST_COMPARE` import
    - _Requirements: 9.1, 9.2, 9.5_
  - [ ]* 13.2 为对比图数据编写属性测试（`src/__tests__/capitalModel.test.js`）
    - 使用 fast-check 验证任意类别索引下传统模式值 > 智能化模式值
    - **Property 4: 对比图数据正确性**
    - **Validates: Requirements 9.2**
  - [x] 13.3 实现绿色高亮节约金额块
    - 大字显示"客户年度净节约：28.8万元/年"（绿色 `#22c55e`）
    - 小字注明"扣除我们收取的33.6万服务费后，客户仍有巨额节余"
    - _Requirements: 9.3, 9.4_

- [x] 14. 实现资本金规模化推演模块
  - [x] 14.1 实现推演计算逻辑（`src/utils/capitalModel.js`）
    - 从 `CAPITAL_STEPS` import，根据滑块值在相邻档位间线性插值，计算机巢数、网箱数、年营收
    - 导出纯函数 `calcCapital(sliderValue): { nests, cages, revenue }`
    - _Requirements: 12.1, 12.2, 12.3_
  - [ ]* 14.2 为推演模型编写属性测试（`src/__tests__/capitalModel.test.js`）
    - 使用 fast-check 验证：对任意 v1 < v2，`calcCapital(v2)` 各字段 ≥ `calcCapital(v1)`
    - **Property 3: 资本推演单调性**
    - **Validates: Requirements 12.3**
  - [x] 14.3 实现滑块 UI 与动态展示
    - HTML range input 样式定制（科技蓝轨道，已在 `index.css` 定义）
    - 3个动态数值卡片（机巢数、网箱数、年营收）调用 `calcCapital` 随滑块变化更新
    - 使用 `card-gradient-border` 样式突出显示
    - _Requirements: 12.4, 12.5_

- [x] 15. 最终 Checkpoint - 完整页面联调
  - 运行 `npx vitest run`，确保所有测试通过
  - 运行 `npm run build && npm run preview`，在浏览器验证 CountUp 动画、ECharts 图表 Tab 切换重绘、资本推演滑块交互
  - 向用户确认是否有问题。

## Notes

- 标有 `*` 的任务为可选测试任务，可跳过以加快 MVP 交付
- 所有业务数据统一在 `src/constants/businessData.js` 中维护，组件通过 import 引用
- 推演计算逻辑抽离为纯函数 `src/utils/capitalModel.js`，便于独立测试
- ECharts 使用 `dark` 主题与整体深色风格保持一致
- 测试运行命令：`npx vitest run`（单次执行，非 watch 模式）
