import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, Building2, Layers, Link as LinkIcon, LucideIcon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import velareeLogoImg from "@/assets/velaree-logo.png";

interface NavItem {
  name: string;
  path: string;
  icon?: LucideIcon;
  badgeColor?: string;
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems: NavItem[] = [{
    name: "Technology",
    path: "/technology"
  }, {
    name: "aSuite",
    path: "/asuite",
    icon: Layers,
    badgeColor: "bg-blue-500/20 text-blue-600 border-blue-300"
  }, {
    name: "UnifyTool",
    path: "/unifytool",
    icon: LinkIcon,
    badgeColor: "bg-orange-500/20 text-orange-600 border-orange-300"
  }, {
    name: "aRStool",
    path: "/rstool",
    icon: Plane,
    badgeColor: "bg-pink-500/20 text-pink-600 border-pink-300"
  }, {
    name: "hRStool",
    path: "/hrstool",
    icon: Building2,
    badgeColor: "bg-green-500/20 text-green-600 border-green-300"
  }, {
    name: "Pricing",
    path: "/pricing"
  }, {
    name: "FAQ",
    path: "/faq"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-[24px] py-px">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={velareeLogoImg} alt="Velaree Logo" className="h-16 md:h-24 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <button key={item.name} onClick={() => handleNavigation(item.path)} className={`flex items-center gap-2 transition-colors duration-200 ${location.pathname === item.path ? "text-foreground font-semibold" : "text-foreground/70 hover:text-foreground"}`}>
                {item.name}
                {item.icon && (
                  <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full border ${item.badgeColor}`}>
                    <item.icon className="w-3 h-3" />
                  </span>
                )}
              </button>)}
          </div>
          
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="rounded-full px-6 text-white bg-stone-950 hover:bg-stone-800">
                Book Demo
              </Button>
            </Link>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map(item => <button key={item.name} onClick={() => handleNavigation(item.path)} className={`flex items-center gap-2 transition-colors duration-200 py-2 text-left ${location.pathname === item.path ? "text-foreground font-semibold" : "text-foreground/70 hover:text-foreground"}`}>
                  {item.name}
                  {item.icon && (
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full border ${item.badgeColor}`}>
                      <item.icon className="w-3 h-3" />
                    </span>
                  )}
                </button>)}
              <Button onClick={() => handleNavigation('/contact')} className="w-full rounded-full mt-2">
                Book Demo
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;