import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, Building2, Layers, Link as LinkIcon, LucideIcon, User, LogOut, LayoutDashboard } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useUserRole } from "@/hooks/useUserRole";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
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
  const { user, signOut } = useAuth();
  const { isPlatformAdmin } = useUserRole();

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
    badgeColor: "bg-feature-blue-muted text-feature-blue-foreground border-feature-blue"
  }, {
    name: "UnifyTool",
    path: "/unifytool",
    icon: LinkIcon,
    badgeColor: "bg-feature-amber-muted text-feature-amber-foreground border-feature-amber"
  }, {
    name: "aRStool",
    path: "/rstool",
    icon: Plane,
    badgeColor: "bg-feature-purple-muted text-feature-purple-foreground border-feature-purple"
  }, {
    name: "hRStool",
    path: "/hrstool",
    icon: Building2,
    badgeColor: "bg-feature-emerald-muted text-feature-emerald-foreground border-feature-emerald"
  }, {
    name: "Pricing",
    path: "/pricing"
  }, {
    name: "Blog",
    path: "/blog"
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
            {navItems.map(item => <button key={item.name} onClick={() => handleNavigation(item.path)} className={`relative inline-block pr-3 transition-colors duration-200 ${location.pathname === item.path ? "text-foreground font-semibold" : "text-foreground/70 hover:text-foreground"}`}>
                {item.name}
                {item.icon && (
                  <span className={`absolute -top-2 -right-0.5 inline-flex items-center justify-center w-4 h-4 rounded-full border ${item.badgeColor}`}>
                    <item.icon className="w-2.5 h-2.5" />
                  </span>
                )}
              </button>)}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link to="/contact">
                  <Button variant="outline" className="rounded-full px-6">
                    Book Demo
                  </Button>
                </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleNavigation('/dashboard')}>
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </DropdownMenuItem>
                    {isPlatformAdmin && (
                      <DropdownMenuItem onClick={() => handleNavigation('/admin')}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Admin Panel
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => handleNavigation('/auth')} className="rounded-full px-6">
                  Sign In
                </Button>
                <Link to="/contact">
                  <Button className="rounded-full px-6 text-white bg-stone-950 hover:bg-stone-800">
                    Book Demo
                  </Button>
                </Link>
              </>
            )}
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map(item => <button key={item.name} onClick={() => handleNavigation(item.path)} className={`relative inline-block w-full pr-6 transition-colors duration-200 py-2 text-left ${location.pathname === item.path ? "text-foreground font-semibold" : "text-foreground/70 hover:text-foreground"}`}>
                  {item.name}
                  {item.icon && (
                    <span className={`absolute top-1.5 right-0 inline-flex items-center justify-center w-4 h-4 rounded-full border ${item.badgeColor}`}>
                      <item.icon className="w-2.5 h-2.5" />
                    </span>
                  )}
                </button>)}
              <Button onClick={() => handleNavigation('/contact')} className="w-full rounded-full mt-2">
                Book Demo
              </Button>
              {user ? (
                <>
                  <Button onClick={() => handleNavigation('/dashboard')} variant="outline" className="w-full rounded-full">
                    Dashboard
                  </Button>
                  {isPlatformAdmin && (
                    <Button onClick={() => handleNavigation('/admin')} variant="outline" className="w-full rounded-full">
                      Admin Panel
                    </Button>
                  )}
                  <Button onClick={signOut} variant="ghost" className="w-full rounded-full">
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button onClick={() => handleNavigation('/auth')} variant="outline" className="w-full rounded-full">
                  Sign In
                </Button>
              )}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;