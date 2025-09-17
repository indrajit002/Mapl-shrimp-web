import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Certifications", href: "/certifications" },
      { name: "Research", href: "/research" }
    ],
    Business: [
      { name: "Import Services", href: "/importer" },
      { name: "Export Services", href: "/exporter" },
      { name: "Partnerships", href: "/partnerships" },
      { name: "News", href: "/news" }
    ],
    Products: [
      { name: "Black Tiger", href: "/products" },
      { name: "Vannamei", href: "/products" },
      { name: "Value-Added", href: "/products" },
      { name: "Custom Orders", href: "/contact" }
    ],
    Resources: [
      { name: "Quality Standards", href: "/certifications" },
      { name: "Cooking Guide", href: "/products" },
      { name: "Nutrition Facts", href: "/products" },
      { name: "FAQs", href: "/contact" }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-gradient-ocean text-white overflow-hidden" role="contentinfo">
      {/* Enhanced Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/60 via-aqua-800/40 to-teal-900/50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(34,211,238,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,transparent_70%)]"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_60%)]"></div>
      </div>
      
      {/* Ocean Wave Pattern */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-ocean-800/40"></div>
      
      {/* Enhanced Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-aqua-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-teal-400/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-ocean-400/50 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-aqua-300/40 rounded-full animate-pulse delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-teal-300/40 rounded-full animate-pulse delay-5000"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-coral-400/30 rounded-full animate-pulse delay-6000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="MAPL Shrimp Logo" 
                className="h-16 w-auto mb-4 animate-logo-float"
              />
              <h3 className="text-2xl eb-garamond font-bold">MAPL Shrimp</h3>
              <p className="text-sm text-white/60 mt-2 eb-garamond-text">
                From our ponds to your plate — sustainably.
              </p>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-aqua hover:scale-110 hover:shadow-lg hover:shadow-aqua-500/25 transition-all duration-300 ease-out"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="eb-garamond font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 ease-out"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Map */}
          <div className="lg:col-span-1">
            <h4 className="eb-garamond font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-aqua-400" />
                <span>Mahajanga Province, Madagascar</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <Phone className="h-4 w-4 flex-shrink-0 text-aqua-400" />
                <span>+261 20 22 123 45</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4 flex-shrink-0 text-aqua-400" />
                <span>info@maplshrimp.mg</span>
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-white/20 pt-8 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © {currentYear} MAPL Shrimp. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white hover:scale-105 transition-all duration-300 ease-out"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white hover:scale-105 transition-all duration-300 ease-out"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white hover:scale-105 transition-all duration-300 ease-out"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;