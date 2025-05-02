
import React from 'react';

interface MatrixBackgroundProps {
  count?: number;
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({ count = 8 }) => {
  // Generate matrix-like binary stream
  const generateBinarySequence = () => {
    return Array(8).fill(0).map(() => Math.round(Math.random())).join('');
  };
  
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      {Array(count).fill(0).map((_, i) => (
        <div 
          key={i} 
          className="absolute text-neon-green/30 text-xs"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 5}s`
          }}
        >
          {generateBinarySequence()}
        </div>
      ))}
    </div>
  );
};

export default MatrixBackground;
