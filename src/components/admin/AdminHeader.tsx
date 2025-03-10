
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const AdminHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6 px-4 md:px-6 border-b bg-balmville-lightTeal/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => navigate('/')}
            className="bg-transparent border-balmville-gold/40 text-white hover:bg-balmville-gold/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-serif font-bold text-white">
            Smart Capital <span className="gradient-text">Admin</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
