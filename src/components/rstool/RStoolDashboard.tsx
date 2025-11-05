import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import PNRSubmissionForm from "./PNRSubmissionForm";
import PNRList from "./PNRList";
import { LogOut, Building2 } from "lucide-react";

interface BusinessAccount {
  id: string;
  company_name: string;
  contact_email: string;
  contact_phone: string | null;
}

interface RStoolDashboardProps {
  user: User;
}

const RStoolDashboard = ({ user }: RStoolDashboardProps) => {
  const { toast } = useToast();
  const [businessAccounts, setBusinessAccounts] = useState<BusinessAccount[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<BusinessAccount | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBusinessAccounts();
  }, [user]);

  const fetchBusinessAccounts = async () => {
    try {
      // Get user's roles to find associated business accounts
      const { data: roles, error: rolesError } = await supabase
        .from("user_roles")
        .select("business_account_id")
        .eq("user_id", user.id);

      if (rolesError) throw rolesError;

      if (roles && roles.length > 0) {
        const accountIds = roles.map(r => r.business_account_id);
        
        const { data: accounts, error: accountsError } = await supabase
          .from("business_accounts")
          .select("*")
          .in("id", accountIds);

        if (accountsError) throw accountsError;

        setBusinessAccounts(accounts || []);
        if (accounts && accounts.length > 0) {
          setSelectedAccount(accounts[0]);
        }
      }
    } catch (error) {
      toast({
        title: "Error loading business accounts",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out successfully",
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-24 min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-xl text-muted-foreground">Loading dashboard...</div>
      </div>
    );
  }

  if (!selectedAccount) {
    return (
      <div className="container mx-auto px-6 py-24 min-h-[calc(100vh-200px)]">
        <Card>
          <CardHeader>
            <CardTitle>No Business Account Found</CardTitle>
            <CardDescription>
              You don't have access to any business accounts yet. Please contact support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24 min-h-[calc(100vh-200px)]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">RSTool Dashboard</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <span>{selectedAccount.company_name}</span>
          </div>
        </div>
        <Button onClick={handleLogout} variant="outline">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      <div className="grid gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Submit PNR for Re-shopping</CardTitle>
            <CardDescription>
              Enter your PNR code to start the AI-powered re-shopping process across global GDS networks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PNRSubmissionForm 
              businessAccountId={selectedAccount.id}
              userId={user.id}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your PNRs</CardTitle>
            <CardDescription>
              View and manage your submitted PNRs and their re-shopping results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PNRList businessAccountId={selectedAccount.id} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RStoolDashboard;
