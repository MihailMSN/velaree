import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import ContactRequestsTable from '@/components/admin/ContactRequestsTable';
import PlatformStatsEditor from '@/components/admin/PlatformStatsEditor';

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Platform Admin Dashboard</h1>
      <p className="text-muted-foreground mb-8">Manage your platform operations</p>
      
      <div className="grid gap-6">
        <ContactRequestsTable />
        <PlatformStatsEditor />
      </div>
    </div>
  );
};

const AdminContactsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Contact Requests</h1>
      <ContactRequestsTable />
    </div>
  );
};

const AdminStatsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Platform Statistics</h1>
      <PlatformStatsEditor />
    </div>
  );
};

const AdminSettingsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Settings</h1>
      <p className="text-muted-foreground">Admin settings coming soon...</p>
    </div>
  );
};

const Admin = () => {
  return (
    <ProtectedRoute requirePlatformAdmin>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AdminSidebar />
          <main className="flex-1">
            <header className="h-14 flex items-center border-b px-4">
              <SidebarTrigger />
            </header>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/contacts" element={<AdminContactsPage />} />
              <Route path="/stats" element={<AdminStatsPage />} />
              <Route path="/settings" element={<AdminSettingsPage />} />
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </Routes>
          </main>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
};

export default Admin;
