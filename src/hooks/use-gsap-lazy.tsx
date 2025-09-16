import { useRef, useEffect, useState } from 'react';

// Lazy load GSAP for better performance
let gsap: any = null;
let ScrollTrigger: any = null;

const loadGSAP = async () => {
  if (!gsap) {
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');
    gsap = gsapModule.gsap;
    ScrollTrigger = scrollTriggerModule.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  }
  return { gsap, ScrollTrigger };
};

interface AnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  stagger?: number;
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  rotation?: number;
  boxShadow?: string;
}

export const useGSAPAnimationLazy = (
  animationType: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'custom',
  options: AnimationOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const initAnimation = async () => {
      const { gsap: gsapInstance, ScrollTrigger: ST } = await loadGSAP();
      
      if (!mounted || !elementRef.current) return;

      const {
        duration = 1,
        delay = 0,
        ease = 'power2.out',
        trigger,
        start = 'top 80%',
        end = 'bottom 20%',
        scrub = false,
        stagger = 0,
        y = 50,
        x = 0,
        opacity = 0,
        scale = 1,
        rotation = 0,
        boxShadow = '0 0 0 rgba(0,0,0,0)'
      } = options;

      // Set initial state
      gsapInstance.set(elementRef.current, {
        opacity: opacity,
        y: y,
        x: x,
        scale: scale,
        rotation: rotation,
        boxShadow: boxShadow
      });

      // Create animation based on type
      let animation: any;

      switch (animationType) {
        case 'fadeInUp':
          animation = gsapInstance.timeline({
            scrollTrigger: trigger ? {
              trigger: trigger,
              start: start,
              end: end,
              scrub: scrub,
              toggleActions: 'play none none reverse'
            } : undefined
          });
          animation.to(elementRef.current, {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: ease
          });
          break;

        case 'fadeInLeft':
          animation = gsapInstance.timeline({
            scrollTrigger: trigger ? {
              trigger: trigger,
              start: start,
              end: end,
              scrub: scrub,
              toggleActions: 'play none none reverse'
            } : undefined
          });
          animation.to(elementRef.current, {
            opacity: 1,
            x: 0,
            duration: duration,
            delay: delay,
            ease: ease
          });
          break;

        case 'fadeInRight':
          animation = gsapInstance.timeline({
            scrollTrigger: trigger ? {
              trigger: trigger,
              start: start,
              end: end,
              scrub: scrub,
              toggleActions: 'play none none reverse'
            } : undefined
          });
          animation.to(elementRef.current, {
            opacity: 1,
            x: 0,
            duration: duration,
            delay: delay,
            ease: ease
          });
          break;

        case 'scaleIn':
          animation = gsapInstance.timeline({
            scrollTrigger: trigger ? {
              trigger: trigger,
              start: start,
              end: end,
              scrub: scrub,
              toggleActions: 'play none none reverse'
            } : undefined
          });
          animation.to(elementRef.current, {
            opacity: 1,
            scale: 1,
            duration: duration,
            delay: delay,
            ease: ease
          });
          break;

        case 'slideInUp':
          animation = gsapInstance.timeline({
            scrollTrigger: trigger ? {
              trigger: trigger,
              start: start,
              end: end,
              scrub: scrub,
              toggleActions: 'play none none reverse'
            } : undefined
          });
          animation.to(elementRef.current, {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: ease
          });
          break;

        case 'custom':
          animation = gsapInstance.timeline({
            scrollTrigger: trigger ? {
              trigger: trigger,
              start: start,
              end: end,
              scrub: scrub,
              toggleActions: 'play none none reverse'
            } : undefined
          });
          animation.to(elementRef.current, {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotation: 0,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            duration: duration,
            delay: delay,
            ease: ease
          });
          break;
      }

      // Handle stagger for multiple elements
      if (stagger > 0) {
        const children = elementRef.current.querySelectorAll('[data-animate]');
        if (children.length > 0) {
          gsapInstance.fromTo(children, 
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: duration,
              stagger: stagger,
              ease: ease,
              scrollTrigger: trigger ? {
                trigger: trigger,
                start: start,
                end: end,
                toggleActions: 'play none none reverse'
              } : undefined
            }
          );
        }
      }

      setIsLoaded(true);
    };

    initAnimation();

    return () => {
      mounted = false;
    };
  }, [animationType, options]);

  return { elementRef, isLoaded };
};

// Hook for hover animations
export const useGSAPHoverLazy = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let mounted = true;

    const initHover = async () => {
      const { gsap: gsapInstance } = await loadGSAP();
      
      if (!mounted || !elementRef.current) return;

      const element = elementRef.current;

      const handleMouseEnter = () => {
        gsapInstance.to(element, {
          scale: 1.05,
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          duration: 0.3,
          ease: 'power2.out'
        });
      };

      const handleMouseLeave = () => {
        gsapInstance.to(element, {
          scale: 1,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          duration: 0.3,
          ease: 'power2.out'
        });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    initHover();

    return () => {
      mounted = false;
    };
  }, []);

  return elementRef;
};
