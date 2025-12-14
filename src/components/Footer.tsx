import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  // Map link names to actual routes (null = no route yet)
  const linkRoutes: Record<string, string | null> = {
    "Solutions": "/asuite",
    "Technology": "/technology",
    "Integrations": "/technology",
    "Pricing": "/pricing",
    "About": null,
    "Careers": null,
    "Blog": "/blog",
    "Contact": "/contact",
    "Documentation": null,
    "API Reference": null,
    "Support": "/faq",
    "Status": null,
    "Privacy": null,
    "Terms": null,
    "Security": null,
    "Compliance": null,
    "FAQ": "/faq"
  };
  const footerLinks = {
    Product: ["Solutions", "Technology", "Integrations", "Pricing"],
    Company: ["About", "Careers", "Blog", "Contact"],
    Resources: ["Documentation", "API Reference", "Support", "FAQ"],
    Legal: ["Privacy", "Terms", "Security", "Compliance"]
  };
  return <footer className="bg-primary text-primary-foreground py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          <div className="hidden md:block md:col-span-1">
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => <div key={category}>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{category}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.map(link => {
              const route = linkRoutes[link];
              if (route) {
                return <li key={link}>
                        <Link to={route} className="text-primary-foreground/70 hover:text-primary-foreground active:text-primary-foreground transition-colors text-xs sm:text-sm py-1 inline-block min-h-[44px] flex items-center">
                          {link}
                        </Link>
                      </li>;
              }
              return <li key={link}>
                      <span className="text-primary-foreground/40 text-xs sm:text-sm cursor-not-allowed py-1 inline-block">
                        {link}
                      </span>
                    </li>;
            })}
              </ul>
            </div>)}
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-xs sm:text-sm text-center md:text-left">
            © 2025 Velaree. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground active:text-primary-foreground transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground active:text-primary-foreground transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground active:text-primary-foreground transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;