
import React from 'react';

interface IpAddressListProps {
  ipAddresses: string[];
}

const IpAddressList: React.FC<IpAddressListProps> = ({ ipAddresses }) => {
  // Generate a fake server response
  const generateServerResponse = () => {
    const responses = [
      "CONNECTION_ESTABLISHED",
      "AUTHENTICATION_BYPASS_SUCCESSFUL",
      "SHELL_ACCESS_GRANTED", 
      "VULNERABILITY_EXPLOITED",
      "SYSTEM_COMPROMISED"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="mb-3 text-xs p-2 border border-neon-green/20 bg-black/60 rounded-sm">
      <div className="font-code text-neon-green/40 mb-1">// COMPROMISED ENDPOINTS:</div>
      {ipAddresses.map((ip, idx) => (
        <div key={idx} className="flex justify-between text-white/60 font-code">
          <span>{ip}</span>
          <span className="text-neon-green">{generateServerResponse()}</span>
        </div>
      ))}
    </div>
  );
};

export default IpAddressList;
