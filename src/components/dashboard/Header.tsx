import React, { useState, useEffect } from 'react';
import { Bell, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile', error);
      }
    };

    fetchProfile();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div className="text-2xl font-semibold text-gray-900">Dashboard</div>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-500">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium text-gray-900">{profile?.fullName}</span>
            <span className="text-xs text-gray-500">{profile?.email}</span>
          </div>
          {profile?.profileImage ? (
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={profile.profileImage}
              alt={profile.fullName}
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-lg font-medium text-purple-600">
                {profile?.fullName?.charAt(0)}
              </span>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-500"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
