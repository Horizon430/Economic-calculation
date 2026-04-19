import { useState, useEffect } from 'react';
import { OPS_STATUS } from '../constants/businessData';

function useCurrentTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return time;
}

function formatTime(date) {
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

export default function Header() {
  const time = useCurrentTime();

  return (
    <header className="mb-4">
      {/* Title row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold tracking-widest text-tech-blue">
          低空+水域无人化智能商业体系
        </h1>
        <span className="text-data-cyan text-sm font-mono tabular-nums">
          {formatTime(time)}
        </span>
      </div>

      {/* 运营现状 cards */}
      <div className="grid grid-cols-4 gap-3">
        {OPS_STATUS.map((item) => (
          <div
            key={item.label}
            className="bg-[#0d1526] border border-[rgba(14,165,233,0.2)] rounded-lg px-4 py-3 card-glow"
          >
            <p className="text-xs text-slate-400 mb-1">{item.label}</p>
            <p className="text-lg font-bold text-tech-blue">
              {item.value}
              <span className="text-sm font-normal text-slate-300 ml-1">{item.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}
