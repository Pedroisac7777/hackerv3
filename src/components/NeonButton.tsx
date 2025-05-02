
import React, { useState } from 'react';
import { Button, ButtonProps } from './ui/button';
import { cn } from '@/lib/utils';

interface NeonButtonProps extends ButtonProps {
  neonColor?: 'green' | 'purple' | 'blue' | 'red';
  glitchEffect?: boolean;
  hackEffect?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  className, 
  neonColor = 'green',
  glitchEffect = true,
  hackEffect = false,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hackText, setHackText] = useState('');
  
  // Generate random binary/hex for hacking effect
  const generateHackText = () => {
    const chars = '01ABCDEFabcdef!@#$%^&*()';
    return Array(8).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
  };
  
  // Update hack text on interval when hovered
  React.useEffect(() => {
    if (isHovered && hackEffect) {
      const interval = setInterval(() => {
        setHackText(generateHackText());
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isHovered, hackEffect]);
  
  const buttonStyles = {
    green: 'text-neon-green border-neon-green hover:bg-neon-green/10 transition-all duration-300 shadow-[0_0_8px_rgba(57,255,20,0.4)]',
    purple: 'text-neon-purple border-neon-purple hover:bg-neon-purple/10 transition-all duration-300 shadow-[0_0_8px_rgba(187,0,255,0.4)]',
    blue: 'text-blue-400 border-blue-400 hover:bg-blue-400/10 transition-all duration-300 shadow-[0_0_8px_rgba(96,165,250,0.4)]',
    red: 'text-red-500 border-red-500 hover:bg-red-500/10 transition-all duration-300 shadow-[0_0_8px_rgba(239,68,68,0.4)]'
  };
  
  const hoverShadows = {
    green: 'hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]',
    purple: 'hover:shadow-[0_0_20px_rgba(187,0,255,0.6)]',
    blue: 'hover:shadow-[0_0_20px_rgba(96,165,250,0.6)]',
    red: 'hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]'
  };

  return (
    <Button
      variant="outline"
      className={cn(
        'border-2 backdrop-blur-sm transform hover:-translate-y-1 font-code tracking-wider relative overflow-hidden group',
        hoverShadows[neonColor],
        buttonStyles[neonColor],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-700 ease-out 
        ${neonColor === 'green' ? 'bg-neon-green/10' : 
          neonColor === 'purple' ? 'bg-neon-purple/10' :
          neonColor === 'blue' ? 'bg-blue-400/10' : 
          'bg-red-500/10'}`}
      ></span>
      
      {/* Scanline effect */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-30">
        <span className="w-full h-full block" style={{
          background: 'linear-gradient(transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
          backgroundSize: '100% 4px',
          animation: 'scanline 4s linear infinite'
        }}></span>
      </span>
      
      {/* Hack text effect */}
      {hackEffect && isHovered && (
        <span className="absolute inset-0 flex items-center justify-center opacity-20 font-mono text-xs overflow-hidden pointer-events-none">
          {hackText}
        </span>
      )}
      
      {/* Binary splash on click */}
      {hackEffect && (
        <span className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="binary-splash"></span>
        </span>
      )}
      
      {/* Glitch effect when hovered */}
      {glitchEffect && isHovered && (
        <>
          <span className="sr-only">Button glitch effect</span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100" 
                style={{
                  background: neonColor === 'green' ? 'rgba(57,255,20,0.1)' : 
                            neonColor === 'purple' ? 'rgba(187,0,255,0.1)' :
                            neonColor === 'blue' ? 'rgba(96,165,250,0.1)' : 
                            'rgba(239,68,68,0.1)',
                  animation: 'glitch 300ms infinite',
                  clipPath: 'polygon(0 0, 100% 0, 100% 5%, 0 5%, 0 10%, 100% 10%, 100% 15%, 0 15%, 0 20%, 100% 20%, 100% 25%, 0 25%)'
                }}>
          </span>
        </>
      )}
      
      <style>
        {`
          @keyframes scanline {
            0% { background-position: 0 0; }
            100% { background-position: 0 100%; }
          }
          
          @keyframes glitch {
            0% { clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%, 0 10%, 100% 10%, 100% 15%, 0 15%, 0 20%, 100% 20%, 100% 25%, 0 25%); }
            20% { clip-path: polygon(0 15%, 100% 15%, 100% 20%, 0 20%, 0 25%, 100% 25%, 100% 30%, 0 30%, 0 35%, 100% 35%, 100% 40%, 0 40%); }
            40% { clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%, 0 55%, 100% 55%, 100% 60%, 0 60%, 0 65%, 100% 65%, 100% 70%, 0 70%); }
            60% { clip-path: polygon(0 40%, 100% 40%, 100% 45%, 0 45%, 0 50%, 100% 50%, 100% 55%, 0 55%, 0 60%, 100% 60%, 100% 65%, 0 65%); }
            80% { clip-path: polygon(0 65%, 100% 65%, 100% 70%, 0 70%, 0 75%, 100% 75%, 100% 80%, 0 80%, 0 85%, 100% 85%, 100% 90%, 0 90%); }
            100% { clip-path: polygon(0 85%, 100% 85%, 100% 90%, 0 90%, 0 95%, 100% 95%, 100% 100%, 0 100%, 0 0, 100% 0, 100% 5%, 0 5%); }
          }
          
          @keyframes binary-splash {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(3); opacity: 0; }
          }
          
          .binary-splash {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(circle, rgba(57,255,20,0.2) 0%, transparent 70%);
            transform: scale(0);
            opacity: 0;
            transition: transform 0.5s, opacity 0.5s;
          }
          
          .group:active .binary-splash {
            animation: binary-splash 0.8s ease-out;
          }
        `}
      </style>
    </Button>
  );
};

export default NeonButton;
