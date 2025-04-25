
import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log('User not authenticated, redirecting to login from:', location.pathname);
    }
  }, [isAuthenticated, location.pathname]);

  if (!isAuthenticated) {
    // Redirect to login but preserve the intended destination
    return <Navigate to="/admin-login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
