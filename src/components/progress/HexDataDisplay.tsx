
import React from 'react';

interface HexDataDisplayProps {
  hexData: string;
  securityBreach: boolean;
  progress: number;
}

const HexDataDisplay: React.FC<HexDataDisplayProps> = ({ hexData, securityBreach, progress }) => {
  return (
    <div className="flex justify-between items-center text-xs font-code">
      <div className="text-neon-green/60 animate-pulse relative">
        {hexData}
        {securityBreach && (
          <span className="absolute inset-0 text-red-500 animate-pulse">SECURITY BREACH DETECTED</span>
        )}
      </div>
      <div className="text-neon-green flex items-center gap-1">
        <span className="text-neon-green/80">[</span>
        <span>{Math.round(progress)}%</span>
        <span className="text-neon-green/80">]</span>
      </div>
    </div>
  );
};

export default HexDataDisplay;
