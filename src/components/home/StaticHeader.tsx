import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import axios from 'axios';

export function StaticHeader() {
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
    localStorage.removeItem('token');
    navigate('/auth/login');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">GrowHer</span>
          </Link>
          {profile && (
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
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
