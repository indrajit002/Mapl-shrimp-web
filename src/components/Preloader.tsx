import { useState, useEffect } from 'react';
import ShrimpLoader from './ShrimpLoader';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after minimum time and when page is loaded
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const handleLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-ocean-light flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <ShrimpLoader 
          size="xl" 
          text="" 
          className="mb-4"
        />
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-2 animate-fade-in">
            MAPL Shrimp
          </h2>
          <p className="text-ocean-700 text-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Loading premium experience...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
