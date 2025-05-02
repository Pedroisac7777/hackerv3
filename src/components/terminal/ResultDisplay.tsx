
import React from 'react';

interface ResultDisplayProps {
  result: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  // Generate binary sequence for display
  const generateBinarySequence = () => {
    return Array(8).fill(0).map(() => Math.round(Math.random())).join('');
  };
  
  return (
    <div className="mt-6 text-center animate-fade-in">
      <div className="glitch-container relative">
        <div className="p-4 border-2 border-neon-green rounded-md bg-black/70 inline-block shadow-[0_0_15px_rgba(57,255,20,0.3)]">
          {/* Animated corner brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-green/80"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-green/80"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neon-green/80"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-green/80"></div>
          
          <div className="text-xs text-neon-green/50 mb-2 font-code">SIGNAL_DETECTED:</div>
          <span className="text-neon-green font-bold text-xl tracking-wider animate-pulse-subtle glitch-text">{result}</span>
          <div className="mt-2 text-xs text-right text-white/30 font-code">CONFIDENCE_LEVEL: 96.7%</div>
          
          {/* Binary stream background */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="text-neon-green absolute text-xs" 
                   style={{left: `${i * 30}%`, top: '50%', transform: 'translateY(-50%)'}}>
                {generateBinarySequence()}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 p-2 border border-neon-green/30 bg-black/50 rounded text-xs">
        <span className="text-neon-green/60">{'// '}</span>
        <span className="text-white/60">Signal processing complete. Target identified for exploitation.</span>
      </div>
    </div>
  );
};

export default ResultDisplay;
