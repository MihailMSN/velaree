import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { jsPDF } from "jspdf";

const PitchDeckDownload = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePitchDeck = async () => {
    setIsGenerating(true);
    
    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1920, 1080]
      });

      const width = 1920;
      const height = 1080;
      
      // Brand colors
      const primaryDark = "#0a1628";
      const primaryTeal = "#14b8a6";
      const accentOrange = "#f97316";
      const textLight = "#f8fafc";
      const textMuted = "#94a3b8";

      // Helper function to add slide background
      const addSlideBackground = () => {
        pdf.setFillColor(primaryDark);
        pdf.rect(0, 0, width, height, "F");
        
        // Add subtle accent circles
        pdf.setFillColor(20, 50, 70);
        pdf.circle(width * 0.8, height * 0.2, 400, "F");
        pdf.circle(width * 0.2, height * 0.8, 300, "F");
      };

      // Helper function to add logo
      const addLogo = () => {
        pdf.setFontSize(32);
        pdf.setTextColor(primaryTeal);
        pdf.setFont("helvetica", "bold");
        pdf.text("V", 80, 80);
        pdf.setTextColor(textLight);
        pdf.text("elaree", 105, 80);
      };

      // Helper function to add page number
      const addPageNumber = (num: number, total: number) => {
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${num} / ${total}`, width - 100, height - 50);
      };

      // ===== SLIDE 1: Cover =====
      addSlideBackground();
      
      // Large V logo
      pdf.setFontSize(300);
      pdf.setTextColor(primaryTeal);
      pdf.setFont("helvetica", "bold");
      pdf.text("V", width / 2 - 200, height / 2 - 50);
      
      pdf.setFontSize(120);
      pdf.setTextColor(textLight);
      pdf.text("elaree", width / 2 - 60, height / 2 - 50);
      
      pdf.setFontSize(48);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("Next-Generation Travel Technology", width / 2, height / 2 + 80, { align: "center" });
      
      pdf.setFontSize(28);
      pdf.text("Powering OTAs, TMCs, and Airlines Worldwide", width / 2, height / 2 + 140, { align: "center" });
      
      addPageNumber(1, 9);

      // ===== SLIDE 2: The Problem =====
      pdf.addPage();
      addSlideBackground();
      addLogo();
      
      pdf.setFontSize(64);
      pdf.setTextColor(textLight);
      pdf.setFont("helvetica", "bold");
      pdf.text("The Challenge", width / 2, 200, { align: "center" });
      
      const problems = [
        { title: "Manual Processes", desc: "70% of travel operations still rely on manual, error-prone workflows" },
        { title: "Fragmented Systems", desc: "Multiple GDS connections, each requiring separate integration and maintenance" },
        { title: "Limited Inventory", desc: "Traditional systems access only a fraction of available global inventory" },
        { title: "Slow Response Times", desc: "Legacy systems struggle with modern performance expectations" }
      ];
      
      problems.forEach((problem, i) => {
        const y = 320 + i * 160;
        pdf.setFillColor(accentOrange);
        pdf.circle(200, y, 12, "F");
        
        pdf.setFontSize(36);
        pdf.setTextColor(textLight);
        pdf.setFont("helvetica", "bold");
        pdf.text(problem.title, 240, y + 10);
        
        pdf.setFontSize(24);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(problem.desc, 240, y + 50);
      });
      
      addPageNumber(2, 9);

      // ===== SLIDE 3: The Solution =====
      pdf.addPage();
      addSlideBackground();
      addLogo();
      
      pdf.setFontSize(64);
      pdf.setTextColor(textLight);
      pdf.setFont("helvetica", "bold");
      pdf.text("Our Solution", width / 2, 200, { align: "center" });
      
      pdf.setFontSize(32);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("One unified platform for the entire travel technology stack", width / 2, 280, { align: "center" });
      
      const solutions = [
        { icon: "API", title: "Unified API", desc: "Single integration to access 200+ airlines and all major GDS systems" },
        { icon: "AI", title: "AI Automation", desc: "Intelligent workflows that handle ticketing, changes, and notifications" },
        { icon: "DATA", title: "Real-time Analytics", desc: "Complete visibility into operations with actionable insights" }
      ];
      
      solutions.forEach((solution, i) => {
        const x = 280 + i * 500;
        
        pdf.setFillColor(20, 50, 70);
        pdf.roundedRect(x - 100, 380, 400, 500, 20, 20, "F");
        
        pdf.setFontSize(48);
        pdf.setTextColor(primaryTeal);
        pdf.setFont("helvetica", "bold");
        pdf.text(solution.icon, x + 100, 480, { align: "center" });
        
        pdf.setFontSize(32);
        pdf.setTextColor(textLight);
        pdf.text(solution.title, x + 100, 560, { align: "center" });
        
        pdf.setFontSize(22);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        const lines = pdf.splitTextToSize(solution.desc, 340);
        pdf.text(lines, x + 100, 640, { align: "center" });
      });
      
      addPageNumber(3, 9);

      // ===== SLIDE 4: Key Metrics =====
      pdf.addPage();
      addSlideBackground();
      addLogo();
      
      pdf.setFontSize(64);
      pdf.setTextColor(textLight);
      pdf.setFont("helvetica", "bold");
      pdf.text("Platform Performance", width / 2, 200, { align: "center" });
      
      const metrics = [
        { value: "70%", label: "Task Automation", sub: "20 hours saved per week" },
        { value: "1M+", label: "Bookings/Month", sub: "99.9% uptime SLA" },
        { value: "10x", label: "More Inventory", sub: "<500ms response time" },
        { value: "200+", label: "Airlines Connected", sub: "All major GDS systems" }
      ];
      
      metrics.forEach((metric, i) => {
        const x = 180 + i * 420;
        
        pdf.setFillColor(20, 60, 60);
        pdf.roundedRect(x, 350, 360, 450, 20, 20, "F");
        
        pdf.setFontSize(100);
        pdf.setTextColor(primaryTeal);
        pdf.setFont("helvetica", "bold");
        pdf.text(metric.value, x + 180, 500, { align: "center" });
        
        pdf.setFontSize(32);
        pdf.setTextColor(textLight);
        pdf.text(metric.label, x + 180, 580, { align: "center" });
        
        pdf.setFontSize(22);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(metric.sub, x + 180, 640, { align: "center" });
      });
      
      addPageNumber(4, 9);

      // ===== SLIDE 5: Product Suite =====
      pdf.addPage();
      addSlideBackground();
      addLogo();
      
      pdf.setFontSize(64);
      pdf.setTextColor(textLight);
      pdf.setFont("helvetica", "bold");
      pdf.text("Product Suite", width / 2, 200, { align: "center" });
      
      const products = [
        { 
          name: "aSuite", 
          tagline: "CRM & CMS Platform",
          features: ["Customer management", "Content control", "White-label ready", "Analytics dashboard"]
        },
        { 
          name: "aRStool", 
          tagline: "AI Re-Shopping Engine",
          features: ["24/7 PNR monitoring", "Auto fare optimization", "15-20% savings", "Multi-GDS search"]
        },
        { 
          name: "UnifyTool", 
          tagline: "Unified Platform",
          features: ["Click-to-book", "Private fares", "Automation suite", "Complete solution"]
        }
      ];
      
      products.forEach((product, i) => {
        const x = 180 + i * 560;
        
        pdf.setFillColor(50, 30, 20);
        pdf.roundedRect(x, 300, 480, 600, 20, 20, "F");
        
        pdf.setFontSize(48);
        pdf.setTextColor(accentOrange);
        pdf.setFont("helvetica", "bold");
        pdf.text(product.name, x + 240, 400, { align: "center" });
        
        pdf.setFontSize(26);
        pdf.setTextColor(textLight);
        pdf.setFont("helvetica", "normal");
        pdf.text(product.tagline, x + 240, 460, { align: "center" });
        
        product.features.forEach((feature, j) => {
          pdf.setFontSize(22);
          pdf.setTextColor(textMuted);
          pdf.text(`• ${feature}`, x + 60, 540 + j * 50);
        });
      });
      
      addPageNumber(5, 9);

      // ===== SLIDE 6: Enterprise Solutions =====
      pdf.addPage();
      addSlideBackground();
      addLogo();
      
      pdf.setFontSize(64);
      pdf.setTextColor(textLight);
      pdf.setFont("helvetica", "bold");
      pdf.text("Enterprise Solutions", width / 2, 200, { align: "center" });
      
      const enterpriseSolutions = [
        { value: "60s", title: "Click-to-Book", desc: "Complete booking in under a minute with streamlined workflows" },
        { value: "30%", title: "Fare Savings", desc: "Access private fares and optimize pricing automatically" },
        { value: "70%", title: "Automation", desc: "Reduce manual operations with intelligent automation" }
      ];
      
      enterpriseSolutions.forEach((solution, i) => {
        const x = 220 + i * 520;
        
        pdf.setFillColor(20, 50, 70);
        pdf.roundedRect(x, 320, 440, 520, 20, 20, "F");
        
        pdf.setFontSize(100);
        pdf.setTextColor(primaryTeal);
        pdf.setFont("helvetica", "bold");
        pdf.text(solution.value, x + 220, 480, { align: "center" });
        
        pdf.setFontSize(36);
        pdf.setTextColor(textLight);
        pdf.text(solution.title, x + 220, 560, { align: "center" });
        
        pdf.setFontSize(22);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        const lines = pdf.splitTextToSize(solution.desc, 380);
        pdf.text(lines, x + 220, 620, { align: "center" });
      });
      
      addPageNumber(6, 9);

      // ===== SLIDE 7: Case Studies =====
      pdf.addPage();
      addSlideBackground();
      addLogo();
      
      pdf.setFontSize(64);
      pdf.setTextColor(textLight);
      pdf.setFont("helvetica", "bold");
      pdf.text("Customer Success", width / 2, 200, { align: "center" });
      
      const caseStudies = [
        { 
          type: "European OTA",
          challenge: "Manual booking errors causing refunds",
          result: "84% Error Reduction",
          metric: "$890K annual savings"
        },
        { 
          type: "Corporate TMC",
          challenge: "Missing post-sale savings opportunities",
          result: "$2.4M Additional Revenue",
          metric: "First year implementation"
        },
        { 
          type: "Asia-Pacific Consolidator",
          challenge: "Slow ticketing and support burden",
          result: "<2 Min Ticketing",
          metric: "92% support reduction"
        }
      ];
      
      caseStudies.forEach((study, i) => {
        const x = 180 + i * 560;
        
        pdf.setFillColor(50, 30, 20);
        pdf.roundedRect(x, 300, 480, 580, 20, 20, "F");
        
        pdf.setFontSize(28);
        pdf.setTextColor(accentOrange);
        pdf.setFont("helvetica", "bold");
        pdf.text(study.type, x + 240, 380, { align: "center" });
        
        pdf.setFontSize(20);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        const challengeLines = pdf.splitTextToSize(study.challenge, 400);
        pdf.text(challengeLines, x + 240, 440, { align: "center" });
        
        pdf.setFontSize(48);
        pdf.setTextColor(textLight);
        pdf.setFont("helvetica", "bold");
        pdf.text(study.result, x + 240, 580, { align: "center" });
        
        pdf.setFontSize(24);
        pdf.setTextColor(primaryTeal);
        pdf.setFont("helvetica", "normal");
        pdf.text(study.metric, x + 240, 650, { align: "center" });
      });
      
      addPageNumber(7, 9);

      // ===== SLIDE 8: Partners =====
      pdf.addPage();
      addSlideBackground();
      addLogo();
      
      pdf.setFontSize(64);
      pdf.setTextColor(textLight);
      pdf.setFont("helvetica", "bold");
      pdf.text("Trusted Integrations", width / 2, 200, { align: "center" });
      
      pdf.setFontSize(28);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("Connected to the world's leading travel technology providers", width / 2, 280, { align: "center" });
      
      const partners = [
        ["Amadeus", "Sabre", "Travelport", "IATA"],
        ["Google Flights", "Mystifly", "BCD Travel", "Fora"]
      ];
      
      partners.forEach((row, rowIndex) => {
        row.forEach((partner, i) => {
          const x = 280 + i * 380;
          const y = 420 + rowIndex * 280;
          
          pdf.setFillColor(30, 40, 50);
          pdf.roundedRect(x, y, 300, 180, 15, 15, "F");
          
          pdf.setFontSize(32);
          pdf.setTextColor(textLight);
          pdf.setFont("helvetica", "bold");
          pdf.text(partner, x + 150, y + 100, { align: "center" });
        });
      });
      
      addPageNumber(8, 9);

      // ===== SLIDE 9: Contact =====
      pdf.addPage();
      addSlideBackground();
      
      // Large centered logo
      pdf.setFontSize(200);
      pdf.setTextColor(primaryTeal);
      pdf.setFont("helvetica", "bold");
      pdf.text("V", width / 2 - 140, height / 2 - 100);
      
      pdf.setFontSize(80);
      pdf.setTextColor(textLight);
      pdf.text("elaree", width / 2 - 10, height / 2 - 100);
      
      pdf.setFontSize(48);
      pdf.setTextColor(textLight);
      pdf.setFont("helvetica", "bold");
      pdf.text("Ready to Transform Your Travel Business?", width / 2, height / 2 + 50, { align: "center" });
      
      pdf.setFontSize(32);
      pdf.setTextColor(primaryTeal);
      pdf.setFont("helvetica", "normal");
      pdf.text("velaree.com", width / 2, height / 2 + 130, { align: "center" });
      
      pdf.setFontSize(28);
      pdf.setTextColor(textMuted);
      pdf.text("Schedule a Demo Today", width / 2, height / 2 + 190, { align: "center" });
      
      addPageNumber(9, 9);

      // Save the PDF
      pdf.save("Velaree-Pitch-Deck.pdf");
      
    } catch (error) {
      console.error("Error generating pitch deck:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={generatePitchDeck}
      disabled={isGenerating}
      variant="outline"
      size="lg"
      className="border-primary/50 hover:bg-primary/10 hover:border-primary"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="w-5 h-5 mr-2" />
          Download Pitch Deck
        </>
      )}
    </Button>
  );
};

export default PitchDeckDownload;
