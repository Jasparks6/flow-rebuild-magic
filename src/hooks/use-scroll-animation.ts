import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1, delay = 0) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Start elements as invisible with more dramatic initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px) scale(0.95)';
    element.style.transition = `opacity 0.8s ease-out ${delay}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0) scale(1)';
          
          // Add staggered animations to child elements
          const children = element.querySelectorAll('*');
          children.forEach((child, index) => {
            if (child instanceof HTMLElement && index < 10) { // Limit to first 10 children
              child.style.transition = `opacity 0.6s ease-out ${delay + 0.1 + index * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay + 0.1 + index * 0.1}s`;
              child.style.opacity = '0';
              child.style.transform = 'translateY(20px)';
              
              setTimeout(() => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
              }, (delay + 0.1 + index * 0.1) * 1000);
            }
          });
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return elementRef;
};