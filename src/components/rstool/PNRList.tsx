import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface PNR {
  id: string;
  pnr_code: string;
  status: string;
  gds_source: string | null;
  passenger_count: number | null;
  original_price: number | null;
  best_price: number | null;
  potential_savings: number | null;
  created_at: string;
}

interface PNRListProps {
  businessAccountId: string;
}

const PNRList = ({ businessAccountId }: PNRListProps) => {
  const { toast } = useToast();
  const [pnrs, setPnrs] = useState<PNR[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPNRs();
    
    // Set up realtime subscription
    const channel = supabase
      .channel('pnrs-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'pnrs',
          filter: `business_account_id=eq.${businessAccountId}`
        },
        () => {
          fetchPNRs();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [businessAccountId]);

  const fetchPNRs = async () => {
    try {
      const { data, error } = await supabase
        .from("pnrs")
        .select("*")
        .eq("business_account_id", businessAccountId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPnrs(data || []);
    } catch (error) {
      toast({
        title: "Error loading PNRs",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      pending: "secondary",
      processing: "default",
      completed: "outline",
      failed: "destructive",
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  if (loading) {
    return <div className="text-muted-foreground">Loading PNRs...</div>;
  }

  if (pnrs.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No PNRs submitted yet. Submit your first PNR to start re-shopping!
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>PNR Code</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>GDS</TableHead>
            <TableHead>Passengers</TableHead>
            <TableHead>Original Price</TableHead>
            <TableHead>Best Price</TableHead>
            <TableHead>Savings</TableHead>
            <TableHead>Submitted</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pnrs.map((pnr) => (
            <TableRow key={pnr.id}>
              <TableCell className="font-mono font-semibold">{pnr.pnr_code}</TableCell>
              <TableCell>{getStatusBadge(pnr.status)}</TableCell>
              <TableCell className="uppercase">{pnr.gds_source || "-"}</TableCell>
              <TableCell>{pnr.passenger_count || "-"}</TableCell>
              <TableCell>
                {pnr.original_price ? `$${pnr.original_price.toFixed(2)}` : "-"}
              </TableCell>
              <TableCell>
                {pnr.best_price ? `$${pnr.best_price.toFixed(2)}` : "-"}
              </TableCell>
              <TableCell>
                {pnr.potential_savings ? (
                  <span className="text-green-600 font-semibold">
                    ${pnr.potential_savings.toFixed(2)}
                  </span>
                ) : "-"}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {format(new Date(pnr.created_at), "MMM dd, yyyy HH:mm")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PNRList;
