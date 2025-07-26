import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, fullName: string, age: string, profileImage: string | null) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.post('/api/auth/register', { email, password, fullName, age, profileImage });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/'); // Navigate to home page after successful registration
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/');
  };

  return {
    user,
    isLoading,
    error,
    login,
    register,
    logout
  };
}
