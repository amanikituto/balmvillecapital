
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Key } from 'lucide-react';

const ChangeCredentialsModal = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { updateCredentials, user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters');
      return;
    }

    const success = await updateCredentials(username || user?.username || '', currentPassword, newPassword);
    
    if (success) {
      setOpen(false);
      // Reset form
      setUsername('');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setError('Invalid current password');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-transparent border-balmville-gold/40 text-white hover:bg-balmville-gold/20"
        >
          <Key className="h-4 w-4 mr-1" />
          Change Credentials
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-balmville-teal border-balmville-gold/20">
        <DialogHeader>
          <DialogTitle className="text-white">Change Admin Credentials</DialogTitle>
          <DialogDescription className="text-balmville-lightGold">
            Update your username and password
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">New Username (Optional)</Label>
            <Input
              id="username"
              type="text"
              placeholder={user?.username || 'admin'}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white/20 border-balmville-gold/30 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="currentPassword" className="text-white">Current Password</Label>
            <Input
              id="currentPassword"
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="bg-white/20 border-balmville-gold/30 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword" className="text-white">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-white/20 border-balmville-gold/30 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-white">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-white/20 border-balmville-gold/30 text-white placeholder:text-white/50"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <div className="flex justify-end space-x-4 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="bg-transparent border-balmville-gold/40 text-white hover:bg-balmville-gold/20"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-balmville-gold hover:bg-balmville-gold/80 text-balmville-teal"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeCredentialsModal;
