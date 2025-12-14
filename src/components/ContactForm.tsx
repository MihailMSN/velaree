import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Send, Loader2 } from "lucide-react";
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(2, "Company name required").max(100),
  role: z.string().min(2, "Role required").max(100),
  email: z.string().email("Invalid email address").max(255),
  message: z.string().max(1000).optional()
});
type ContactFormData = z.infer<typeof contactFormSchema>;
const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    role: "",
    email: "",
    message: ""
  });

  // Honeypot field - should always be empty
  const [honeypot, setHoneypot] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await supabase.functions.invoke('submit-contact', {
        body: {
          ...data,
          honeypot // Include honeypot for bot detection
        }
      });
      if (response.error) {
        throw new Error(response.error.message || 'Failed to submit');
      }
      const result = response.data;
      if (result.error) {
        throw new Error(result.error);
      }
      return result;
    },
    onSuccess: () => {
      toast.success("Thank you! Our team will contact you within 24 hours.");
      setFormData({
        name: "",
        company: "",
        role: "",
        email: "",
        message: ""
      });
      setHoneypot("");
    },
    onError: (error: Error) => {
      // Show user-friendly error message
      if (error.message.includes("Too many")) {
        toast.error("Too many submissions. Please try again later.");
      } else {
        toast.error("Failed to submit request. Please try again.");
      }
    }
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactFormSchema.parse(formData);
      mutation.mutate(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const inputClasses = (fieldName: string) => `
    bg-background border-border text-foreground 
    placeholder:text-muted-foreground text-base px-4 py-3 sm:py-3 rounded-xl
    focus:bg-accent focus:border-primary
    transition-all duration-300
    min-h-[48px]
    ${focusedField === fieldName ? 'ring-2 ring-primary/20' : ''}
  `;
  return <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users, bots will fill it */}
        <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
          <Input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground text-sm font-medium">
              Full Name *
            </Label>
            <Input id="name" name="name" placeholder="John Smith" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} className={inputClasses('name')} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground text-sm font-medium">
              Company *
            </Label>
            <Input id="company" name="company" placeholder="Acme Travel Co." value={formData.company} onChange={handleChange} onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)} className={inputClasses('company')} required />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="role" className="text-foreground text-sm font-medium">
              Your Role *
            </Label>
            <Input id="role" name="role" placeholder="CTO, Product Manager, etc." value={formData.role} onChange={handleChange} onFocus={() => setFocusedField('role')} onBlur={() => setFocusedField(null)} className={inputClasses('role')} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground text-sm font-medium">
              Work Email *
            </Label>
            <Input id="email" type="email" name="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className={inputClasses('email')} required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground text-sm font-medium">
            How can we help? (optional)
          </Label>
          <Textarea id="message" name="message" placeholder="Tell us about your current challenges and what you're looking to achieve..." value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} className={`${inputClasses('message')} min-h-28 resize-none`} />
        </div>

        <Button type="submit" size="lg" disabled={mutation.isPending} className="w-full text-base font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl gap-2 group bg-ring">
          {mutation.isPending ? <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </> : <>
              Book Your Demo
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>}
        </Button>

        <p className="text-muted-foreground text-sm text-center">
          By submitting, you agree to receive communications from Velaree.
          <br />
          <span className="text-muted-foreground/70">We respect your privacy.</span>
        </p>
      </form>
    </div>;
};
export default ContactForm;