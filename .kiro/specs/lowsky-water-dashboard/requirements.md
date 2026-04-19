# Requirements Document

## Introduction

本项目是一个面向投资人（国资委等）展示"低空+水域"无人化智能化体系的商业数据大屏（Dashboard）Web 页面。核心目标是通过数据可视化证明项目的盈利能力，重点突出 B 端场景的"议价权（定价权）"和 C 端场景的"复购率"，以科技感深色风格呈现高端商业价值。

## Glossary

- **Dashboard**: 数据大屏，用于展示关键业务指标的可视化页面
- **KPI_Card**: 关键绩效指标卡片，顶部核心财务数值展示组件
- **Tab_Panel**: 选项卡面板，用于切换五大核心场景
- **CountUp**: 数字滚动增长动画效果
- **B端**: 企业客户（Business-to-Business）
- **C端**: 个人/养殖户客户（Business-to-Consumer）
- **议价权**: 供应商对客户的定价主导权，源于技术壁垒
- **复购率**: 客户重复购买/续约的比率
- **ROI**: 投资回报率
- **ECharts**: 百度开源的 JavaScript 图表库
- **Recharts**: 基于 React 的图表库

---

## Requirements

### Requirement 1: 页面整体布局与视觉风格

**User Story:** As an investor, I want to see a professional dark-mode tech dashboard, so that I can quickly grasp the business value of the "low-altitude + water" unmanned system.

#### Acceptance Criteria

1. THE Dashboard SHALL use a dark mode color scheme with primary colors of tech blue (#0ea5e9), data cyan (#06b6d4), and alert orange (#f97316).
2. THE Dashboard SHALL implement a top-main-bottom layout (1-3-1 structure) with responsive design.
3. THE Dashboard SHALL display a header with project title and core KPI cards.
4. THE Dashboard SHALL display a main content area with five-scene tab navigation.
5. THE Dashboard SHALL display a bottom section with B2C value comparison charts.
6. WHEN the page loads, THE Dashboard SHALL render all sections without horizontal scrolling on screens ≥1280px wide.

---

### Requirement 2: 顶部核心财务指标 (KPI Cards)

**User Story:** As an investor, I want to see the top-level financial metrics at a glance, so that I can immediately understand the project's capital efficiency.

#### Acceptance Criteria

1. THE KPI_Card section SHALL display exactly 4 metric cards in a horizontal row.
2. THE KPI_Card for "初期总投入" SHALL display the value "152万元" with subtitle "轻资产高杠杆，不含软硬件研发费".
3. THE KPI_Card for "年均运维成本" SHALL display the value "20.6万元" with subtitle "极致成本管控".
4. THE KPI_Card for "目标回报周期" SHALL display a toggle switch allowing users to switch between "3年" and "5年" views.
5. THE KPI_Card for "单点位年盈利预期" SHALL display "41.6万元" with breakdown "(服务费33.6万 + 附加收益8万)".
6. WHEN the page loads, THE KPI_Card numbers SHALL animate from 0 to their target values using a CountUp animation over 2 seconds.
7. WHEN a user hovers over a KPI_Card, THE KPI_Card SHALL display a glowing border effect.

---

### Requirement 3: 五大核心场景 Tab 面板

**User Story:** As an investor, I want to explore each business scenario in detail through tabs, so that I can understand the commercial moat and revenue model of each use case.

#### Acceptance Criteria

1. THE Tab_Panel SHALL display exactly 5 tabs: 渔业场景、物流场景、巡检场景、应急救援、水质水文监测.
2. WHEN a user clicks a tab, THE Tab_Panel SHALL switch content with a smooth fade-in/fade-out animation.
3. THE Tab_Panel SHALL default to displaying the first tab (渔业场景) on load.
4. WHILE a tab is active, THE Tab_Panel SHALL highlight the active tab with a distinct visual indicator (e.g., underline or background color).

---

### Requirement 4: Tab 1 - 渔业场景

**User Story:** As an investor, I want to see the fishery scenario's high repurchase rate model, so that I can understand the C-end customer stickiness.

#### Acceptance Criteria

1. THE 渔业场景 tab SHALL display the title "短途运输强需求与高复购率驱动模型".
2. THE 渔业场景 tab SHALL display a metric card showing "病害损失降低：10%-15%" with a green downward arrow.
3. THE 渔业场景 tab SHALL display a metric card showing "饲料浪费率：降至3%-5%（对比传统8-12%）".
4. THE 渔业场景 tab SHALL display a metric card showing "投喂均匀度误差：≤8%".
5. THE 渔业场景 tab SHALL display a funnel chart or ring progress chart illustrating the high repurchase rate logic (cost savings + disease risk reduction = high customer stickiness).

---

### Requirement 5: Tab 2 - 物流场景

**User Story:** As an investor, I want to see the cross-island logistics scenario data, so that I can understand the pain points solved and competitive advantages.

#### Acceptance Criteria

1. THE 物流场景 tab SHALL display the title "跨海岛高频短途物流网络".
2. THE 物流场景 tab SHALL display metric cards for: 无人机载重(80kg)、极限抗风(6级大风/IP68防护)、补能效率(单次充电≤20分钟).
3. THE 物流场景 tab SHALL display a radar chart comparing traditional ship logistics vs. drone logistics across 4 dimensions: 时效性、受天气影响度、单次成本、周转率.
4. THE radar chart SHALL visually show drone logistics as superior in time efficiency and turnover rate dimensions.

---

### Requirement 6: Tab 3 - 巡检场景

**User Story:** As an investor, I want to see the inspection scenario's technical barriers, so that I can understand the absolute pricing power in B-end business.

#### Acceptance Criteria

1. THE 巡检场景 tab SHALL display the title "海空立体协同与高技术壁垒溢价".
2. THE 巡检场景 tab SHALL display metric cards for: 数据传输延迟(≤50ms)、故障预警率(≥98.5%)、声呐探测深度(120米).
3. THE 巡检场景 tab SHALL display a geek-style situational awareness UI emphasizing the "无人船+无人机" exclusive collaboration mode.
4. THE 巡检场景 tab SHALL display a prominent text block stating: "利用极高技术壁垒与环境适应性，掌握 To B 业务绝对定价权".

---

### Requirement 7: Tab 4 - 应急救援

**User Story:** As an investor, I want to see the emergency rescue scenario's supplementary revenue model, so that I can understand its social value and incremental income contribution.

#### Acceptance Criteria

1. THE 应急救援 tab SHALL display the title "海空应急救援响应网络".
2. THE 应急救援 tab SHALL display metric cards for: 响应时间(≤10分钟)、状态识别准确率(≥92%)、年均增值收益(6-8万元).
3. THE 应急救援 tab SHALL use alert orange (#f97316) as the primary accent color to convey urgency.
4. THE 应急救援 tab SHALL visually highlight both the social value and the supplementary commercial revenue model.

---

### Requirement 8: Tab 5 - 水质水文监测

**User Story:** As an investor, I want to see the water quality monitoring scenario's data asset model, so that I can understand the full-time data-driven capability.

#### Acceptance Criteria

1. THE 水质水文监测 tab SHALL display the title "全时域水环境数据资产化".
2. THE 水质水文监测 tab SHALL display metric cards for: 数据采集频率(1次/10分钟)、监测维度(水温、盐度、溶解氧、流速流向).
3. THE 水质水文监测 tab SHALL display a dynamic animated line chart simulating 24-hour water temperature and salinity monitoring data.
4. THE line chart SHALL use wave-like animated data to convey continuous real-time monitoring capability.

---

### Requirement 9: 底部 B2C 价值对比图表

**User Story:** As an investor, I want to see a direct cost comparison between traditional and smart farming modes, so that I can understand why customers are willing to pay for the service.

#### Acceptance Criteria

1. THE comparison section SHALL display the title "客户为什么买单？—— 养殖户降本增效对比（10万斤规模）".
2. THE comparison section SHALL display a grouped bar chart comparing 传统模式 vs 智能化模式 across 3 cost categories: 人工成本(38万 vs 7.8万)、饲料浪费(9.6万 vs 4.5万)、燃油损耗(40万 vs 9.23万).
3. THE comparison section SHALL display a prominent green highlight block showing "客户年度净节约：28.8万元/年".
4. THE highlight block SHALL include a footnote: "扣除我们收取的33.6万服务费后，客户仍有巨额节余".
5. WHEN a user hovers over a bar in the chart, THE bar SHALL display a tooltip with exact values.

---

### Requirement 10: 交互动效

**User Story:** As an investor, I want smooth animations and interactive feedback, so that the dashboard feels polished and professional.

#### Acceptance Criteria

1. WHEN the page loads, THE Dashboard SHALL animate all KPI numbers from 0 to their target values over approximately 2 seconds.
2. WHEN a user switches tabs, THE Tab_Panel content SHALL transition with a fade animation of approximately 300ms.
3. WHEN a user hovers over a data card or chart, THE element SHALL display a glow or lift effect (e.g., box-shadow or transform: translateY).
4. THE Dashboard SHALL use CSS transitions for all interactive state changes.
5. THE 水质水文监测 line chart SHALL animate continuously to simulate live data updates.

---

### Requirement 11: 运营现状数据看板

**User Story:** As an investor, I want to see the current physical operational capabilities, so that I know the financial projections are backed by real infrastructure.

#### Acceptance Criteria

1. THE Dashboard SHALL display an "运营现状" section in the header area or as a dedicated panel.
2. THE 运营现状 section SHALL display the following metrics: 已开通航线数(条)、机巢/起降点数量(个)、当前单次载具运输能力(300-500kg/次)、日均总运力规划.
3. THE 运营现状 section SHALL use the same dark-mode card style consistent with the overall design language.

---

### Requirement 12: 资本金规模化推演交互模块

**User Story:** As an investor holding 500 million RMB, I want to see what happens when I scale up this single-point profitable model, so that I can justify the large-scale investment.

#### Acceptance Criteria

1. THE Dashboard SHALL display a "5亿资本金推演模型" module in a prominent position (e.g., bottom section or dedicated card).
2. THE 推演模型 module SHALL include an interactive slider allowing users to drag the investment amount from 5000万 to 5亿 (e.g., steps: 5000万, 1亿, 2亿, 3亿, 5亿).
3. WHEN a user drags the slider, THE 推演模型 module SHALL dynamically update and display: 预计建设机巢数、覆盖网箱总数、预计年总营收规模.
4. THE dynamic values SHALL animate smoothly when the slider value changes.
5. THE 推演模型 module SHALL use a visually distinct style (e.g., gradient border or accent color) to draw investor attention.
