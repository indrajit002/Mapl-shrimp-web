import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Integration
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track e-commerce events
export const trackPurchase = (transactionId: string, value: number, currency: string = 'USD') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    });
  }
};

// Track quote requests
export const trackQuoteRequest = (type: 'import' | 'export', value?: number) => {
  trackEvent('quote_request', 'engagement', type, value);
};

// Track virtual tour interactions
export const trackVirtualTour = (location: string, action: string) => {
  trackEvent(action, 'virtual_tour', location);
};

// Track sustainability engagement
export const trackSustainabilityEngagement = (section: string, action: string) => {
  trackEvent(action, 'sustainability', section);
};

// Track partner interactions
export const trackPartnerEngagement = (partner: string, action: string) => {
  trackEvent(action, 'partners', partner);
};

// Analytics Provider Component
const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA on mount
    try {
      initGA();
    } catch (error) {
      console.warn('Analytics initialization failed:', error);
    }
  }, []);

  useEffect(() => {
    // Track page views on route change
    try {
      trackPageView(location.pathname + location.search);
    } catch (error) {
      console.warn('Page view tracking failed:', error);
    }
  }, [location]);

  return <>{children}</>;
};

export default AnalyticsProvider;
