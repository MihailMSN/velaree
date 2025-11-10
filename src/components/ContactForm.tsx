import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
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

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const { error } = await supabase
        .from("contact_requests")
        .insert([{
          name: data.name,
          company: data.company,
          role: data.role,
          email: data.email,
          message: data.message || null,
        }]);
      
      if (error) throw error;
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
    },
    onError: (error) => {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to submit request. Please try again.");
    },
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
  return <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Input name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-lg px-6 py-6 rounded-full" required />
        </div>
        <div>
          <Input name="company" placeholder="Company *" value={formData.company} onChange={handleChange} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-lg px-6 py-6 rounded-full" required />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Input name="role" placeholder="Your Role *" value={formData.role} onChange={handleChange} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-lg px-6 py-6 rounded-full" required />
        </div>
        <div>
          <Input type="email" name="email" placeholder="Work Email *" value={formData.email} onChange={handleChange} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-lg px-6 py-6 rounded-full" required />
        </div>
      </div>

      <div>
        <Textarea name="message" placeholder="Tell us about your needs (optional)" value={formData.message} onChange={handleChange} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-lg px-6 py-4 rounded-2xl min-h-32 resize-none" />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-white bg-black"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Submitting..." : "Book a Demo"}
      </Button>

      <p className="text-primary-foreground/60 text-sm text-center">
        See how Velaree can automate your travel operations
      </p>
    </form>;
};
export default ContactForm;