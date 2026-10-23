import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 p-3 bg-white/90 hover:bg-white text-navy border border-charcoal-200/80 rounded-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <ArrowUp size={18} />
    </button>
  );
};
