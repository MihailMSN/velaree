import React from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { useUserRole } from '@/hooks/useUserRole';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const { user } = useAuth();
  const { isPlatformAdmin, isBusinessAdmin, isBusinessUser } = useUserRole();
  const navigate = useNavigate();

  return (
    <ProtectedRoute requireBusinessAccess>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1 container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-muted-foreground mb-8">{user?.email}</p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isPlatformAdmin && (
              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/admin')}>
                <CardHeader>
                  <CardTitle>Platform Admin</CardTitle>
                  <CardDescription>Manage the entire platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Go to Admin Panel
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>PNR Management</CardTitle>
                <CardDescription>Submit and track your PNRs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Submit PNRs and view reshop opportunities to maximize savings.
                </p>
                <Button variant="outline" className="w-full">
                  View PNRs
                </Button>
              </CardContent>
            </Card>

            {(isBusinessAdmin || isPlatformAdmin) && (
              <Card>
                <CardHeader>
                  <CardTitle>Team Management</CardTitle>
                  <CardDescription>Manage your team members</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add or remove team members and manage permissions.
                  </p>
                  <Button variant="outline" className="w-full">
                    Manage Team
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage your profile and account preferences.
                </p>
                <Button variant="outline" className="w-full">
                  Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Your Role</h2>
            <div className="flex gap-2">
              {isPlatformAdmin && (
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                  Platform Admin
                </span>
              )}
              {isBusinessAdmin && (
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Business Admin
                </span>
              )}
              {isBusinessUser && (
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                  Business User
                </span>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
