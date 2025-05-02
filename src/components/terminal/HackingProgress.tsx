
import React from 'react';
import { ProgressBar } from '../progress';

interface HackingProgressProps {
  onComplete: () => void;
  progressDuration: number;
}

const HackingProgress: React.FC<HackingProgressProps> = ({
  onComplete,
  progressDuration
}) => {
  return (
    <div className="mt-6 mb-4 border border-neon-green/30 p-3 bg-black/60 rounded relative">
      {/* Animated corner brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-green/60"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-green/60"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neon-green/60"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-green/60"></div>
      
      <div className="text-xs text-neon-green/90 mb-2 flex items-center font-code">
        <span className="animate-pulse mr-2">▶</span>
        <span>ACCESS_PORT:32598 [crypt_0xFF892a] {'>'}{'>'}  DECRYPTING SIGNAL DATA...</span>
      </div>
      <ProgressBar
        duration={progressDuration}
        onComplete={onComplete}
      />
    </div>
  );
};

export default HackingProgress;
