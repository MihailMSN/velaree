import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import velareeLogoImg from "@/assets/velaree-logo.png";
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
  const navItems = [{
    name: "Technology",
    path: "/technology"
  }, {
    name: "UnifyTool",
    path: "/unifytool"
  }, {
    name: "aRStool",
    path: "/rstool"
  }, {
    name: "hRStool",
    path: "/hrstool"
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
            {navItems.map(item => <button key={item.name} onClick={() => handleNavigation(item.path)} className={`transition-colors duration-200 ${location.pathname === item.path ? "text-foreground font-semibold" : "text-foreground/70 hover:text-foreground"}`}>
                {item.name}
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
              {navItems.map(item => <button key={item.name} onClick={() => handleNavigation(item.path)} className={`transition-colors duration-200 py-2 text-left ${location.pathname === item.path ? "text-foreground font-semibold" : "text-foreground/70 hover:text-foreground"}`}>
                  {item.name}
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