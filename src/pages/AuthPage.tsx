
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../services/auth';
import MatrixRain from '../components/MatrixRain';
import { toast } from 'sonner';
import NeonButton from '../components/NeonButton';
import { Loader, Lock, Shield, Key } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [secretKey, setSecretKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const isValid = authenticate(secretKey);
      
      if (isValid) {
        toast.success("Autenticação bem-sucedida");
        navigate('/dashboard');
      } else {
        toast.error("Key inválida");
        setIsLoading(false);
      }
    }, 1000); // Simulate a bit of loading time
  };
  
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <MatrixRain />
      
      <div className="terminal w-full max-w-md p-4 sm:p-8 z-10 bg-black/90 border border-neon-green rounded-md shadow-[0_0_20px_rgba(57,255,20,0.3)] backdrop-blur-sm mx-3 sm:mx-auto">
        <div className="terminal-header flex items-center gap-2 mb-4 sm:mb-6 pb-2 border-b border-neon-green/30">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="flex-1 text-center text-xs text-neon-green/70 font-code">SECURE_AUTHENTICATION_REQUIRED</div>
        </div>
      
        <div className="mb-4 sm:mb-6 text-center">
          <Shield className="inline-block h-10 w-10 sm:h-12 sm:w-12 text-neon-green mb-2" />
          <h2 className="text-xl sm:text-2xl font-code font-bold mb-2 neon-text-green">
            Sistema Magic Bet
          </h2>
          <div className="text-sm text-neon-green/70 animate-pulse">Acesso Restrito</div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="secretKey" className="block mb-1 sm:mb-2 font-code text-white/80 flex items-center text-sm sm:text-base">
              <span className="text-neon-green mr-2">[ACCESS]$</span> Secret Key:
            </label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neon-green w-5 h-5 opacity-70" />
              <input
                type="password"
                id="secretKey"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                className="w-full bg-black/70 border border-neon-green p-2 sm:p-3 pl-10 rounded-md font-code text-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green shadow-[0_0_5px_rgba(57,255,20,0.2)] text-sm sm:text-base"
                placeholder="********"
                required
                autoFocus
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-blink-caret border-r-2 border-neon-green h-5"></span>
            </div>
          </div>
          
          <NeonButton
            type="submit"
            disabled={isLoading}
            neonColor="green"
            className="w-full py-2 sm:py-3 font-code font-bold text-base sm:text-lg tracking-wider"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Loader className="animate-spin mr-2" size={16} />
                <span>DECRIPTANDO...</span>
              </div>
            ) : 'INICIAR SESSÃO'}
          </NeonButton>
        </form>
        
        <div className="mt-6 sm:mt-8 text-xs font-code text-white/50 space-y-1 sm:space-y-2 border-t border-neon-green/20 pt-3 sm:pt-4">
          <p className="flex">
            <span className="text-neon-green/50 mr-2">//</span> 
            <span>Protocolo de segurança ativado</span>
          </p>
          <p className="flex">
            <span className="text-neon-green/50 mr-2">//</span> 
            <span>IP registrado: 192.168.1.XXX</span>
          </p>
          <p className="flex">
            <span className="text-neon-green/50 mr-2">//</span> 
            <span>Tentativas excessivas serão bloqueadas</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
