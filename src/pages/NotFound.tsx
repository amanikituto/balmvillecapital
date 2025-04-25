
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
        <p className="text-2xl text-gray-800 mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
          <br />
          <span className="text-sm text-gray-500">
            Path: {location.pathname}
          </span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/')}
            className="bg-balmville-teal hover:bg-balmville-teal/90"
          >
            Return to Home
          </Button>
          <Button 
            onClick={() => navigate('/admin-login')}
            variant="outline"
          >
            Go to Admin Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
