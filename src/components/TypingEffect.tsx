
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
  className?: string;
  blinkCaret?: boolean;
  glitchIntensity?: number; // 0-1, where 0 is no glitch and 1 is maximum glitch
  hackEffect?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  text, 
  delay = 30, 
  onComplete,
  className = "",
  blinkCaret = true,
  glitchIntensity = 0.1, // Default light glitch effect
  hackEffect = false
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [glitchCharacter, setGlitchCharacter] = useState<string | null>(null);
  const [glitchPosition, setGlitchPosition] = useState<number | null>(null);
  const [hackingVisible, setHackingVisible] = useState(false);

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      // Randomize delay slightly for a more realistic typing effect
      const randomDelay = delay + Math.random() * 40;
      
      const timeout = setTimeout(() => {
        // Random glitch character effect
        if (Math.random() < glitchIntensity) {
          const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 94)); // Random ASCII
          setGlitchCharacter(randomChar);
          setGlitchPosition(currentIndex);
          
          // Reset glitch after a brief moment
          setTimeout(() => {
            setGlitchCharacter(null);
            setGlitchPosition(null);
            // Then add the actual character
            setDisplayText(prev => prev + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);

            // Occasionally show hacking animation
            if (hackEffect && Math.random() < 0.05) {
              setHackingVisible(true);
              setTimeout(() => setHackingVisible(false), 800);
            }
          }, 50);
        } else {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }
      }, randomDelay);
      
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      // Occasional random errors/corrections at the end for realism
      if (Math.random() < glitchIntensity * 2) {
        // Add a random error character
        const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 94));
        setDisplayText(prev => prev + randomChar);
        
        // Then fix it after a moment
        setTimeout(() => {
          setDisplayText(text);
          
          // Complete after another brief moment
          setTimeout(() => {
            onComplete();
          }, 300);
        }, 200);
      } else {
        // No error, just complete
        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 300);
        
        return () => clearTimeout(completeTimeout);
      }
    }
  }, [currentIndex, delay, text, onComplete, glitchIntensity, hackEffect]);

  // Blinking cursor effect
  useEffect(() => {
    if (!blinkCaret) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, [blinkCaret]);

  // Generate random binary/hex for hacking effect
  const generateHackText = () => {
    const chars = '01ABCDEFabcdef';
    return Array(16).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  return (
    <div className={`inline-block font-code relative ${className}`}>
      <span className="text-inherit">
        {displayText}
        {glitchCharacter !== null && glitchPosition !== null && 
          currentIndex === glitchPosition && 
          <span className="text-red-400">{glitchCharacter}</span>
        }
      </span>
      {blinkCaret && (
        <span className={`border-r-2 border-neon-green ml-1 h-5 inline-block ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>&nbsp;</span>
      )}
      
      {/* Hack effect overlay */}
      {hackingVisible && hackEffect && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="text-neon-green text-xs">
              {generateHackText()}
            </div>
          </div>
        </div>
      )}
      
      <style>
        {`
          @keyframes glitch {
            0% { transform: translate(0) }
            20% { transform: translate(-2px, 2px) }
            40% { transform: translate(-2px, -2px) }
            60% { transform: translate(2px, 2px) }
            80% { transform: translate(2px, -2px) }
            100% { transform: translate(0) }
          }
        `}
      </style>
    </div>
  );
};

export default TypingEffect;
