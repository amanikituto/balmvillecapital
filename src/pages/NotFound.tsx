
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

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const goToAdmin = () => {
    navigate("/admin");
    window.scrollTo(0, 0);
  };

  const isAdminRelatedPath = location.pathname.includes("admin");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-lg">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you're looking for wasn't found
        </p>
        <p className="text-gray-500 mb-6">
          Path: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{location.pathname}</span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            onClick={goBack}
            variant="outline"
            className="border-balmville-gold/40 hover:bg-balmville-gold/20"
          >
            Go Back
          </Button>
          <Button
            onClick={goHome}
            className="bg-balmville-gold hover:bg-balmville-gold/80 text-balmville-teal"
          >
            Return to Home
          </Button>
          {isAdminRelatedPath && (
            <Button
              onClick={goToAdmin}
              className="bg-balmville-teal hover:bg-balmville-teal/80 text-white"
            >
              Go to Admin Dashboard
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
