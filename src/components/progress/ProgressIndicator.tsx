
import React from 'react';

interface ProgressIndicatorProps {
  progress: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ progress }) => {
  return (
    <div className="progress-container bg-black/70 border border-neon-green/50 p-0.5 relative overflow-hidden">
      <div 
        className="progress-bar bg-neon-green/80 shadow-[0_0_10px_rgba(57,255,20,0.8)]" 
        style={{ width: `${progress}%` }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full opacity-30" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)' 
             }} />
      </div>
      
      {/* Add scanning line effect */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-neon-green/80 z-10"
        style={{ 
          left: `${progress}%`, 
          boxShadow: '0 0 8px rgba(57,255,20,0.8), 0 0 12px rgba(57,255,20,0.4)'
        }}
      />
    </div>
  );
};

export default ProgressIndicator;
