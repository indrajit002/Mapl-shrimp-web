import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import expertImage from "@/assets/expert-portrait.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const features = [
    "Founded in 1996 with just four ponds",
    "Now operating 200+ hectares of farms",
    "Producing over 1,000 MT of premium shrimp annually",
    "Pioneered biosecure, sustainable aquaculture practices",
    "Strong global reputation for quality & traceability",
    "Multiple divisions for comprehensive shrimp solutions"
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Set initial states
    gsap.set([contentRef.current, imageRef.current], {
      opacity: 0,
      y: 50
    });

    gsap.set(featuresRef.current?.children, {
      opacity: 0,
      x: -30
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      scale: 0.8
    });

    // Animate content
    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(imageRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .to(featuresRef.current?.children, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.3")
    .to(buttonRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.2");

    // Cool hover animation for image
    if (imageRef.current) {
      const image = imageRef.current.querySelector('img');
      if (image) {
        // Add a subtle floating animation
        gsap.to(image, {
          y: -3,
          duration: 3,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        });

        const handleMouseEnter = () => {
          gsap.to(image, {
            scale: 1.08,
            rotation: 1,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            duration: 0.4,
            ease: "back.out(1.7)"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(image, {
            scale: 1,
            rotation: 0,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "power2.out"
          });
        };

        image.addEventListener('mouseenter', handleMouseEnter);
        image.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          image.removeEventListener('mouseenter', handleMouseEnter);
          image.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }

    // Add cool animation to features
    if (featuresRef.current) {
      const features = featuresRef.current.children;
      gsap.to(features, {
        x: 5,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-gray-50 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl eb-garamond font-bold leading-tight hover-underline-fade cursor-pointer" style={{ color: '#1b365d' }}>
                About the Company
              </h2>
              <div className="space-y-4">
                <p className="text-xl leading-relaxed eb-garamond-text" style={{ color: '#000000' }}>
                  <strong>Mayank Aquaculture Pvt. Ltd. (MAPL)</strong> is a leader in sustainable shrimp farming in India. Founded in 1996 with just four ponds, we have grown to become a pioneering force in biosecure, sustainable aquaculture practices.
                </p>
                <p className="text-xl leading-relaxed eb-garamond-text" style={{ color: '#000000' }}>
                  Today, we operate over 200+ hectares of farms and produce more than 1,000 MT of premium shrimp annually. Our strong global reputation is built on quality, traceability, and sustainability.
                </p>
              </div>
            </div>

            <div ref={featuresRef} className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-teal-100/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium text-lg eb-garamond-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Company Divisions */}
            <div className="space-y-6">
              <h3 className="text-3xl eb-garamond font-bold" style={{ color: '#1b365d' }}>Our Divisions</h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-teal-100/50 transition-all duration-300" style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.15)' }}>
                  <h4 className="text-xl eb-garamond font-bold mb-3" style={{ color: '#1b365d' }}>Manorama Aquatics</h4>
                  <p className="eb-garamond-text" style={{ color: '#000000' }}>Hatcheries & nurseries specializing in premium shrimp breeding and early-stage development.</p>
                </div>
                <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-teal-100/50 transition-all duration-300" style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.15)' }}>
                  <h4 className="text-xl eb-garamond font-bold mb-3" style={{ color: '#1b365d' }}>Mayank Aqua Products</h4>
                  <p className="eb-garamond-text" style={{ color: '#000000' }}>Shrimp farming & processing operations ensuring quality from pond to market.</p>
                </div>
                <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-teal-100/50 transition-all duration-300" style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.15)' }}>
                  <h4 className="text-xl eb-garamond font-bold mb-3" style={{ color: '#1b365d' }}>Zhingalala</h4>
                  <p className="eb-garamond-text" style={{ color: '#000000' }}>Pond-to-plate shrimp dining experience showcasing our premium products.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button ref={buttonRef} size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 px-8 py-4 text-lg font-semibold rounded-xl">
                {t('common.learn.more')}
              </Button>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 ease-out">
              <img
                src={expertImage}
                alt="Mayank Aquaculture sustainable shrimp farming operations"
                className="w-full h-auto group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <p className="text-white font-bold text-xl group-hover:text-teal-400 transition-colors duration-300 ease-out">Mayank Aquaculture Pvt. Ltd.</p>
                <p className="text-white/80 text-base group-hover:text-white transition-colors duration-300 ease-out">Leading Sustainable Shrimp Farming Since 1996</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;