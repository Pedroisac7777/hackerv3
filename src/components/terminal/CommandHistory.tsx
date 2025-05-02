
import React from 'react';
import TypingEffect from '../TypingEffect';

interface CommandHistoryProps {
  commands: string[];
  currentCommandIndex: number;
  onCommandComplete: () => void;
  randomHexCodes: string[];
}

const CommandHistory: React.FC<CommandHistoryProps> = ({
  commands,
  currentCommandIndex,
  onCommandComplete,
  randomHexCodes
}) => {
  return (
    <>
      <div className="mb-3 flex">
        <span className="text-neon-green/50">[system]$ </span>
        <span className="text-white/80 ml-2">initializing penetration sequence... <span className="text-neon-green">OK</span></span>
      </div>
      
      {commands.slice(0, currentCommandIndex + 1).map((command, index) => (
        <div key={index} className="mb-3 flex flex-wrap">
          {index < currentCommandIndex ? (
            <>
              <span className="text-neon-green mr-2 font-bold">[root@MGC:~]$</span>
              <span className="text-neon-green">{command}</span>
              {index === 0 && 
                <div className="w-full mt-1 text-xs text-white/50 font-code">
                  {randomHexCodes.map((hex, i) => (
                    <span key={i} className="mr-2">{hex} <span className="text-neon-green/40">{'{'}{i * 432 + 100}{'}'}</span></span>
                  ))}
                </div>
              }
            </>
          ) : (
            <div className="flex items-center w-full">
              <span className="text-neon-green mr-2 font-bold">[root@MGC:~]$</span>
              <TypingEffect
                text={command}
                onComplete={onCommandComplete}
                className="text-neon-green flex-1"
                delay={25}
                hackEffect={true}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CommandHistory;
