
import React from 'react';

interface TerminalLinesProps {
  lines: string[];
}

const TerminalLines: React.FC<TerminalLinesProps> = ({ lines }) => {
  return (
    <div className="mb-2 sm:mb-3 text-[11px] sm:text-xs text-neon-green/30 space-y-0.5 sm:space-y-1 border-l-2 border-neon-green/20 pl-1.5 sm:pl-2">
      {lines.map((line, idx) => (
        <div key={idx} className="font-code flex items-start flex-wrap sm:flex-nowrap">
          <span className="text-neon-green/40 mr-1.5 sm:mr-2 min-w-[55px] sm:min-w-[60px] inline-block">[{(Math.random() * 9999).toFixed(0).padStart(4, '0')}]</span>
          <span className="break-words">{line}</span>
        </div>
      ))}
    </div>
  );
};


export default TerminalLines;
