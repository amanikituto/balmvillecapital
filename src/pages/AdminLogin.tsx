
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Always scroll to top when this component mounts
    window.scrollTo(0, 0);
    
    // Debug log
    console.log("AdminLogin component mounted", { isAuthenticated });
  }, []);

  useEffect(() => {
    // Check if already authenticated and redirect if needed
    // Only redirect if authentication state is determined (not undefined)
    if (isAuthenticated === true) {
      console.log("User is authenticated, redirecting to admin");
      
      // Get the intended destination from location state, or default to '/admin'
      const from = location.state?.from?.pathname || '/admin';
      console.log(`Redirecting to ${from}`);
      
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted", { username });
    setIsLoading(true);
    
    try {
      const success = await login(username, password);
      console.log("Login attempt result:", success);
      
      if (success) {
        toast({
          title: "Login successful",
          description: "You are now being redirected to the dashboard",
        });
        
        // Get the intended destination from location state, or default to '/admin'
        const from = location.state?.from?.pathname || '/admin';
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state if we're still determining auth status
  if (isAuthenticated === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-balmville-teal">
        <div className="text-white text-xl">Checking authentication status...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-balmville-teal">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur border-balmville-gold/20">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-balmville-gold" />
            </div>
            <CardTitle className="text-2xl font-serif text-white">Admin Login</CardTitle>
            <CardDescription className="text-balmville-lightGold">
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-white">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="admin"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white/20 border-balmville-gold/30 text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/20 border-balmville-gold/30 text-white placeholder:text-white/50"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full bg-balmville-gold hover:bg-balmville-gold/80 text-balmville-teal"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLogin;
