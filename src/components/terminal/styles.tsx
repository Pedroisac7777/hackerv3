
import React from 'react';

const TerminalStyles: React.FC = () => {
  return (
    <style>
      {`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
        
        .glitch-text {
          position: relative;
        }
        
        .glitch-text:hover {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
          text-shadow: 0 0 10px rgba(57,255,20,0.8);
        }
        
        .bg-scanlines {
          background: repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
        }
      `}
    </style>
  );
};

export default TerminalStyles;
