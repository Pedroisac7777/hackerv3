
import React from 'react';

interface TerminalHeaderProps {
  className?: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ className = "" }) => {
  return (
    <div className={`terminal-header flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 pb-2 border-b border-neon-green/40 ${className}`}>
      <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500"></div>
      <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500"></div>
      <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500"></div>
      <div className="flex-1 text-center text-[11px] sm:text-xs text-neon-green font-code tracking-wider">MGC_BT_TERMINAL_V3.2</div>
      <div className="text-[11px] sm:text-xs text-neon-green/50 font-code">[ENCRYPTED]</div>
    </div>
  );
};

export default TerminalHeader;
