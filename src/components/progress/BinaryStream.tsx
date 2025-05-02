
import React from 'react';

const BinaryStream: React.FC = () => {
  // Generate data stream for display
  const generateBinaryStream = () => {
    return Array(3).fill(0).map(() => 
      Math.random() > 0.5 ? '01' : '10'
    ).join(' ');
  };

  return (
    <div className="text-xs font-code text-neon-green/70 flex items-center gap-2">
      <span className="animate-pulse">▶</span>
      <span>EXECUTING_SEQUENCE::</span>
      <span className="text-white/50">{generateBinaryStream()}</span>
    </div>
  );
};

export default BinaryStream;
