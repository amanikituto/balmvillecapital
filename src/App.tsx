
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import SmartCapitalConnect from './pages/SmartCapitalConnect';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { SubmissionsProvider } from './contexts/SubmissionsContext';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <SubmissionsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/smart-capital-connect" element={<SmartCapitalConnect />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            {/* Add a catch-all route for admin paths */}
            <Route 
              path="/admin/*" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </Router>
      </SubmissionsProvider>
    </AuthProvider>
  );
}

export default App;
