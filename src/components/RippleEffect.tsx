import { useEffect, useRef } from 'react';

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
}

const RippleEffect = ({ children, className = '' }: RippleEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createRipple = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('div');
      ripple.className = 'absolute w-0 h-0 bg-white/20 rounded-full animate-ripple pointer-events-none';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;

      container.appendChild(ripple);

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 1000);
    };

    container.addEventListener('click', createRipple);

    return () => {
      container.removeEventListener('click', createRipple);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default RippleEffect;
