
import React from 'react';

interface SessionInfoProps {
  hackingAttempts: number;
}

const SessionInfo: React.FC<SessionInfoProps> = ({ hackingAttempts }) => {
  return (
    <div className="mb-3 text-xs border border-neon-green/20 p-2 bg-black/40 rounded-sm">
      <div className="font-code text-neon-green/60 flex justify-between">
        <span>SESSION: {Math.random().toString(16).substring(2, 10)}</span>
        <span>ATTEMPTS: {hackingAttempts}</span>
      </div>
    </div>
  );
};

export default SessionInfo;
