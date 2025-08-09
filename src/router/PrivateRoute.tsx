import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth/auth.store';

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // Access authentication state from store
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  // If user is NOT authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to='/auth/login' replace />;
  }

  // If authenticated, render children components (protected content)
  return <>{children}</>;
};
