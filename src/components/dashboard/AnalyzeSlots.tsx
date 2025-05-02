
import React from 'react';
import NeonButton from '../NeonButton';

interface AnalyzeSlotsProps {
  onAnalyzeClick: () => void;
  selectedSlot: string | null;
}

const AnalyzeSlots: React.FC<AnalyzeSlotsProps> = ({ 
  onAnalyzeClick,
  selectedSlot
}) => {
  return (
    <div className="text-center max-w-xl mx-auto">
      {!selectedSlot && (
        <NeonButton
          neonColor="green"
          onClick={onAnalyzeClick}
          className="py-3 sm:py-4 px-6 sm:px-10 text-lg sm:text-xl"
        >
          Analisar Slots
        </NeonButton>
      )}
    </div>
  );
};

export default AnalyzeSlots;
