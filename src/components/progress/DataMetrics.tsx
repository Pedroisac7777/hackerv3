
import React from 'react';

interface DataMetricsProps {
  byteCount: number;
}

const DataMetrics: React.FC<DataMetricsProps> = ({ byteCount }) => {
  return (
    <div className="flex flex-wrap justify-between text-neon-green/30 text-xs font-code border border-neon-green/20 p-2 bg-black/80 rounded-sm">
      <div>TRACE_ID: 0x{Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}</div>
      <div>BYTES: {(byteCount / 1024).toFixed(2)}KB</div>
      <div>SYS_CLK: {new Date().toISOString().split('T')[1].split('.')[0]}</div>
    </div>
  );
};

export default DataMetrics;
