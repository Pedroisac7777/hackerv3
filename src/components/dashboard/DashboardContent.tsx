import React from 'react';
import Terminal from '../Terminal';
import AnalyzeSlots from './AnalyzeSlots';
import SelectedSlotCard from './SelectedSlotCard';
import SignalResults from './SignalResults';

interface DashboardContentProps {
  step: 'initial' | 'analyzing' | 'signals' | 'results';
  selectedSlot: string | null;
  signalData: {
    slot: string;
    startTime: string;
    repetitions: number;
    normalRounds: number;
    turboRounds: number;
  } | null;
  onAnalyzeClick: () => void;
  onViewSignals: () => void;
  onAnalysisComplete: (result: string) => void;
  onSignalsComplete: () => void;
  onFindAnotherSignal: () => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({
  step,
  selectedSlot,
  signalData,
  onAnalyzeClick,
  onViewSignals,
  onAnalysisComplete,
  onSignalsComplete,
  onFindAnotherSignal
}) => {
  switch (step) {
    case 'analyzing':
      return (
        <Terminal
          commands={[
            "Carregando módulos...",
            "Injetando script na API RubyX...",
            "Testando payouts...",
            "Detectando padrões...",
          ]}
          progressDuration={15000} // 15 seconds
          onComplete={onAnalysisComplete}
          className="max-w-2xl mx-auto"
        />
      );
      
    case 'signals':
      return (
        <Terminal
          commands={[
            "Aguardando oportunidade...",
            "Validando integridade do sinal...",
            "Gerando instruções...",
          ]}
          progressDuration={15000} // 15 seconds
          onComplete={onSignalsComplete}
          className="max-w-2xl mx-auto"
        />
      );
      
    case 'results':
      return signalData ? (
        <SignalResults 
          signalData={signalData}
          onFindAnotherSignal={onFindAnotherSignal}
        />
      ) : null;
      
    default:
      return (
        <div className="text-center max-w-xl mx-auto">
          <AnalyzeSlots 
            onAnalyzeClick={onAnalyzeClick}
            selectedSlot={selectedSlot}
          />
          
          {selectedSlot && (
            <SelectedSlotCard
              selectedSlot={selectedSlot}
              onViewSignalsClick={onViewSignals}
            />
          )}
        </div>
      );
  }
};

export default DashboardContent;
