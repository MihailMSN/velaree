import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Download, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
const leadSchema = z.object({
  email: z.string().trim().email({
    message: "Please enter a valid email address"
  }).max(255),
  name: z.string().trim().max(100).optional(),
  company: z.string().trim().max(100).optional()
});
interface PitchDeckEmailCaptureProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
const PitchDeckEmailCapture = ({
  isOpen,
  onClose,
  onSuccess
}: PitchDeckEmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
  }>({});
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const validation = leadSchema.safeParse({
      email,
      name: name || undefined,
      company: company || undefined
    });
    if (!validation.success) {
      const emailError = validation.error.errors.find(e => e.path[0] === "email");
      if (emailError) {
        setErrors({
          email: emailError.message
        });
      }
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from("pitch_deck_leads").insert({
        email: validation.data.email,
        name: validation.data.name || null,
        company: validation.data.company || null
      });
      if (error) {
        // If duplicate email, still allow download
        if (error.code === "23505") {
          onSuccess();
          return;
        }
        throw error;
      }
      toast.success("Thank you! Your download will start shortly.");
      onSuccess();
    } catch (error) {
      console.error("Error saving lead:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl">Download Pitch Deck</DialogTitle>
              <DialogDescription className="text-sm">
                Get instant access to our 9-slide investor deck
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Work Email *</Label>
            <Input id="email" type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} required className={errors.email ? "border-destructive" : ""} />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" type="text" placeholder="Company Inc." value={company} onChange={e => setCompany(e.target.value)} />
            </div>
          </div>

          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-secondary-foreground">
            {isSubmitting ? <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </> : <>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </>}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By downloading, you agree to receive occasional updates from Velaree. Unsubscribe anytime.
          </p>
        </form>
      </DialogContent>
    </Dialog>;
};
export default PitchDeckEmailCapture;