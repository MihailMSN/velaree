import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Plane } from "lucide-react";

const pnrSchema = z.object({
  pnrCode: z.string().min(6, "PNR code must be at least 6 characters").max(10, "PNR code must not exceed 10 characters"),
  gdsSource: z.string().min(1, "Please select a GDS source"),
  passengerCount: z.number().min(1, "Must have at least 1 passenger").max(99, "Maximum 99 passengers"),
});

interface PNRSubmissionFormProps {
  businessAccountId: string;
  userId: string;
}

const PNRSubmissionForm = ({ businessAccountId, userId }: PNRSubmissionFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [pnrCode, setPnrCode] = useState("");
  const [gdsSource, setGdsSource] = useState("");
  const [passengerCount, setPassengerCount] = useState("1");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validated = pnrSchema.parse({
        pnrCode: pnrCode.toUpperCase(),
        gdsSource,
        passengerCount: parseInt(passengerCount),
      });

      setLoading(true);

      const { error } = await supabase
        .from("pnrs")
        .insert({
          business_account_id: businessAccountId,
          pnr_code: validated.pnrCode,
          submitted_by: userId,
          gds_source: validated.gdsSource,
          passenger_count: validated.passengerCount,
          status: "pending",
        });

      if (error) throw error;

      toast({
        title: "PNR Submitted Successfully",
        description: `PNR ${validated.pnrCode} is now being processed. AI re-shopping will begin shortly.`,
      });

      // Reset form
      setPnrCode("");
      setGdsSource("");
      setPassengerCount("1");
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else if (error instanceof Error) {
        toast({
          title: "Submission Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="pnr-code">PNR Code</Label>
          <Input
            id="pnr-code"
            type="text"
            placeholder="ABC123"
            value={pnrCode}
            onChange={(e) => setPnrCode(e.target.value.toUpperCase())}
            maxLength={10}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gds-source">GDS Source</Label>
          <Select value={gdsSource} onValueChange={setGdsSource} required>
            <SelectTrigger id="gds-source">
              <SelectValue placeholder="Select GDS" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="amadeus">Amadeus</SelectItem>
              <SelectItem value="sabre">Sabre</SelectItem>
              <SelectItem value="travelport">Travelport</SelectItem>
              <SelectItem value="mystifly">Mystifly</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="passenger-count">Passengers</Label>
          <Input
            id="passenger-count"
            type="number"
            min="1"
            max="99"
            value={passengerCount}
            onChange={(e) => setPassengerCount(e.target.value)}
            required
          />
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full md:w-auto">
        <Plane className="mr-2 h-4 w-4" />
        {loading ? "Submitting..." : "Submit PNR for Re-shopping"}
      </Button>
    </form>
  );
};

export default PNRSubmissionForm;
