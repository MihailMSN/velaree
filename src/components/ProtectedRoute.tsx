import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserRole } from '@/hooks/useUserRole';

/**
 * ProtectedRoute - UX-only route protection component
 * 
 * SECURITY NOTE: This component provides UI-level access control only.
 * Actual security is enforced by Row-Level Security (RLS) policies in the database.
 * Never rely on this component for security - it's purely for user experience.
 * All sensitive operations are protected server-side via RLS policies.
 */
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

  // Generic error message to avoid information disclosure
  if (requirePlatformAdmin && !isPlatformAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Page Not Available</h1>
          <p className="text-muted-foreground">This page is not available.</p>
        </div>
      </div>
    );
  }

  if (requireBusinessAccess && !(isPlatformAdmin || isBusinessAdmin || isBusinessUser)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Page Not Available</h1>
          <p className="text-muted-foreground">This page is not available.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
