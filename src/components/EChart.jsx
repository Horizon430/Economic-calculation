import * as echarts from 'echarts';
import { useRef, useEffect } from 'react';

/**
 * Generic ECharts wrapper component.
 * Props:
 *   option {object}  - ECharts option object
 *   style  {object}  - Inline style for the container div (e.g. { height: '300px' })
 */
export default function EChart({ option, style }) {
  const containerRef = useRef(null);
  const chartRef = useRef(null);

  // Initialize chart on mount, dispose on unmount
  useEffect(() => {
    if (!containerRef.current) return;
    const chart = echarts.init(containerRef.current, 'dark');
    chartRef.current = chart;

    return () => {
      chart.dispose();
      chartRef.current = null;
    };
  }, []);

  // Update option whenever it changes
  useEffect(() => {
    if (!chartRef.current) return;
    chartRef.current.setOption(option, { notMerge: true });
  }, [option]);

  // Resize chart when container size changes (e.g. tab switch)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      chartRef.current?.resize();
    });
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '300px', ...style }}
    />
  );
}
