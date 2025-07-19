// components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import type{ ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const isAuthenticated = !!localStorage.getItem('token'); 

  return isAuthenticated ? children : <Navigate to="/signin" replace />;
}
