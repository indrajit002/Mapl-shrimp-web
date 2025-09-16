import { useEffect } from 'react';

// Image lazy loading hook
export const useLazyLoading = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, []);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  useEffect(() => {
    // Preload hero image
    const heroImage = new Image();
    heroImage.src = '/api/placeholder/1920/1080';
    
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
    
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/critical.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);
  }, []);
};

// Optimize images for different screen sizes
export const getOptimizedImageSrc = (baseSrc: string, width: number, quality: number = 85) => {
  // This would integrate with your image optimization service
  return `${baseSrc}?w=${width}&q=${quality}&f=webp`;
};

// Performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      if (loadTime > 3000) {
        console.warn('Page load time is slow:', loadTime + 'ms');
      }
    });

    // Basic performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);
};

// Resource hints for performance
export const addResourceHints = () => {
  useEffect(() => {
    // DNS prefetch for external domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);
};

// Critical CSS inlining
export const inlineCriticalCSS = () => {
  useEffect(() => {
    const criticalCSS = `
      /* Critical above-the-fold styles */
      .hero-section { min-height: 100vh; }
      .header { position: fixed; top: 0; z-index: 50; }
      .preloader { position: fixed; inset: 0; z-index: 9999; }
    `;
    
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.insertBefore(style, document.head.firstChild);
  }, []);
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);
};

// Performance Optimizer Component
const PerformanceOptimizer = () => {
  useLazyLoading();
  preloadCriticalResources();
  usePerformanceMonitoring();
  addResourceHints();
  inlineCriticalCSS();
  registerServiceWorker();

  return null;
};

export default PerformanceOptimizer;
