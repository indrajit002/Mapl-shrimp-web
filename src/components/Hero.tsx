import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";
import heroImage from "@/assets/hero-shrimp-farm.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

import $ from "jquery";
import "jquery.ripples"; 

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

const Hero = ({ title, subtitle, ctaText }: HeroProps) => {
  const { t } = useLanguage();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // ✅ keep isLoaded for fade-in animations
  const [isLoaded, setIsLoaded] = useState(false);

  // Animate in after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Apply ripple effect
  useEffect(() => {
    if (parallaxRef.current) {
      try {
        ($(parallaxRef.current) as any).ripples({
          resolution: 200,
          perturbance: 0.004,
        });
      } catch (e) {
        console.error("Ripples init failed:", e);
      }
    }

    // Cleanup
    return () => {
      if (parallaxRef.current) {
        try {
          ($(parallaxRef.current) as any).ripples("destroy");
        } catch (e) {}
      }
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-coral-400/20 rounded-full animate-morphing"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-aqua-500/20 rounded-full animate-liquid"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-ocean-500/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-coral-400/30 rounded-full animate-particle"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-aqua-500/20 rounded-full animate-morphing" style={{ animationDelay: "2s" }}></div>
        
        {/* Particle Background */}
        <ParticleBackground particleCount={15} />
      </div>
      
      {/* ✅ Background Image with Ripple Effect */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 full-landing-image"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <h1 
            ref={titleRef}
            className={`text-fluid-4xl md:text-fluid-5xl eb-garamond font-bold text-white leading-tight mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
          >
            {title || t("hero.title")}
          </h1>
          <p 
            ref={subtitleRef}
            className={`text-fluid-lg md:text-fluid-xl text-sand-200 mb-8 transition-all duration-1000 delay-200 eb-garamond-text ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
          >
            {subtitle || t("hero.subtitle")}
          </p>
          <div 
            ref={buttonsRef} 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-ocean hover:bg-gradient-aqua text-white shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out rounded-full border-0"
              asChild
            >
              <Link to="/about">
                {ctaText || t("hero.cta.primary")}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r from-white/10 to-aqua-500/20 text-white border-aqua-400/30 hover:bg-gradient-aqua hover:border-aqua-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out rounded-full"
              asChild
            >
              <Link to="/products">
                {t("hero.cta.secondary")}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef} 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white transition-all duration-1000 delay-600 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
