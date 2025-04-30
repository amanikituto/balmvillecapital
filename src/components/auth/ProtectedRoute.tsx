
import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "@/components/ui/use-toast";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    console.log('ProtectedRoute mounted, checking auth:', { 
      isAuthenticated, 
      path: location.pathname 
    });
    
    if (isAuthenticated === false) {
      console.log('Authentication required - redirecting from:', location.pathname);
    } else if (isAuthenticated === true) {
      console.log('User is authenticated, accessing:', location.pathname);
    } else {
      console.log('Authentication state is loading...');
    }
  }, [isAuthenticated, location.pathname]);

  // If authentication is undefined (still loading), show a loading state
  if (isAuthenticated === undefined) {
    console.log('Auth state is loading, showing loading state');
    return (
      <div className="min-h-screen flex items-center justify-center bg-balmville-teal">
        <div className="text-white text-xl">Verifying authentication...</div>
      </div>
    );
  }

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    // Display a toast notification about the redirect
    console.log('Not authenticated, showing toast and redirecting to login');
    toast({
      title: "Authentication Required",
      description: "Please log in to access this page",
    });
    
    // Navigate to login and store the intended destination
    return <Navigate to="/admin-login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
