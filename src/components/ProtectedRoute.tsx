import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserRole } from '@/hooks/useUserRole';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requirePlatformAdmin?: boolean;
  requireBusinessAccess?: boolean;
}

export const ProtectedRoute = ({ 
  children, 
  requirePlatformAdmin = false,
  requireBusinessAccess = false,
}: ProtectedRouteProps) => {
  const { user, loading: authLoading } = useAuth();
  const { isPlatformAdmin, isBusinessAdmin, isBusinessUser, isLoading: roleLoading } = useUserRole();

  if (authLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (requirePlatformAdmin && !isPlatformAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  if (requireBusinessAccess && !(isPlatformAdmin || isBusinessAdmin || isBusinessUser)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground">You need a business account to access this page.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
