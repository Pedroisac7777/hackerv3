
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MatrixRain from '../components/MatrixRain';
import { toast } from 'sonner';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardContent from '../components/dashboard/DashboardContent';

const Dashboard: React.FC = () => {
  const [step, setStep] = useState<'initial' | 'analyzing' | 'signals' | 'results'>('initial');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [signalData, setSignalData] = useState<{
    slot: string;
    startTime: string;
    repetitions: number;
    normalRounds: number;
    turboRounds: number;
  } | null>(null);
  
  const navigate = useNavigate();
  
  const handleAnalyzeClick = () => {
    setStep('analyzing');
  };
  
  const handleAnalysisComplete = (result: string) => {
    setSelectedSlot(result);
    setStep('initial'); // Reset to initial to show the "Ver Sinais" button
  };
  
  const handleViewSignals = () => {
    setStep('signals');
  };
  
  const handleSignalsComplete = () => {
    // Generate signal data
    const now = new Date();
    // Add random minutes (3 or 5)
    const minutesToAdd = Math.random() > 0.5 ? 3 : 5;
    now.setMinutes(now.getMinutes() + minutesToAdd);
    
    const startTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const normalRounds = Math.floor(Math.random() * 5) + 4; // Random between 4-8
    
    setSignalData({
      slot: selectedSlot || 'Unknown',
      startTime,
      repetitions: 2, // Always 2x
      normalRounds,
      turboRounds: normalRounds, // Same as normal rounds
    });
    
    setStep('results');
  };
  
  const handleFindAnotherSignal = () => {
    setStep('initial');
    setSelectedSlot(null);
    setSignalData(null);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <MatrixRain />
      
      <DashboardHeader />
      
      {/* Main content */}
      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-12 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16 text-white tracking-wide">
          Magic Bet - Painel de Sinais
        </h2>
        
        <DashboardContent 
          step={step}
          selectedSlot={selectedSlot}
          signalData={signalData}
          onAnalyzeClick={handleAnalyzeClick}
          onViewSignals={handleViewSignals}
          onAnalysisComplete={handleAnalysisComplete}
          onSignalsComplete={handleSignalsComplete}
          onFindAnotherSignal={handleFindAnotherSignal}
        />
      </main>
    </div>
  );
};

export default Dashboard;
