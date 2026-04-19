/**
 * Smoke tests: verify all 5 tab components render without throwing.
 * Checkpoint 12 — 确保所有 Tab 内容正确渲染
 */
import { render, screen } from '@testing-library/react';
import FisheryTab from '../components/tabs/FisheryTab';
import LogisticsTab from '../components/tabs/LogisticsTab';
import InspectionTab from '../components/tabs/InspectionTab';
import EmergencyTab from '../components/tabs/EmergencyTab';
import WaterQualityTab from '../components/tabs/WaterQualityTab';

// ECharts uses canvas/DOM APIs not available in jsdom — mock it
vi.mock('../components/EChart', () => ({
  default: () => <div data-testid="echart-mock" />,
}));

describe('Tab components render without errors', () => {
  it('FisheryTab renders key content', () => {
    render(<FisheryTab />);
    expect(screen.getByText('短途运输强需求与高复购率驱动模型')).toBeInTheDocument();
    expect(screen.getByText('10%-15%')).toBeInTheDocument();
  });

  it('LogisticsTab renders key content', () => {
    render(<LogisticsTab />);
    expect(screen.getByText('跨海岛高频短途物流网络')).toBeInTheDocument();
    expect(screen.getByText('6级')).toBeInTheDocument();
  });

  it('InspectionTab renders key content', () => {
    render(<InspectionTab />);
    expect(screen.getByText('海空立体协同与高技术壁垒溢价')).toBeInTheDocument();
    expect(screen.getByText(/绝对定价权/)).toBeInTheDocument();
  });

  it('EmergencyTab renders key content', () => {
    render(<EmergencyTab />);
    expect(screen.getByText('海空应急救援响应网络')).toBeInTheDocument();
    expect(screen.getByText('6-8')).toBeInTheDocument();
  });

  it('WaterQualityTab renders key content', () => {
    render(<WaterQualityTab />);
    expect(screen.getByText('全时域水环境数据资产化')).toBeInTheDocument();
    expect(screen.getByText('1次/10分钟')).toBeInTheDocument();
  });
});
