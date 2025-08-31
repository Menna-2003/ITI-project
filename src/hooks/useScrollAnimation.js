import { useEffect } from 'react';

export const useScrollAnimation = (selector, animationClass) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(selector);
      const triggerBottom = window.innerHeight / 5 * 4;

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on mount to check initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selector, animationClass]);
};