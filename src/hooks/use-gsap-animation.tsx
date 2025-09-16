import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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

export const useGSAPAnimation = (
  animationType: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'custom',
  options: AnimationOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
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
    gsap.set(element, {
      opacity: opacity,
      y: y,
      x: x,
      scale: scale,
      rotation: rotation,
      boxShadow: boxShadow
    });

    // Create animation based on type
    let animation: gsap.core.Timeline;

    switch (animationType) {
      case 'fadeInUp':
        animation = gsap.timeline({
          scrollTrigger: trigger ? {
            trigger: trigger,
            start: start,
            end: end,
            scrub: scrub,
            toggleActions: 'play none none reverse'
          } : undefined
        });
        animation.to(element, {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          ease: ease
        });
        break;

      case 'fadeInLeft':
        animation = gsap.timeline({
          scrollTrigger: trigger ? {
            trigger: trigger,
            start: start,
            end: end,
            scrub: scrub,
            toggleActions: 'play none none reverse'
          } : undefined
        });
        animation.to(element, {
          opacity: 1,
          x: 0,
          duration: duration,
          delay: delay,
          ease: ease
        });
        break;

      case 'fadeInRight':
        animation = gsap.timeline({
          scrollTrigger: trigger ? {
            trigger: trigger,
            start: start,
            end: end,
            scrub: scrub,
            toggleActions: 'play none none reverse'
          } : undefined
        });
        animation.to(element, {
          opacity: 1,
          x: 0,
          duration: duration,
          delay: delay,
          ease: ease
        });
        break;

      case 'scaleIn':
        animation = gsap.timeline({
          scrollTrigger: trigger ? {
            trigger: trigger,
            start: start,
            end: end,
            scrub: scrub,
            toggleActions: 'play none none reverse'
          } : undefined
        });
        animation.to(element, {
          opacity: 1,
          scale: 1,
          duration: duration,
          delay: delay,
          ease: ease
        });
        break;

      case 'slideInUp':
        animation = gsap.timeline({
          scrollTrigger: trigger ? {
            trigger: trigger,
            start: start,
            end: end,
            scrub: scrub,
            toggleActions: 'play none none reverse'
          } : undefined
        });
        animation.to(element, {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          ease: ease
        });
        break;

      case 'custom':
        animation = gsap.timeline({
          scrollTrigger: trigger ? {
            trigger: trigger,
            start: start,
            end: end,
            scrub: scrub,
            toggleActions: 'play none none reverse'
          } : undefined
        });
        animation.to(element, {
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
      const children = element.querySelectorAll('[data-animate]');
      if (children.length > 0) {
        gsap.fromTo(children, 
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

    return () => {
      animation?.kill();
    };
  }, [animationType, options]);

  return elementRef;
};

// Hook for hover animations
export const useGSAPHover = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
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
  }, []);

  return elementRef;
};

// Hook for button animations
export const useGSAPButton = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    const handleClick = () => {
      gsap.to(element, {
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
      });
    };

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return elementRef;
};
