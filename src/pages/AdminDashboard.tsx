
import { useState, useEffect } from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import SubmissionTable from '../components/admin/SubmissionTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/contexts/AuthContext';
import { useSubmissions } from '@/contexts/SubmissionsContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'startups' | 'investors'>('startups');
  const { user, isAuthenticated } = useAuth();
  const { startupSubmissions, investorSubmissions } = useSubmissions();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("AdminDashboard mounted, auth status:", isAuthenticated);
    
    // Authentication check
    if (!isAuthenticated) {
      console.log("User not authenticated, redirecting to login");
      navigate('/admin-login');
    } else {
      console.log("User authenticated:", user?.username);
      
      // Show welcome toast
      toast({
        title: "Welcome to Admin Dashboard",
        description: `Logged in as ${user?.username}`,
      });
    }
    
    // Always scroll to top when this component mounts
    window.scrollTo(0, 0);
  }, [isAuthenticated, navigate, user]);

  // Early return with loading indicator if still checking auth
  if (isAuthenticated === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-balmville-teal">
        <div className="text-white text-xl">Loading admin dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-balmville-teal">
      <AdminHeader />
      <main className="flex-grow pt-6 pb-12 px-4 md:px-6">
        <div className="container-custom max-w-7xl">
          <div className="mb-8">
            <Tabs defaultValue="startups" className="w-full" onValueChange={(value) => setActiveTab(value as 'startups' | 'investors')}>
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 bg-balmville-lightTeal">
                <TabsTrigger 
                  value="startups"
                  className="data-[state=active]:bg-balmville-gold data-[state=active]:text-balmville-teal"
                >
                  Startups ({startupSubmissions?.length || 0})
                </TabsTrigger>
                <TabsTrigger 
                  value="investors"
                  className="data-[state=active]:bg-balmville-gold data-[state=active]:text-balmville-teal"
                >
                  Investors ({investorSubmissions?.length || 0})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="startups" className="mt-0">
                <SubmissionTable submissions={startupSubmissions || []} type="startup" />
              </TabsContent>
              
              <TabsContent value="investors" className="mt-0">
                <SubmissionTable submissions={investorSubmissions || []} type="investor" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
