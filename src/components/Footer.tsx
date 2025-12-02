import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import velareeLogoImg from "@/assets/velaree-logo.png";

const Footer = () => {
  // Map link names to actual routes (null = no route yet)
  const linkRoutes: Record<string, string | null> = {
    "Solutions": "/asuite",
    "Technology": "/technology",
    "Integrations": null,
    "Pricing": "/pricing",
    "About": null,
    "Careers": null,
    "Blog": null,
    "Contact": "/contact",
    "Documentation": null,
    "API Reference": null,
    "Support": null,
    "Status": null,
    "Privacy": null,
    "Terms": null,
    "Security": null,
    "Compliance": null,
    "FAQ": "/faq",
  };

  const footerLinks = {
    Product: ["Solutions", "Technology", "Integrations", "Pricing"],
    Company: ["About", "Careers", "Blog", "Contact"],
    Resources: ["Documentation", "API Reference", "Support", "FAQ"],
    Legal: ["Privacy", "Terms", "Security", "Compliance"]
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <img 
              src={velareeLogoImg} 
              alt="Velaree Logo" 
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm">
              Building the future of travel technology
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => {
                  const route = linkRoutes[link];
                  
                  if (route) {
                    return (
                      <li key={link}>
                        <Link 
                          to={route}
                          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                        >
                          {link}
                        </Link>
                      </li>
                    );
                  }
                  
                  return (
                    <li key={link}>
                      <span className="text-primary-foreground/40 text-sm cursor-not-allowed">
                        {link}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Velaree. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;