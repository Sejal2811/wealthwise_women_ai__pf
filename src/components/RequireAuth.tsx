import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

export const RequireAuth = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};
