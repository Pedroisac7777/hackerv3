
import React, { useState, useEffect } from 'react';
import TerminalHeader from './terminal/TerminalHeader';
import MatrixBackground from './terminal/MatrixBackground';
import SessionInfo from './terminal/SessionInfo';
import TerminalLines from './terminal/TerminalLines';
import IpAddressList from './terminal/IpAddressList';
import CommandHistory from './terminal/CommandHistory';
import HackingProgress from './terminal/HackingProgress';
import ResultDisplay from './terminal/ResultDisplay';
import TerminalStyles from './terminal/styles';

interface TerminalProps {
  commands: string[];
  progressDuration: number;
  onComplete: (result?: string) => void;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({
  commands,
  progressDuration,
  onComplete,
  className = ""
}) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [randomHexCodes, setRandomHexCodes] = useState<string[]>([]);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [hackingAttempts, setHackingAttempts] = useState<number>(0);
  const [ipAddresses, setIpAddresses] = useState<string[]>([]);

  // Initialize random data for visual effect
  useEffect(() => {
    const hexChars = '0123456789ABCDEF';
    const generateHex = () => {
      let result = '#';
      for (let i = 0; i < 6; i++) {
        result += hexChars[Math.floor(Math.random() * 16)];
      }
      return result;
    };
    
    setRandomHexCodes(Array(5).fill(0).map(() => generateHex()));
    
    // Generate random "hacker-like" text in the background
    const hackerLines = [
      "KERNEL BREACH DETECTED",
      "MEMORY INJECTION COMPLETE",
      "SCANNING FOR VULNERABILITIES...",
      "FIREWALL BYPASS IN PROGRESS",
      "ESTABLISHING ENCRYPTED BACKDOOR",
      "IP TRACE OBFUSCATION ACTIVE",
      "HASH VERIFICATION: 0x" + Math.random().toString(16).substring(2, 10),
      "SYN FLOOD INITIATED: CREATING DIVERSION",
      "PACKET SNIFFING ACTIVE: 0x" + Math.random().toString(16).substring(2, 6),
      "ROOTKIT DEPLOYMENT: SAFE MODE ENGAGED",
      "INTRUSION DETECTION SYSTEM DISABLED",
      "ANTI-FORENSICS MEASURES ACTIVATED",
      "BINARY ENCRYPTION LAYER APPLIED",
      "ZERO-DAY EXPLOIT VECTOR IDENTIFIED",
      "C2 SERVER CONNECTION ESTABLISHED"
    ];
    
    // Generate random fake IP addresses
    const generateIP = () => {
      return Array(4).fill(0).map(() => Math.floor(Math.random() * 255)).join('.');
    };
    
    setIpAddresses(Array(3).fill(0).map(() => generateIP()));
    
    // Select random lines
    const randomLineCount = Math.floor(Math.random() * 3) + 3;
    const selectedLines = [...hackerLines].sort(() => 0.5 - Math.random()).slice(0, randomLineCount);
    setTerminalLines(selectedLines);
    
    // Set random hacking attempts
    setHackingAttempts(Math.floor(Math.random() * 20) + 10);
  }, []);

  const handleCommandComplete = () => {
    const nextIndex = currentCommandIndex + 1;
    if (nextIndex < commands.length) {
      setCurrentCommandIndex(nextIndex);
    } else {
      setShowProgress(true);
    }
  };

  const handleProgressComplete = () => {
    const slots = [
      "Fortune Tiger",
      "Fortune Dragon",
      "Fortune Rabbit",
      "Fortune Ox",
      "Wild Ape",
      "Gates of Olympus 1000"
    ];
    
    // Ensure truly random selection with equal probability (16.66% each)
    const randomIndex = Math.floor(Math.random() * slots.length);
    const selectedSlot = slots[randomIndex];
    
    console.log(`Selected slot: ${selectedSlot} (index: ${randomIndex})`);
    
    setResult(selectedSlot);
    
    // Pass the result to parent after setting it locally
    if (onComplete) {
      onComplete(selectedSlot);
    }
  };

  return (
    <div className={`terminal ${className} bg-black/90 border-2 border-neon-green rounded-md p-6 shadow-[0_0_25px_rgba(57,255,20,0.4)] backdrop-blur-sm relative overflow-hidden`}>
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-5"></div>
      
      <TerminalHeader />
      
      <div className="overflow-hidden relative" style={{fontFamily: 'monospace'}}>
        {/* Matrix-like background effect */}
        <MatrixBackground />
        
        {/* Session info */}
        <SessionInfo hackingAttempts={hackingAttempts} />
        
        {/* Random terminal "noise" lines in background */}
        <TerminalLines lines={terminalLines} />
        
        {/* IP addresses and server info */}
        <IpAddressList ipAddresses={ipAddresses} />
        
        {/* Command history */}
        <CommandHistory 
          commands={commands}
          currentCommandIndex={currentCommandIndex}
          onCommandComplete={handleCommandComplete}
          randomHexCodes={randomHexCodes}
        />
        
        {/* Progress bar when all commands are executed */}
        {showProgress && (
          <HackingProgress 
            progressDuration={progressDuration} 
            onComplete={handleProgressComplete} 
          />
        )}
        
        {/* Result display after progress completes */}
        {result && <ResultDisplay result={result} />}
        
        {/* Terminal styles */}
        <TerminalStyles />
      </div>
    </div>
  );
};

export default Terminal;
