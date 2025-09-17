import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, Globe, ArrowRight, CheckCircle, Package, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BusinessServices = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const importRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const importServices = [
    {
      icon: <Package className="h-6 w-6" />,
      title: t('services.import.fresh.title'),
      description: t('services.import.fresh.description'),
      price: t('services.import.fresh.price'),
      minimum: t('services.import.fresh.minimum'),
      features: [t('services.import.fresh.features.temperature'), t('services.import.fresh.features.haccp'), t('services.import.fresh.features.tracking')]
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: t('services.import.frozen.title'),
      description: t('services.import.frozen.description'),
      price: t('services.import.frozen.price'),
      minimum: t('services.import.frozen.minimum'),
      features: [t('services.import.frozen.features.iqf'), t('services.import.frozen.features.packaging'), t('services.import.frozen.features.shipping')]
    }
  ];

  const exportCapabilities = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: t('services.export.network.title'),
      description: t('services.export.network.description'),
      volume: t('services.export.network.volume'),
      markets: [t('services.export.network.markets.europe'), t('services.export.network.markets.usa'), t('services.export.network.markets.japan'), t('services.export.network.markets.canada')],
      features: [t('services.export.network.features.asc'), t('services.export.network.features.bap'), t('services.export.network.features.carbon')]
    },
    {
      icon: <Ship className="h-6 w-6" />,
      title: t('services.export.services.title'),
      description: t('services.export.services.description'),
      volume: t('services.export.services.volume'),
      markets: [t('services.export.services.markets.asia'), t('services.export.services.markets.middle.east'), t('services.export.services.markets.australia')],
      features: [t('services.export.services.features.quality'), t('services.export.services.features.documentation'), t('services.export.services.features.logistics')]
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Set initial states
    gsap.set([headerRef.current, importRef.current, exportRef.current, statsRef.current], {
      opacity: 0,
      y: 50
    });

    gsap.set(cardRefs.current, {
      opacity: 0,
      y: 30,
      scale: 0.95
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate sections
    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .to([importRef.current, exportRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .to(cardRefs.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.3")
    .to(statsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.2");

    // Cool hover animations for cards
    cardRefs.current.forEach((cardRef, index) => {
      if (cardRef) {
        // Add subtle floating animation
        gsap.to(cardRef, {
          y: -2,
          duration: 2.5 + index * 0.3,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        });

        const handleMouseEnter = () => {
          gsap.to(cardRef, {
            scale: 1.05,
            y: -10,
            rotation: 1,
            boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
            duration: 0.4,
            ease: "back.out(1.7)"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(cardRef, {
            scale: 1,
            y: -2,
            rotation: 0,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "power2.out"
          });
        };

        cardRef.addEventListener('mouseenter', handleMouseEnter);
        cardRef.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          cardRef.removeEventListener('mouseenter', handleMouseEnter);
          cardRef.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });

    // Add cool animation to stats
    if (statsRef.current) {
      const statItems = statsRef.current.children;
      gsap.to(statItems, {
        scale: 1.02,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl eb-garamond font-bold text-ocean-900 mb-8">
            {t('services.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed eb-garamond-text">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Import Services */}
          <div ref={importRef} className="space-y-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center shadow-lg">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-3xl eb-garamond font-bold text-blue-900">{t('services.import.title')}</h3>
                <p className="text-lg text-muted-foreground eb-garamond-text">{t('services.import.subtitle')}</p>
              </div>
            </div>

            <div className="space-y-8">
              {importServices.map((service, index) => (
                <Card 
                  key={service.title} 
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="bg-white/80 backdrop-blur-sm border border-blue-100/50 shadow-xl hover:shadow-2xl relative group hover:scale-[1.02] transition-all duration-500 ease-out rounded-2xl"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ease-out shadow-lg">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl eb-garamond font-bold text-blue-900 group-hover:text-blue-900 transition-colors duration-300 ease-out">{service.title}</h4>
                          <Badge variant="outline" className="px-4 py-2 text-sm font-medium group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 ease-out">{service.price}</Badge>
                        </div>
                        <p className="text-base text-muted-foreground mb-4 group-hover:text-muted-foreground transition-colors duration-300 ease-out leading-relaxed eb-garamond-text">{service.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="group-hover:text-muted-foreground transition-colors duration-300 ease-out font-medium">Min: {service.minimum}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="px-3 py-1 text-sm font-medium group-hover:bg-blue-500/10 group-hover:border-blue-500 transition-all duration-300 ease-out">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 px-8 py-4 text-lg font-semibold rounded-xl">
              <Link to="/importer">
                {t('services.import.cta')}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Export Capabilities */}
          <div ref={exportRef} className="space-y-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-2xl flex items-center justify-center shadow-lg">
                <Ship className="h-8 w-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-3xl eb-garamond font-bold text-emerald-900">{t('services.export.title')}</h3>
                <p className="text-lg text-muted-foreground eb-garamond-text">{t('services.export.subtitle')}</p>
              </div>
            </div>

            <div className="space-y-8">
              {exportCapabilities.map((capability, index) => (
                <Card 
                  key={capability.title} 
                  ref={(el) => (cardRefs.current[index + 2] = el)}
                  className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 shadow-xl hover:shadow-2xl relative group hover:scale-[1.02] transition-all duration-500 ease-out rounded-2xl"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ease-out shadow-lg">
                        {capability.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl eb-garamond font-bold text-emerald-900 group-hover:text-emerald-900 transition-colors duration-300 ease-out">{capability.title}</h4>
                          <Badge className="bg-emerald-400/10 text-emerald-600 px-4 py-2 text-sm font-medium group-hover:bg-emerald-400 group-hover:text-white transition-all duration-300 ease-out">{capability.volume}</Badge>
                        </div>
                        <p className="text-base text-muted-foreground mb-4 group-hover:text-muted-foreground transition-colors duration-300 ease-out leading-relaxed eb-garamond-text">{capability.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="group-hover:text-muted-foreground transition-colors duration-300 ease-out font-medium">Markets: {capability.markets.join(", ")}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {capability.features.map((feature, idx) => (
                            <Badge key={idx} className="bg-emerald-400/10 text-emerald-600 px-3 py-1 text-sm font-medium group-hover:bg-emerald-400 group-hover:text-white transition-all duration-300 ease-out">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button asChild className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 px-8 py-4 text-lg font-semibold rounded-xl">
              <Link to="/exporter">
                {t('services.export.cta')}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Global Reach Stats */}
        <div ref={statsRef} className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center p-8 group hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-500/20 hover:shadow-xl hover:scale-[1.05] rounded-2xl transition-all duration-300 ease-out bg-white/60 backdrop-blur-sm border border-blue-100/50">
            <div className="text-4xl font-bold text-blue-500 mb-3 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 ease-out">15+</div>
            <p className="text-base text-muted-foreground group-hover:text-muted-foreground transition-colors duration-300 ease-out font-medium">{t('services.stats.countries')}</p>
          </div>
          <div className="text-center p-8 group hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-teal-500/20 hover:shadow-xl hover:scale-[1.05] rounded-2xl transition-all duration-300 ease-out bg-white/60 backdrop-blur-sm border border-emerald-100/50">
            <div className="text-4xl font-bold text-emerald-500 mb-3 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-300 ease-out">500+</div>
            <p className="text-base text-muted-foreground group-hover:text-muted-foreground transition-colors duration-300 ease-out font-medium">{t('services.stats.capacity')}</p>
          </div>
          <div className="text-center p-8 group hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-sky-500/20 hover:shadow-xl hover:scale-[1.05] rounded-2xl transition-all duration-300 ease-out bg-white/60 backdrop-blur-sm border border-cyan-100/50">
            <div className="text-4xl font-bold text-cyan-500 mb-3 group-hover:text-cyan-500 group-hover:scale-110 transition-all duration-300 ease-out">24-48h</div>
            <p className="text-base text-muted-foreground group-hover:text-muted-foreground transition-colors duration-300 ease-out font-medium">{t('services.stats.delivery')}</p>
          </div>
          <div className="text-center p-8 group hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-emerald-500/20 hover:shadow-xl hover:scale-[1.05] rounded-2xl transition-all duration-300 ease-out bg-white/60 backdrop-blur-sm border border-teal-100/50">
            <div className="text-4xl font-bold text-teal-500 mb-3 group-hover:text-teal-500 group-hover:scale-110 transition-all duration-300 ease-out">100%</div>
            <p className="text-base text-muted-foreground group-hover:text-muted-foreground transition-colors duration-300 ease-out font-medium">{t('services.stats.quality')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;
