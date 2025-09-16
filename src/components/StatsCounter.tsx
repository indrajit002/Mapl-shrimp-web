import { useEffect, useState, useRef } from "react";
import { Droplet, Shield, Award, Leaf } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

const StatsCounter = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stats: Stat[] = [
    {
      label: "Hectares of Pristine Waters",
      value: 500,
      suffix: "+",
      icon: <Droplet className="h-6 w-6" />,
    },
    {
      label: "Zero Antibiotics",
      value: 100,
      suffix: "%",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      label: "International Certifications",
      value: 8,
      suffix: "",
      icon: <Award className="h-6 w-6" />,
    },
    {
      label: "Carbon Neutral by",
      value: 2025,
      suffix: "",
      icon: <Leaf className="h-6 w-6" />,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Set initial states
    gsap.set(statRefs.current, {
      opacity: 0,
      y: 50,
      scale: 0.8
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

    // Animate stats with stagger
    tl.to(statRefs.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });

    // Counter animation
    statRefs.current.forEach((statRef, index) => {
      if (statRef) {
        const stat = stats[index];
        const counter = { value: 0 };
        
        gsap.to(counter, {
          value: stat.value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(counter.value);
              return newCounts;
            });
          },
          scrollTrigger: {
            trigger: statRef,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    // Cool hover animations
    statRefs.current.forEach((statRef, index) => {
      if (statRef) {
        // Add a subtle floating animation
        gsap.to(statRef, {
          y: -5,
          duration: 2 + index * 0.2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        });

        const handleMouseEnter = () => {
          gsap.to(statRef, {
            scale: 1.1,
            y: -15,
            rotation: 2,
            boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
            duration: 0.4,
            ease: "back.out(1.7)"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(statRef, {
            scale: 1,
            y: -5,
            rotation: 0,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "power2.out"
          });
        };

        statRef.addEventListener('mouseenter', handleMouseEnter);
        statRef.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          statRef.removeEventListener('mouseenter', handleMouseEnter);
          statRef.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-ocean-50 via-white to-coral-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-coral-100"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => (statRefs.current[index] = el)}
                    className="text-center p-6 rounded-2xl bg-transparent relative group hover:bg-gradient-to-br hover:from-ocean-500/20 hover:to-coral-500/20 hover:shadow-lg transition-all duration-300 ease-out"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-foreground mb-2 group-hover:text-foreground group-hover:scale-105 transition-all duration-300 ease-out">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 ease-out">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;