import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.jpg";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.products'), href: "/products" },
    { name: t('nav.sustainability'), href: "/sustainability" },
    { name: t('nav.research'), href: "/research" },
    { name: t('nav.news'), href: "/news" },
    { name: t('nav.importer'), href: "/importer" },
    { name: t('nav.exporter'), href: "/exporter" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-ocean-50/95 via-white/95 to-aqua-50/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-6 py-4" role="navigation">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="MAPL Shrimp Logo" 
              className="h-10 w-auto animate-logo-float"
            />
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-primary">
                MAPL
              </span>
              <span className="text-sm text-muted-foreground -mt-1">Shrimp</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button variant="default" className="ml-4 bg-gradient-ocean hover:bg-gradient-aqua text-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <Link to="/products">{t('common.get.started')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-foreground/80 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-4">
              <LanguageSwitcher />
              <Button variant="default" className="flex-1 ml-4 bg-gradient-ocean hover:bg-gradient-aqua text-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>{t('common.get.started')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;