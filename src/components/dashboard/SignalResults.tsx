
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface SignalData {
  slot: string;
  startTime: string;
  repetitions: number;
  normalRounds: number;
  turboRounds: number;
}

interface SignalResultsProps {
  signalData: SignalData;
  onFindAnotherSignal: () => void;
}

const SignalResults: React.FC<SignalResultsProps> = ({
  signalData,
  onFindAnotherSignal
}) => {
  const handlePlaySignalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Link aberto em nova aba");
    window.open("https://rubyx.com.br", "_blank", "noopener,noreferrer");
  };
  
  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info("Link de cadastro aberto em nova aba");
    window.open("https://rubyx.com.br/register", "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="max-w-2xl mx-auto bg-black/80 border border-accent/50 rounded-md shadow-md backdrop-blur-sm mx-3 sm:mx-auto">
      <CardHeader className="border-b border-accent/20 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <CardTitle className="text-xs text-accent/70 tracking-wider">SIGNAL_DETECTED</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4 sm:pt-6">
        <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 tracking-wider">
          <span className="text-white/80">Slot:</span> <span className="text-accent font-bold">{signalData.slot}</span>
        </h3>
        
        <div className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-white border border-accent/40 p-3 sm:p-4 rounded-md bg-accent/5 shadow-md text-center">
          SINAL PARA JOGO ENCONTRADO
        </div>
        
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left">
          <div className="grid grid-cols-[1fr_auto] items-center gap-1 sm:gap-2 pb-2 border-b border-white/10">
            <span className="opacity-70 text-xs sm:text-sm">Começar no horário:</span> 
            <span className="text-accent text-base sm:text-lg font-bold">{signalData.startTime}</span>
          </div>
          
          <div className="grid grid-cols-[1fr_auto] items-center gap-1 sm:gap-2 pb-2 border-b border-white/10">
            <span className="opacity-70 text-xs sm:text-sm">Repetir estratégia:</span> 
            <span className="text-accent text-base sm:text-lg font-bold">até {signalData.repetitions}x</span>
          </div>
          
          <div className="grid grid-cols-[1fr_auto] items-center gap-1 sm:gap-2 pb-2 border-b border-white/10">
            <span className="opacity-70 text-xs sm:text-sm">Rodada Normal:</span> 
            <span className="text-accent text-base sm:text-lg font-bold">{signalData.normalRounds} jogadas</span>
          </div>
          
          <div className="grid grid-cols-[1fr_auto] items-center gap-1 sm:gap-2 pb-2 border-b border-white/10">
            <span className="opacity-70 text-xs sm:text-sm">Rodada Turbo:</span> 
            <span className="text-accent text-base sm:text-lg font-bold">{signalData.turboRounds} jogadas</span>
          </div>

          <div className="text-center text-xs sm:text-sm italic text-white/70 my-3 sm:my-4 p-2 border border-white/10 bg-white/5 rounded">
            Este sinal funciona <span className="font-bold">exclusivamente</span> na plataforma <a href="https://rubyx.com.br" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline inline-flex items-center">RubyX <ExternalLink size={12} className="ml-1" /></a>
          </div>
        </div>
        
        <div className="space-y-4">
          <a 
            href="https://rubyx.com.br" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePlaySignalClick}
            className="flex items-center justify-center w-full bg-transparent border border-primary text-primary hover:bg-primary/10 py-2 sm:py-3 px-3 sm:px-4 rounded-md transition-all duration-300 hover:shadow-sm transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <span>JOGAR SINAL AGORA</span>
            <ExternalLink size={16} className="ml-2" />
          </a>
          
          <a 
            href="https://rubyx.com.br/register" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleRegisterClick}
            className="flex items-center justify-center w-full bg-transparent border border-accent text-accent hover:bg-accent/10 py-3 px-4 rounded-md transition-all duration-300 hover:shadow-sm transform hover:-translate-y-0.5"
          >
            <span>CADASTRE-SE E GANHE BÔNUS</span>
            <ExternalLink size={16} className="ml-2" />
          </a>
          
          <button
            onClick={onFindAnotherSignal}
            className="w-full border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-4 rounded-md transition-all duration-300"
          >
            BUSCAR OUTRO SINAL
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignalResults;
