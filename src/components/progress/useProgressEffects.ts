
import { useState, useEffect } from 'react';

export const useProgressEffects = (progress: number, duration: number) => {
  const [hexData, setHexData] = useState('');
  const [securityBreach, setSecurityBreach] = useState(false);
  const [exploitStatus, setExploitStatus] = useState<string[]>([]);

  // Generate hex code display that updates
  useEffect(() => {
    const updateHex = () => {
      const chars = '0123456789ABCDEF';
      let result = '';
      for (let i = 0; i < 24; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
        if (i % 2 !== 0 && i < 23) result += ' ';
      }
      setHexData(result);
      
      // Random chance of triggering "security breach" visual effect
      if (Math.random() < 0.1) {
        setSecurityBreach(true);
        setTimeout(() => setSecurityBreach(false), 150);
      }
    };
    
    const hexInterval = setInterval(updateHex, 200);
    return () => clearInterval(hexInterval);
  }, []);
  
  // Generate exploit statuses
  useEffect(() => {
    const statuses = [
      "Bypassing security...",
      "Injecting payload...",
      "Escalating privileges...",
      "Disabling IDS...",
      "Creating backdoor...",
      "Covering tracks..."
    ];
    
    setExploitStatus([statuses[0]]);
    
    // Add new status messages as progress increases
    const statusUpdateInterval = setInterval(() => {
      const newIndex = Math.floor((progress / 100) * (statuses.length - 1)) + 1;
      if (newIndex < statuses.length && !exploitStatus.includes(statuses[newIndex])) {
        setExploitStatus(prev => [...prev, statuses[newIndex]]);
      }
    }, duration / 5);
    
    return () => clearInterval(statusUpdateInterval);
  }, [progress, duration, exploitStatus]);

  return { hexData, securityBreach, exploitStatus };
};
