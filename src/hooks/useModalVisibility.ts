import { useState, useEffect } from 'react';

export const useModalVisibility = (isOpen: boolean, animationDuration: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), animationDuration);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, animationDuration);
    }
  }, [isOpen, animationDuration]);

  return { isVisible, isAnimating };
};
