
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/components/ui/use-toast';

type User = {
  username: string;
  role: string;
};

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  updateCredentials: (username: string, currentPassword: string, newPassword: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Admin credentials stored in localStorage
const ADMIN_CREDENTIALS_KEY = 'balmville_admin_credentials';
const DEFAULT_ADMIN = {
  username: 'admin',
  password: 'balmville2024',
  role: 'admin'
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  // Get current admin credentials or use defaults
  const getAdminCredentials = () => {
    const stored = localStorage.getItem(ADMIN_CREDENTIALS_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Failed to parse stored admin credentials', error);
        // If parsing fails, reset to defaults
        localStorage.setItem(ADMIN_CREDENTIALS_KEY, JSON.stringify(DEFAULT_ADMIN));
        return DEFAULT_ADMIN;
      }
    }
    // If no stored credentials, use defaults and store them
    localStorage.setItem(ADMIN_CREDENTIALS_KEY, JSON.stringify(DEFAULT_ADMIN));
    return DEFAULT_ADMIN;
  };

  // Check local storage for existing user session on initial load
  useEffect(() => {
    console.log("AuthProvider initialized");
    try {
      const storedUser = localStorage.getItem('balmville_user');
      if (storedUser) {
        console.log("Found stored user session");
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        console.log("User session restored:", parsedUser);
      }
    } catch (error) {
      console.error('Failed to parse stored user', error);
      localStorage.removeItem('balmville_user');
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    console.log("Login attempt", { username });
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const adminCredentials = getAdminCredentials();

    // Check credentials
    if (username === adminCredentials.username && password === adminCredentials.password) {
      const loggedInUser = {
        username: adminCredentials.username,
        role: adminCredentials.role
      };
      
      setUser(loggedInUser);
      localStorage.setItem('balmville_user', JSON.stringify(loggedInUser));
      
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
      
      return true;
    } else {
      toast({
        title: "Login failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
      
      return false;
    }
  };

  const updateCredentials = async (username: string, currentPassword: string, newPassword: string): Promise<boolean> => {
    const adminCredentials = getAdminCredentials();
    
    // Verify current password
    if (currentPassword !== adminCredentials.password) {
      toast({
        title: "Update failed",
        description: "Current password is incorrect",
        variant: "destructive",
      });
      return false;
    }

    // Update credentials
    const newCredentials = {
      username: username || adminCredentials.username, // Use existing username if not provided
      password: newPassword,
      role: adminCredentials.role
    };

    // Store new credentials
    localStorage.setItem(ADMIN_CREDENTIALS_KEY, JSON.stringify(newCredentials));
    
    // Update user if logged in
    if (user) {
      const updatedUser = {
        username: newCredentials.username,
        role: newCredentials.role
      };
      
      setUser(updatedUser);
      localStorage.setItem('balmville_user', JSON.stringify(updatedUser));
    }
    
    toast({
      title: "Credentials updated",
      description: "Your admin credentials have been changed successfully",
    });
    
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('balmville_user');
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout,
      updateCredentials,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
