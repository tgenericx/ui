import { useState, useEffect } from "react";

export const useModalVisibility = (isOpen: boolean, duration: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      if (isOpen) {
        setIsVisible(true);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), duration);
      } else {
        setIsAnimating(true);
        setTimeout(() => {
          setIsVisible(false);
          setIsAnimating(false);
        }, duration);
      }
    });
  }, [isOpen, duration]);

  return { isVisible, isAnimating };
};
