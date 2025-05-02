
import React, { useState, useEffect } from 'react';
import HexDataDisplay from './HexDataDisplay';
import ProgressIndicator from './ProgressIndicator';
import ExploitStatus from './ExploitStatus';
import DataMetrics from './DataMetrics';
import BinaryStream from './BinaryStream';
import { useProgressEffects } from './useProgressEffects';

interface ProgressBarProps {
  duration: number; // in milliseconds
  onComplete?: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  duration, 
  onComplete 
}) => {
  const [progress, setProgress] = useState(0);
  const [byteCount, setByteCount] = useState(0);
  
  // Use our custom hook for visual effects
  const { hexData, securityBreach, exploitStatus } = useProgressEffects(progress, duration);
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      // Update byte count for visual effect
      setByteCount(prev => prev + Math.floor(Math.random() * 1024));
      
      if (newProgress >= 100 && onComplete) {
        clearInterval(intervalId);
        onComplete();
      }
    };
    
    intervalId = setInterval(updateProgress, 30);
    
    return () => clearInterval(intervalId);
  }, [duration, onComplete]);
  
  return (
    <div className={`space-y-2 ${securityBreach ? 'glitch-effect' : ''}`}>
      {/* Binary data stream */}
      <BinaryStream />
      
      {/* Progress bar */}
      <ProgressIndicator progress={progress} />
      
      {/* Hex data display */}
      <HexDataDisplay hexData={hexData} securityBreach={securityBreach} progress={progress} />
      
      {/* Exploit status messages */}
      <ExploitStatus statuses={exploitStatus} />
      
      {/* Hacker terminal data metrics */}
      <DataMetrics byteCount={byteCount} />
      
      <style>
        {`
          @keyframes glitch {
            0% { transform: translate(0) }
            20% { transform: translate(-3px, 3px) }
            40% { transform: translate(-3px, -3px) }
            60% { transform: translate(3px, 3px) }
            80% { transform: translate(3px, -3px) }
            100% { transform: translate(0) }
          }
          
          .glitch-effect {
            animation: glitch 0.2s cubic-bezier(.25, .46, .45, .94) both;
            position: relative;
          }
          
          .glitch-effect::before,
          .glitch-effect::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.2;
          }
          
          .glitch-effect::before {
            background: rgba(255,0,0,0.2);
            transform: translate(2px);
          }
          
          .glitch-effect::after {
            background: rgba(0,255,0,0.2);
            transform: translate(-2px);
          }
        `}
      </style>
    </div>
  );
};

export default ProgressBar;
