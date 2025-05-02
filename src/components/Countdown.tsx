
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

const Countdown: React.FC<CountdownProps> = ({
  initialHours = 7,
  initialMinutes = 32,
  initialSeconds = 14
}) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(interval);
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div className="flex items-center justify-center space-x-2 font-code">
      <div className="bg-black/60 p-3 rounded-md border border-neon-green/30 shadow-[0_0_10px_rgba(57,255,20,0.1)] min-w-[3.5rem] text-center">
        <span className="text-2xl md:text-4xl neon-text-green font-bold">{formatTime(hours)}</span>
      </div>
      <span className="text-2xl md:text-4xl neon-text-green">:</span>
      <div className="bg-black/60 p-3 rounded-md border border-neon-green/30 shadow-[0_0_10px_rgba(57,255,20,0.1)] min-w-[3.5rem] text-center">
        <span className="text-2xl md:text-4xl neon-text-green font-bold">{formatTime(minutes)}</span>
      </div>
      <span className="text-2xl md:text-4xl neon-text-green">:</span>
      <div className="bg-black/60 p-3 rounded-md border border-neon-green/30 shadow-[0_0_10px_rgba(57,255,20,0.1)] min-w-[3.5rem] text-center">
        <span className="text-2xl md:text-4xl neon-text-green font-bold">{formatTime(seconds)}</span>
      </div>
    </div>
  );
};

export default Countdown;
