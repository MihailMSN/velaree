import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2, Presentation } from "lucide-react";
import { jsPDF } from "jspdf";
import PitchDeckViewer from "./PitchDeckViewer";
import PitchDeckEmailCapture from "./PitchDeckEmailCapture";

const PitchDeckDownload = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showViewer, setShowViewer] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);

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
      
      // Light theme colors (matching website)
      const bgWhite = "#FFFFFF";
      const bgMuted = "#F8F9FA";
      const textPrimary = "#24292E"; // hsl(210, 11%, 15%)
      const textMuted = "#6B7280";
      const accentBeige = "#E8DED4"; // hsl(32, 28%, 88%)
      const primaryBlue = "#3B82F6";
      const primaryViolet = "#8B5CF6";
      const primaryEmerald = "#10B981";
      const primaryAmber = "#F59E0B";

      // Helper function to add light slide background
      const addSlideBackground = (variant: "white" | "muted" | "accent" = "white") => {
        if (variant === "white") {
          pdf.setFillColor(bgWhite);
        } else if (variant === "muted") {
          pdf.setFillColor(248, 249, 250);
        } else {
          pdf.setFillColor(252, 250, 247);
        }
        pdf.rect(0, 0, width, height, "F");
      };

      // Helper function to add logo
      const addLogo = () => {
        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text("V", 80, 70);
        pdf.setTextColor(textMuted);
        pdf.text("elaree", 100, 70);
      };

      // Helper function to add page number
      const addPageNumber = (num: number, total: number) => {
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${num} / ${total}`, width - 100, height - 40);
      };

      const totalSlides = 13;

      // ===== SLIDE 1: Cover =====
      addSlideBackground("white");
      
      pdf.setFontSize(200);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("V", width / 2 - 120, height / 2 - 20);
      
      pdf.setFontSize(100);
      pdf.text("elaree", width / 2 + 10, height / 2 - 20);
      
      pdf.setFontSize(36);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("Next-Generation Travel Technology", width / 2, height / 2 + 80, { align: "center" });
      
      pdf.setFontSize(24);
      pdf.text("Unified APIs • AI Automation • Real-time Analytics", width / 2, height / 2 + 130, { align: "center" });
      
      // Accent badge
      pdf.setFillColor(232, 222, 212);
      pdf.roundedRect(width / 2 - 120, height / 2 + 180, 240, 40, 20, 20, "F");
      pdf.setFontSize(16);
      pdf.setTextColor(textPrimary);
      pdf.text("Investor Presentation 2025", width / 2, height / 2 + 206, { align: "center" });
      
      addPageNumber(1, totalSlides);

      // ===== SLIDE 2: Vision =====
      pdf.addPage();
      addSlideBackground("accent");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Our Vision", width / 2, 180, { align: "center" });
      
      pdf.setFontSize(32);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "italic");
      const visionText = '"Empowering travel businesses with intelligent technology that transforms operations, reduces costs, and unlocks new revenue opportunities."';
      const visionLines = pdf.splitTextToSize(visionText, 1400);
      pdf.text(visionLines, width / 2, 320, { align: "center" });
      
      // Stats
      const visionStats = [
        { value: "200+", label: "Airlines Connected" },
        { value: "70%", label: "Task Automation" },
        { value: "99.9%", label: "Platform Uptime" },
      ];
      
      visionStats.forEach((stat, i) => {
        const x = 440 + i * 520;
        pdf.setFontSize(72);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(stat.value, x, 600, { align: "center" });
        
        pdf.setFontSize(22);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(stat.label, x, 660, { align: "center" });
      });
      
      addPageNumber(2, totalSlides);

      // ===== SLIDE 3: Market Problem =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Market Problem", width / 2, 180, { align: "center" });
      
      const problems = [
        { title: "Manual Processes", desc: "70% of travel operations still rely on error-prone manual workflows" },
        { title: "Fragmented Systems", desc: "Multiple GDS connections require separate integrations and maintenance" },
        { title: "Limited Inventory", desc: "Traditional systems access only a fraction of global inventory" },
        { title: "Slow Performance", desc: "Legacy systems can't meet modern speed and reliability expectations" },
      ];
      
      problems.forEach((problem, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 280 + col * 720;
        const y = 320 + row * 280;
        
        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x - 40, y - 40, 640, 200, 16, 16, "F");
        
        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(problem.title, x, y + 20);
        
        pdf.setFontSize(20);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        const lines = pdf.splitTextToSize(problem.desc, 560);
        pdf.text(lines, x, y + 70);
      });
      
      addPageNumber(3, totalSlides);

      // ===== SLIDE 4: Our Solution =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Our Solution", width / 2, 160, { align: "center" });
      
      pdf.setFontSize(24);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("One unified platform for the entire travel technology stack", width / 2, 220, { align: "center" });
      
      const solutions = [
        { title: "Unified API", desc: "Single integration to access 200+ airlines and all major GDS systems", color: [59, 130, 246] },
        { title: "AI Automation", desc: "Intelligent workflows handling ticketing, changes, and notifications", color: [139, 92, 246] },
        { title: "Real-time Analytics", desc: "Complete visibility into operations with actionable insights", color: [16, 185, 129] },
      ];
      
      solutions.forEach((solution, i) => {
        const x = 220 + i * 520;
        
        pdf.setFillColor(solution.color[0], solution.color[1], solution.color[2]);
        pdf.setDrawColor(solution.color[0], solution.color[1], solution.color[2]);
        pdf.roundedRect(x, 300, 440, 500, 16, 16, "F");
        
        pdf.setFontSize(32);
        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.text(solution.title, x + 220, 420, { align: "center" });
        
        pdf.setFontSize(20);
        pdf.setFont("helvetica", "normal");
        const lines = pdf.splitTextToSize(solution.desc, 360);
        pdf.text(lines, x + 220, 500, { align: "center" });
      });
      
      addPageNumber(4, totalSlides);

      // ===== SLIDE 5: Industry Demand =====
      pdf.addPage();
      addSlideBackground("muted");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Industry Demand", width / 2, 180, { align: "center" });
      
      const demandStats = [
        { value: "$1.4T", label: "Global Travel Market", sub: "Recovering post-pandemic" },
        { value: "67%", label: "Seek Automation", sub: "Of travel businesses" },
        { value: "23%", label: "Annual Growth", sub: "In travel tech spending" },
      ];
      
      demandStats.forEach((stat, i) => {
        const x = 320 + i * 480;
        
        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(x - 80, 300, 400, 360, 16, 16, "F");
        
        pdf.setFontSize(64);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(stat.value, x + 120, 420, { align: "center" });
        
        pdf.setFontSize(24);
        pdf.text(stat.label, x + 120, 500, { align: "center" });
        
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(stat.sub, x + 120, 550, { align: "center" });
      });
      
      // Bottom bar
      pdf.setFillColor(232, 222, 212);
      pdf.roundedRect(360, 740, 1200, 80, 16, 16, "F");
      pdf.setFontSize(22);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Digital transformation is no longer optional — it's survival", width / 2, 790, { align: "center" });
      
      addPageNumber(5, totalSlides);

      // ===== SLIDE 6: How It Works =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("How It Works", width / 2, 160, { align: "center" });
      
      pdf.setFontSize(24);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("A complete product suite for every travel need", width / 2, 220, { align: "center" });
      
      // Product cards (static representation of the animated showcase)
      const products = [
        { name: "aSuite", desc: "CRM, CMS & automation platform", color: [16, 185, 129] },
        { name: "aRStool", desc: "24/7 AI PNR monitoring, 15-20% savings", color: [59, 130, 246] },
        { name: "UnifyTool", desc: "Multi-GDS with click-to-book", color: [139, 92, 246] },
        { name: "hRStool", desc: "Hotel re-shopping (Q1 2026)", color: [245, 158, 11] },
      ];
      
      // Draw stacked cards visual
      products.forEach((product, i) => {
        const baseX = 280;
        const baseY = 340;
        const offsetX = i * 20;
        const offsetY = i * 25;
        
        pdf.setFillColor(255, 255, 255);
        pdf.setDrawColor(product.color[0], product.color[1], product.color[2]);
        pdf.roundedRect(baseX + offsetX, baseY + offsetY, 500, 320, 16, 16, "FD");
        
        if (i === products.length - 1) {
          // Front card - add content
          pdf.setFillColor(product.color[0], product.color[1], product.color[2]);
          pdf.roundedRect(baseX + offsetX + 30, baseY + offsetY + 30, 60, 60, 12, 12, "F");
          
          pdf.setFontSize(28);
          pdf.setTextColor(textPrimary);
          pdf.setFont("helvetica", "bold");
          pdf.text(product.name, baseX + offsetX + 120, baseY + offsetY + 70);
          
          pdf.setFontSize(18);
          pdf.setTextColor(textMuted);
          pdf.setFont("helvetica", "normal");
          pdf.text(product.desc, baseX + offsetX + 120, baseY + offsetY + 105);
        }
      });
      
      // Products list
      products.forEach((product, i) => {
        const y = 350 + i * 130;
        
        pdf.setFillColor(product.color[0], product.color[1], product.color[2]);
        pdf.circle(1000, y, 12, "F");
        
        pdf.setFontSize(24);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(product.name, 1030, y + 8);
        
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(product.desc, 1160, y + 8);
      });
      
      addPageNumber(6, totalSlides);

      // ===== SLIDE 7: Target Market =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Target Market", width / 2, 180, { align: "center" });
      
      const markets = [
        { segment: "OTAs", desc: "Online Travel Agencies seeking efficiency", size: "Primary" },
        { segment: "TMCs", desc: "Travel Management Companies scaling operations", size: "Primary" },
        { segment: "Airlines", desc: "Direct carriers optimizing distribution", size: "Primary" },
        { segment: "Consolidators", desc: "Ticket consolidators improving margins", size: "Secondary" },
        { segment: "Corporate Travel", desc: "Enterprise travel management platforms", size: "Secondary" },
        { segment: "Travel Tech", desc: "Platforms seeking white-label solutions", size: "Tertiary" },
      ];
      
      markets.forEach((market, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 220 + col * 520;
        const y = 300 + row * 280;
        
        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x, y, 440, 200, 16, 16, "F");
        
        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(market.segment, x + 30, y + 50);
        
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        const lines = pdf.splitTextToSize(market.desc, 380);
        pdf.text(lines, x + 30, y + 90);
        
        // Size badge
        const badgeColor = market.size === "Primary" ? [36, 41, 46] : 
                          market.size === "Secondary" ? [232, 222, 212] : [248, 249, 250];
        const textColor = market.size === "Primary" ? [255, 255, 255] : [36, 41, 46];
        pdf.setFillColor(badgeColor[0], badgeColor[1], badgeColor[2]);
        pdf.roundedRect(x + 30, y + 140, 100, 30, 15, 15, "F");
        pdf.setFontSize(14);
        pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
        pdf.text(market.size, x + 80, y + 160, { align: "center" });
      });
      
      addPageNumber(7, totalSlides);

      // ===== SLIDE 8: TAM =====
      pdf.addPage();
      addSlideBackground("muted");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Total Addressable Market", width / 2, 160, { align: "center" });
      
      // Concentric circles
      const centerX = width / 2;
      const centerY = 520;
      
      // TAM circle
      pdf.setFillColor(240, 240, 245);
      pdf.circle(centerX, centerY, 300, "F");
      pdf.setFontSize(48);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("$24B", centerX, 280, { align: "center" });
      pdf.setFontSize(18);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("TAM", centerX, 310, { align: "center" });
      
      // SAM circle
      pdf.setFillColor(230, 230, 240);
      pdf.circle(centerX, centerY, 200, "F");
      pdf.setFontSize(40);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("$4.2B", centerX, 400, { align: "center" });
      pdf.setFontSize(16);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("SAM", centerX, 430, { align: "center" });
      
      // SOM circle
      pdf.setFillColor(36, 41, 46);
      pdf.circle(centerX, centerY, 100, "F");
      pdf.setFontSize(32);
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.text("$850M", centerX, centerY - 10, { align: "center" });
      pdf.setFontSize(14);
      pdf.text("SOM", centerX, centerY + 20, { align: "center" });
      
      // Labels
      const labels = [
        { title: "TAM", desc: "Global B2B Travel Tech" },
        { title: "SAM", desc: "OTA & TMC Platforms" },
        { title: "SOM", desc: "Year 3 Target" },
      ];
      
      labels.forEach((label, i) => {
        const x = 400 + i * 380;
        pdf.setFontSize(20);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(label.title, x, 900, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(label.desc, x, 930, { align: "center" });
      });
      
      addPageNumber(8, totalSlides);

      // ===== SLIDE 9: Revenue Model =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Revenue Model", width / 2, 180, { align: "center" });
      
      const revenueModels = [
        { title: "SaaS Subscriptions", desc: "Tiered monthly/annual pricing based on volume and features", revenue: "40%" },
        { title: "Transaction Fees", desc: "Per-booking fee for platform usage (€0.50-2.00)", revenue: "35%" },
        { title: "Enterprise Licensing", desc: "Custom solutions for large-scale implementations", revenue: "15%" },
        { title: "Implementation", desc: "Onboarding, integration, and ongoing support", revenue: "10%" },
      ];
      
      revenueModels.forEach((model, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 280 + col * 720;
        const y = 300 + row * 280;
        
        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x - 40, y - 40, 640, 200, 16, 16, "F");
        
        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(model.title, x, y + 20);
        
        // Revenue percentage
        pdf.setFontSize(36);
        pdf.text(model.revenue, x + 540, y + 20, { align: "right" });
        
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        const lines = pdf.splitTextToSize(model.desc, 480);
        pdf.text(lines, x, y + 70);
      });
      
      addPageNumber(9, totalSlides);

      // ===== SLIDE 10: Go-to-Market =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Go-to-Market Strategy", width / 2, 160, { align: "center" });
      
      const phases = [
        { phase: "Phase 1", time: "0-12 months", title: "Foundation", items: ["Beta partners", "Product refinement", "Case studies", "Early adopter pricing"], color: [59, 130, 246] },
        { phase: "Phase 2", time: "12-24 months", title: "Expansion", items: ["Channel partnerships", "Geographic expansion", "Marketing scale-up", "Team growth"], color: [139, 92, 246] },
        { phase: "Phase 3", time: "24-36 months", title: "Enterprise", items: ["Enterprise sales", "Global presence", "Strategic M&A", "IPO preparation"], color: [16, 185, 129] },
      ];
      
      phases.forEach((phase, i) => {
        const x = 220 + i * 520;
        
        // Card background
        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x, 260, 440, 580, 16, 16, "F");
        
        // Phase badge
        pdf.setFillColor(phase.color[0], phase.color[1], phase.color[2]);
        pdf.roundedRect(x + 30, 290, 100, 36, 18, 18, "F");
        pdf.setFontSize(16);
        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.text(phase.phase, x + 80, 314, { align: "center" });
        
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(phase.time, x + 150, 314);
        
        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(phase.title, x + 30, 390);
        
        // Items
        phase.items.forEach((item, j) => {
          pdf.setFontSize(18);
          pdf.setTextColor(textMuted);
          pdf.setFont("helvetica", "normal");
          pdf.text(`• ${item}`, x + 40, 460 + j * 50);
        });
        
        // Arrow
        if (i < 2) {
          pdf.setFontSize(32);
          pdf.setTextColor(200, 200, 200);
          pdf.text("→", x + 480, 520);
        }
      });
      
      addPageNumber(10, totalSlides);

      // ===== SLIDE 11: Competition =====
      pdf.addPage();
      addSlideBackground("muted");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Competitive Landscape", width / 2, 160, { align: "center" });
      
      // Competition boxes
      const competitors = [
        { title: "Legacy Providers", sub: "Amadeus, Sabre, Travelport", verdict: "Slow innovation, high costs", color: [248, 113, 113] },
        { title: "Velaree", sub: "Unified, AI-first platform", verdict: "Modern, affordable, complete", color: [16, 185, 129], highlight: true },
        { title: "Point Solutions", sub: "Niche tools, aggregators", verdict: "Fragmented, limited scope", color: [251, 191, 36] },
      ];
      
      competitors.forEach((comp, i) => {
        const x = 280 + i * 480;
        
        if (comp.highlight) {
          pdf.setFillColor(255, 255, 255);
          pdf.setDrawColor(36, 41, 46);
          pdf.setLineWidth(4);
          pdf.roundedRect(x, 280, 400, 280, 16, 16, "FD");
          pdf.setLineWidth(1);
        } else {
          pdf.setFillColor(255, 255, 255);
          pdf.roundedRect(x, 280, 400, 280, 16, 16, "F");
        }
        
        pdf.setFontSize(24);
        pdf.setTextColor(comp.highlight ? textPrimary : textMuted);
        pdf.setFont("helvetica", "bold");
        pdf.text(comp.title, x + 200, 340, { align: "center" });
        
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(comp.sub, x + 200, 380, { align: "center" });
        
        pdf.setFontSize(16);
        pdf.setTextColor(comp.color[0], comp.color[1], comp.color[2]);
        pdf.setFont("helvetica", "bold");
        pdf.text(comp.verdict, x + 200, 500, { align: "center" });
      });
      
      // Differentiators
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(280, 620, 1360, 180, 16, 16, "F");
      
      pdf.setFontSize(24);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Our Differentiators", width / 2, 680, { align: "center" });
      
      const differentiators = ["Unified Platform", "AI-First Approach", "Modern Infrastructure", "Transparent Pricing", "Rapid Integration", "24/7 Support"];
      differentiators.forEach((diff, i) => {
        const x = 380 + (i % 3) * 400;
        const y = 730 + Math.floor(i / 3) * 40;
        
        pdf.setFillColor(232, 222, 212);
        pdf.roundedRect(x - 70, y - 20, 300, 32, 16, 16, "F");
        pdf.setFontSize(16);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "normal");
        pdf.text(diff, x + 80, y + 2, { align: "center" });
      });
      
      addPageNumber(11, totalSlides);

      // ===== SLIDE 12: The Ask =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("The Ask", width / 2, 160, { align: "center" });
      
      pdf.setFontSize(24);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("Seed round to accelerate growth", width / 2, 210, { align: "center" });
      
      // Big number
      pdf.setFontSize(120);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("€400,000", width / 2, 380, { align: "center" });
      
      pdf.setFontSize(24);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("Pre-seed / Seed Investment", width / 2, 440, { align: "center" });
      
      // Allocations
      const allocations = [
        { label: "Product Development", amount: "€160K", percent: "40%", color: [59, 130, 246] },
        { label: "Sales & Marketing", amount: "€120K", percent: "30%", color: [139, 92, 246] },
        { label: "Operations", amount: "€80K", percent: "20%", color: [16, 185, 129] },
        { label: "Team & Hiring", amount: "€40K", percent: "10%", color: [245, 158, 11] },
      ];
      
      allocations.forEach((alloc, i) => {
        const x = 280 + i * 380;
        
        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x, 520, 320, 280, 16, 16, "F");
        
        // Percentage circle
        pdf.setFillColor(alloc.color[0], alloc.color[1], alloc.color[2]);
        pdf.circle(x + 160, 600, 50, "F");
        pdf.setFontSize(24);
        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.text(alloc.percent, x + 160, 610, { align: "center" });
        
        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.text(alloc.amount, x + 160, 710, { align: "center" });
        
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(alloc.label, x + 160, 760, { align: "center" });
      });
      
      addPageNumber(12, totalSlides);

      // ===== SLIDE 13: Team =====
      pdf.addPage();
      addSlideBackground("accent");
      addLogo();
      
      pdf.setFontSize(56);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("The Team", width / 2, 180, { align: "center" });
      
      const team = [
        { role: "CEO", focus: "Strategy & Vision", color: [36, 41, 46] },
        { role: "CTO", focus: "Technology & Product", color: [59, 130, 246] },
        { role: "COO", focus: "Operations & Growth", color: [139, 92, 246] },
      ];
      
      team.forEach((member, i) => {
        const x = 420 + i * 400;
        
        pdf.setFillColor(member.color[0], member.color[1], member.color[2]);
        pdf.circle(x, 380, 80, "F");
        
        pdf.setFontSize(48);
        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.text(member.role.charAt(0), x, 395, { align: "center" });
        
        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.text(member.role, x, 510, { align: "center" });
        
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(member.focus, x, 550, { align: "center" });
      });
      
      // Footer with logo and contact
      pdf.setFontSize(80);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("V", width / 2 - 60, 740);
      
      pdf.setFontSize(48);
      pdf.text("elaree", width / 2 + 10, 740);
      
      pdf.setFontSize(22);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("velaree.com  •  contact@velaree.com", width / 2, 820, { align: "center" });
      
      addPageNumber(13, totalSlides);

      pdf.save("Velaree-Pitch-Deck.pdf");
      
    } catch (error) {
      console.error("Error generating pitch deck:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadRequest = () => {
    setShowViewer(false);
    setShowEmailCapture(true);
  };

  const handleEmailSuccess = () => {
    setShowEmailCapture(false);
    generatePitchDeck();
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          onClick={() => setShowViewer(true)}
          variant="outline"
          size="lg"
          className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
        >
          <Presentation className="w-5 h-5 mr-2" />
          View Pitch Deck
        </Button>
        <Button
          onClick={() => setShowEmailCapture(true)}
          disabled={isGenerating}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
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
      </div>

      <PitchDeckViewer 
        isOpen={showViewer} 
        onClose={() => setShowViewer(false)}
        onDownloadRequest={handleDownloadRequest}
      />

      <PitchDeckEmailCapture
        isOpen={showEmailCapture}
        onClose={() => setShowEmailCapture(false)}
        onSuccess={handleEmailSuccess}
      />
    </>
  );
};

export default PitchDeckDownload;
