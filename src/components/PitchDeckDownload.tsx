import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Loader2, Presentation } from "lucide-react";
import { jsPDF } from "jspdf";
import PitchDeckEmailCapture from "./PitchDeckEmailCapture";

const PitchDeckDownload = () => {
  const [isGenerating, setIsGenerating] = useState(false);
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
      const textPrimary = "#24292E";
      const textMuted = "#6B7280";
      const accentBeige = "#E8DED4";
      const primaryBlue = "#3B82F6";
      const primaryViolet = "#8B5CF6";
      const primaryEmerald = "#10B981";
      const primaryAmber = "#F59E0B";
      const primaryRed = "#EF4444";

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

      // Large branding
      pdf.setFontSize(280);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("V", width / 2 - 180, height / 2 - 80);
      pdf.setFontSize(140);
      pdf.text("elaree", width / 2 + 40, height / 2 - 80);

      // Stage badges
      pdf.setFillColor(232, 222, 212);
      pdf.roundedRect(width / 2 - 200, height / 2 - 10, 160, 40, 20, 20, "F");
      pdf.setFontSize(18);
      pdf.setTextColor(textPrimary);
      pdf.text("Est. 2024", width / 2 - 120, height / 2 + 18, { align: "center" });

      pdf.setFillColor(59, 130, 246);
      pdf.roundedRect(width / 2 + 40, height / 2 - 10, 180, 40, 20, 20, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.text("Pre-Seed Stage", width / 2 + 130, height / 2 + 18, { align: "center" });

      pdf.setFontSize(42);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("Next-Generation Travel Technology", width / 2, height / 2 + 100, { align: "center" });

      pdf.setFontSize(28);
      pdf.text("Unified APIs • AI Automation • Real-time Analytics", width / 2, height / 2 + 160, { align: "center" });

      // Key highlights bar
      pdf.setFillColor(248, 249, 250);
      pdf.roundedRect(width / 2 - 450, height / 2 + 220, 900, 100, 20, 20, "F");

      const coverHighlights = [
        { value: "200+", label: "Airlines" },
        { value: "4", label: "Products" },
        { value: "€400K", label: "Raising" },
        { value: "18mo", label: "Runway" }
      ];
      coverHighlights.forEach((item, i) => {
        const x = width / 2 - 340 + i * 220;
        pdf.setFontSize(36);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.value, x, height / 2 + 270, { align: "center" });
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(item.label, x, height / 2 + 300, { align: "center" });
      });

      // Footer
      pdf.setFontSize(18);
      pdf.setTextColor(textMuted);
      pdf.text("contact@velaree.com • velaree.com", width / 2, height - 80, { align: "center" });

      addPageNumber(1, totalSlides);

      // ===== SLIDE 2: Vision =====
      pdf.addPage();
      addSlideBackground("accent");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Our Vision", width / 2, 180, { align: "center" });

      pdf.setFontSize(32);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "italic");
      const visionText = '"Empowering travel businesses with intelligent technology that transforms operations, reduces costs, and unlocks new revenue opportunities."';
      const visionLines = pdf.splitTextToSize(visionText, 1400);
      pdf.text(visionLines, width / 2, 280, { align: "center" });

      // Enhanced stats with growth indicators
      const visionStats = [
        { value: "200+", label: "Airlines Connected", growth: "+40 YoY" },
        { value: "70%", label: "Task Automation", growth: "+15% YoY" },
        { value: "99.9%", label: "Platform Uptime", growth: "SLA" },
        { value: "4.8/5", label: "Customer Rating", growth: "NPS 72" },
        { value: "<2s", label: "Avg Response", growth: "-40% YoY" }
      ];
      visionStats.forEach((stat, i) => {
        const x = 230 + i * 300;
        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(x - 60, 400, 240, 160, 16, 16, "F");
        pdf.setFontSize(48);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(stat.value, x + 60, 470, { align: "center" });
        pdf.setFontSize(18);
        pdf.setTextColor(textPrimary);
        pdf.text(stat.label, x + 60, 510, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(16, 185, 129);
        pdf.text(stat.growth, x + 60, 540, { align: "center" });
      });

      // Vision Timeline
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(200, 600, 1520, 180, 20, 20, "F");
      pdf.setFontSize(28);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Vision Timeline", width / 2, 660, { align: "center" });

      const timeline = [
        { year: "2025", milestone: "Product Market Fit", status: "In Progress" },
        { year: "2026", milestone: "European Expansion", status: "Planned" },
        { year: "2027", milestone: "US Market Entry", status: "Planned" },
        { year: "2028", milestone: "1000+ Clients", status: "Target" },
        { year: "2030", milestone: "IPO / Exit", status: "Goal" }
      ];
      timeline.forEach((item, i) => {
        const x = 320 + i * 280;
        pdf.setFontSize(24);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.year, x, 720, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(textPrimary);
        pdf.text(item.milestone, x, 750, { align: "center" });
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.text(item.status, x, 775, { align: "center" });
      });

      addPageNumber(2, totalSlides);

      // ===== SLIDE 3: Market Problem =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Market Problem", width / 2, 180, { align: "center" });

      const problems = [
        { title: "Manual Processes", desc: "70% of travel operations still rely on error-prone manual workflows", impact: "$8.2B lost annually", source: "IATA 2024" },
        { title: "Fragmented Systems", desc: "Multiple GDS connections require separate integrations", impact: "45% higher IT costs", source: "Phocuswright" },
        { title: "Limited Inventory", desc: "Traditional systems access only a fraction of global inventory", impact: "23% revenue leakage", source: "Amadeus Study" },
        { title: "Slow Performance", desc: "Legacy systems can't meet modern speed and reliability expectations", impact: "12% booking abandonment", source: "Travelport" }
      ];
      problems.forEach((problem, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 280 + col * 680;
        const y = 280 + row * 220;

        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x - 40, y - 40, 620, 180, 16, 16, "F");
        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(problem.title, x, y + 10);
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        const lines = pdf.splitTextToSize(problem.desc, 540);
        pdf.text(lines, x, y + 50);
        pdf.setFontSize(20);
        pdf.setTextColor(239, 68, 68);
        pdf.setFont("helvetica", "bold");
        pdf.text(problem.impact, x, y + 110);
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(problem.source, x + 540, y + 110, { align: "right" });
      });

      // Pie chart data as visual breakdown
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(1400, 280, 400, 380, 20, 20, "F");
      pdf.setFontSize(20);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Inefficiency Breakdown", 1600, 330, { align: "center" });

      const pieData = [
        { name: "Manual Processes", value: "38%", color: [239, 68, 68] },
        { name: "System Fragmentation", value: "27%", color: [249, 115, 22] },
        { name: "Limited Inventory", value: "22%", color: [245, 158, 11] },
        { name: "Performance Issues", value: "13%", color: [234, 179, 8] }
      ];
      pieData.forEach((item, i) => {
        const y = 380 + i * 60;
        pdf.setFillColor(item.color[0], item.color[1], item.color[2]);
        pdf.circle(1450, y, 12, "F");
        pdf.setFontSize(16);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "normal");
        pdf.text(item.name, 1480, y + 5);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.value, 1760, y + 5, { align: "right" });
      });

      // Cost of Inaction
      pdf.setFillColor(254, 226, 226);
      pdf.roundedRect(200, 760, 1520, 120, 20, 20, "F");
      pdf.setFontSize(24);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Cost of Inaction", width / 2, 810, { align: "center" });

      const costItems = [
        { value: "$12.4B", label: "Total Industry Loss" },
        { value: "38%", label: "Operational Waste" },
        { value: "4.2hrs", label: "Avg. Daily Manual Work" },
        { value: "67%", label: "Staff Turnover Related" }
      ];
      costItems.forEach((item, i) => {
        const x = 380 + i * 340;
        pdf.setFontSize(28);
        pdf.setTextColor(239, 68, 68);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.value, x, 860, { align: "center" });
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(item.label, x, 885, { align: "center" });
      });

      addPageNumber(3, totalSlides);

      // ===== SLIDE 4: Our Solution =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Our Solution", width / 2, 160, { align: "center" });
      pdf.setFontSize(28);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("One unified platform for the entire travel technology stack", width / 2, 220, { align: "center" });

      const solutions = [
        { title: "Unified API", desc: "Single integration to access 200+ airlines and all major GDS systems", metric: "85%", metricLabel: "Faster Integration", color: [59, 130, 246] },
        { title: "AI Automation", desc: "Intelligent workflows handling ticketing, changes, and notifications", metric: "70%", metricLabel: "Less Manual Work", color: [139, 92, 246] },
        { title: "Real-time Analytics", desc: "Complete visibility into operations with actionable insights", metric: "3x", metricLabel: "Faster Decisions", color: [16, 185, 129] }
      ];
      solutions.forEach((solution, i) => {
        const x = 200 + i * 540;
        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x, 280, 480, 260, 20, 20, "F");

        pdf.setFillColor(solution.color[0], solution.color[1], solution.color[2]);
        pdf.circle(x + 50, 330, 25, "F");

        pdf.setFontSize(32);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(solution.title, x + 240, 340, { align: "center" });
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        const lines = pdf.splitTextToSize(solution.desc, 420);
        pdf.text(lines, x + 240, 400, { align: "center" });

        pdf.setFontSize(48);
        pdf.setTextColor(solution.color[0], solution.color[1], solution.color[2]);
        pdf.setFont("helvetica", "bold");
        pdf.text(solution.metric, x + 240, 490, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(solution.metricLabel, x + 240, 520, { align: "center" });
      });

      // Before/After comparison
      pdf.setFillColor(254, 226, 226);
      pdf.roundedRect(200, 580, 740, 240, 16, 16, "F");
      pdf.setFontSize(24);
      pdf.setTextColor(239, 68, 68);
      pdf.setFont("helvetica", "bold");
      pdf.text("✗ Before Velaree", 280, 630);
      const beforeItems = ["6-12 months integration time", "5+ separate vendor contracts", "Manual reconciliation daily", "Limited fare visibility"];
      beforeItems.forEach((item, i) => {
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(`• ${item}`, 280, 680 + i * 40);
      });

      pdf.setFillColor(209, 250, 229);
      pdf.roundedRect(980, 580, 740, 240, 16, 16, "F");
      pdf.setFontSize(24);
      pdf.setTextColor(16, 185, 129);
      pdf.setFont("helvetica", "bold");
      pdf.text("✓ After Velaree", 1060, 630);
      const afterItems = ["2-4 weeks go-live", "Single unified contract", "Automated real-time sync", "200+ airline access"];
      afterItems.forEach((item, i) => {
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(`• ${item}`, 1060, 680 + i * 40);
      });

      // Tech stack
      pdf.setFontSize(16);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("Tech Stack: AWS • Kubernetes • PostgreSQL • Redis • GraphQL • REST API", width / 2, 870, { align: "center" });

      addPageNumber(4, totalSlides);

      // ===== SLIDE 5: Industry Demand =====
      pdf.addPage();
      addSlideBackground("muted");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Industry Demand", width / 2, 180, { align: "center" });

      const demandStats = [
        { value: "$1.4T", label: "Global Travel Market", sub: "2024 Value", growth: "+12% YoY" },
        { value: "67%", label: "Seek Automation", sub: "Of travel businesses", growth: "Survey 2024" },
        { value: "23%", label: "Annual Growth", sub: "Travel tech spending", growth: "CAGR 2024-28" }
      ];
      demandStats.forEach((stat, i) => {
        const x = 280 + i * 500;
        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(x - 60, 260, 440, 240, 20, 20, "F");
        pdf.setFontSize(64);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(stat.value, x + 160, 360, { align: "center" });
        pdf.setFontSize(24);
        pdf.setTextColor(textPrimary);
        pdf.text(stat.label, x + 160, 420, { align: "center" });
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(stat.sub, x + 160, 460, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(16, 185, 129);
        pdf.text(stat.growth, x + 160, 490, { align: "center" });
      });

      // Regional breakdown
      pdf.setFontSize(24);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Regional Breakdown", width / 2, 560, { align: "center" });

      const regions = [
        { region: "EMEA", value: "$420B", share: "30%", growth: "+18%" },
        { region: "APAC", value: "$560B", share: "40%", growth: "+28%" },
        { region: "Americas", value: "$420B", share: "30%", growth: "+14%" }
      ];
      regions.forEach((region, i) => {
        const x = 380 + i * 420;
        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(x - 80, 600, 360, 140, 16, 16, "F");
        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(region.region, x + 100, 650, { align: "center" });
        pdf.setFontSize(36);
        pdf.setTextColor(59, 130, 246);
        pdf.text(region.value, x + 100, 700, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(16, 185, 129);
        pdf.setFont("helvetica", "normal");
        pdf.text(region.growth, x + 100, 730, { align: "center" });
      });

      // Bottom quote
      pdf.setFillColor(232, 222, 212);
      pdf.roundedRect(280, 780, 1360, 80, 20, 20, "F");
      pdf.setFontSize(24);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Digital transformation is no longer optional — it's survival", width / 2, 830, { align: "center" });

      addPageNumber(5, totalSlides);

      // ===== SLIDE 6: How It Works =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("How It Works", width / 2, 160, { align: "center" });
      pdf.setFontSize(28);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("A complete product suite for every travel need", width / 2, 220, { align: "center" });

      const products = [
        { name: "aRStool", tagline: "Flight Re-shopping", desc: "24/7 AI PNR monitoring", metrics: "15-20% savings • 10K+ PNRs", status: "LIVE", color: [59, 130, 246] },
        { name: "Unify", tagline: "Multi-GDS API", desc: "200+ airlines, one API", metrics: "2-4 week integration", status: "LIVE", color: [139, 92, 246] },
        { name: "aSuite", tagline: "Agency Platform", desc: "CRM, CMS & automation", metrics: "70% automation", status: "BETA", color: [16, 185, 129] },
        { name: "hRStool", tagline: "Hotel Re-shopping", desc: "Hotel rate optimization", metrics: "80% time saved", status: "Q1 2026", color: [245, 158, 11] }
      ];
      products.forEach((product, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 280 + col * 720;
        const y = 300 + row * 260;

        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x - 60, y - 40, 660, 220, 16, 16, "F");

        pdf.setFillColor(product.color[0], product.color[1], product.color[2]);
        pdf.circle(x + 20, y + 30, 30, "F");
        pdf.setFontSize(24);
        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.text(product.name.charAt(0), x + 20, y + 40, { align: "center" });

        pdf.setFontSize(32);
        pdf.setTextColor(textPrimary);
        pdf.text(product.name, x + 80, y + 20);
        pdf.setFontSize(20);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(product.tagline, x + 80, y + 55);
        pdf.setFontSize(18);
        pdf.text(product.desc, x + 80, y + 90);
        pdf.setFontSize(16);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(product.metrics, x + 80, y + 130);

        // Status badge
        const statusColor = product.status === "LIVE" ? [16, 185, 129] : product.status === "BETA" ? [59, 130, 246] : [245, 158, 11];
        pdf.setFillColor(statusColor[0], statusColor[1], statusColor[2]);
        pdf.roundedRect(x + 480, y - 10, 100, 35, 17, 17, "F");
        pdf.setFontSize(14);
        pdf.setTextColor(255, 255, 255);
        pdf.text(product.status, x + 530, y + 13, { align: "center" });
      });

      // Integrated with
      pdf.setFontSize(18);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("Integrated with: Amadeus • Sabre • Travelport • Mystifly • TBO", width / 2, 860, { align: "center" });

      addPageNumber(6, totalSlides);

      // ===== SLIDE 7: Target Market =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Target Market", width / 2, 160, { align: "center" });

      const markets = [
        { segment: "OTAs", desc: "Online Travel Agencies", size: "Primary", marketSize: "$8.2B", customers: "~2,500" },
        { segment: "TMCs", desc: "Travel Management Companies", size: "Primary", marketSize: "$4.8B", customers: "~4,000" },
        { segment: "Airlines", desc: "Direct carriers", size: "Primary", marketSize: "$3.2B", customers: "~400" },
        { segment: "Consolidators", desc: "Ticket consolidators", size: "Secondary", marketSize: "$2.1B", customers: "~1,200" },
        { segment: "Corporate Travel", desc: "Enterprise platforms", size: "Secondary", marketSize: "$1.8B", customers: "~800" },
        { segment: "Travel Tech", desc: "White-label solutions", size: "Tertiary", marketSize: "$1.2B", customers: "~500" }
      ];
      markets.forEach((market, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 220 + col * 520;
        const y = 260 + row * 240;

        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x - 40, y - 40, 480, 200, 16, 16, "F");

        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(market.segment, x, y + 10);
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(market.desc, x, y + 45);

        pdf.setFontSize(32);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(market.marketSize, x, y + 100);
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text("Market Size", x, y + 125);

        pdf.setFontSize(22);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(market.customers, x + 300, y + 100);
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text("Companies", x + 300, y + 125);

        // Priority badge
        const badgeColor = market.size === "Primary" ? [36, 41, 46] : market.size === "Secondary" ? [232, 222, 212] : [248, 249, 250];
        const badgeTextColor = market.size === "Primary" ? [255, 255, 255] : [36, 41, 46];
        pdf.setFillColor(badgeColor[0], badgeColor[1], badgeColor[2]);
        pdf.roundedRect(x, y + 135, 100, 30, 15, 15, "F");
        pdf.setFontSize(14);
        pdf.setTextColor(badgeTextColor[0], badgeTextColor[1], badgeTextColor[2]);
        pdf.text(market.size, x + 50, y + 155, { align: "center" });
      });

      // ICP
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(280, 780, 1360, 100, 16, 16, "F");
      pdf.setFontSize(22);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Ideal Customer Profile", width / 2, 820, { align: "center" });

      const icpItems = [
        { value: "10,000+", label: "Annual Bookings" },
        { value: "€1M+", label: "Annual Revenue" },
        { value: "Multi-GDS", label: "Current Setup" },
        { value: "B2B/B2C", label: "Business Model" }
      ];
      icpItems.forEach((item, i) => {
        const x = 420 + i * 300;
        pdf.setFontSize(20);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.value, x, 858, { align: "center" });
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(item.label, x, 878, { align: "center" });
      });

      addPageNumber(7, totalSlides);

      // ===== SLIDE 8: TAM =====
      pdf.addPage();
      addSlideBackground("muted");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Total Addressable Market", width / 2, 150, { align: "center" });

      // Concentric circles
      const centerX = 480;
      const centerY = 480;

      pdf.setFillColor(232, 232, 240);
      pdf.circle(centerX, centerY, 280, "F");
      pdf.setFontSize(48);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("$24B", centerX, 260, { align: "center" });
      pdf.setFontSize(20);
      pdf.setTextColor(textMuted);
      pdf.text("TAM", centerX, 295, { align: "center" });

      pdf.setFillColor(220, 220, 235);
      pdf.circle(centerX, centerY, 180, "F");
      pdf.setFontSize(36);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("$4.2B", centerX, 420, { align: "center" });
      pdf.setFontSize(18);
      pdf.setTextColor(textMuted);
      pdf.text("SAM", centerX, 450, { align: "center" });

      pdf.setFillColor(36, 41, 46);
      pdf.circle(centerX, centerY, 80, "F");
      pdf.setFontSize(28);
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.text("$850M", centerX, centerY, { align: "center" });
      pdf.setFontSize(14);
      pdf.text("SOM Y3", centerX, centerY + 25, { align: "center" });

      // Market definitions
      const marketDefs = [
        { label: "TAM", value: "$24B", desc: "Global B2B Travel Tech" },
        { label: "SAM", value: "$4.2B", desc: "OTA & TMC Platforms" },
        { label: "SOM", value: "$850M", desc: "Year 3 Target" }
      ];
      marketDefs.forEach((item, i) => {
        const y = 280 + i * 120;
        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(850, y, 380, 100, 12, 12, "F");
        pdf.setFontSize(32);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.value, 880, y + 45);
        pdf.setFontSize(18);
        pdf.setTextColor(textPrimary);
        pdf.text(`${item.label} — ${item.desc}`, 880, y + 75);
      });

      // Market growth chart data as table
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(1280, 240, 540, 220, 16, 16, "F");
      pdf.setFontSize(20);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Market Growth ($B)", 1550, 285, { align: "center" });

      const growthData = [
        { year: "2024", tam: "24", sam: "4.2" },
        { year: "2026", tam: "32", sam: "5.6" },
        { year: "2028", tam: "42", sam: "7.3" }
      ];
      pdf.setFontSize(14);
      pdf.setTextColor(textMuted);
      pdf.text("Year", 1320, 330);
      pdf.text("TAM", 1430, 330);
      pdf.text("SAM", 1530, 330);
      growthData.forEach((row, i) => {
        const y = 370 + i * 40;
        pdf.setFontSize(16);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(row.year, 1320, y);
        pdf.setTextColor(59, 130, 246);
        pdf.text(`$${row.tam}B`, 1430, y);
        pdf.text(`$${row.sam}B`, 1530, y);
      });
      pdf.setFontSize(12);
      pdf.setTextColor(16, 185, 129);
      pdf.text("15% CAGR", 1650, 430);

      // SOM progression
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(200, 760, 1520, 140, 16, 16, "F");
      pdf.setFontSize(20);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("SOM Progression & Market Share Target", width / 2, 805, { align: "center" });

      const somProgression = [
        { year: "Y1", som: "$12M", share: "0.3%", customers: "25" },
        { year: "Y2", som: "$85M", share: "2%", customers: "120" },
        { year: "Y3", som: "$850M", share: "20%", customers: "500" },
        { year: "Y4", som: "$1.4B", share: "33%", customers: "850" },
        { year: "Y5", som: "$2.1B", share: "50%", customers: "1,200" }
      ];
      somProgression.forEach((item, i) => {
        const x = 320 + i * 280;
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(item.year, x, 845, { align: "center" });
        pdf.setFontSize(22);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.som, x, 875, { align: "center" });
        pdf.setFontSize(14);
        pdf.setTextColor(16, 185, 129);
        pdf.text(`${item.customers} clients`, x, 900, { align: "center" });
      });

      addPageNumber(8, totalSlides);

      // ===== SLIDE 9: Revenue Model =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Revenue Model", width / 2, 150, { align: "center" });

      const revenueModels = [
        { title: "SaaS Subscriptions", desc: "Tiered monthly/annual pricing", revenue: "40%", color: [59, 130, 246] },
        { title: "Transaction Fees", desc: "Per-booking fee (€0.50-2.00)", revenue: "35%", color: [139, 92, 246] },
        { title: "Enterprise Licensing", desc: "Custom implementations", revenue: "15%", color: [16, 185, 129] },
        { title: "Implementation", desc: "Onboarding & support", revenue: "10%", color: [245, 158, 11] }
      ];
      revenueModels.forEach((model, i) => {
        const x = 200 + i * 400;
        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x - 40, 220, 360, 180, 16, 16, "F");

        pdf.setFillColor(model.color[0], model.color[1], model.color[2]);
        pdf.circle(x + 140, 280, 35, "F");
        pdf.setFontSize(24);
        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.text(model.revenue, x + 140, 290, { align: "center" });

        pdf.setFontSize(22);
        pdf.setTextColor(textPrimary);
        pdf.text(model.title, x + 140, 350, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(model.desc, x + 140, 380, { align: "center" });
      });

      // Revenue projections chart as table
      pdf.setFillColor(248, 249, 250);
      pdf.roundedRect(200, 440, 1520, 200, 16, 16, "F");
      pdf.setFontSize(24);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("3-Year ARR Growth Projection", width / 2, 490, { align: "center" });

      const arrProjections = [
        { period: "Y1 Q1", arr: "€120K", customers: "5" },
        { period: "Y1 Q4", arr: "€480K", customers: "25" },
        { period: "Y2 Q2", arr: "€1.2M", customers: "55" },
        { period: "Y2 Q4", arr: "€2.4M", customers: "100" },
        { period: "Y3 Q4", arr: "€8.5M", customers: "280" }
      ];
      arrProjections.forEach((item, i) => {
        const x = 280 + i * 290;
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(item.period, x, 540, { align: "center" });
        pdf.setFontSize(28);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.arr, x, 580, { align: "center" });
        pdf.setFontSize(14);
        pdf.setTextColor(16, 185, 129);
        pdf.text(`${item.customers} clients`, x, 610, { align: "center" });
      });

      // Unit economics
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(200, 680, 1520, 140, 16, 16, "F");
      pdf.setFontSize(24);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Unit Economics", width / 2, 730, { align: "center" });

      const unitEcon = [
        { label: "CAC", value: "€2,500" },
        { label: "LTV", value: "€45,000" },
        { label: "LTV:CAC", value: "18x" },
        { label: "ARPU", value: "€2,500/mo" },
        { label: "Payback", value: "4 months" },
        { label: "Gross Margin", value: "85%" }
      ];
      unitEcon.forEach((item, i) => {
        const x = 320 + i * 230;
        pdf.setFontSize(28);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.value, x, 785, { align: "center" });
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(item.label, x, 810, { align: "center" });
      });

      addPageNumber(9, totalSlides);

      // ===== SLIDE 10: Go-to-Market =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Go-to-Market Strategy", width / 2, 150, { align: "center" });

      const phases = [
        { phase: "Phase 1", time: "0-12 months", title: "Foundation", items: ["Beta partners", "Product refinement", "Case studies"], kpi: "€100K ARR", team: "8 FTE", color: [59, 130, 246] },
        { phase: "Phase 2", time: "12-24 months", title: "Expansion", items: ["Channel partnerships", "Geographic expansion", "Team growth"], kpi: "€2.4M ARR", team: "25 FTE", color: [139, 92, 246] },
        { phase: "Phase 3", time: "24-36 months", title: "Enterprise", items: ["Enterprise sales", "Global presence", "IPO preparation"], kpi: "€8.5M ARR", team: "60 FTE", color: [16, 185, 129] }
      ];
      phases.forEach((phase, i) => {
        const x = 200 + i * 540;
        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x, 220, 480, 420, 20, 20, "F");

        pdf.setFillColor(phase.color[0], phase.color[1], phase.color[2]);
        pdf.roundedRect(x + 30, 250, 120, 40, 20, 20, "F");
        pdf.setFontSize(18);
        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.text(phase.phase, x + 90, 277, { align: "center" });

        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(phase.time, x + 170, 277);

        pdf.setFontSize(32);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(phase.title, x + 40, 340);

        phase.items.forEach((item, j) => {
          pdf.setFontSize(18);
          pdf.setTextColor(textMuted);
          pdf.setFont("helvetica", "normal");
          pdf.text(`• ${item}`, x + 50, 400 + j * 40);
        });

        // KPIs
        pdf.setFontSize(24);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(phase.kpi, x + 240, 560, { align: "center" });
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text("Target ARR", x + 240, 585, { align: "center" });
        pdf.text(phase.team, x + 240, 620, { align: "center" });
      });

      // Customer acquisition channels
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(200, 680, 1520, 140, 16, 16, "F");
      pdf.setFontSize(24);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Customer Acquisition Channels", width / 2, 730, { align: "center" });

      const channels = [
        { channel: "Direct Sales", share: "45%", note: "Enterprise focus" },
        { channel: "Partners", share: "25%", note: "Referral network" },
        { channel: "Inbound", share: "20%", note: "Content & SEO" },
        { channel: "Events", share: "10%", note: "Trade shows" }
      ];
      channels.forEach((item, i) => {
        const x = 360 + i * 330;
        pdf.setFontSize(32);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.share, x, 780, { align: "center" });
        pdf.setFontSize(18);
        pdf.setTextColor(textPrimary);
        pdf.text(item.channel, x, 810, { align: "center" });
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(item.note, x, 835, { align: "center" });
      });

      addPageNumber(10, totalSlides);

      // ===== SLIDE 11: Competition =====
      pdf.addPage();
      addSlideBackground("muted");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Competitive Landscape", width / 2, 150, { align: "center" });

      // Competitor boxes
      const competitors = [
        { title: "Legacy Providers", sub: "Amadeus, Sabre, Travelport", verdict: "Slow, expensive, complex", price: "€50K+ annual", color: [239, 68, 68], highlight: false },
        { title: "Velaree", sub: "Unified, AI-first platform", verdict: "Modern, affordable, complete", price: "Starting €500/mo", color: [16, 185, 129], highlight: true },
        { title: "Point Solutions", sub: "Niche tools, aggregators", verdict: "Fragmented, limited", price: "Multiple vendors", color: [245, 158, 11], highlight: false }
      ];
      competitors.forEach((comp, i) => {
        const x = 240 + i * 500;
        const scale = comp.highlight ? 1.1 : 1;
        const boxWidth = 440 * scale;
        const boxHeight = 220 * scale;
        const offsetX = comp.highlight ? -20 : 0;

        pdf.setFillColor(255, 255, 255);
        if (comp.highlight) {
          pdf.setDrawColor(36, 41, 46);
          pdf.setLineWidth(4);
          pdf.roundedRect(x + offsetX, 220, boxWidth, boxHeight, 20, 20, "FD");
          pdf.setLineWidth(1);
        } else {
          pdf.roundedRect(x, 230, boxWidth, boxHeight - 20, 20, 20, "F");
        }

        const centerX = comp.highlight ? x + offsetX + boxWidth / 2 : x + boxWidth / 2;
        pdf.setFontSize(28);
        pdf.setTextColor(comp.highlight ? textPrimary : textMuted);
        pdf.setFont("helvetica", "bold");
        pdf.text(comp.title, centerX, 290, { align: "center" });
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(comp.sub, centerX, 330, { align: "center" });
        pdf.setFontSize(18);
        pdf.setTextColor(comp.color[0], comp.color[1], comp.color[2]);
        pdf.setFont("helvetica", "bold");
        pdf.text(comp.verdict, centerX, 380, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(comp.price, centerX, 410, { align: "center" });
      });

      // Feature comparison table
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(200, 480, 1520, 260, 16, 16, "F");
      pdf.setFontSize(24);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Feature Comparison", width / 2, 530, { align: "center" });

      // Table header
      pdf.setFontSize(16);
      pdf.setTextColor(textMuted);
      pdf.text("Feature", 320, 580);
      pdf.text("Legacy", 680, 580, { align: "center" });
      pdf.setTextColor(59, 130, 246);
      pdf.text("Velaree", 960, 580, { align: "center" });
      pdf.setTextColor(textMuted);
      pdf.text("Point Solutions", 1240, 580, { align: "center" });

      const features = [
        { feature: "Multi-GDS Access", legacy: "Limited", velaree: "Full", point: "Single" },
        { feature: "AI Automation", legacy: "None", velaree: "Built-in", point: "Limited" },
        { feature: "Integration Time", legacy: "6-12 mo", velaree: "2-4 wk", point: "1-3 mo" },
        { feature: "Real-time Analytics", legacy: "Basic", velaree: "Advanced", point: "None" },
        { feature: "API-First", legacy: "No", velaree: "Yes", point: "Partial" }
      ];
      features.forEach((row, i) => {
        const y = 620 + i * 35;
        pdf.setFontSize(16);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "normal");
        pdf.text(row.feature, 320, y);
        pdf.setTextColor(239, 68, 68);
        pdf.text(row.legacy, 680, y, { align: "center" });
        pdf.setTextColor(16, 185, 129);
        pdf.setFont("helvetica", "bold");
        pdf.text(row.velaree, 960, y, { align: "center" });
        pdf.setTextColor(245, 158, 11);
        pdf.setFont("helvetica", "normal");
        pdf.text(row.point, 1240, y, { align: "center" });
      });

      // Differentiators
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(200, 780, 1520, 100, 16, 16, "F");
      pdf.setFontSize(20);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Our Differentiators", width / 2, 820, { align: "center" });

      const differentiators = ["Unified Platform", "AI-First", "Modern Stack", "Fair Pricing", "Fast Integration", "24/7 Support"];
      differentiators.forEach((diff, i) => {
        const x = 340 + i * 230;
        pdf.setFillColor(232, 222, 212);
        pdf.roundedRect(x - 70, 840, 200, 35, 17, 17, "F");
        pdf.setFontSize(14);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "normal");
        pdf.text(diff, x + 30, 863, { align: "center" });
      });

      addPageNumber(11, totalSlides);

      // ===== SLIDE 12: The Ask =====
      pdf.addPage();
      addSlideBackground("white");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("The Ask", width / 2, 150, { align: "center" });
      pdf.setFontSize(28);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("Pre-seed investment to accelerate growth", width / 2, 200, { align: "center" });

      // Big number
      pdf.setFontSize(140);
      pdf.setTextColor(59, 130, 246);
      pdf.setFont("helvetica", "bold");
      pdf.text("€400,000", width / 2, 340, { align: "center" });
      pdf.setFontSize(28);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("Pre-seed / Seed Investment", width / 2, 400, { align: "center" });
      pdf.setFontSize(20);
      pdf.text("18-month runway • Target: €100K ARR", width / 2, 440, { align: "center" });

      // Allocations
      const allocations = [
        { label: "Product Dev", amount: "€160K", percent: "40%", color: [59, 130, 246] },
        { label: "Sales & Mktg", amount: "€120K", percent: "30%", color: [139, 92, 246] },
        { label: "Operations", amount: "€80K", percent: "20%", color: [16, 185, 129] },
        { label: "Team", amount: "€40K", percent: "10%", color: [245, 158, 11] }
      ];
      allocations.forEach((alloc, i) => {
        const x = 280 + i * 380;
        pdf.setFillColor(248, 249, 250);
        pdf.roundedRect(x - 60, 490, 340, 180, 16, 16, "F");

        pdf.setFillColor(alloc.color[0], alloc.color[1], alloc.color[2]);
        pdf.circle(x + 110, 560, 45, "F");
        pdf.setFontSize(24);
        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.text(alloc.percent, x + 110, 570, { align: "center" });

        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.text(alloc.amount, x + 110, 640, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(alloc.label, x + 110, 670, { align: "center" });
      });

      // Milestones
      pdf.setFillColor(248, 249, 250);
      pdf.roundedRect(200, 710, 1040, 140, 16, 16, "F");
      pdf.setFontSize(22);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Key Milestones (18 months)", 720, 750, { align: "center" });

      const milestones = [
        { month: "M6", milestone: "Product Launch", kpi: "5 clients" },
        { month: "M9", milestone: "€25K MRR", kpi: "15 clients" },
        { month: "M12", milestone: "€50K MRR", kpi: "30 clients" },
        { month: "M18", milestone: "€100K ARR", kpi: "Series A ready" }
      ];
      milestones.forEach((item, i) => {
        const x = 340 + i * 230;
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(item.month, x, 790, { align: "center" });
        pdf.setFontSize(20);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.milestone, x, 820, { align: "center" });
        pdf.setFontSize(14);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(item.kpi, x, 845, { align: "center" });
      });

      // Burn rate / runway
      pdf.setFillColor(248, 249, 250);
      pdf.roundedRect(1280, 710, 220, 140, 16, 16, "F");
      pdf.setFontSize(16);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Monthly Burn", 1390, 755, { align: "center" });
      pdf.setFontSize(32);
      pdf.setTextColor(59, 130, 246);
      pdf.text("€22K", 1390, 800, { align: "center" });
      pdf.setFontSize(14);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("18mo runway", 1390, 830, { align: "center" });

      pdf.setFillColor(248, 249, 250);
      pdf.roundedRect(1520, 710, 200, 140, 16, 16, "F");
      pdf.setFontSize(16);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Runway", 1620, 755, { align: "center" });
      pdf.setFontSize(32);
      pdf.setTextColor(59, 130, 246);
      pdf.text("18mo", 1620, 800, { align: "center" });
      pdf.setFontSize(14);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("To Series A", 1620, 830, { align: "center" });

      addPageNumber(12, totalSlides);

      // ===== SLIDE 13: Team =====
      pdf.addPage();
      addSlideBackground("accent");
      addLogo();

      pdf.setFontSize(72);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("The Team", width / 2, 170, { align: "center" });

      // Team members - Updated to match viewer (2 members only)
      const team = [
        {
          name: "Mihail Mazil",
          role: "CEO",
          subtitle: "Strategy & Vision",
          experience: "10+ years travel tech",
          skills: ["Product Strategy", "Business Dev", "Fundraising"],
          linkedin: "linkedin.com/in/mihail-m-456922386",
          color: [59, 130, 246]
        },
        {
          name: "Mihail Sinitari",
          role: "COO",
          subtitle: "Operations & Growth",
          experience: "8+ years operations",
          skills: ["Operations", "Partnerships", "Scaling"],
          linkedin: "linkedin.com/in/mihailmarksn",
          color: [139, 92, 246]
        }
      ];
      team.forEach((member, i) => {
        const x = 480 + i * 520;
        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(x - 180, 240, 440, 360, 20, 20, "F");

        pdf.setFillColor(member.color[0], member.color[1], member.color[2]);
        pdf.circle(x + 40, 330, 60, "F");
        pdf.setFontSize(48);
        pdf.setTextColor(255, 255, 255);
        pdf.setFont("helvetica", "bold");
        pdf.text(member.name.split(' ')[0].charAt(0), x + 40, 350, { align: "center" });

        pdf.setFontSize(28);
        pdf.setTextColor(textPrimary);
        pdf.text(member.name, x + 40, 430, { align: "center" });
        pdf.setFontSize(18);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${member.role} • ${member.subtitle}`, x + 40, 465, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(59, 130, 246);
        pdf.setFont("helvetica", "bold");
        pdf.text(member.experience, x + 40, 500, { align: "center" });

        pdf.setFontSize(12);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(member.skills.join(" • "), x + 40, 540, { align: "center" });

        pdf.setFontSize(12);
        pdf.setTextColor(10, 102, 194);
        pdf.text(member.linkedin, x + 40, 580, { align: "center" });
      });

      // Hiring Roadmap
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(200, 640, 1520, 140, 16, 16, "F");
      pdf.setFontSize(24);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("Hiring Roadmap", width / 2, 690, { align: "center" });

      const hires = [
        { role: "Lead Engineer", timing: "Q1 2025" },
        { role: "Sales Lead", timing: "Q2 2025" },
        { role: "Product Manager", timing: "Q2 2025" },
        { role: "Customer Success", timing: "Q3 2025" }
      ];
      hires.forEach((hire, i) => {
        const x = 380 + i * 320;
        pdf.setFontSize(18);
        pdf.setTextColor(textPrimary);
        pdf.setFont("helvetica", "bold");
        pdf.text(hire.role, x, 740, { align: "center" });
        pdf.setFontSize(16);
        pdf.setTextColor(textMuted);
        pdf.setFont("helvetica", "normal");
        pdf.text(hire.timing, x, 768, { align: "center" });
      });

      // Footer logo and contact
      pdf.setFontSize(100);
      pdf.setTextColor(textPrimary);
      pdf.setFont("helvetica", "bold");
      pdf.text("V", width / 2 - 80, 880);
      pdf.setFontSize(60);
      pdf.text("elaree", width / 2 + 20, 880);
      pdf.setFontSize(22);
      pdf.setTextColor(textMuted);
      pdf.setFont("helvetica", "normal");
      pdf.text("velaree.com  •  contact@velaree.com", width / 2, 940, { align: "center" });

      addPageNumber(13, totalSlides);

      pdf.save("Velaree-Pitch-Deck.pdf");
    } catch (error) {
      console.error("Error generating pitch deck:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEmailSuccess = () => {
    setShowEmailCapture(false);
    generatePitchDeck();
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
        >
          <Link to="/pitch-deck">
            <Presentation className="w-5 h-5 mr-2" />
            View Pitch Deck
          </Link>
        </Button>
        <Button
          onClick={() => setShowEmailCapture(true)}
          disabled={isGenerating}
          size="lg"
          className="bg-secondary-foreground text-primary-foreground"
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

      <PitchDeckEmailCapture
        isOpen={showEmailCapture}
        onClose={() => setShowEmailCapture(false)}
        onSuccess={handleEmailSuccess}
      />
    </>
  );
};

export default PitchDeckDownload;
