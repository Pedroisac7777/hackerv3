
import React from 'react';
import NeonButton from '../NeonButton';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface SelectedSlotCardProps {
  selectedSlot: string;
  onViewSignalsClick: () => void;
}

const SelectedSlotCard: React.FC<SelectedSlotCardProps> = ({ 
  selectedSlot,
  onViewSignalsClick
}) => {
  return (
    <Card className="mb-6 sm:mb-8 bg-black/80 border border-accent/50 p-4 sm:p-6 rounded-md shadow-md backdrop-blur-sm">
      <CardHeader className="border-b border-accent/20 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <CardTitle className="text-xs text-accent/70 tracking-wider">SLOT_SELECTED</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">
          <span className="text-white/80">Slot selecionado:</span> <span className="text-accent font-bold">{selectedSlot}</span>
        </h3>
        
        <NeonButton
          neonColor="purple"
          onClick={onViewSignalsClick}
          className="mx-auto py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg"
        >
          Ver Sinais
        </NeonButton>
      </CardContent>
    </Card>
  );
};

export default SelectedSlotCard;
