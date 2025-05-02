
import React from 'react';
import { LogOut } from 'lucide-react';
import { logout } from '../../services/auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const DashboardHeader: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    toast.success("Logout realizado com sucesso");
    navigate('/');
  };

  return (
    <header className="py-3 sm:py-4 px-4 sm:px-6 bg-black/90 border-b border-accent/20 relative z-10 flex justify-between items-center backdrop-blur-md">
      <h1 className="text-xl sm:text-2xl font-bold text-primary">Magic Bet</h1>
      <div className="flex items-center gap-3">
        <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs border border-primary/30 flex items-center">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></span>
          Autenticado
        </span>
        <button
          onClick={handleLogout}
          className="text-sm text-red-400 hover:text-red-300 flex items-center gap-1 hover:underline"
        >
          <span>Sair</span>
          <LogOut size={12} />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
