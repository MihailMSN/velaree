import { useLayoutEffect, useRef, useState, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { 
  ArrowUpRight, User, LogOut, LayoutDashboard, 
  Layers, Link as LinkIcon, Plane, Building2,
  Code, CreditCard, FileText, HelpCircle,
  Mail, LogIn, Shield, LucideIcon
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserRole } from '@/hooks/useUserRole';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import './CardNav.css';

interface NavLink {
  label: string;
  href: string;
  ariaLabel: string;
  icon?: LucideIcon;
  iconColor?: string;
}

interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

interface CardNavProps {
  className?: string;
  ease?: string;
}

const CardNav = ({ className = '', ease = 'power3.out' }: CardNavProps) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { isPlatformAdmin } = useUserRole();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items: NavItem[] = [
    {
      label: 'Products',
      bgColor: 'linear-gradient(135deg, hsl(0 0% 99%) 0%, hsl(32 28% 94%) 50%, hsl(0 0% 98%) 100%)',
      textColor: 'hsl(var(--foreground))',
      links: [
        { label: 'aSuite', href: '/asuite', ariaLabel: 'aSuite Product', icon: Layers, iconColor: 'hsl(var(--feature-blue))' },
        { label: 'UnifyTool', href: '/unifytool', ariaLabel: 'UnifyTool Product', icon: LinkIcon, iconColor: 'hsl(var(--feature-amber))' },
        { label: 'aRStool', href: '/rstool', ariaLabel: 'aRStool Product', icon: Plane, iconColor: 'hsl(var(--feature-purple))' },
        { label: 'hRStool', href: '/hrstool', ariaLabel: 'hRStool Product', icon: Building2, iconColor: 'hsl(var(--feature-emerald))' },
      ],
    },
    {
      label: 'Company',
      bgColor: 'linear-gradient(135deg, hsl(0 0% 99%) 0%, hsl(32 28% 94%) 50%, hsl(0 0% 98%) 100%)',
      textColor: 'hsl(var(--foreground))',
      links: [
        { label: 'Technology', href: '/technology', ariaLabel: 'Technology Page', icon: Code, iconColor: 'hsl(var(--feature-purple))' },
        { label: 'Pricing', href: '/pricing', ariaLabel: 'Pricing Page', icon: CreditCard, iconColor: 'hsl(var(--feature-emerald))' },
        { label: 'Blog', href: '/blog', ariaLabel: 'Blog Page', icon: FileText, iconColor: 'hsl(var(--feature-blue))' },
        { label: 'FAQ', href: '/faq', ariaLabel: 'FAQ Page', icon: HelpCircle, iconColor: 'hsl(var(--feature-amber))' },
      ],
    },
    {
      label: 'Connect',
      bgColor: 'linear-gradient(135deg, hsl(0 0% 99%) 0%, hsl(32 28% 94%) 50%, hsl(0 0% 98%) 100%)',
      textColor: 'hsl(var(--foreground))',
      links: [
        { label: 'Contact', href: '/contact', ariaLabel: 'Contact Page', icon: Mail, iconColor: 'hsl(var(--feature-blue))' },
        ...(user
          ? [{ label: 'Dashboard', href: '/dashboard', ariaLabel: 'User Dashboard', icon: LayoutDashboard, iconColor: 'hsl(var(--feature-purple))' }]
          : [{ label: 'Sign In', href: '/auth', ariaLabel: 'Sign In', icon: LogIn, iconColor: 'hsl(var(--feature-emerald))' }]),
        ...(isPlatformAdmin
          ? [{ label: 'Admin Panel', href: '/admin', ariaLabel: 'Admin Panel', icon: Shield, iconColor: 'hsl(var(--feature-amber))' }]
          : []),
      ],
    },
  ];

  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisibility = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        void contentEl.offsetHeight;

        const topBar = 48;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisibility;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  }, []);

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 48, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      '-=0.1'
    );

    return tl;
  }, [calculateHeight, ease]);

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline, items.length]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded, calculateHeight, createTimeline]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close menu after navigation
    const tl = tlRef.current;
    if (tl && isExpanded) {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}
        style={{ backgroundColor: 'hsl(var(--background))' }}
      >
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
            style={{ color: 'hsl(var(--foreground))' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="/lovable-uploads/8bb7b63f-7523-43f8-8770-d9fd51cdeab3.png"
                alt="Velaree Logo"
                className="logo"
                loading="eager"
              />
            </Link>
          </div>

          <div className="card-nav-user-menu">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="card-nav-user-button" style={{ color: 'hsl(var(--foreground))' }}>
                    <User className="h-5 w-5" />
                  </button>
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
            ) : (
              <button
                type="button"
                className="card-nav-cta-button"
                style={{
                  backgroundColor: 'hsl(var(--foreground))',
                  color: 'hsl(var(--background))',
                }}
                onClick={() => handleNavigation('/contact')}
              >
                Book Demo
              </button>
            )}
          </div>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {items.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ background: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links.map((lnk, i) => {
                  const Icon = lnk.icon;
                  return (
                    <span
                      key={`${lnk.label}-${i}`}
                      className="nav-card-link"
                      onClick={() => handleNavigation(lnk.href)}
                      aria-label={lnk.ariaLabel}
                      role="link"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleNavigation(lnk.href)}
                    >
                      {Icon ? (
                        <Icon 
                          className="nav-card-link-icon" 
                          aria-hidden="true" 
                          style={{ color: lnk.iconColor }}
                        />
                      ) : (
                        <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                      )}
                      {lnk.label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
